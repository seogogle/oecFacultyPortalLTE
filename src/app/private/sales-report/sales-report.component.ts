import { Component, OnInit } from '@angular/core';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { ApiService } from "../../service/api/api.service";
import { ConstantService } from "../../service/core/constant.service";
import { HelperService } from "../../service/core/helper.service";

declare var $: any;

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss']
})
export class SalesReportComponent implements OnInit {

  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-blue'

  datepickerModel: Date;
  daterangepickerModel: Date[];

  public userRoleId: any;
  public loggedInId: number;
  public userInfo: any;
  public param = [];
  public sales = [];
  public salesPersons = [];
  public jsonData: any;

  totalSales: number;
  totalCommissionDue: number = 0;

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

  constructor(
    private apiSvc: ApiService,
    private constantSvc: ConstantService,
    private helperSvc: HelperService
  ) { }

  ngOnInit() {
    this.bsConfig = Object.assign({}, {
      containerClass: this.colorTheme,
      showWeekNumbers: false,
      dateInputFormat: 'YYYY/MM/DD',
      rangeInputFormat: 'YYYY/MM/DD',
    });

    this.userRoleId = this.helperSvc.lsGetItem('USERINFO').role_id;
    this.loggedInId = this.helperSvc.lsGetItem('USERINFO').id;

    this.getSalesList();
    this.getSalesPersonsList();
  }

  getSalesList() {
    this.param = [];
    this.userInfo = { "login_id": this.loggedInId, "role_id": this.userRoleId };
    this.apiSvc.postService(this.constantSvc.APIConfig.DEALSLISTBYUSER, this.userInfo)
      .subscribe((data: any) => {
        this.initSalesTable();
        if (data.message) {
          // console.log(data.deals);
          this.totalSales = data.deals.length;
          this.sales = data.deals;

        } else if (data.error) {
          this.sales = null;
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
              return 'Sales_Report_' + n;
            }
          }
        ]
      }).container().appendTo($('#buttons'));
    });
  }

  destroyTable() {
    this.oTable.destroy();
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


        var tableDate = new Date(aData[5]);
        var saleType = aData[13];
        var stock = aData[2];
        var salesPerosn = aData[7];

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

        else if (salesPerosn == bySalesPerson) {
          return true;
        }

        else {
          return false;
        }
      }
    );

    this.oTable.draw();
  }

  filterByStock(event) {
    this.oTable.column(6).search(event).draw();
  }

  clearFilter() {
    $.fn.dataTableExt.afnFiltering.length = 0;
    this.oTable.draw();
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
      this.showYearly = false;
      this.showMonthly = false;
      this.showWeekly = false;
      this.showDaily = false;
      this.showCustom = true;

      $(() => {
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

  valueUdateEvent(id: number, name: string, value: string) {

    this.jsonData = { "id": id, "column_name": name, "column_value": value }

    console.log(this.jsonData);

    this.apiSvc.putService(this.constantSvc.APIConfig.UPDATEDEAL, this.jsonData)
      .subscribe((data: any) => {
        if (data.message) {

        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
      });
  }

}
