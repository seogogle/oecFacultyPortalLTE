import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient } from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import { Router } from "@angular/router";

import { ConstantService } from "../core/constant.service";
import { HelperService } from "../core/helper.service";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private router: Router,
    private constantSvc: ConstantService,
    private helperSvc: HelperService
  ) { }

  public getToken(): string {
    return this.helperSvc.lsGetItem(this.constantSvc.tokenConfig.AUTH_TOKEN);
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (typeof token !== 'undefined' && token !== null) {
      return true;
    } else {
      return false;
    }
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var userRoles: string[] = this.helperSvc.lsGetItem(this.constantSvc.tokenConfig.USER_ROLES)
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

  public handleDirectPublicUrl() {
    if (this.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  public logout() {
    this.helperSvc.lsClear();
    this.helperSvc.ssClear();
    this.router.navigate(['/login']);
    this.helperSvc.notifySuccess('Your session is successfully destroyed!');
  }

}
