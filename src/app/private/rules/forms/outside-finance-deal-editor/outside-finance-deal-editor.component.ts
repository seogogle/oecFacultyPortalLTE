import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from "../../../../service/api/api.service";
import { ConstantService } from "../../../../service/core/constant.service";
import { HelperService } from "../../../../service/core/helper.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-outside-finance-deal-editor',
  templateUrl: './outside-finance-deal-editor.component.html',
  styleUrls: ['./outside-finance-deal-editor.component.scss']
})
export class OutsideFinanceDealEditorComponent implements OnInit {

  public param = [];
  public tiers = [];
  public submitted = false;

  get f() { return this.rulesForm.controls; }

  rulesForm = this.fb.group({
    tier_id: ['1', Validators.required],
    deal_type: ['OF'],
    commission: [''],
    commission_unit: ['%'],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiSvc: ApiService,
    private constantSvc: ConstantService,
    private helperSvc: HelperService
  ) { }

  ngOnInit() {
    this.getTiersList();
  }

  getTiersList() {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.TIERSLIST, this.param)
      .subscribe((data: any) => {
        this.tiers = data.tiers;
      }, (error: any) => {

      });
  }

  onSubmit() {
    this.submitted = true;

    if (this.rulesForm.invalid) {
      return;
    }
    console.log(this.rulesForm.value);
    this.apiSvc.postService(this.constantSvc.APIConfig.ADDRULE, this.rulesForm.value)
      .subscribe((data: any) => {
        if (data.message) {
          this.router.navigate(['/rules/list']);
          this.helperSvc.notifySuccess(data.message ? data.message : 'success');

        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : 'Something went wrong please try again')
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again")
      });
  }

}
