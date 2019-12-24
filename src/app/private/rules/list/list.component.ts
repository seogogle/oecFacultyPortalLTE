import { Component, OnInit } from '@angular/core';

import { ApiService } from "../../../service/api/api.service";
import { ConstantService } from "../../../service/core/constant.service";
import { HelperService } from "../../../service/core/helper.service";

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
declare var $: any;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class rulesListComponent implements OnInit {
  public param = [];
  public tiers = [];
  public rules: any;

  constructor(
    private apiSvc: ApiService,
    private constantSvc: ConstantService,
    private helperSvc: HelperService
  ) { }

  ngOnInit() {
    this.getRulesList();
  }

  getRulesList() {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.RULESLIST, this.param)
      .subscribe((data: any) => {
        this.initTable();
        if (data.message) {
          console.log(data);
          this.rules = data.rules;
        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : "No record found");
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
      })
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

        this.apiSvc.deleteService(this.constantSvc.APIConfig.DELETERULE, id)
          .subscribe((data: any) => {
            if (data.message) {
              Swal(
                'Deleted!',
                data.message ? data.message : "Record deleted successfully",
                'success'
              )
              this.destroyTable();
              this.getRulesList();
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
      $('#rulesTable').DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true
      });
    });
  }

  destroyTable() {
    $(() => {
      var table = $('#rulesTable').DataTable();
      table.destroy();
    })
  }

}
