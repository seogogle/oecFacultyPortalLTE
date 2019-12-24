import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from "../auth/auth.service";
import { tap } from "rxjs/operators";
import { ConstantService } from "../core/constant.service";
import { Router } from "@angular/router";
import { HelperService } from "../core/helper.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private AuthSvc: AuthService,
    private constantSvc: ConstantService,
    private router: Router,
    private helperSvc: HelperService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.AuthSvc.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          token: `${this.AuthSvc.getToken()}`,
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
    return next.handle(request).pipe(
      tap(event => {
        if (event) {

        }
      }, (err: any) => {
        if (err) {
          if (err.error.code === 401) {
            this.router.navigate(['/login']);
            this.helperSvc.lsRemoveItem(this.constantSvc.tokenConfig.AUTH_TOKEN);
            this.helperSvc.lsRemoveItem(this.constantSvc.tokenConfig.USER_INFO);
          }
        }
      })
    );
  }
}
