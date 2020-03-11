import { Injectable } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

const url = "http://localhost:8765/user-service/login";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private userService: UserServiceService, private httpClient: HttpClient) { }

  authenticate(username: string, password: string) {
    // create a security token
    let authenticationToken = "Basic " + window.btoa(username + ":" + password);
    console.log(authenticationToken);
    let headers = new HttpHeaders({
      Authorization: authenticationToken
    });
    console.log("calling server")
    // send the request
    return this.httpClient.get(url, { headers }).pipe(
      // success function
      map((data: User) => {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("token", authenticationToken);
        sessionStorage.setItem("userType", data.userType == "ROLE_ADMIN" ? "admin" : "user");
        return data;
      }),
      map(error => {
        return error;
      })
    );
  }
  getAuthenticationToken() {
    if (this.isUserLoggedIn())
      return sessionStorage.getItem("token");
    return null;
  }
  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    if (user == null)
      return false;
    return true;
  }
  getProfileUrl(): string {
    let url = sessionStorage.getItem("profile");
    return url;
  }
  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userType')
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
  }
  getUserDetails(): string {
    let user = sessionStorage.getItem('usename');
    return user;
  }

}
