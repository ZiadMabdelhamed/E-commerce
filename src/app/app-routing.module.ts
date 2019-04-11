import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShowSingleProductComponent} from './products/show-single-product/show-single-product.component';
import {CartDetailsComponent} from "./cart/cart-details/cart-details.component";

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
