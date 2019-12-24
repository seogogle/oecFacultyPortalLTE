import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

import { ConstantService } from '../../../service/core/constant.service';
import { HelperService } from '../../../service/core/helper.service';
import { ApiService } from '../../../service/api/api.service';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UsersListComponent implements OnInit {
  public param = [];
  public roles = [];
  public users: any;

  public userForm: FormGroup;
  public submitted: boolean = false;

  jsonData = {};

  public oTable: any;
  public userRoles = [
    { name: "Sales Manager", value: "Sales Manager" },
    { name: "Finance Manager", value: "Finance Manager" },
    { name: "Sales Person", value: "Salesman" },
    { name: "Finance Person", value: "Finance Person" }
  ]

  constructor(
    private constantSvc: ConstantService,
    private helperSvc: HelperService,
    private apiSvc: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUsersList();
    this.initForm();
    this.getRolesList();
  }

  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }

  initForm() {
    this.userForm = this.fb.group({
      id: [''],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      role_id: ['1', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  getUsersList() {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.USERS, this.param)
      .subscribe((data: any) => {
        this.initTable();
        if (data.message) {
          this.users = data.users;
        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : "No record found");
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong. please try again");
      });
  }

  getRolesList() {
    this.param = [];
    this.apiSvc.getService(this.constantSvc.APIConfig.ROLELIST, this.param)
      .subscribe((data: any) => {
        this.roles = data.roles;
      }, (error: any) => {

      });
  }

  getUserData(userId) {
    this.apiSvc.getService(this.constantSvc.APIConfig.GETUSER, userId)
      .subscribe((data: any) => {
        if (data.message) {
          this.userForm.setValue({
            id: data.userData.id,
            username: data.userData.username,
            role_id: data.userData.role_id,
            first_name: data.userData.first_name,
            last_name: data.userData.last_name,
            email: data.userData.email,
            phone: data.userData.phone
          });
          //this.helperSvc.notifySuccess(data.message ? data.message : "User Info");
        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : "Something went wrong please try again");
        }
      }, (error: any) => {
        this.helperSvc.notifyError(error.error.message ? error.error.message : "Something went wrong please try again");
        console.log('error ', error);
      });
  }

  onClickSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    this.apiSvc.putService(this.constantSvc.APIConfig.UPDATEUSER, this.userForm.value)
      .subscribe((data: any) => {
        if (data.message) {
          this.destroyTable();
          this.getUsersList();
          $("#userModel").modal("hide");
          this.helperSvc.notifySuccess(data.message ? data.message : "success")
        } else if (data.error) {
          this.helperSvc.notifyError(data.error ? data.error : "something went wrong please try again")
        }
      }, (error: any) => {
        console.log(error.error.errorMessage);
      });
  }

  deleteEvent(userId) {
    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this record!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.apiSvc.deleteService(this.constantSvc.APIConfig.DELETEUSER, userId)
          .subscribe((data: any) => {
            if (data.message) {
              Swal(
                'Deleted!',
                data.message ? data.message : "Record deleted successfully",
                'success'
              )
              this.destroyTable();
              this.getUsersList();
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
      this.oTable = $('#usersRecordTable').DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true
      });

      this.oTable.on('order.dt search.dt', () => {
        this.oTable.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
          cell.innerHTML = i + 1;
        });
      }).draw();
    });
  }

  destroyTable() {
    $(() => {
      this.oTable.destroy();
    })
  }

  applyFilter() {
    $.fn.dataTableExt.afnFiltering.push(
      function (oSettings, aData, iDataIndex) {

        var byUserRole = $("#byUserRole").val();

        if (byUserRole == undefined || byUserRole == '') {
          byUserRole = '';
        }

        var userRole = aData[5];

        console.log(userRole);

        if (byUserRole === '') {
          return true;
        }
        else if (userRole == byUserRole) {
          return true;
        }

        else {
          return false;
        }
      }
    );

    this.oTable.draw();

  }

  // openNewWindow(user: any) {
  //   this.jsonData = { 'id': user.id, 'username': user.username };
  //   this.apiSvc.postService(this.constantSvc.APIConfig.LOGINWITHUSERNAME, this.jsonData)
  //     .subscribe((data: any) => {
       

  //       this.helperSvc.lsSetItem(this.constantSvc.tokenConfig.USER_INFO, data.userData);

  //       if (data.userData.role_id == 2)
  //         this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'salesmanager');
  //       else if (data.userData.role_id == 3)
  //         this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'financemanager');
  //       else if (data.userData.role_id == 4)
  //         this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'salesman');
  //       else if (data.userData.role_id == 5)
  //         this.helperSvc.lsSetItem(this.constantSvc.dashboardConfig.DASHBOARD_URL, 'finance-person');

  //       this.router.navigate(['dashboard']);

  //     }, (error: any) => {
  //       console.log(error.error.message);
  //     });
  // }

}
