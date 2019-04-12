import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartCounterComponent } from './header/cart-counter/cart-counter.component';
import { WishlistCounterComponent } from './header/wishlist-counter/wishlist-counter.component';
import { NavigationLinksComponent } from './header/navigation-links/navigation-links.component';
import { UsernameComponent } from './header/username/username.component';
import { LogoutComponent } from './header/logout/logout.component';
import { LoginComponent } from './header/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { ShowSingleProductComponent } from './products/show-single-product/show-single-product.component';
import { LinkComponent } from './products/single-product/link/link.component';
import { AddToCartComponent } from './products/single-product/add-to-cart/add-to-cart.component';
import {CounterServiceService} from "./header/counter-service.service";
import { DropdownCartComponent } from './header/dropdown-cart/dropdown-cart.component';
import {ShowHideCartService} from './header/dropdown-cart/show-hide/show-hide-cart.service';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { InputComponent } from './forms/shared/input/input.component';
import { SelectComponent } from './forms/shared/select/select.component';
import { SubmitComponent } from './forms/shared/submit/submit.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './header/register/register.component';
import { WishCounterComponent } from './products/single-product/wish-counter/wish-counter.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartCounterComponent,
    WishlistCounterComponent,
    NavigationLinksComponent,
    UsernameComponent,
    LogoutComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    SingleProductComponent,
    ShowSingleProductComponent,
    LinkComponent,
    AddToCartComponent,
    DropdownCartComponent,
    CartDetailsComponent,
    InputComponent,
    SelectComponent,
    SubmitComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NotfoundComponent,
    RegisterComponent,
    WishCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CounterServiceService,ShowHideCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
