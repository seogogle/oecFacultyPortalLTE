import { Component, OnInit } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { ApiService } from "../../../service/api/api.service";
import { ConstantService } from "../../../service/core/constant.service";
import { HelperService } from "../../../service/core/helper.service";

declare var $: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DealsListComponent implements OnInit {

  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-blue'

  datepickerModel: Date;
  daterangepickerModel: Date[];


  public param = [];
  public deals = [];
  public salesPersons = [];
  public submitted = false;
  public buttonDisabled: boolean;
  public isExistsMessage: string;
  public title: string = 'Add Deal';
  public data: {};
  public userInfo: {};
  public url: any;
  public jsonData: any;
  public commissionAmount: number;
  public salesmanTier: any;
  public userRoleId: any;
  public userGroup: any;
  public loggedInId: number;

  totalSales: number;
  totalCummissionAmount: number = 0;


  public dateFilterOptions = ['Yearly', 'Monthly', 'Daily', 'Custom'];
  public years = ['2018', '2017', '2016', '2015'];
  public months = [
    { name: 'January', value: '01' },
    { name: 'February', value: '02' },
    { name: 'March', value: '03' },
    { name: 'April', value: '04' },
    { name: 'May', value: '05' },
    { name: 'June', value: '06' },
    { name: 'July', value: '07' },
    { name: 'August', value: '08' },
    { name: 'September', value: '09' },
    { name: 'October', value: '10' },
    { name: 'November', value: '11' },
    { name: 'December', value: '12' },
  ];


  public showYearly: boolean = false;
  public showMonthly: boolean = false;
  public showWeekly: boolean = false;
  public showDaily: boolean = false;
  public showCustom: boolean = false;

  public oTable: any;
  public totalRows: any;

  constructor(
    private apiSvc: ApiService,
    private constantSvc: ConstantService,
    private helperSvc: HelperService
  ) { }


  ngOnInit() {

    console.log('auth token', this.helperSvc.lsGetItem(this.constantSvc.tokenConfig.AUTH_TOKEN));
    this.bsConfig = Object.assign({}, {
      containerClass: this.colorTheme,
      showWeekNumbers: false,
      dateInputFormat: 'YYYY/MM/DD',
      rangeInputFormat: 'YYYY/MM/DD',
    });


    this.salesmanTier = this.helperSvc.lsGetItem('tierId');
    this.userRoleId = this.helperSvc.lsGetItem('USERINFO').role_id;
    this.loggedInId = this.helperSvc.lsGetItem('USERINFO').id;

    this.getDealsList();
    this.getSalesPersonsList();

    if (this.userRoleId == 4) {
      this.userGroup = 'A';
    }
  }


  applyFilter() {

    $.fn.dataTableExt.afnFiltering.push(
      function (oSettings, aData, iDataIndex) {

        var byYear = $("#yearFilter").val();
        var monthInMonthYear = $("#monthInMonthYear").val();
        var yearInMonthYear = $("#yearInMonthYear").val();
        var byDate = $("#bsDatepicker").val();
        var dateStart = $("#minDate").val();
        var dateEnd = $("#maxDate").val();
        var bySalesPerson = $("#bySalesPerson").val();
        var bySaleType = $("#bySaleType").val();
        // var byStock = this.customSearchValue;

        if (dateStart == undefined || dateStart == '') {
          dateStart = '';
        }

        if (dateEnd == undefined || dateEnd == '') {
          dateEnd = '';
        }

        if (byYear == undefined || byYear == '') {
          byYear = '';
        }

        if (monthInMonthYear == undefined || monthInMonthYear == '') {
          monthInMonthYear = '';
        }

        if (yearInMonthYear == undefined || yearInMonthYear == '') {
          yearInMonthYear = '';
        }

        if (byDate == undefined || byDate == '') {
          byDate = '';
        }

        if (bySalesPerson == undefined || bySalesPerson == '') {
          bySalesPerson = '';
        }

        if (bySaleType == undefined || bySaleType == '') {
          bySaleType = '';
        }


        var tableDate = new Date(aData[3]);
        var saleType = aData[6];
        var stock = aData[2];
        var salesPerson = aData[6];
        // console.log(saleType, bySaleType);


        var day = (tableDate.getDate() < 10 ? '0' : '') + tableDate.getDate();
        var month = ((tableDate.getMonth() + 1) < 10 ? '0' : '') + (tableDate.getMonth() + 1);
        var year = tableDate.getFullYear();
        var evalDate = year + '/' + month + '/' + day;

        if (dateStart === '' && dateEnd === '' && byYear === '' && monthInMonthYear === '' && yearInMonthYear === '' && byDate === '' && bySaleType === '' && bySalesPerson === '') {
          return true;
        } else if (evalDate == dateStart || evalDate == dateEnd || evalDate >= dateStart && evalDate <= dateEnd) {

          return true;
        }
        else if (year == byYear) {
          return true;
        }
        else if (monthInMonthYear == month && yearInMonthYear == year) {
          return true;
        } else if (evalDate == byDate) {
          return true;
        }
        else if (saleType == bySaleType) {
          return true;
        }
        else if (salesPerson == bySalesPerson) {
          return true;
        }

        // else if (year == byYear && saleType == bySaleType || saleType == bySaleType) {
        //   return true;
        // }


        else {
          return false;
        }
      }
    );

    this.oTable.draw();
  }

  //tomorrow separate all filters than check 
  // filterBySale() {

  // }

  filterByStock(event) {
    this.oTable.column(2).search(event).draw();
  }

  getDealsList() {
    this.param = [];
    this.userInfo = { "login_id": this.loggedInId, "role_id": this.userRoleId };
    this.apiSvc.postService(this.constantSvc.APIConfig.DEALSLISTBYUSER, this.userInfo)
      .subscribe((data: any) => {
        this.initSalesTable();
        if (data.message) {

          console.log(data.deals);

          this.deals = data.deals;
          this.totalSales = data.deals.length;
          for (let i = 0; i < data.deals.length; i++) {
            // console.log(data.deals[i]);
            let deal_id = data.deals[i]['id'];
            let deal_type = data.deals[i]['deal_type'];
            let MR_Fee = data.deals[i]['MR_Fee'];

            this.calculatCommission(i, deal_id, deal_type, MR_Fee);

          }

        } else if (data.error) {
          this.deals = null;
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
      });
  }

  getSalesPersonsList() {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.GETSALESPERSONS, this.param)
      .subscribe((data: any) => {
        if (data.message) {
          this.salesPersons = data.salesPersons;
        } else {
          this.salesPersons = null;
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : 'Something went wrong.');
      })
  }

  onSubmit(rulesForm: any) {
    this.submitted = true;

    if (rulesForm.invalid) {
      return;
    }

    this.data = { "idms_id": rulesForm.value.idms_id, "salesman_id": this.helperSvc.lsGetItem('USERINFO').id };

    this.apiSvc.postService(this.constantSvc.APIConfig.ADDDEAL, this.data)
      .subscribe((data: any) => {
        if (data.message) {
          this.helperSvc.notifySuccess(data.message ? data.message : 'success');
          this.destroyTable();
          this.getDealsList();
          $("#dealModal").modal("hide");
          this.resetForm(rulesForm);
        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : 'Something went wrong please try again')
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again")
      });
  }

  isExists(rulesForm: any) {
    this.apiSvc.isExists(this.constantSvc.APIConfig.ISUNIQIDMS, rulesForm.value)
      .subscribe((data: any) => {
        if (data.message) {
          console.log(data);
          this.isExistsMessage = '';
          this.buttonDisabled = false;
        } else if (data.error) {
          this.isExistsMessage = data.error;
          this.buttonDisabled = true;
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "something went wrong please try again");
      })
  }


  initSalesTable() {
    $(() => {
      this.oTable = $('#salesRecordTable').DataTable({
        "scrollX": true
      });

      this.oTable.on('order.dt search.dt', () => {
        this.oTable.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
          cell.innerHTML = i + 1;
        });
      }).draw();

      var buttons = new $.fn.dataTable.Buttons(this.oTable, {
        buttons: [
          {
            extend: 'csv',
            text: 'Export to CSV',
            filename: function () {
              var d = new Date();
              var n = d.getTime();
              return 'Deals_Report_' + n;
            }
          }
        ]
      }).container().appendTo($('#buttons'));
    });
  }

  destroyTable() {
    this.oTable.destroy();
  }

  resetForm(rulesForm: any) {
    rulesForm.reset();
    this.isExistsMessage = '';
  }

  //Commission Section
  calculatCommission(index, id, deal_type, MR_Fee) {
    this.jsonData = { "tier": this.salesmanTier, "deal_type": 'c', 'user_group': this.userGroup, 'deal_id': id, 'MR_Fee': MR_Fee };
    this.apiSvc.postService(this.constantSvc.APIConfig.CALCULATECOMMISSION, this.jsonData)
      .subscribe((data: any) => {
        var div = document.getElementById("indexNumber" + index);
        div.innerHTML += '<span class="badge bg-info">' + data.commissionAmount + '<span>';

        this.totalCummissionAmount += data.commissionAmount;
        // var buttonDiv = document.getElementById("indexButton" + index);
        // buttonDiv.parentNode.removeChild(buttonDiv);
      }, (error: any) => {
        console.log(error);
      })
  }

  //filter Section
  changeFilter(value: string) {
    if (value == 'Yearly') {
      this.showYearly = true;
      this.showMonthly = false;
      this.showWeekly = false;
      this.showDaily = false;
      this.showCustom = false;
    } else if (value == 'Monthly') {
      this.showYearly = false;
      this.showMonthly = true;
      this.showWeekly = false;
      this.showDaily = false;
      this.showCustom = false;
    } else if (value == 'Weekly') {
      this.showYearly = false;
      this.showMonthly = false;
      this.showWeekly = true;
      this.showDaily = false;
      this.showCustom = false;

      $(() => {
        // $('.select2').select2();
        $('#dateRangePicker').daterangepicker({
          timePicker: false,
          applyClass: "btn-primary",
          format: 'YYYY/MM/DD'
        });
      });

    } else if (value == 'Daily') {
      this.showYearly = false;
      this.showMonthly = false;
      this.showWeekly = false;
      this.showDaily = true;
      this.showCustom = false;

      $(() => {
        $('#datePicker').daterangepicker({
          timePicker: false,
          singleDatePicker: true,
          showDropdowns: true,
          format: 'YYYY/MM/DD'
        });
      });

    } else if (value == 'Custom') {
      console.log('in custom');
      this.showYearly = false;
      this.showMonthly = false;
      this.showWeekly = false;
      this.showDaily = false;
      this.showCustom = true;

      $(() => {
        // $('.select2').select2();
        $('#dateRangePickerCustom').daterangepicker({
          timePicker: false,
          applyClass: "btn-primary",
          format: 'YYYY/MM/DD'
        });
      });
    } else {
      this.showYearly = false;
      this.showMonthly = false;
      this.showWeekly = false;
      this.showDaily = false;
      this.showCustom = false;
    }

  }

  onSelect(deal: any) {
    console.log(deal);
  }

  //for calculating commission amount
  totalAmount() {
    $.fn.dataTable.Api.register('column().data().sum()', function () {
      return this.reduce(function (a, b) {
        var x = parseFloat(a) || 0;
        var y = parseFloat(b) || 0;
        return x + y;
      });
    });

    console.log(this.oTable.column(9).data().sum());
  }


}
