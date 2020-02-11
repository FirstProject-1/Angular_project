import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
public GetUser ()
{
 return this.http.get('http://localhost:8080/user/userName',{
 observe :'body',   
 params : new HttpParams().append('userToken',localStorage.getItem('userToken'))});
}
  auth(){
    return !!localStorage.getItem('userToken')
  }

  getToken(){
    return localStorage.getItem('userToken')
  }
}
