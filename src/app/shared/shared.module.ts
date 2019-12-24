import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { ShowErrorsComponent } from "./show-error.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ShowErrorsComponent],
  exports: [ShowErrorsComponent]
})
export class SharedModule { }
