import { Component, OnInit } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   Validators
// } from "@angular/forms";

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
declare var $: any;

import { ApiService } from "../../../service/api/api.service";
import { ConstantService } from "../../../service/core/constant.service";
import { HelperService } from "../../../service/core/helper.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class TiersListComponent implements OnInit {
  // public tiersForm: FormGroup;

  public formTitle: string = '';
  public param = [];
  public tiers: any;
  public submitted = false;
  public selectedTier: any;

  public oTable: any;

  // public departments = ["Select Department","Sales","Finance"]

  constructor(
    // private fb: FormBuilder,
    private apiSvc: ApiService,
    private constantSvc: ConstantService,
    private helperSvc: HelperService
  ) { }

  ngOnInit() {
    this.initForm();
    this.getTiersList();
  }

  // get f() { return this.tiersForm.controls; }

  initForm() {
    this.formTitle = 'Add New Tier';
    // this.tiersForm = this.fb.group({
    //   id: [],
    //   title: ['', Validators.required],
    //   sale_limit: ['', Validators.required],
    //   department: ['', Validators.required]
    // });
  }

  onSubmit(formData: any) {

    this.submitted = true;
    if (formData.invalid) {
      return;
    }

    this.apiSvc.postService(this.constantSvc.APIConfig.ADDTIER, formData.value)
      .subscribe((data: any) => {
        if (data.message) {
          this.destroyTable();
          this.getTiersList();
          this.helperSvc.notifySuccess(data.message ? data.message : 'Tier added successfully');
          this.resetForm(formData);
          $("#tierModal").modal("hide");
        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : 'Something went wrong please try again')
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again")
      });
  }

  resetForm(formData: any) {
    formData.reset({ department: 'Sales' });
    //this.tiersForm.reset({ department: 'Sales', tier: '', sale_limit: '' });
  }

  getTiersList() {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.TIERSLIST, this.param)
      .subscribe((data: any) => {
        this.initTable();
        if (data.message) {
          this.tiers = data.tiers;
        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : "No record found");
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
      })
  }

  onSelect(formData, tier): void {
    this.formTitle = 'Update Tier';
    formData.setValue({
      id: tier.id,
      title: tier.title,
      sale_limit_min: tier.sale_limit_min,
      sale_limit_max: tier.sale_limit_max,
      department: tier.department
    });
  }


  deleteEvent(id) {
    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this record!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.apiSvc.deleteService(this.constantSvc.APIConfig.DELETETIER, id)
          .subscribe((data: any) => {
            if (data.message) {
              Swal(
                'Deleted!',
                data.message ? data.message : "Record deleted successfully",
                'success'
              )
              this.destroyTable();
              this.getTiersList();
            } else if (data.error) {
              this.helperSvc.notifyError(data.error ? data.error : "Something went wrong. please try again");
            }
          }, (error: any) => {
            this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your record is safe :)',
          'error'
        )
      }
    })
  }

  initTable() {
    $(() => {
      this.oTable = $('#tiersTable').DataTable();
    });
  }

  destroyTable() {
    console.log('destroyed function called');
    this.oTable.destroy();
  }

}
