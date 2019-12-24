import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/service/core/helper.service';
import { ConstantService } from 'src/app/service/core/constant.service';
import { ApiService } from 'src/app/service/api/api.service';
import { NgForm } from '@angular/forms';

import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  animations: [
    trigger('divState', [
      state('in', style({ backgroundColor: 'red', transform: 'translateX(0)' })),

      transition('void => *', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ backgroundColor: '#bee0ff', opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
      ]),
      transition('* => void', [
        animate(300, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class DealsViewComponent implements OnInit {

  state = 'normal';
  wildState = 'normal';

  public dealId: any;
  public dealData: any;
  public loggedInId: number;
  loggedInPersonId: number;
  id: number;
  idmsID: number;
  instID: any;
  acctID: any;
  customerName: any;
  stockNumber: any;
  lenderID: any;
  lenderName: any;
  lenderDesc: any;
  dealType: any;
  dealTypeDesc: any;
  dealStatus: any;
  dealStatusDesc: any;
  appType: any;
  appTypeDesc: any;
  dealAmount: any;
  vAutoPrice: any;
  contractDate: any;
  salesLocation: any;
  vinNumber: any;
  FIPersonName: any;
  numPayments: any;
  CBTotalDown: any;
  totalFees: any;
  totalTradeIn: any;
  totalTradeInPayoff: any;
  resLienHolder: any;

  deal_id: number;
  salesman_id: number;
  comment_title: string;
  comment_text: string;
  comments: any = [];

  constructor(
    private route: ActivatedRoute,
    private helperSvc: HelperService,
    private constantSvc: ConstantService,
    private apiSvc: ApiService
  ) { }

  ngOnInit() {
    this.dealId = this.route.snapshot.queryParamMap.get('dealID');
    this.loggedInId = this.helperSvc.lsGetItem('USERINFO').id;

    this.deal_id = this.dealId;
    this.salesman_id = this.loggedInId;
    this.getDealData();
    this.getLatestComments();
  }

  getDealData() {
    this.apiSvc.getService(this.constantSvc.APIConfig.GETDEALDATA, this.dealId)
      .subscribe((data: any) => {
        if (data.message) {
          this.id = data.deal.id;
          this.idmsID = data.deal.deal_id;
          this.instID = data.deal.inst_id;
          this.acctID = data.deal.acct_id;
          this.customerName = data.deal.customer_name;
          this.stockNumber = data.deal.Stock_Number;
          this.lenderID = data.deal.lender_id;
          this.lenderName = data.deal.lander_name;
          this.lenderDesc = data.deal.lender_desc;
          this.dealType = data.deal.deal_type;
          this.dealTypeDesc = data.deal.deal_type_desc;
          this.dealStatus = data.deal.deal_status;
          this.dealStatusDesc = data.deal.deal_status_desc;
          this.appType = data.deal.app_type;
          this.appTypeDesc = data.deal.app_type_desc;
          this.dealAmount = data.deal.deal_amount;
          this.vAutoPrice = data.deal.vAutoPrice;
          this.contractDate = data.deal.deal_date;
          this.salesLocation = data.deal.sales_location;
          this.vinNumber = data.deal.vin_number;
          this.FIPersonName = data.deal.FIPersonName;
          this.numPayments = data.deal.NumPayments;
          this.CBTotalDown = data.deal.CB_TotalDown;
          this.totalFees = data.deal.TotalFees;
          this.totalTradeIn = data.deal.TotalTradeIn;
          this.totalTradeInPayoff = data.deal.TotalTradeInPayoff;
          this.resLienHolder = data.deal.ResLienHolder;

        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : "something went wrong please try again")
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "something went wrong please try again")
      })
  }

  onSubmit(commentForm: NgForm) {
    this.apiSvc.postService(this.constantSvc.APIConfig.ADDCOMMENTS, commentForm.value)
      .subscribe((data: any) => {
        if (data.message) {
          this.getRecentComment();
          // this.helperSvc.notifySuccess(data.message ? data.message : 'comment successfully posted');
          this.resetForm(commentForm);
        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : 'Something went wrong. please try again')
        }
      }, (error: any) => {
        console.log(error.error.message);
      })
  }

  getLatestComments() {
    this.apiSvc.getService(this.constantSvc.APIConfig.GETCOMMENTS, this.deal_id)
      .subscribe((data: any) => {
        if (data.message) {
          this.comments = data.comments;
        } else if (data.error) {
          this.comments = null;
        }
      }, (error: any) => {
        console.log(error.error.message);
      });
  }

  getRecentComment() {
    this.apiSvc.getService(this.constantSvc.APIConfig.GETRECENTCOMMENT, this.deal_id)
      .subscribe((data: any) => {
        this.comments.unshift(data.data);
        console.log('in array ', this.comments);
      }, (error: any) => {
        console.log(error.error.message);
      })
  }

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal'
  }

  onShrink() {
    this.wildState == 'normal' ? this.wildState = 'shrunk' : this.wildState = 'normal'
  }


  resetForm(commentForm: NgForm) {
    commentForm.reset({ deal_id: this.dealId, salesman_id: this.loggedInId });
  }

}
