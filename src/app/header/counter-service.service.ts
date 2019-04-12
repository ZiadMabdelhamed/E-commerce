import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {

  counter:number;
  wish_counter:number;
  counter_updated = new EventEmitter<number>();
  wishlist_counter = new EventEmitter<number>();

  constructor()
  {
    var counter_init = localStorage.getItem('cart_counter');
    var cart_arr = localStorage.getItem('cart_products');
    var wish_array = localStorage.getItem('wishlist');

    if (!counter_init)
    {
      localStorage.setItem('cart_counter', '0');
    }

    if(!cart_arr)
    {

      localStorage.setItem('cart_products', JSON.stringify([]));
    }
    if(!wish_array)
    {

      localStorage.setItem('wishlist',JSON.stringify([]));
    }

    this.counter= parseInt(localStorage.getItem('cart_counter'));
    this.wish_counter= parseInt(localStorage.getItem('wishlist'));
  }



  cart_counter(pro_obj)
  {
    var cart_array = [];
    cart_array = JSON.parse(localStorage.getItem('cart_products'));
    this.counter = this.counter + 1;

    const found = cart_array.some(el => el.id === pro_obj.id);

    if(!found)
    {
      cart_array.push(pro_obj);
    }
    else
      {
        let index = cart_array.findIndex(x => x.id === pro_obj.id);
        let current_quantity = cart_array[index].Quantity;
        cart_array[index].Quantity = current_quantity+1;
      }

    localStorage.setItem('cart_counter', this.counter.toString());
    localStorage.setItem('cart_products', JSON.stringify(cart_array));
    this.counter_updated.emit(this.counter);
  }

  remove_from_cart(id)
  {
    var cart_array =[];
    cart_array = JSON.parse(localStorage.getItem('cart_products'));
    const index = cart_array.findIndex(order => order.id === id);

    this.counter -= cart_array[index].Quantity;
    cart_array.splice(index, 1);

    localStorage.setItem('cart_products', JSON.stringify(cart_array));
    localStorage.setItem('cart_counter', this.counter.toString());
    this.counter_updated.emit(this.counter);
  }

  wishlist(pro_obj)
  {
    var wish_array = JSON.parse(localStorage.getItem('wishlist'));
    const found = wish_array.some(el => el.id === pro_obj.id);

    if(!found)
    {
      wish_array.push(pro_obj);
      localStorage.setItem('wishlist', JSON.stringify(wish_array));
      this.wish_counter = wish_array.length;
      this.wish_counter += 1;

    }

    this.wishlist_counter.emit(this.wish_counter);


  }

  set__init()
  {
    this.counter_updated.emit(this.counter);
  }

  set_init_wish()
  {
    var wish_array = JSON.parse(localStorage.getItem('wishlist'));
    this.wish_counter = wish_array.length;
    this.wishlist_counter.emit(this.wish_counter);
  }

  refresh_cart()
  {
    var all_cart = JSON.parse(localStorage.getItem('cart_products'));
    return all_cart;
    // this.cart_updated.emit(all_cart);
  }
}
