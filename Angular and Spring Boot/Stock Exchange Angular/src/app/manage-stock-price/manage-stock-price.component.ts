import { Component, OnInit } from '@angular/core';
import { StockPrice } from '../models/StockPrice';
import { StockPriceService } from '../services/stock-price.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-stock-price',
  templateUrl: './manage-stock-price.component.html',
  styleUrls: ['./manage-stock-price.component.css']
})
export class ManageStockPriceComponent implements OnInit {

  stockPriceList: StockPrice[];

  constructor(private stockPriceService: StockPriceService, private router: Router) { }

  ngOnInit() {
    this.getStockPrice();
  }

  getStockPrice() {
    this.stockPriceService.getAllStockPriceData().subscribe(data => {
      this.stockPriceList = data;
      console.log(data);
    });
  }

  deleteStockPrice(stockPrice: StockPrice) {
    this.stockPriceService.deleteStockPrice(stockPrice.id.toString()).subscribe(res => {
      console.log(res);
      this.getStockPrice();
    });
  }

  updateStockPrice(stockPrice: StockPrice) {
    localStorage.removeItem('stockPriceId');
    localStorage.setItem('stockPriceId', stockPrice.id.toString());
    this.router.navigate(['update-stockPrice']);
  }

}
