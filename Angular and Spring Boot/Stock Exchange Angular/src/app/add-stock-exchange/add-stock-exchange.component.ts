import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-add-stock-exchange',
  templateUrl: './add-stock-exchange.component.html',
  styleUrls: ['./add-stock-exchange.component.css']
})
export class AddStockExchangeComponent implements OnInit {

  addStockExchange:FormGroup;

  constructor(private formBulder:FormBuilder,private exchangeService:ExchangeService) { }

  ngOnInit() {

    this.addStockExchange=this.formBulder.group({
      id:[''],
      stockExchangeName:[''],
      breif:[''],
      address:[''],
      remarks:['']
    });

  }

  saveExchange() {
    this.exchangeService.saveNewExchange(this.addStockExchange.value).subscribe(data => {
      console.log(data);
      console.log('exchange inserted succesfully');
      alert("Data inserted succesfully")
    }, (err) => {
      console.log('ERRRR:' + JSON.stringify(err));
    })
  }

}
