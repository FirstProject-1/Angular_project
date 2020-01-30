import { Injectable ,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserloginService } from 'src/app/login/login-user/userlogin.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,next){
    let authoService=this.injector.get(UserloginService)
    let tokenizedReq= req.clone({
      setHeader:{
        Authorization :`Bearer ${authoService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }


}
