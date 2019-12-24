import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from "../../../../service/api/api.service";
import { ConstantService } from "../../../../service/core/constant.service";
import { HelperService } from "../../../../service/core/helper.service";


@Component({
  selector: 'app-cash-deal-editor',
  templateUrl: './cash-deal-editor.component.html',
  styleUrls: ['./cash-deal-editor.component.scss']
})
export class CashDealEditorComponent implements OnInit {
  public param = [];
  public tiers = [];
  public submitted = false;


  showButton: boolean = false;
  showMR: boolean = false;
  showTier: boolean = false;
  showCommissionA: boolean = false;
  showCommissionB: boolean = false;
  showExtendedCommission: boolean = false;

  commissinADisabled: boolean = false;
  commissinBDisabled: boolean = false;


  get f() { return this.rulesForm.controls; }

  rulesForm = this.fb.group({
    tier_id: ['1', Validators.required],
    mr_fee_min: [''],
    mr_fee_max: [''],
    commission: [''],
    commission_unit: [''],
    extented_commission: [''],
    deal_type: ['D'],
    group: ['0'],
    trade_in: ['']
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
    //console.log(this.rulesForm.value);
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

  groupChangeEvent(value: string) {
    if (value == 'A') {
      this.rulesForm.controls['commission_unit'].setValue('fixed');
      setTimeout(() => {
        this.showMR = true;
        this.showTier = true;
        this.showCommissionA = true;
        this.showCommissionB = false;
        this.showExtendedCommission = true;
        this.showButton = true;

        this.rulesForm.get("mr_fee_min").enable();
        this.rulesForm.get("mr_fee_max").enable();
        this.rulesForm.get("extented_commission").enable();

      }, 1000);

    } else if (value == 'B') {
      this.rulesForm.controls['commission_unit'].setValue('%');
      setTimeout(() => {
        this.showMR = false;
        this.showTier = true;
        this.showCommissionA = false;
        this.showCommissionB = true;
        this.showExtendedCommission = false;
        this.showButton = true;

        this.rulesForm.get("mr_fee_min").disable();
        this.rulesForm.get("mr_fee_max").disable();
        this.rulesForm.get("extented_commission").disable();

      }, 1000);

    } else {
      setTimeout(() => {
        this.showMR = false;
        this.showTier = false;
        this.showCommissionA = false;
        this.showCommissionB = false;
        this.showExtendedCommission = false;
        this.showButton = false;
      }, 1000);
    }

  }


}
