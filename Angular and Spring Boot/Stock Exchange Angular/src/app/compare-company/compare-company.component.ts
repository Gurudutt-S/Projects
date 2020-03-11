import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

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
  company: any[] = [];

  constructor(private formBulder: FormBuilder, private companyService: CompanyService) { }

  ngOnInit() {
    this.compareCompany = this.formBulder.group({
      selectCompany1: [''],
      selectCompany2: ['']
    });
    this.companyService.getCompanyData().subscribe(data => {
      for (let comp of data) {
        this.company.push(comp.companyName)
      }
    });

    this.companyList1 = this.compareCompany.get('selectCompany1').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.companyList2 = this.compareCompany.get('selectCompany2').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  compareCompanies() {
    alert(this.compareCompany.value)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();   
    return this.company.filter(option => option.toLowerCase().includes(filterValue));
  }
}
