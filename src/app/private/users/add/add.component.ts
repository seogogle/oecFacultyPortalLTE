import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

import { ConstantService } from "../../../service/core/constant.service";
import { HelperService } from "../../../service/core/helper.service";
import { ApiService } from "../../../service/api/api.service";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class UsersAddComponent implements OnInit {
  public userForm: FormGroup;
  submitted = false;
  public param = [];
  public roles = [];
  public salesmanagers = [];
  public financemangers = [];
  public buttonDisabled: boolean;
  public isExistsMessage: string;

  public salesSelected: boolean = false;
  public financeSelected: boolean = false;

  constructor(
    private constantSvc: ConstantService,
    private helperSvc: HelperService,
    private apiSvc: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();
    this.getRolesList();
    this.getSalesManagersList();
    this.getFinanaceManagersList();
  }

  get f() { return this.userForm.controls; }

  initForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      role_id: ['1', Validators.required],
      parent_id: ['0'],
      first_name: ['', Validators.required],
      last_name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getRolesList() {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.ROLELIST, this.param)
      .subscribe((data: any) => {
        this.roles = data.roles;
      }, (error: any) => {

      });
  }

  getSalesManagersList() {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.SALESMANAGERLIST, this.param)
      .subscribe((data: any) => {
        console.log(data);
        this.salesmanagers = data.salesmanagers;
      }, (error: any) => {

      });
  }

  getFinanaceManagersList() {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.FINANCEMANGERLIST, this.param)
      .subscribe((data: any) => {
        console.log(data);
        this.financemangers = data.financemangers;
      }, (error: any) => {

      });
  }

  onClickSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    this.apiSvc.postService(this.constantSvc.APIConfig.ADDUSER, this.userForm.value)
      .subscribe((data: any) => {
        if (data.message) {
          this.router.navigate(['users/list']);
          this.helperSvc.notifySuccess(data.success ? data.success : "success");
        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
      });
  }

  isEmailExists() {
    this.apiSvc.isExists(this.constantSvc.APIConfig.ISUNIQEMAIL, this.userForm.value)
      .subscribe((data: any) => {
        console.log(data);
        if (data.message) {
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

  onChange($event): void {
    if ($event == 4) {
      this.financeSelected = false;
      setTimeout(function () {
        this.salesSelected = true;
      }.bind(this), 1000);
    } else if ($event == 5) {
      this.salesSelected = false;
      setTimeout(function () {
        this.financeSelected = true;
      }.bind(this), 1000);
    } else {
      this.salesSelected = false;
      this.financeSelected = false;
    }
  }

}
