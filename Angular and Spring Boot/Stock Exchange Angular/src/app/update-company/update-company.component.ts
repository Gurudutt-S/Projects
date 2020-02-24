import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  updateCompany: FormGroup;

  constructor(private formBulder: FormBuilder, private companyService: CompanyService, private route: Router) { }

  ngOnInit() {

    this.updateCompany = this.formBulder.group({
      id: [''],
      companyName: [''],
      ceoName: [''],
      turnover: [''],
      boardOfDirectors: [''],
      sector: [''],
      description: [''],
      iponame: ['']
    });

    const id = localStorage.getItem('companyId');
    if (+id > 0) {
      this.companyService.getCompanyById(id).subscribe(company => {
        this.updateCompany.patchValue(company);
      });
    }

  }
  updateTheCompany(company: Company) {
    this.companyService.updateCompanyInfo(this.updateCompany.value).subscribe(comp => {
      this.route.navigate(['manage-company']);
    });
  }



}
