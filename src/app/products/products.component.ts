import { Component, OnInit } from '@angular/core';

export interface Product {
  id: number;
  Name: string;
  Price:number;
  ProductPicUrl:string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})



export class ProductsComponent implements OnInit {


 public json_products:Product[] = [
    {
      "id":1,
      "Name": "Notebook Basic 15",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
    },
    {
      "id":2,
      "Name": "ITelO Vault",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1007.jpg",
    },
    {
      "id":3,
      "Name": "Notebook Professional 15",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1010.jpg",
    },
    {
      "id":4,
      "Name": "Comfort Senior",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1023.jpg",
    },
    {
      "id":5,
      "Name": "Track Mouse",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1062.jpg",
    },
    {
      "id":6,
      "Name": "Media Keyboard",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1065.jpg",
    },
    {
      "id":7,
      "Name": "Ultra Jet Super Highspeed",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1052.jpg",
    },
    {
      "id":8,
      "Name": "Multi Print",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1055.jpg",
    },
    {
      "id":9,
      "Name": "Ultra Jet Mobile",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1051.jpg",
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
