import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { AdminLogin } from './admin-login';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
   
  constructor( private _http:HttpClient) { }
 public logAdmin(log:AdminLogin){
  console.log(log)
    return this._http.post('http://localhost:8080/admin/login',log);
}
authAmin(){
  return !!localStorage.getItem('tokenAuthAdmin')
}
getTokenAdmin(){
  return localStorage.getItem('tokenAuthAdmin')
}
}
