import { Component, OnInit, OnDestroy } from '@angular/core';

import { ApiService } from "../../service/api/api.service";
import { ConstantService } from "../../service/core/constant.service";
import { HelperService } from '../../service/core/helper.service.js';

import { Observable, Observer, observable } from "rxjs";
import { forkJoin } from 'rxjs';

declare var $: any;
import * as Chart from '../../../assets/plugins/chartjs-old/Chart.min.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public title: string;
  public userRoleId: number;
  public loggedInId: number;
  public param = [];
  public deals = [];
  public jsondata = {};
  public mySalesCount: number = 0;
  public teamSalesCount: number = 0;
  public totalSalesCount: number = 0;
  public currentMonthTier: any = 0;
  public chartLabel: string;

  constructor(
    private apiSvc: ApiService,
    private constantSvc: ConstantService,
    private helperSvc: HelperService
  ) { }

  ngOnInit() {
    //window.dispatchEvent(new Event('resize'));
    // document.body.className = 'hold-transition sidebar-mini';
    // $.widget.bridge('uibutton', $.ui.button)

    this.userRoleId = this.helperSvc.lsGetItem('USERINFO').role_id;
    this.loggedInId = this.helperSvc.lsGetItem('USERINFO').id;

    if (this.userRoleId == 1) {
      this.title = 'Administration';
     
    } else if (this.userRoleId == 2) {
      this.title = "Salesmanager"
    
    } else if (this.userRoleId == 4) {
      this.title = 'Salesman';
      this.chartLabel = 'pieChart';
      this.getCurrentMonthTier();
      this.countSalesBySalesman();
      this.countAllSales();
      this.countSalesBySalesTeam();
      this.getDealsList();
    }
  }

  getCurrentMonthTier() {
    this.apiSvc.getService(this.constantSvc.APIConfig.GETTIERFORSALESMAN, this.loggedInId)
      .subscribe((data: any) => {
        console.log(data);
        this.helperSvc.lsSetItem('tierId', data.tier[0]['id']);
        this.helperSvc.lsSetItem('myTier', data.tier[0]['title']);
        this.currentMonthTier = data.tier[0]['title'];
      }, (error: any) => {
      });
  }

  countSalesBySalesman(): void {
    this.apiSvc.getService(this.constantSvc.APIConfig.COUNTSALESBYSALESMAN, this.loggedInId)
      .subscribe((data: any) => {
        this.mySalesCount = data.deals_count;
        this.initChart();
      }, (error: any) => {
      });
  }

  countSalesBySalesTeam(): void {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.COUNTSALESBYSALESTEAM, this.param)
      .subscribe((data: any) => {
        this.teamSalesCount = data.deals_count;
        this.initChart();
      }, (error: any) => {
      });
  }

  countAllSales(): void {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.TOTALSALES, this.param)
      .subscribe((data: any) => {
        this.totalSalesCount = data.deals_count;
        this.initChart();
      }, (error: any) => {
      });
  }

  getDealsList(): void {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.DEALSLISTBYUSER, this.loggedInId)
      .subscribe((data: any) => {
        if (data.message) {
          this.initSalesTable();
          this.deals = data.deals;
        } else if (data.error) {
          this.deals = null;
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
      });
  }

  initChart() {
    var pieChartCanvas = $('#' + this.chartLabel).get(0).getContext('2d')
    var pieChart = new Chart(pieChartCanvas)
    var PieData = [
      {
        value: this.mySalesCount,
        color: '#dc3545',
        highlight: '#dc3545',
        label: 'Sales'
      },
      {
        value: this.teamSalesCount,
        color: '#28a745',
        highlight: '#28a745',
        label: 'Team Sales'
      },
      {
        value: this.totalSalesCount,
        color: '#00c0ef',
        highlight: '#00c0ef',
        label: 'Total Sales'
      }
    ]
    var pieOptions = {
      segmentShowStroke: true,
      segmentStrokeColor: '#fff',
      segmentStrokeWidth: 1,
      percentageInnerCutout: 50,
      animationSteps: 100,
      animationEasing: 'easeOutBounce',
      animateRotate: true,
      animateScale: false,
      responsive: true,
      maintainAspectRatio: false,
      legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
      tooltipTemplate: '<%=value %> <%=label%> users'
    }
    pieChart.Doughnut(PieData, pieOptions)
  }

  initSalesTable() {
    console.log('init');

    $(() => {
      $('#salesRecordTable').DataTable({
        "paging": false,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": false,
        "autoWidth": true
      });
    });
  }

  // destroyeSalesTable() {
  //   console.log('destroyed');
  //   $(() => {
  //     var table = $('#salesRecordTable').DataTable();
  //     table.destroy();
  //   })
  // }

  ngOnDestroy() {
    //document.body.className = '';
  }

}
