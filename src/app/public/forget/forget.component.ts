import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

import { ApiService } from "../../service/api/api.service";
import { ConstantService } from "../../service/core/constant.service";
import { HelperService } from "../../service/core/helper.service";


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit, OnDestroy {
  forgetForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiSvc: ApiService,
    private constantSvc: ConstantService,
    private helperSvc: HelperService
  ) { }

  ngOnInit() {
    document.body.className = 'hold-transition login-page';

    this.initForm();
  }

  initForm() {
    this.forgetForm = this.fb.group({
      loginkey: ['', [Validators.required, Validators.email]]
    });
  }

  get fc() { return this.forgetForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.forgetForm.invalid) {
      return;
    }

    this.apiSvc.postService(this.constantSvc.APIConfig.FORGET, this.forgetForm.value)
      .subscribe((data: any) => {
        console.log(data);
        if (data.message) {
          this.router.navigate(['/login']);
          this.helperSvc.notifySuccess(data.message ? data.message : "Success");
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
