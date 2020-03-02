import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  httpUrl = "http://localhost:8000/user/";

  constructor(private httpClient: HttpClient) { }

  getUserData(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:8000/user');
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

  serviceActivation(obj) {
    return this.httpClient.put('http://localhost:8000/activate', obj)
  }

  isAdmin(): boolean {
    return false;

  }


}
