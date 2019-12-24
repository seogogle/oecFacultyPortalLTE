import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from "@angular/router";

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { DealsListComponent } from './deals/list/list.component';
import { DealsViewComponent } from './deals/view/view.component';
import { UsersListComponent } from './users/list/list.component';
import { UsersAddComponent } from './users/add/add.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiersListComponent } from './tiers/list/list.component';
import { rulesListComponent } from './rules/list/list.component';
import { rulesAddComponent } from './rules/add/add.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';

import { CashDealEditorComponent } from './rules/forms/cash-deal-editor/cash-deal-editor.component';
import { FinanceDealEditorComponent } from './rules/forms/finance-deal-editor/finance-deal-editor.component';
import { OutsideFinanceDealEditorComponent } from './rules/forms/outside-finance-deal-editor/outside-finance-deal-editor.component';
import { SalesmanDashboardComponent } from './dashboard/salesman-dashboard/salesman-dashboard.component';
import { SalesmanagerDashboardComponent } from './dashboard/salesmanager-dashboard/salesmanager-dashboard.component';
import { FinancePersonDashboardComponent } from './dashboard/finance-person-dashboard/finance-person-dashboard.component';
import { FinancemanagerDashboardComponent } from './dashboard/financemanager-dashboard/financemanager-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { SalesReportComponent } from './sales-report/sales-report.component';


@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule,
    LayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    DealsListComponent,
    UsersListComponent,
    UsersAddComponent,
    TiersListComponent,
    rulesListComponent,
    rulesAddComponent,
    SettingsComponent,
    ProfileComponent,
    CashDealEditorComponent,
    FinanceDealEditorComponent,
    OutsideFinanceDealEditorComponent,
    SalesmanDashboardComponent,
    SalesmanagerDashboardComponent,
    FinancePersonDashboardComponent,
    FinancemanagerDashboardComponent,
    AdminDashboardComponent,
    DealsViewComponent,
    SalesReportComponent,
  ]
})
export class PrivateModule { }
