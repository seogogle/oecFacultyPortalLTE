import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateComponent } from './private.component';
import { AuthGuardService as AuthGuard } from '../service/auth-guard/auth-guard.service';
import { DealsListComponent } from './deals/list/list.component';
import { UsersListComponent } from './users/list/list.component';
import { UsersAddComponent } from './users/add/add.component';
import { TiersListComponent } from './tiers/list/list.component';
import { rulesListComponent } from './rules/list/list.component';
import { rulesAddComponent } from './rules/add/add.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { DealsViewComponent } from './deals/view/view.component';
import { SalesReportComponent } from './sales-report/sales-report.component';


const routes: Routes = [
  {
    path: '', component: PrivateComponent, children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'dashboard/:id/:role', component: DashboardComponent },
      {
        path: 'deals', canActivate: [AuthGuard], children: [
          { path: '', redirectTo: '/deals/list', pathMatch: 'full' },
          { path: 'list', component: DealsListComponent },
          { path: 'getDeal', component: DealsViewComponent }
        ]
      },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      {
        path: 'users', canActivate: [AuthGuard], children: [
          { path: '', redirectTo: '/users/list', pathMatch: 'full' },
          { path: 'list', component: UsersListComponent },
          { path: 'add', component: UsersAddComponent }
        ]
      },
      {
        path: 'tiers', canActivate: [AuthGuard], children: [
          { path: '', redirectTo: '/tiers/list', pathMatch: 'full' },
          { path: 'list', component: TiersListComponent }
        ]
      },
      {
        path: 'rules', canActivate: [AuthGuard], children: [
          { path: '', redirectTo: '/rules/list', pathMatch: 'full' },
          { path: 'list', component: rulesListComponent },
          { path: 'add', component: rulesAddComponent }
        ]
      },
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
      { path: 'sales-report', component: SalesReportComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
