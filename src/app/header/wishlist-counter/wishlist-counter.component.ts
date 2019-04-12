import { Component, OnInit } from '@angular/core';
import {CounterServiceService} from "../counter-service.service";

@Component({
  selector: 'app-wishlist-counter',
  templateUrl: './wishlist-counter.component.html',
  styleUrls: ['./wishlist-counter.component.scss']
})
export class WishlistCounterComponent implements OnInit {

  counter:number;
  constructor(private counter_service: CounterServiceService) {

    this.counter_service.wishlist_counter.subscribe(
        (counter:number)=> this.counter = counter
    );

    this.counter_service.set_init_wish();
  }

  ngOnInit() {
  }

}
