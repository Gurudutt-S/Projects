import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exchange } from '../models/exchange';
import { StockPrice } from '../models/StockPrice';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  httpUrl = "http://localhost:8006/stockPrice/";

  constructor(private httpClient: HttpClient) { }

  getAllStockPriceData(): Observable<StockPrice[]> {
    return this.httpClient.get<StockPrice[]>(this.httpUrl);
  }

  saveNewStockPrice(stockPrice: StockPrice): Observable<StockPrice> {
    return this.httpClient.post<StockPrice>(this.httpUrl, stockPrice);
  }

  getStockPriceById(id: string): Observable<StockPrice> {
    return this.httpClient.get<StockPrice>(this.httpUrl + id);
  }

  deleteStockPrice(id: string): Observable<StockPrice> {
    return this.httpClient.delete<StockPrice>(this.httpUrl + id);
  }

  updateStockPrice(stockPrice: StockPrice): Observable<StockPrice> {
    return this.httpClient.put<StockPrice>(this.httpUrl, stockPrice);
  }
}


