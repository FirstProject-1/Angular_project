import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserloginService } from './login/login-user/userlogin.service';
import { AdminService } from './login/login-admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private loginUserService:UserloginService , private route:Router){}
  canActivate(){
    if(this.loginUserService.auth())
    return true;
    else{
      this.route.navigate(['login'])
      return false
    }
  }

}
