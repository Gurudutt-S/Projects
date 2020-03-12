import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { StockPriceService } from '../services/stock-price.service';

@Component({
  selector: 'app-company-chart',
  templateUrl: './company-chart.component.html',
  styleUrls: ['./company-chart.component.css']
})
export class CompanyChartComponent implements OnInit {
  stockDate: any[];
  stockPrice:any[];

  title = 'Stock Charts';

  data = [{
    name: 'Company 1',
    data: this.stockPrice
  }, {
    name: 'Company 2',
    data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
  }];

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: "spline"
    },
    title: {
      text: "Daily Stock Price"
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      title: {
        text: "StockPrice"
      }
    },
    series: this.data
  };

  constructor(private stockPriceService: StockPriceService) { }

  ngOnInit() {

    this.stockPriceService.getAllStockPriceData().subscribe(data => {
      for (let stock of data) {
        this.stockDate.push(stock.date);
        this.stockPrice.push(stock.currentPrice);
      }
    });

  }

}
