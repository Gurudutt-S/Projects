import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-company',
  templateUrl: './create-new-company.component.html',
  styleUrls: ['./create-new-company.component.css']
})
export class CreateNewCompanyComponent implements OnInit {

  addCompany: FormGroup;

  constructor(private formBulder: FormBuilder, private companyService: CompanyService,private route:Router) { }

  ngOnInit() {

    this.addCompany = this.formBulder.group({
      id: [''],
      companyName: [''],
      ceoName: [''],
      turnover: [''],
      boardOfDirectors: [''],
      sector: [''],
      description: [''],
      iponame: ['']
    });
  }

  saveCompany() {
    this.companyService.saveNewCompany(this.addCompany.value).subscribe(data => {
      console.log(data);
      console.log('Company inserted succesfully');
      alert("Data inserted succesfully");
      this.route.navigate(['/manage-company']);
    }, (err) => {
      console.log('ERRRR:' + JSON.stringify(err));
    })

  }

}
