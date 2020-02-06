import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userLoginForm: FormGroup;

  constructor(private formBulder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.userLoginForm = this.formBulder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.router.navigate(['/user-page'])
  }

}
