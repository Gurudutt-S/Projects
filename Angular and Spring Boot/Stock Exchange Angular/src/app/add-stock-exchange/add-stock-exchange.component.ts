import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExchangeService } from '../services/exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock-exchange',
  templateUrl: './add-stock-exchange.component.html',
  styleUrls: ['./add-stock-exchange.component.css']
})
export class AddStockExchangeComponent implements OnInit {

  addStockExchange: FormGroup;

  constructor(private formBulder: FormBuilder, private exchangeService: ExchangeService, private router: Router) { }

  ngOnInit() {

    this.addStockExchange = this.formBulder.group({
      id: [''],
      stockExchangeName: [''],
      breif: [''],
      address: [''],
      remarks: ['']
    });

  }

  saveExchange() {
    this.exchangeService.saveNewExchange(this.addStockExchange.value).subscribe(data => {
      alert("Data inserted succesfully");
      this.router.navigate(['/admin/manage-exchange'])
    });
  }

}
