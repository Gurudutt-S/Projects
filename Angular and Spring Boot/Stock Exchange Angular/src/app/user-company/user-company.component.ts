import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrls: ['./user-company.component.css']
})
export class UserCompanyComponent implements OnInit {

  companyList: Company[];

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this.companyService.getCompanyData().subscribe(data => {
      this.companyList = data;
      console.log(data);
    })
  }

}
