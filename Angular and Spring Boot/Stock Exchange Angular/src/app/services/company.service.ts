import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  httpUrl = "http://localhost:8003/company/";

  constructor(private httpClient: HttpClient) { }

  getCompanyData(): Observable<Company[]> {
    return this.httpClient.get<[Company]>(this.httpUrl);
  }

  saveNewCompany(user: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.httpUrl, user);
  }

  deleteCompany(id: string): Observable<Company> {
    // return this.httpClient.delete(`${this.httpUrl}${id}`)
    return this.httpClient.delete<Company>(this.httpUrl + id);
  }

  updateCompanyInfo(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.httpUrl, company);
  }

  getCompanyById(id: string): Observable<Company> {
    return this.httpClient.get<Company>(this.httpUrl + id);
  }

}
