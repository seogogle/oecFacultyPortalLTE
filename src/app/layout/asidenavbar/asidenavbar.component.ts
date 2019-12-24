import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { HelperService } from '../../service/core/helper.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.scss']
})
export class AsidenavbarComponent implements OnInit {

  userName: string;
  lastName: string;
  userRoleId: any;
  dashboardUrl: any;
  dashboardUserID: any;
  dashboardUserRole: any;

  message: string;

  constructor(
    private authSvc: AuthService,
    private helperSvc: HelperService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    // console.log( this.helperSvc.lsGetItem('USERINFO'));
    this.userName = this.helperSvc.lsGetItem('USERINFO').first_name;
    this.lastName = this.helperSvc.lsGetItem('USERINFO').last_name;
    this.userRoleId = this.helperSvc.lsGetItem('USERINFO').role_id;

    // this.userRoleId = 4;
    console.log('in side bar section ', this.helperSvc.ssGetItem('userRole'));

    this.dashboardUrl = '/dashboard';
  }

  logout() {
    this.authSvc.logout();
  }

}
