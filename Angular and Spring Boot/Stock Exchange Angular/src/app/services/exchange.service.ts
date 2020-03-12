import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exchange } from '../models/exchange';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  httpUrl = environment.host + "stock-exchange-service/stockExchange/";

  constructor(private httpClient: HttpClient) { }

  getExchangeData(): Observable<Exchange[]> {
    return this.httpClient.get<Exchange[]>(this.httpUrl);
  }

  saveNewExchange(exchange: Exchange): Observable<Exchange> {
    return this.httpClient.post<Exchange>(this.httpUrl, exchange);
  }

  deleteExchange(id: string): Observable<Exchange> {
    // return this.httpClient.delete(`${this.httpUrl}${id}`)
    return this.httpClient.delete<Exchange>(this.httpUrl + id);
  }

  updateExchangeinfo(exchange: Exchange): Observable<Exchange> {
    return this.httpClient.put<Exchange>(this.httpUrl, exchange);
  }

  getExchangeById(id: string): Observable<Exchange> {
    return this.httpClient.get<Exchange>(this.httpUrl + id);
  }

}
