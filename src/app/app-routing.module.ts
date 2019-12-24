import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './public/login/login.component'
import { AuthGuardService as AuthGuard } from './service/auth-guard/auth-guard.service';
import { Error404Component } from './error404/error404.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
