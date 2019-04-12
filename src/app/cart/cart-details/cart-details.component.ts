import { Component, OnInit } from '@angular/core';
import {CounterServiceService} from "../../header/counter-service.service";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  all_cart = JSON.parse(localStorage.getItem('cart_products'));
  constructor(private counter_service: CounterServiceService) { }

  ngOnInit() {
  }

  remove_from_cart(id)
  {
    this.counter_service.remove_from_cart(id);
    this.all_cart = this.counter_service.refresh_cart();
  }



}
