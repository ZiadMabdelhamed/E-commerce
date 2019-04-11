import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-cart',
  templateUrl: './dropdown-cart.component.html',
  styleUrls: ['./dropdown-cart.component.scss']
})
export class DropdownCartComponent implements OnInit {

  all_cart = JSON.parse(localStorage.getItem('cart_products'));

  constructor() {
    console.log(this.all_cart);
  }

  ngOnInit() {
  }

  remove_from_cart(id)
  {
    const index = this.all_cart.findIndex(order => order.id === id);
    this.all_cart.splice(index, 1);
    localStorage.setItem('cart_products', JSON.stringify(this.all_cart));
  }

}
