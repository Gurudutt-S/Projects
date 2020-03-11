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
  userList: User;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService, private router: Router) { }


  ngOnInit() {
    this.userProfile = this.formBuilder.group({
      username: [''],
      password: [''],
      phone: [''],
      email: ['']
    });
    const id = sessionStorage.getItem('userId');
    if (+id>0) {
      this.userService.getUserById(id).subscribe(
        data => {
          this.userProfile.patchValue(data);
          this.userList = data;
        }
      );
    }
  }

  updateTheUserProfile(user: User) {
    localStorage.removeItem('profile_id');
    localStorage.setItem('profile_id', this.userList.id.toString());
    this.router.navigate(['/user-page/update-user-profile']);
  }

}
