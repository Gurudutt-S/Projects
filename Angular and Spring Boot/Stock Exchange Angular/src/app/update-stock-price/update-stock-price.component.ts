import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StockPriceService } from '../services/stock-price.service';
import { Router } from '@angular/router';
import { StockPrice } from '../models/StockPrice';

@Component({
  selector: 'app-update-stock-price',
  templateUrl: './update-stock-price.component.html',
  styleUrls: ['./update-stock-price.component.css']
})
export class UpdateStockPriceComponent implements OnInit {

  updateStockPrice: FormGroup;

  constructor(private stockPriceService: StockPriceService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.updateStockPrice = this.formBuilder.group({
      id:[''],
      companyCode: [''],
      stockExchange: [''],
      currentPrice: [''],
      date: [''],
      time: ['']
    });

    const id = localStorage.getItem('stockPriceId');
    if (+id > 0) {
      this.stockPriceService.getStockPriceById(id).subscribe(data => {
        this.updateStockPrice.patchValue(data);
      });
    }
  }

  updateTheStockPrice(stockPrice: StockPrice) {
    this.stockPriceService.updateStockPrice(this.updateStockPrice.value).subscribe(data => {
      this.router.navigate(['manage-stockPrice']);
    })
  }
}