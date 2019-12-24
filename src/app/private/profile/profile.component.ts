import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HelperService } from "../../service/core/helper.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

import { ApiService } from "../../service/api/api.service";
import { ConstantService } from "../../service/core/constant.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userForm: FormGroup;
  id: number;
  userName: string;
  lastName: string;
  userRole: string = 'Administrator';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private apiSvc: ApiService,
    private constantSvc: ConstantService,
    private helperSvc: HelperService
  ) { }

  ngOnInit() {
    this.id = this.helperSvc.lsGetItem('USERINFO').id;
    this.userName = this.helperSvc.lsGetItem('USERINFO').first_name;
    this.lastName = this.helperSvc.lsGetItem('USERINFO').last_name;

    this.initForm();
    this.getUserDetails()
  }

  initForm() {
    this.userForm = this.fb.group({
      id: [],
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.apiSvc.putService(this.constantSvc.APIConfig.UPDATEPROFILE, this.userForm.value)
        .subscribe((data: any) => {
          console.log(data);
          if (data.message) {
            this.helperSvc.lsSetItem(this.constantSvc.tokenConfig.USER_INFO, data.userData);
            this.router.navigate(['/dashboard']);
            this.helperSvc.notifySuccess(data.message ? data.message : "success");
          } else if (data.error) {
            this.helperSvc.notifyError(data.error ? data.error : "something went wrong please try again")
          }
        }, (error: any) => {
          console.log(error.error.errorMessage);
        });
    }
  }
  
  getUserDetails() {
    this.apiSvc.getService(this.constantSvc.APIConfig.GETUSER, this.id)
      .subscribe((data: any) => {
        if (data.message) {
          this.userForm.setValue({
            id: data.userData.id,
            first_name: data.userData.first_name,
            last_name: data.userData.last_name,
            email: data.userData.email,
            phone: data.userData.phone
          });
          this.helperSvc.notifySuccess(data.message ? data.message : "User Info");
        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
        console.log('error ', error);
      });
  }
}
