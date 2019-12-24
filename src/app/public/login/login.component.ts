import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { ApiService } from '../../service/api/api.service';
import { ConstantService } from '../../service/core/constant.service';
import { HelperService } from '../../service/core/helper.service';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {


  userForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private apiSvc: ApiService,
    private constantSvc: ConstantService,
    private helperSvc: HelperService
  ) { }

  ngOnInit() {
    document.body.className = 'hold-transition login-page';

    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
      })
    })

    this.initForm();
  }

  get fc() {
    return this.userForm.controls;
  }

  initForm() {
    this.userForm = this.fb.group({
      loginkey: ['shrawan', Validators.required],
      password: ['1234', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    console.log(this.userForm.value)
    this.apiSvc.postService(this.constantSvc.APIConfig.LOGIN, this.userForm.value)
      .subscribe((data: any) => {
        if (data.message) {
          //console.log(data);

          this.helperSvc.lsSetItem(this.constantSvc.tokenConfig.AUTH_TOKEN, data.token);
          this.helperSvc.lsSetItem(this.constantSvc.tokenConfig.USER_INFO, data.userData);
          this.helperSvc.lsSetItem(this.constantSvc.tokenConfig.USER_ROLES, data.userData.role_desc);

          //add two variables (loggedInUserId) (loggedInUserRoleId)

          // sessionStorage.setItem('userId', data.userData.id);
          // sessionStorage.setItem('userRole', data.userData.role_id);

          this.helperSvc.ssSetItem('userId', data.userData.id);
          this.helperSvc.ssSetItem('userRole', data.userData.role_id);



          // console.log('session value is ',sessionStorage.getItem('userId'), ' role id ',sessionStorage.getItem('userRole'));

          // if (data.userData.role_id == 1)
          //   this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'admin');
          // else if (data.userData.role_id == 2)
          //   this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'salesmanager');
          // else if (data.userData.role_id == 3)
          //   this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'financemanager');
          // else if (data.userData.role_id == 4)
          //   this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'salesman');
          // else if (data.userData.role_id == 5)
          //   this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'finance-person');


          if (data.userData.role_id == 1)
            this.helperSvc.ssSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'admin');
          else if (data.userData.role_id == 2)
            this.helperSvc.ssSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'salesmanager');
          else if (data.userData.role_id == 3)
            this.helperSvc.ssSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'financemanager');
          else if (data.userData.role_id == 4)
            this.helperSvc.ssSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'salesman');
          else if (data.userData.role_id == 5)
            this.helperSvc.ssSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'finance-person');


          this.router.navigate(['dashboard']);
          this.helperSvc.notifySuccess(' Welcome Back ' + data.userData.first_name);

        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
        console.log('error ', error);
      });
  }

  ngOnDestroy() {
    document.body.className = '';
  }

}
