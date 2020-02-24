import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-stock-price',
  templateUrl: './add-stock-price.component.html',
  styleUrls: ['./add-stock-price.component.css']
})
export class AddStockPriceComponent implements OnInit {

  addStockPrice: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addStockPrice = this.formBuilder.group({
      companyCode: [''],
      stockExchange: [''],
      currentPrice: [''],
      date: [''],
      time: ['']
    });
  }

}
