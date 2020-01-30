import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-new-company',
  templateUrl: './create-new-company.component.html',
  styleUrls: ['./create-new-company.component.css']
})
export class CreateNewCompanyComponent implements OnInit {

  addCompany:FormGroup;

  constructor(private formBulder:FormBuilder) { }

  ngOnInit() {

    this.addCompany=this.formBulder.group({
      companyName:[''],
      CEOName:[''],
      turnOver:[''],
      description:[''],
      IPOName:['']
    });

  }

}
