import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CounterServiceService} from 'src/app/header/counter-service.service';
import {ShowHideCartService} from "../../../header/dropdown-cart/show-hide/show-hide-cart.service";


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input('product') pro_obj;

  constructor(private cart: CounterServiceService ,private show_hide_cart: ShowHideCartService) { }

  ngOnInit() {
  }

  add_to_cart()
  {
    this.cart.cart_counter(this.pro_obj);
    this.show_hide_cart.emit_change(false);


  }
}
