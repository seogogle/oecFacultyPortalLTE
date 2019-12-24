import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { LayoutModule } from "./layout/layout.module";
import { PrivateComponent } from './private/private.component';
import { ApiService } from './service/api/api.service';
import { ConstantService } from './service/core/constant.service';
import { HelperService } from './service/core/helper.service';
import { AuthService } from './service/auth/auth.service';
import { InterceptorService } from './service/interceptor/interceptor.service';
import { AuthGuardService } from './service/auth-guard/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { Error404Component } from './error404/error404.component';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { ToastrModule } from 'ngx-toastr';
import { TestComponent } from './test/test.component';
// import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrivateComponent,
    Error404Component,
    TestComponent,
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    LayoutModule,
    SharedModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    NgProgressModule.forRoot(),
    NgProgressHttpModule.forRoot(),
  ],
  providers: [ApiService, ConstantService, HelperService, AuthService, AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
