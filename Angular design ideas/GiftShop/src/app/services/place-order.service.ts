import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlaceOrder } from 'src/models/placeOrder';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {
  httpUrl = 'http://localhost:3000/placeOrder';

  constructor(private httpClient: HttpClient) { }

  getAllOrders(): Observable<PlaceOrder[]> {
    return this.httpClient.get<PlaceOrder[]>(this.httpUrl);
  }

  saveOrder(placeOrder: PlaceOrder): Observable<PlaceOrder> {
    return this.httpClient.post<PlaceOrder>(this.httpUrl, placeOrder);
  }
  
  deleteOrder(id: number): Observable<PlaceOrder> {
    return this.httpClient.delete<PlaceOrder>(this.httpUrl + '/' + id);
  }
  // updateOrder(placeOrder: PlaceOrder):Observable<PlaceOrder>{
  //   return this.httpClient.put<PlaceOrder>(this.httpUrl,placeOrder);
  //   }
  //   getOrderById(id: number):Observable<PlaceOrder>{
  //     return this.httpClient.get<PlaceOrder>(this.httpUrl+id);
  //   }
}
