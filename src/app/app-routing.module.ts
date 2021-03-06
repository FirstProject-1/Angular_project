import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { WishListPageComponent } from './wish-list-page/wish-list-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { CategoryManagmentComponent } from './admin-area/category-managment/category-managment.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PaymentComponent } from './payment/payment.component'
import { EachCategoryComponent } from './each-category/each-category.component';
import { AuthGuard } from './auth.guard';
import { AuthAdminGuard } from 'src/auth-admin.guard';



const routes: Routes = [
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomePageComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"addCart",component:CartPageComponent},
  {path:'each/:id',component:EachCategoryComponent}
  ,
  {path:"payment",component:PaymentComponent,canActivate:[AuthGuard]},
  {path:"wishList",component:WishListPageComponent },
  {path:"manageCategory",component:CategoryManagmentComponent,canActivate:[AuthAdminGuard]},
  {path:"manageProduct",component:AdminAreaComponent,canActivate:[AuthAdminGuard]},
  { path:"productDetails/:id",component:ProductDetailsComponent},
  {path:"each/:id",component:EachCategoryComponent},
  {path:"**",component:NoPageFoundComponent},
  
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
