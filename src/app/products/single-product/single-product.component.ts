import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input('image_url') image: string[];
  @Input('pro_name') name: string[];

  constructor() { }

  ngOnInit() {
  }

}
