import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.signupForm = new FormGroup({
      'name': new FormControl(''),
      'username': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl(''),
      'password': new FormControl(''),
      'confirmPassword': new FormControl('')
    });


  }

  onSubmit(){
    console.log(this.signupForm.value);
    
  }
}
