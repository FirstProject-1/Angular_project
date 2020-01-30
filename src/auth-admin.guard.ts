import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AdminService } from './app/login/login-admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(private loginAdminService:AdminService, private route:Router){}

  canActivate(){
    if(this.loginAdminService.authAmin())
    return true;
    else{
      this.route.navigate(['login'])
      return false
    }
  }
  
}
