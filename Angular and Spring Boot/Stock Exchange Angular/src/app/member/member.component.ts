import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  userList: User[];

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUserData().subscribe(data => {
      this.userList = data;
      console.log(data);
    });
  }
  deleteUser(user:User) {
    this.userService.deleteUser(user.id.toString()).subscribe(res => {
      console.log(res);
      this.getUsers();
    });
  }

  updateUser(user: User) {
    localStorage.removeItem('userId');
    localStorage.setItem('userId', user.id.toString());
    this.router.navigate(['admin/update-user']);
  }

}
