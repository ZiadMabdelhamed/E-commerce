import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartCounterComponent} from "../../../header/cart-counter/cart-counter.component";

@Component({
  providers:[CartCounterComponent ],
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input('product') pro_obj;

  constructor(private cart: CartCounterComponent ) { }

  ngOnInit() {
  }

  add_to_cart()
  {
    this.cart.cart_counter(this.pro_obj);
    // alert('add to cart'+this.pro_obj.id);

  }
}
