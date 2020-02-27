import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  httpUrl = "http://localhost:8002/user/";

  constructor(private httpClient: HttpClient) { }

  getUserData(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  saveNewUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.httpUrl, user);
  }

  deleteUser(id: string): Observable<User> {
    // return this.httpClient.delete(`${this.httpUrl}${id}`)
    return this.httpClient.delete<User>(this.httpUrl + id);
  }

  updateUserInfo(user: User): Observable<User> {
    return this.httpClient.put<User>(this.httpUrl, user);
  }

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl + id);
  }

  isAdmin(): boolean {
    return false;

  }


}
