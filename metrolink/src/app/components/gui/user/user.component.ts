import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { UserService } from './../../../services/users/user.service';

import { User } from '../../../services/users/user'

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  //fields for user list
  UserData: any = [];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['fname','sname','email','action'];

  //fields for add user
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('resetUserForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  userForm: FormGroup;

  ngOnInit() {
    this.submitReactiveUserForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private userApi: UserService
  ) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userApi.GetUsers().subscribe(data => {
      this.UserData = data;
      this.dataSource = new MatTableDataSource<User>(this.UserData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  /* Reactive user form */
  submitReactiveUserForm() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['password'],
      fname: ['', [Validators.required]],
      sname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      is_admin: ['', [Validators.required]],
      deleted: [0],
      created_date: [new Date()]
    })
  }

  deleteUser(index: number, e){
    if(window.confirm('Are you sure')) {
      // const data = this.dataSource.data;
      // data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      // this.dataSource.data = data;
      this.userApi.DeleteUser(e._id).subscribe( res => {
        this.getAllUsers()
      })
    }
  }
  /* Date */
  // formatDate(e) {
  //   var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
  //   this.userForm.get('dob').setValue(convertDate, {
  //     onlyself: true
  //   })
  // }  

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitUserForm() {
    if (this.userForm.valid) {
      this.userApi.AddUser(this.userForm.value).subscribe(res => {
          this.getAllUsers()
      });
    }
  }

}