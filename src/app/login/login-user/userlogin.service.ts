import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from './user-login';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor( private http:HttpClient) { }

 public logUser(log:UserLogin){
  //  console.log(log)
    return this.http.post('http://localhost:8080/user/login',log);
  }
}
