import { Component, OnInit ,Input } from '@angular/core';
import {Router} from "@angular/router"


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input('image_url') image: string[];
  @Input('pro_name') name: string[];
  @Input('pro_id') id: string[];
  @Input('product') pro_obj;



  constructor(private router: Router) { }

  single_product_page()
  {
    // alert(this.id);
    this.router.navigate(['/product', this.id]);

  }

  ngOnInit() {
  }

}
