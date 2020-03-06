import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUser: FormGroup;

  constructor(private formBulder: FormBuilder, private userService: UserServiceService, private router: Router) { }

  ngOnInit() {

    this.updateUser = this.formBulder.group({
      id: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      userType: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

    const id = localStorage.getItem('userId');
    if (+id > 0) {
      this.userService.getUserById(id).subscribe(user => {
        this.updateUser.patchValue(user);
      })
    }

  }

  updateTheUser(user: User) {
    this.userService.updateUserInfo(this.updateUser.value).subscribe(u => {
      this.router.navigate(['admin/users']);
    })
  }

}
