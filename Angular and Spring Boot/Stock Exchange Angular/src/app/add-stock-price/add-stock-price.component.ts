import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StockPriceService } from '../services/stock-price.service';

@Component({
  selector: 'app-add-stock-price',
  templateUrl: './add-stock-price.component.html',
  styleUrls: ['./add-stock-price.component.css']
})
export class AddStockPriceComponent implements OnInit {

  addStockPrice: FormGroup;

  constructor(private formBuilder: FormBuilder, private stockPriceService: StockPriceService) { }

  ngOnInit() {
    this.addStockPrice = this.formBuilder.group({
      companyCode: [''],
      stockExchange: [''],
      currentPrice: [''],
      date: [''],
      time: ['']
    });
  }

  saveStockPrice() {
    this.stockPriceService.saveNewStockPrice(this.addStockPrice.value).subscribe(data => {
      console.log(data);
      console.log("data insered succesfully");
    }, (err) => {
      console.log('ERRRR:' + JSON.stringify(err));
    })
  }

}
