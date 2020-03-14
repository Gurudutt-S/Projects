import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Company } from '../models/company';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {

  // myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  companyList1: Observable<string[]>;
  companyList2: Observable<string[]>;

  compareCompany: FormGroup;
  companyList: any[];
  company: any[] = [];

  constructor(private formBulder: FormBuilder, private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
    this.compareCompany = this.formBulder.group({
      selectCompany1: [''],
      selectCompany2: ['']
    });
    this.companyService.getCompanyData().subscribe(data => {
      this.companyList = data;
      for (let comp of data) {
        this.company.push(comp.companyName)
      }
    });

    this.companyList1 = this.compareCompany.get('selectCompany1')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.companyList2 = this.compareCompany.get('selectCompany2')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }

  compare() {
    localStorage.removeItem('company1')
    localStorage.setItem('company1', this.compareCompany.controls.selectCompany1.value);
    localStorage.removeItem('company2');
    localStorage.setItem('company2', this.compareCompany.controls.selectCompany2.value);
    this.router.navigate(['/user-page/company-chart']);

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.company.filter(option => option.toLowerCase().includes(filterValue));
  }
}
