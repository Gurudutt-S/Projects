import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  httpUrl = "http://localhost:8765/user-service/user/";

  constructor(private httpClient: HttpClient) { }

  getUserData(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  saveNewUser(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:8765/user-service/usersignup/', user);
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

  serviceActivation(email) {
    return this.httpClient.put('http://localhost:8765/user-service/activate', email)
  }

  getUserByUsername(name: string): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl+"username/" + name);
  }

  isAdmin(): boolean {
    return false;

  }


}
