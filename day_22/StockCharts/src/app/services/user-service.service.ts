import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  httpUrl="http://localhost:8989/users/";

  constructor(private httpClient:HttpClient) { }

  getUserData():Observable<User[]>{
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  saveNewUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.httpUrl,user);
  }

}
