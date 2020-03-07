import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  users: User[];
  current_user: User;

  constructor(private _fb: FormBuilder, private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.userService.getUserData().subscribe(data => {
      this.users = data;
    })

  }

  login() {
    this.router.navigate(['/admin']);
  }

  // login() {
  //   let uname = this.loginForm.controls.userName.value;
  //   let password = this.loginForm.controls.password.value;
  //   let flag: boolean = false;
  //   for (let user of this.users) {
  //     if (uname === user.username && password === user.password) {
  //       flag = true;
  //       this.current_user = user;
  //       break;
  //     }
  //   }
  //   if (flag) {
  //     localStorage.removeItem('userId');
  //     localStorage.setItem('userId', this.current_user.id.toString());

  //     if (this.isAdmin()) {
  //       alert("Admin Logged in Succesully");
  //       this.router.navigate(['/admin']);
  //     } else {
  //       alert("User Logged in Succesully");
  //       this.router.navigate(['/user']);
  //     }
  //   }else{
  //     alert("invalid username or password");
  //   }
  // }

  // isAdmin() {
  //   let id = localStorage.getItem('userId');
  //   let validUser: User;
  //   this.userService.getUserById(id).subscribe(u => {
  //     validUser = u;
  //   });
  //   if (validUser.id == "29") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}
