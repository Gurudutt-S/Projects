import { Component, OnInit } from '@angular/core';
import { Ipo } from '../models/ipo';
import { IpoService } from '../services/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-ipo',
  templateUrl: './manage-ipo.component.html',
  styleUrls: ['./manage-ipo.component.css']
})
export class ManageIpoComponent implements OnInit {

  ipoList: Ipo[];

  constructor(private ipoService: IpoService, private router: Router) { }

  ngOnInit() {
    this.getIpo();
  }

  getIpo() {
    this.ipoService.getIpoData().subscribe(data => {
      this.ipoList = data;
      console.log(data);
    });
  }
  deleteIpo(ipo: Ipo) {
    this.ipoService.deleteIpo(ipo.id.toString()).subscribe(res => {
      console.log(res);
      this.getIpo();
    });
  }

  updateIpo(ipo: Ipo) {
    localStorage.removeItem('ipoId');
    localStorage.setItem('ipoId', ipo.id.toString());
    this.router.navigate(['update-ipo']);
  }

}
