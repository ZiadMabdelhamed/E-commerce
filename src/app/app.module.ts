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
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
