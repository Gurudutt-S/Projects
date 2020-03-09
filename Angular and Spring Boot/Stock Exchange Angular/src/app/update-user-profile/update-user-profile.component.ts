import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {

  userProfile: FormGroup;
  userList: User;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService, private router: Router) { }

  ngOnInit() {

    this.userProfile = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      userType: [''],
      enabled: ['']
    });
    const id = localStorage.getItem('loginId');
    if (+id > 0) {
      this.userService.getUserById(id).subscribe(user => {
        this.userProfile.patchValue(user);
      })
    }
  }
  updateTheUserProfile(user: User) {
    this.userService.updateUserInfo(this.userProfile.value).subscribe(u => {
      this.router.navigate(['user-page/user-profile']);
    })
  }

}
