import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})

export class CartCounterComponent implements OnInit {



  constructor()
  {
    var counter_init = localStorage.getItem('cart_counter');
    var cart_arr = localStorage.getItem('cart_products');
    if (!counter_init)
    {
      localStorage.setItem('cart_counter', '0');
    }

    if(!cart_arr)
    {
      var pro_empty = [];
      localStorage.setItem('cart_products', JSON.stringify(pro_empty));
    }
  }

  ngOnInit() {

  }

  public counter = parseInt(localStorage.getItem('cart_counter'));


  cart_counter(pro_obj)
  {

      var cart_array = [];
      cart_array = JSON.parse(localStorage.getItem('cart_products'));

      this.counter = this.counter + 1;
      cart_array.push(pro_obj);

      localStorage.setItem('cart_counter', this.counter.toString());
      localStorage.setItem('cart_products', JSON.stringify(cart_array));




  }
}
