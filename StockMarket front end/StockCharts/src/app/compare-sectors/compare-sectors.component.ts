import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-compare-sectors',
  templateUrl: './compare-sectors.component.html',
  styleUrls: ['./compare-sectors.component.css']
})
export class CompareSectorsComponent implements OnInit {


  compareSector: FormGroup;

  constructor(private formBulder: FormBuilder) { }

  ngOnInit() {

    this.compareSector = this.formBulder.group({
      selectSector: [''],
      selectStock: [''],
      companyName: [''],
      period: ['']
    })

  }

}
