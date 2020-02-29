import { Component, OnInit } from '@angular/core';
import { PlaceOrder } from 'src/models/placeOrder';
import { PlaceOrderService } from '../services/place-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  orders: PlaceOrder[];

  constructor(private placeOrderService: PlaceOrderService, private router: Router) { }

  ngOnInit() {
    this.placeOrderService.getAllOrders().subscribe(data => {
      this.orders = data;
    })
  }

  deleteOrder(order: PlaceOrder) {
    this.placeOrderService.deleteOrder(order.id).subscribe();
    this.orders = this.orders.filter(u => u !== order);
  }
  // updateOrder(order: PlaceOrder){
  //   localStorage.removeItem('orderId');
  //   localStorage.setItem('orderId',order.id.toString());
  // this.router.navigate(['update-order'])
  // }

}
