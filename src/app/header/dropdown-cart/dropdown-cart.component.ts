import { Component, OnInit } from '@angular/core';
import {CounterServiceService} from "../counter-service.service";

@Component({
  selector: 'app-dropdown-cart',
  templateUrl: './dropdown-cart.component.html',
  styleUrls: ['./dropdown-cart.component.scss']
})
export class DropdownCartComponent implements OnInit {

  all_cart = JSON.parse(localStorage.getItem('cart_products'));
  counter:number = parseInt(localStorage.getItem('cart_counter'));

  constructor(private counter_service: CounterServiceService) {
    console.log(this.all_cart);
  }

  ngOnInit() {
  }

  remove_from_cart(id)
  {
    this.counter_service.remove_from_cart(id);
  }

}
