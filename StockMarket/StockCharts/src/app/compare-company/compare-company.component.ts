import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {

  compareCompany: FormGroup;

  constructor(private formBulder: FormBuilder) { }

  ngOnInit() {

    this.compareCompany = this.formBulder.group({
      selectCompany: [''],
      selectStock: [''],
      companyName: [''],
      period: ['']
    });

  }

}
