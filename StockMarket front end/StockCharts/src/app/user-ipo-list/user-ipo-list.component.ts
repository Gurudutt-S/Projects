import { Component, OnInit } from '@angular/core';
import { Ipo } from '../models/ipo';
import { IpoService } from '../services/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-ipo-list',
  templateUrl: './user-ipo-list.component.html',
  styleUrls: ['./user-ipo-list.component.css']
})
export class UserIpoListComponent implements OnInit {

  ipoList: Ipo[];

  constructor(private ipoService: IpoService, private router: Router) { }

  ngOnInit() {
    this.getIpo();
  }

  getIpo() {
    this.ipoService.getIpoData().subscribe(data => {
      this.ipoList = data;
      console.log(data);
    })
  }

}
