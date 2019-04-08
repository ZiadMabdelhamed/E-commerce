import { Component, OnInit } from '@angular/core';
import {ProductsComponent} from "../products.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-single-product',
  templateUrl: './show-single-product.component.html',
  styleUrls: ['./show-single-product.component.scss']
})
export class ShowSingleProductComponent implements OnInit {


  constructor(private route: ActivatedRoute) {

  }

  public id = this.route.snapshot.paramMap.get('id');



  ngOnInit() {

  }

}
