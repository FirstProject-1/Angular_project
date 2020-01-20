import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { WishListPageComponent } from './wish-list-page/wish-list-page.component';
import { HomePageComponent } from './home-page/home-page.component';



const routes: Routes = [
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomePageComponent},
  {path:"addCart",component:CartPageComponent},
  {path:"wishList",component:WishListPageComponent},
  {path:"**",component:NoPageFoundComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
