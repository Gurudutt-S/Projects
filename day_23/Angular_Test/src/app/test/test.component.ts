import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  today: any;
  user: User[];

  constructor(private usrService: UserService, ) { }

  ngOnInit() {
    this.getDate();
    //this.user = this.usrService.getUserData();
    this.usrService.getUserData().subscribe(data => {this.user = data;});
  }

  getDate() {
    this.today = this.usrService.getDate();
  }

  deleteUser(user : User) {
    this.usrService.deleteUser(user.id).subscribe();
    this.user=this.user.filter(u=> u!==user);
  }

}
