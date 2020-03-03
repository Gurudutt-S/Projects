import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipo } from '../models/ipo';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  httpUrl = "http://localhost:8004/ipo/";

  constructor(private httpClient: HttpClient) { }

  getIpoData(): Observable<Ipo[]> {
    return this.httpClient.get<Ipo[]>(this.httpUrl);
  }

  saveNewIpo(ipo: Ipo): Observable<Ipo> {
    return this.httpClient.post<Ipo>(this.httpUrl, ipo);
  }

  deleteIpo(id: string): Observable<Ipo> {
    // return this.httpClient.delete(`${this.httpUrl}${id}`)
    return this.httpClient.delete<Ipo>(this.httpUrl + id);
  }

  UpdateIpoInfo(ipo: Ipo): Observable<Ipo> {
    return this.httpClient.put<Ipo>(this.httpUrl, ipo);
  }

  getIpoById(id: string): Observable<Ipo> {
    return this.httpClient.get<Ipo>(this.httpUrl + id);
  }


}
