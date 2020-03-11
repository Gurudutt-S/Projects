import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBulder: FormBuilder, private userService: UserServiceService, private router: Router) { }

  ngOnInit() {

    this.signupForm = this.formBulder.group({
      // id: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

  }

  saveUser() {
    this.userService.saveNewUser(this.signupForm.value).subscribe(data => {
      // alert("Data inserted succesfully");
      $('#signUpModal').modal('show');
    });
  }

}
