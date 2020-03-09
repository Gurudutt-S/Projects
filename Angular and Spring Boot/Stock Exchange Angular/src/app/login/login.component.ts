import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  users: User[];
  current_user: User;

  constructor(private _fb: FormBuilder, private router: Router, private userService: UserServiceService, private auth: AuthServiceService) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.userService.getUserData().subscribe(data => {
      this.users = data;
    })

  }

  // login() {
  //   this.router.navigate(['/admin']);
  // }

  login() {

    let username = this.loginForm.get('userName').value;
    let password = this.loginForm.get('password').value;
    const result = this.auth.authenticate(username, password);

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
    //     localStorage.removeItem('loginId');
    //     localStorage.setItem('loginId', this.current_user.id.toString());

    //     if (this.isAdmin(this.current_user)) {
    //       alert("Admin Logged in Succesully");
    //       this.router.navigate(['/admin']);
    //     } else {
    //       alert("user Logged in Succesully");
    //       this.router.navigate(['/user-page']);
    //     }
    //   } else {
    //     alert("invalid username or password");
    //   }
    // }

    // isAdmin(user: User) {
    //   let id = localStorage.getItem('loginId');
    //   this.userService.getUserById(id).subscribe(u => {
    //     user = u;

    //   });

    //   if (user.userType == "ROLE_ADMIN") {
    //     return true;
    //   } else {
    //     return false;
    //   }

  }

}
