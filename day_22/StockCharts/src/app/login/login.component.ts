import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.router.navigate(['/admin'])
  }
}
