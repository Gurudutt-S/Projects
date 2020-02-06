import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-create-new-company',
  templateUrl: './create-new-company.component.html',
  styleUrls: ['./create-new-company.component.css']
})
export class CreateNewCompanyComponent implements OnInit {

  addCompany: FormGroup;

  constructor(private formBulder: FormBuilder, private companyService: CompanyService) { }

  ngOnInit() {

    this.addCompany = this.formBulder.group({
      id: [''],
      companyName: [''],
      CEOName: [''],
      turnOver: [''],
      boardOfDirectors: [''],
      sector: [''],
      description: [''],
      IPOName: ['']
    });
  }

  saveCompany() {
    this.companyService.saveNewCompany(this.addCompany.value).subscribe(data => {
      console.log(data);
      console.log('Company inserted succesfully');
      alert("Data inserted succesfully")
    }, (err) => {
      console.log('ERRRR:' + JSON.stringify(err));
    })

  }

}
