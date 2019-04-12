import {Component, Input, OnInit} from '@angular/core';
import {CounterServiceService} from "../../../header/counter-service.service";

@Component({
  selector: 'app-wish-counter',
  templateUrl: './wish-counter.component.html',
  styleUrls: ['./wish-counter.component.scss']
})
export class WishCounterComponent implements OnInit {

  @Input('product') pro_obj;

  constructor(private cart: CounterServiceService) { }

  ngOnInit() {
  }
  add_to_wishlist()
  {
    this.cart.wishlist(this.pro_obj);
  }
}
