import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Product, ProductsComponent} from "../products.component";


@Component({
  selector: 'app-show-single-product',
  templateUrl: './show-single-product.component.html',
  styleUrls: ['./show-single-product.component.scss']
})
export class ShowSingleProductComponent implements OnInit {


  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {

  }
  public products = new ProductsComponent();
  public pro_details:Product[] = this.products.json_products;
  public current_id = this.route.snapshot.paramMap.get('id');

  public details = this.pro_details.filter(x => x.id === parseInt(this.current_id));


}
