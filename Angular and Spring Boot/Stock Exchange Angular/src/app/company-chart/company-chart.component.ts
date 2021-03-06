import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { StockPriceService } from '../services/stock-price.service';
import { Company } from '../models/company';
import { StockPrice } from '../models/StockPrice';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-chart',
  templateUrl: './company-chart.component.html',
  styleUrls: ['./company-chart.component.css']
})
export class CompanyChartComponent implements OnInit {
  c1: string;
  c2: string;
  e1: string;
  e2: string;
  cCode1: string;
  cCode2: string;
  company: Company[];
  stprice: StockPrice[];
  d1: number[] = [];
  d2: number[] = [];
  i: number;
  title = "app";
  chart;
  updateFlag = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  chartOptions = {
    chart: {
      type: "column"
    },
    series: [
      {
        name: '',
        data: []
      },
      {
        name: '',
        data: []
      }
    ],
    exporting: {
      enabled: true
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      allowDecimals: true,
      title: {
        text: "Price"
      }
    }
  };


  constructor(private companyService: CompanyService, private stockPriceService: StockPriceService) {

  }
  chartOne = Highcharts;
  chartOneOptions: any;

  ngOnInit() {
    this.chartCallback = chart => {
      this.chart = chart;
    };

    this.c1 = localStorage.getItem("company1");
    this.c2 = localStorage.getItem("company2");
    this.companyService.getCompanyData().subscribe(data => {
      this.company = data;
      for (this.i = 0; this.i < this.company.length; this.i++) {
        if (this.company[this.i].companyName == this.c1) {
          this.e1 = data[this.i].companyName;
          this.cCode1 = data[this.i].id.toString();
        }
        if (this.company[this.i].companyName == this.c2) {
          this.e2 = data[this.i].companyName;
          this.cCode2 = data[this.i].id.toString();
        }
      }
    });

    this.stockPriceService.getAllStockPriceData().subscribe(data => {
      this.stprice = data;
      for (this.i = 0; this.i < this.stprice.length; this.i++) {
        if (data[this.i].companyCode == this.cCode1) {
          this.d1.push(data[this.i].currentPrice);

        }
        if (data[this.i].companyCode == this.cCode2) {
          this.d2.push(data[this.i].currentPrice);
        }
      }
      this.updateChart();
    });

  }
  updateChart() {
    const self = this,
      chart = this.chart;
    chart.showLoading();
    setTimeout(() => {
      chart.hideLoading();
      self.chartOptions.series = [
        {
          name: this.e1,
          data: this.d1
        },
        {
          name: this.e2,
          data: this.d2
        }
      ];
      self.updateFlag = true;
    }, 2000);
  }


}
