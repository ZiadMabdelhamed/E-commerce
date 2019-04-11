import { Component, OnInit } from '@angular/core';
import {CounterServiceService} from "../counter-service.service";

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})

export class CartCounterComponent implements OnInit {

    counter:number;
  constructor(private counter_service: CounterServiceService )
  {
      this.counter_service.counter_updated.subscribe(
          (counter:number)=> this.counter = counter
      );
  }

  ngOnInit() {

  }


}
