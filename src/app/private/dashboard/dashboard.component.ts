import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConstantService } from '../../service/core/constant.service';
import { HelperService } from '../../service/core/helper.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

export type DashboardType = 'admin' | 'salesmanager' | 'salesman' | 'financemanager' | 'finance-person';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  dashboard: DashboardType = 'admin';

  dashboardUserID: string;
  dashboardUserRole: any;


  message: string;

  constructor(
    private constantSvc: ConstantService,
    private helperSvc: HelperService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

   
    //sessionStorage.setItem('dashboardUrl', this.router.url);

    this.dashboardUserID = this.route.snapshot.queryParamMap.get('userID');
    this.dashboardUserRole = this.route.snapshot.queryParamMap.get('userRole');

    if (this.dashboardUserID) {

      this.helperSvc.ssSetItem('userId', this.dashboardUserID);
      this.helperSvc.ssSetItem('userRole', this.dashboardUserRole);

      if (this.route.snapshot.queryParamMap.get('userRole') == '2')
        this.changeDashboard('salesmanager');
      else if (this.route.snapshot.queryParamMap.get('userRole') == '3')
        this.changeDashboard('financemanager');
      else if (this.route.snapshot.queryParamMap.get('userRole') == '4')
        this.changeDashboard('salesman');
      else if (this.route.snapshot.queryParamMap.get('userRole') == '5')
        this.changeDashboard('finance-person');

    } else {

      this.changeDashboard(this.helperSvc.ssGetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL));
      // this.changeDashboard(this.helperSvc.lsGetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL));
    }

  }

  get showAdminDashboard() {
    return this.dashboard === 'admin';
  }

  get showSalesmanagerDashboard() {
    return this.dashboard === 'salesmanager';
  }

  get showSalesmanDashboard() {
    return this.dashboard === 'salesman';
  }

  get showFinancemanagerDashboard() {
    return this.dashboard === 'financemanager';
  }

  get showFinancepersonDashboard() {
    return this.dashboard === 'finance-person';
  }

  changeDashboard(type: DashboardType) {
    this.dashboard = type;
  }

  ngOnDestroy() {
    this.helperSvc.lsRemoveItem('isUserDashboard');
  }

}
