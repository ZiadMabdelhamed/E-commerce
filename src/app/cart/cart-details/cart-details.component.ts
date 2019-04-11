import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  all_cart = JSON.parse(localStorage.getItem('cart_products'));
  constructor() { }

  ngOnInit() {
  }

}
