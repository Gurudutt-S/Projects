import { Injectable } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
      map(successData => {
        console.log("success ")
        sessionStorage.setItem("username", username);
        // save the token
        sessionStorage.setItem("token", authenticationToken);
        return successData;
      }),
      // failure function
      map(failureData => {
        // console message 
        console.log("failure")
        return failureData;
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
    sessionStorage.removeItem("token")
  }
  getUserDetails(): string {
    let user = sessionStorage.getItem('usename');
    return user;
  }

}
