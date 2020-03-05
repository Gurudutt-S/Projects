import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {

  compareCompany: FormGroup;
  company: Company[];

  constructor(private formBulder: FormBuilder, private companyService: CompanyService) { }

  ngOnInit() {

    this.compareCompany = this.formBulder.group({
      selectCompany1: [''],
      selectCompany2: ['']
    });

    this.companyService.getCompanyData().subscribe(data => {
      this.company = data;
    });
  }
  compareCompanies(){
    console.log(this.compareCompany.value);
    alert(this.compareCompany.value);
  }

}
