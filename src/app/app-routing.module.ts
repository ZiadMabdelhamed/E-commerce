import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShowSingleProductComponent} from './products/show-single-product/show-single-product.component';
import {CartDetailsComponent} from "./cart/cart-details/cart-details.component";
import {LoginFormComponent} from "./forms/login-form/login-form.component";
import {RegisterFormComponent} from "./forms/register-form/register-form.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: ShowSingleProductComponent
  },
  {
    path: 'cart-details',
    component: CartDetailsComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
