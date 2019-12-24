import { Component, OnInit } from '@angular/core';
import { HelperService } from "../../service/core/helper.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

import { ApiService } from "../../service/api/api.service";
import { ConstantService } from "../../service/core/constant.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public settingsForm: FormGroup;
  public jsonData = {};
  public eventValue = '';
  public eventName = '';
  public param = [];

  constructor(
    private fb: FormBuilder,
    private apiSvc: ApiService,
    private constantSvc: ConstantService,
    private helperSvc: HelperService
  ) { }

  ngOnInit() {
    this.initForm()
    this.getSettingsData();
  }

  initForm() {
    this.settingsForm = this.fb.group({
      site_name: [],
      site_email: [],
      google_api_key: [],
      idms_username: [],
      idms_password: [],
      idms_institution_id: [],
      email_protocol: [],
      smtp_host: [],
      smtp_user: [],
      smtp_password: [],
      smtp_port: []
    });
  }

  getSettingsData() {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.GETSETTINGS, this.param)
      .subscribe((data: any) => {

        this.settingsForm.setValue({
          site_name: data.data[0].meta_value,
          site_email: data.data[1].meta_value,
          smtp_host: data.data[3].meta_value,
          email_protocol: data.data[4].meta_value,
          smtp_user: data.data[5].meta_value,
          smtp_password: data.data[6].meta_value,
          smtp_port: data.data[7].meta_value,
          google_api_key: data.data[22].meta_value,
          idms_username: data.data[23].meta_value,
          idms_institution_id: data.data[24].meta_value,
          idms_password: data.data[25].meta_value,
        });
      }, (error: any) => {
        console.log('error occurred!');
      });
  }

  valueUdateEvent(name: string, value: string) {
    this.eventValue = value;
    this.eventName = name;

    this.jsonData = { "name": this.eventName, "value": this.eventValue }

    this.apiSvc.putService(this.constantSvc.APIConfig.UPDATESETTINGS, this.jsonData)
      .subscribe((data: any) => {
        if (data.message) {

        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
      });
  }

}
