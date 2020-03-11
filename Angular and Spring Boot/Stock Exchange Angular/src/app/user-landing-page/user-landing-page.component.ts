import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {

  constructor(private auth: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    localStorage.removeItem('profile_id');
    this.router.navigate(['/home']);
  }

}
