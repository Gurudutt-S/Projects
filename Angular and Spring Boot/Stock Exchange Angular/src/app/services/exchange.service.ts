import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exchange } from '../models/exchange';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  httpUrl = "http://localhost:8005/stockExchange/";

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

  getExchangeById(id: string):Observable<Exchange> {
    return this.httpClient.get<Exchange>(this.httpUrl + id);
  }

}
