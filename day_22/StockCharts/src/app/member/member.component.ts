import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  user : User[];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getUserData().subscribe(data => { this.user = data; });
  }
}
