import { Time } from '@angular/common';

export class stockPrice {
    id: string;
    companyCode: string;
    stockExchange: string;
    currentPrice: number;
    date: Date;
    time: Time;
}