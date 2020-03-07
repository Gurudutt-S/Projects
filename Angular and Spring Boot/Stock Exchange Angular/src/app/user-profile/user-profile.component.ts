import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService, private router: Router) { }

  userList: User[];

  ngOnInit() {
    this.userProfile = this.formBuilder.group({
      username: [''],
      password: [''],
      phone: [''],
      email: ['']
    });

    this.userService.getUserData().subscribe(data => {
      this.userList = data;
    });
  }

}
