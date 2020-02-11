import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Signup } from './signup';


@Injectable({
  providedIn: 'root'
})
export class UsersignupService {


  constructor( private http:HttpClient) { }
public registered = false
public authorized=false


public addUser(sign:Signup){
  console.log(sign)
  
  return this.http.post('http://localhost:8080/user/signup',sign);
}

}

