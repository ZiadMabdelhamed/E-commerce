import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {

  public cart_count:number;

  constructor() { this.cart_count = 0; }

  ngOnInit() {

  }



  public cart_counter(pro_obj)
  {
    alert('carr t counter '+pro_obj.id);
    this.cart_count++;
  }
}
