import { Component, OnInit } from '@angular/core';
import { Exchange } from '../models/exchange';
import { Router } from '@angular/router';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {

  exchangeList: Exchange[];

  constructor(private exchangeService: ExchangeService, private router: Router) { }

  ngOnInit() {
    this.getExchange();
  }

  getExchange() {
    this.exchangeService.getExchangeData().subscribe(data => {
      this.exchangeList = data;
      console.log(data);
    });
  }
  deleteExchange(exchange: Exchange) {
    this.exchangeService.deleteExchange(exchange.id.toString()).subscribe(res => {
      console.log(res);
      this.getExchange();
    });
  }

  updateExchange(exchange: Exchange) {
    localStorage.removeItem('exchangeId');
    localStorage.setItem('exchangeId', exchange.id.toString());
    this.router.navigate(['update-exchange']);
  }

}
