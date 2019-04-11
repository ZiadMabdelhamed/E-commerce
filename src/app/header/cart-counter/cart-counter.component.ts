import { Component, OnInit } from '@angular/core';
import {CounterServiceService} from "../counter-service.service";
import {ShowHideCartService} from "../dropdown-cart/show-hide/show-hide-cart.service";

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})

export class CartCounterComponent implements OnInit {

    counter:number;
    show_cart:boolean;
  constructor(private counter_service: CounterServiceService , private show_hide_cart: ShowHideCartService)
  {
      this.counter_service.counter_updated.subscribe(
          (counter:number)=> this.counter = counter
      );

      this.show_hide_cart.show_hide_changes.subscribe(
          (status:boolean)=> this.show_cart = status
      );


      this.counter_service.set__init();
      this.show_cart = false;
  }

  ngOnInit() {

  }

    toggle(){
        this.show_cart = !this.show_cart;
    }

}
