import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlaceOrderService } from '../services/place-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  placeOrderForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private placeOrderService: PlaceOrderService, private router: Router) { }

  ngOnInit() {
    this.placeOrderForm = this.formBuilder.group({
      id: [Math.random() * 1000000],
      giftCardRAmount: ['', Validators.required],
      giftCardPAmount: ['', Validators.required],
      receipentFirstName: ['', Validators.required],
      receipentLastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required],
      buyerFirstName: ['', Validators.required],
      buyerLastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  addPlaceOrder() {
    this.placeOrderService.saveOrder(this.placeOrderForm.value).subscribe(data => {
      alert('Order Placed Successfully');
      this.placeOrderForm.reset();
      this.router.navigate(['/home']);
    });
  }

}
