import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './services/cart/cart-service.service';
import { AdminService } from './login/login-admin/admin.service';
import { UserloginService } from './login/login-user/userlogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularApp';

  public productsInCart=[]
  public cartInfo=[];
  public isAdminAuth;
  isUserAuth: any;
  userName: string;

  constructor(private cartService:CartServiceService, private adminService:AdminService,private UserLoginService:UserloginService){
    this.UserLoginService.GetUser().subscribe(res=>{
      this.userName= res as string;
      console.log(this.userName);
    }
      
 )
  }

  logout()
  {
    localStorage.removeItem("userToken")
    // this.route.navigate(['/login'])
     
  }
  ngOnInit() {

    this.cartService.cartProductsDetails().subscribe(data=>{
      if(data.products.length!=="null"){
        this.cartInfo=data;
        console.log(data)
      } else{
        this.productsInCart=["there is no products here yet"]
      }
    });
    this.isAdminAuth= this.adminService.authAmin()
   
    this.isUserAuth= this.UserLoginService.auth()
    console.log(this.isUserAuth);

    
  }
}
