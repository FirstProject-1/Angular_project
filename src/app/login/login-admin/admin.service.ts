import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { AdminLogin } from './admin-login';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
   _url;
  constructor( private _http:HttpClient) { }
  admin(user:AdminLogin)
{
return this._http.post<any>(this._url,user);
}
}
