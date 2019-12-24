import { Component, OnInit } from '@angular/core';

import { ApiService } from "../../../service/api/api.service";
import { ConstantService } from "../../../service/core/constant.service";
declare var $: any;
import * as Chart from '../../../../assets/plugins/chartjs-old/Chart.min.js';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  public title: string;
  public totalSalesCount: number = 0;
  public totalDealsCountWholeSale: number = 0;
  public totalDealsCountCash: number = 0;
  public totalDealsCountInhouse: number = 0;
  public param = [];
  public salesmanOfMonth = Array();
  public mySalesCount: number = 0;
  public teamSalesCount: number = 0;
  public chartLabel: string;
  public totalSalesOfMonth = Array();
  public month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor(
    private apiSvc: ApiService,
    private constantSvc: ConstantService
  ) { }

  ngOnInit() {
    this.title = 'Administration';
    this.chartLabel = 'pieChart';
    this.initChart();
    this.countTotalSaleMonth();
    this.countAllSales();
    this.getSalesmanOfMonth();

  }

  getSalesmanOfMonth(): void {
    this.apiSvc.getService(this.constantSvc.APIConfig.SALESMANOFMONTH, this.param)
      .subscribe((data: any) => {
        this.salesmanOfMonth = data.salesman_of_month.length > 0 ? data.salesman_of_month : Array();
      }, (error: any) => {
      });
  }

  countTotalSaleMonth(): void {
    this.apiSvc.getService(this.constantSvc.APIConfig.TOTALSALEOFMONTH, this.param)
      .subscribe((data: any) => {
        this.totalSalesOfMonth = data.sale_month_count;

        // console.log(data.sale_month_count);

        for (let k = 0; k < this.month.length; k++) {
          this.month[k] = k;
        }

        for (let i = 1, j = 0; i <= 12; i++) {
          if (this.month[i] == this.totalSalesOfMonth[j].month) {
            this.month[i] = this.totalSalesOfMonth[j].sales_count;
            if (j < (this.totalSalesOfMonth.length - 1)) {
              j++;
            }
          }
          else {
            this.month[i] = 0;
          }
        }

        // console.log(this.month[10]);
        this.initChart();
      }, (error: any) => {
      });
  }

  countAllSales(): void {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.TOTALSALES, this.param)
      .subscribe((data: any) => {
        this.totalSalesCount = data.deals_count;
        // this.initChart();
      }, (error: any) => {
      });


    this.apiSvc.getService(this.constantSvc.APIConfig.TOTALDEALS_WHOLESALE, this.param)
      .subscribe((data: any) => {
        this.totalDealsCountWholeSale = data.deals_count;
        // this.initChart();
      }, (error: any) => {
      });

    this.apiSvc.getService(this.constantSvc.APIConfig.TOTALDEALS_CASH, this.param)
      .subscribe((data: any) => {
        this.totalDealsCountCash = data.deals_count;
        // this.initChart();
      }, (error: any) => {
      });

    this.apiSvc.getService(this.constantSvc.APIConfig.TOTALDEALS_INHOUSE, this.param)
      .subscribe((data: any) => {
        this.totalDealsCountInhouse = data.deals_count;
        // this.initChart();
      }, (error: any) => {
      });
  }

  countSalesBySalesTeam(): void {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.COUNTSALESBYSALESTEAM, this.param)
      .subscribe((data: any) => {
        this.teamSalesCount = data.deals_count;
        // this.initChart();
      }, (error: any) => {
      });
  }

  initChart() {
    // console.log('init chart called')
    var pieChartCanvas = $('#' + this.chartLabel).get(0).getContext('2d')
    var pieChart = new Chart(pieChartCanvas)
    var PieData = [
      {
        value: this.month[1],
        color: 'rgb(115, 107, 174)',
        highlight: 'rgb(115, 107, 174)',
        label: 'Jan'
      },
      {
        value: this.month[2],
        color: 'rgb(0, 216, 158)',
        highlight: 'rgb(0, 216, 158)',
        label: 'Feb'
      },
      {
        value: this.month[3],
        color: 'rgb(231, 110, 108)',
        highlight: 'rgb(231, 110, 108)',
        label: 'March'
      },
      {
        value: this.month[4],
        color: 'rgb(59, 158, 160)',
        highlight: 'rgb(59, 158, 160)',
        label: 'April'
      },
      {
        value: this.month[5],
        color: 'rgb(180, 114, 152)',
        highlight: 'rgb(180, 114, 152)',
        label: 'May'
      },
      {
        value: this.month[6],
        color: 'rgb(188, 225, 80)',
        highlight: 'rgb(188, 225, 80)',
        label: 'June'
      },
      {
        value: this.month[7],
        color: 'rgb(81, 143, 174)',
        highlight: 'rgb(81, 143, 174)',
        label: 'July'
      },
      {
        value: this.month[8],
        color: 'rgb(228, 132, 68)',
        highlight: 'rgb(228, 132, 68)',
        label: 'Aug'
      },
      {
        value: this.month[9],
        color: 'rgb(40, 195, 167)',
        highlight: 'rgb(40, 195, 167)',
        label: 'Sep'
      },
      {
        value: this.month[10],
        color: 'rgb(147, 110, 163)',
        highlight: 'rgb(147, 110, 163)',
        label: 'Oct'
      },
      {
        value: this.month[11],
        color: 'rgb(222, 212, 89)',
        highlight: 'rgb(222, 212, 89)',
        label: 'Nov'
      },
      {
        value: this.month[12],
        color: 'rgb(206, 112, 131)',
        highlight: 'rgb(206, 112, 131)',
        label: 'Dec'
      }

    ]
    var pieOptions = {
      segmentShowStroke: true,
      segmentStrokeColor: '#fff',
      segmentStrokeWidth: 1,
      percentageInnerCutout: 0,
      animationSteps: 100,
      animationEasing: 'easeOutBounce',
      animateRotate: true,
      animateScale: false,
      responsive: true,
      maintainAspectRatio: false,
      legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
      tooltipTemplate: '<%=value %> <%=label%> Sales',
    }
    pieChart.Doughnut(PieData, pieOptions)
  }

}
