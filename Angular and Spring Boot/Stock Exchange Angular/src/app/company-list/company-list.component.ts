import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companyList: Company[];

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany() {
    this.companyService.getCompanyData().subscribe(data => {
      this.companyList = data;
      console.log(data);
    });
  }
  deleteCompany(company: Company) {
    this.companyService.deleteCompany(company.id.toString()).subscribe(res => {
      console.log(res);
      this.getCompany();
    });
  }

  updateCompany(company: Company) {
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId', company.id.toString());
    this.router.navigate(['update-company']);
  }

}
