import { Injectable ,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AdminService } from 'src/app/login/login-admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminTokenInterceptorService implements HttpInterceptor {
  constructor(private injector:Injector) { }

  intercept(req,next){
    let authoService=this.injector.get(AdminService)
    let tokenizedReq= req.clone({
      setHeader:{
        authorization :`Bearer ${authoService.getTokenAdmin()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
