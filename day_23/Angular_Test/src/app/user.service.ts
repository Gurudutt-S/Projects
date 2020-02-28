import { Injectable } from '@angular/core';
import { USERS } from './models/mock-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  saveUser(value: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private httpClient: HttpClient) { }

  httpUrl = 'http://localhost:3000/users/';

  getDate() {
    return new Date();
  }

  user = USERS;

  getUserData(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(this.httpUrl + '/' + id);
  }


  saveNewUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.httpUrl, user);
  }


}


