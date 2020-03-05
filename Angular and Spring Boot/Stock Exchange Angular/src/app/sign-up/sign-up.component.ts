import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBulder: FormBuilder, private userService: UserServiceService) { }

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
      console.log(data);
      console.log('User inserted succesfully');
      alert("Data inserted succesfully")
    }, (err) => {
      console.log('ERRRR:' + JSON.stringify(err));
    })
  }

}
