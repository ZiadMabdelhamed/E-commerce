import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public json_products = [
    {
      "Name": "Notebook Basic 15",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
    },
    {
      "Name": "ITelO Vault",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1007.jpg",
    },
    {
      "Name": "Notebook Professional 15",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1010.jpg",
    },
    {
      "Name": "Comfort Senior",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1023.jpg",
    },
    {
      "Name": "Track Mouse",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1062.jpg",
    },
    {
      "Name": "Media Keyboard",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1065.jpg",
    },
    {
      "Name": "Ultra Jet Super Highspeed",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1052.jpg",
    },
    {
      "Name": "Multi Print",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1055.jpg",
    },
    {
      "Name": "Ultra Jet Mobile",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1051.jpg",
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
