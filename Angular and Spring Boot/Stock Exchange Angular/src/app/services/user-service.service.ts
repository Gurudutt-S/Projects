import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  httpUrl = environment.host + "user-service/user/";

  constructor(private httpClient: HttpClient) { }

  getUserData(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  saveNewUser(user: User): Observable<User> {
    return this.httpClient.post<User>(environment.host + 'user-service/usersignup/', user);
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
    return this.httpClient.put(environment.host + 'user-service/activate', email)
  }

  getUserByUsername(name: string): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl + "username/" + name);
  }

  isAdmin(): boolean {
    return false;

  }


}
