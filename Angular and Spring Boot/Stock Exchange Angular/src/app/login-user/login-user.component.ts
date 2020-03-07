import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userLoginForm: FormGroup;
  userData: User[];

  constructor(private formBulder: FormBuilder, private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
    this.userLoginForm = this.formBulder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.userService.getUserData().subscribe(
      user => {
        this.userData = user;
      }
    )

  }

  login() {
    let user_name = this.userLoginForm.controls.userName.value;
    for (let users of this.userData) {
      if (user_name === users.username) {
        localStorage.removeItem('userId');
        localStorage.setItem('userId', this.userLoginForm.controls.userName.value);
        console.log("logged in succesfully");
        alert('Logged in Succesfully')
        this.router.navigate(['/user-page']);
        break;
      } else
        console.log("invalid username or password");
        alert('Invalid username or password');
        break;
    }
  }

}
