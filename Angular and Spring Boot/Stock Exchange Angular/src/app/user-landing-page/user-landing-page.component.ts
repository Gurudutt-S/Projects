import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {

  uname: User[]
  username: string;

  constructor(private auth: AuthServiceService, private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
    const id = sessionStorage.getItem('username');
    this.userService.getUserData().subscribe(name => {
      this.uname = name;
      for (let user of this.uname) {
        if (user.username == id) {
          this.username = id.toUpperCase();
        }
      }
    })
  }

  logout() {
    this.auth.logout();
    localStorage.removeItem('profile_id');
    this.router.navigate(['/home']);
  }

}
