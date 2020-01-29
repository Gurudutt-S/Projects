import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  userList: User[];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUserData().subscribe(data => {
      this.userList = data;
      console.log(data);
    });
  }
  deleteUser(user) {
    this.userService.deleteUser(user.id).subscribe(res => {
      console.log(res);
      this.getUsers();
    })
  }
}
