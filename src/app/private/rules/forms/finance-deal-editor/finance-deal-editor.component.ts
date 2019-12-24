import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from "../../../../service/api/api.service";
import { ConstantService } from "../../../../service/core/constant.service";
import { HelperService } from "../../../../service/core/helper.service";

@Component({
  selector: 'app-finance-deal-editor',
  templateUrl: './finance-deal-editor.component.html',
  styleUrls: ['./finance-deal-editor.component.scss']
})
export class FinanceDealEditorComponent implements OnInit {

  public param = [];
  public tiers = [];
  public submitted = false;

  tradeInDisabled: boolean = false;
  showButton: boolean = false;
  showTier: boolean = false;
  showCommission: boolean = false;
  showMonths: boolean = false;
  showTrade: boolean = false;
  showflatCommission: boolean = false;

  commissinForFlatReadonly: boolean = true;

  get f() { return this.rulesForm.controls; }

  rulesForm = this.fb.group({
    tier_id: ['1', Validators.required],
    deal_type: ['F'],
    group: ['0'],
    commission: [''],
    commission_unit: ['%'],
    trade_in: [''],
    months: ['0'],
    flat_commission: ['100'], //if rule is made for finance manager
    flat_commission_unit: ['fixed'] //if rule is made for finance manager
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

  monthChangeEvent(value: string) {
    if (value == 'less') {
      setTimeout(() => {
        this.showTier = true;
        this.showCommission = true;
        this.showTrade = false;
        this.showButton = true;
        this.rulesForm.get("trade_in").disable();
      }, 1000);

    } else if (value == 'greater') {
      setTimeout(() => {
        this.showTier = true;
        this.showCommission = true;
        this.showTrade = false;
        this.showButton = true;
        this.rulesForm.get("trade_in").disable();
      }, 1000);

    } else if (value == 'tradeIn') {
      this.showTier = true;
      this.showCommission = true;
      this.showTrade = true;
      this.showButton = true;
      this.rulesForm.get("trade_in").enable();
    } else {
      setTimeout(() => {
        this.showTier = false;
        this.showCommission = false;
        this.showTrade = false;
        this.showButton = false;
      }, 1000);
    }
  }


  groupChangeEvent(value: string) {
    if (value == 'A') {
      this.showMonths = true;
      //this.showButton = true;
    } else if (value == 'B') {
      this.showMonths = false;
      this.showTier = false;
      this.showCommission = false;
      this.showTrade = false;
      this.showButton = true;
      this.showflatCommission = true;
    } else {
      this.showMonths = false;
      this.showTier = false;
      this.showCommission = false;
      this.showTrade = false;
      this.showButton = false;
    }
  }

}
