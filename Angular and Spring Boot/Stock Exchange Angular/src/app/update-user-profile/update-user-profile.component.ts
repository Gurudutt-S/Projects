import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      id:[''],
      username: [''],
      password: [''],
      phone: [''],
      email: ['']
    });
    const id = localStorage.getItem('userId');
    if (id !== null) {
      this.userService.getUserByUsername(id).subscribe(
        data => {
          this.userProfile.patchValue(data);
        }
      );
    }
  }
  updateTheUserProfile(user: User) {
    this.userService.updateUserInfo(this.userProfile.value).subscribe(u => {
      this.router.navigate(['/user-page/user-profile']);
    })
  }

}
