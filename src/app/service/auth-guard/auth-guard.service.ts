import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { ConstantService } from "../core/constant.service";
import { HelperService } from "../core/helper.service";
import { AuthService } from "../auth/auth.service";
import { state } from '@angular/animations';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private authSvc: AuthService,
    private constantSvc: ConstantService,
    private helperSvc: HelperService
  ) { }

  // canActivate() {
  //   if (this.authSvc.isAuthenticated()) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authSvc.isAuthenticated()) {
      let roles = next.data['roles'] as Array<string>;
      if (roles) {
        var match = this.authSvc.roleMatch(roles);
        if (match) return true;
        else {

          this.router.navigate(['/login']);
          this.helperSvc.notifyError('forbidden access !')
          return false;
        }
      } else
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild() {
    if (this.authSvc.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
