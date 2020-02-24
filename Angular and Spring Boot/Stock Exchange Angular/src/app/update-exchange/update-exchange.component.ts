import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExchangeService } from '../services/exchange.service';
import { Router } from '@angular/router';
import { Exchange } from '../models/exchange';

@Component({
  selector: 'app-update-exchange',
  templateUrl: './update-exchange.component.html',
  styleUrls: ['./update-exchange.component.css']
})
export class UpdateExchangeComponent implements OnInit {

  updateStockExchange: FormGroup;

  constructor(private formBulder: FormBuilder, private exchangeService: ExchangeService, private router: Router) { }

  ngOnInit() {

    this.updateStockExchange = this.formBulder.group({
      id: [''],
      stockExchangeName: [''],
      breif: [''],
      address: [''],
      remarks: ['']
    });

    const id = localStorage.getItem('exchangeId');
    if (+id > 0) {
      this.exchangeService.getExchangeById(id).subscribe(exchange => {
        this.updateStockExchange.patchValue(exchange);
      });
    }

  }

  updateTheExchange(exchange: Exchange) {
    this.exchangeService.updateExchangeinfo(this.updateStockExchange.value).subscribe(exch => {
      this.router.navigate(['manage-exchange'])
    })
  }

}
