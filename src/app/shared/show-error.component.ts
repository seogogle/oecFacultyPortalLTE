import { Component, Input, NgModule } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-show-errors',
  template: `
    <span *ngIf="shouldShowErrors()">
      <li style="color: #d50000; list-style-type: none;" *ngFor="let error of listOfErrors()">{{error}}</li>
    </span>
  `,
  styles: []
})
export class ShowErrorsComponent {

  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'minlength': (params) => 'Value must be of minimum ' + params.requiredLength + ' characters length',
    'maxlength': (params) => 'Value must be of maximum ' + params.requiredLength + ' characters length',
    'pattern': (params) => 'Invalid field value',
    'years': (params) => params.message,
    'email': (params) => 'The required valid email id',
    'countryCity': (params) => params.message,
    'uniqueName': (params) => params.message,
    'telephoneNumbers': (params) => params.message,
    'telephoneNumber': (params) => params.message,
    'equalTo': (params) => 'Passwords do not match.',
    'validatePhone': (params) => 'Invalid phone number',
    'isGreaterCurrentDate': (params) => 'Date shouldnt be greater than current date',
    'isError': (params) => 'Date cant be less than date of joining',
    'minAgeError': (params) => 'Employee should be atleast 18 years old',
    'minMarriageError': (params) => 'Employee should be atleast 21 years old',
    'minBirthError': (params) => 'Date should not be less than birth date',
    'min': (params) => 'Number should be greater than ' + params.min,
    'max': (params) => 'Number should be less than or equal to ' + params.max,
    'somthing': (params) => 'Invalid field value',
    'expectedenddate': (params) => 'Expected End Date should be greater than Project Start Date.',
    'orderenddate': (params) => 'Order End Date should be greater than Sales Order Date.',
    'projectstartdate': (params) => 'Project Start Date should be greater than or equal to Sales Order Date.',
    'expectedenddateerror': (params) => 'Project Start Date should be smaller than Expected End Date.',
    'salesorderdate': (params) => 'Sales Order Date should be smaller than Order End Date.',
    'startdaterequired': (params) => 'Please fill Project Start Date before entering Expected End Date.',
    'dateofjoininglessthanshift': (params) => 'Shift From Date should be Greater than Date of Joining.',
    'shiftdaterequired': (params) => 'Shift From Date is required.'
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched || this.control.untouched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    if (ShowErrorsComponent.errorMessages[type]) {
      return ShowErrorsComponent.errorMessages[type](params);
    } else {
      console.log('Add new error message for given type: ' + type);
      return ShowErrorsComponent.errorMessages['somthing'](params);
    }
  }

}
