import { Time } from '@angular/common';

export class StockPrice {
    id: string;
    companyCode: string;
    stockExchange: string;
    currentPrice: number;
    date: Date;
    time: Time;
}