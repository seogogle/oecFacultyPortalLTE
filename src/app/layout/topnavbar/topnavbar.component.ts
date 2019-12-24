import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/service/core/helper.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {
  public userRoleId: any;
  public loggedInId: number;
  constructor(private helperSvc: HelperService) { }

  ngOnInit() {
    this.userRoleId = this.helperSvc.lsGetItem('USERINFO').role_id;
    this.loggedInId = this.helperSvc.lsGetItem('USERINFO').id;
  }

}
