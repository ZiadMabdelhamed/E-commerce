import { Component, OnInit } from '@angular/core';

export interface Product {
  id: number;
  Name: string;
  Price:number;
  ProductPicUrl:string;
  Description:string;
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
      "Description":" Notebook Basic 15 mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placeratFusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin g,"
    },
    {
      "id":2,
      "Name": "ITelO Vault",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1007.jpg",
      "Description":" ITelO Vault mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placeratFusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin g,"
    },
    {
      "id":3,
      "Name": "Notebook Professional 15",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1010.jpg",
      "Description":" Notebook Professional 15 mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placeratFusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin g,"
    },
    {
      "id":4,
      "Name": "Comfort Senior",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1023.jpg",
      "Description":" Comfort Senior mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placeratFusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin g,"
    },
    {
      "id":5,
      "Name": "Track Mouse",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1062.jpg",
      "Description":" Track Mouse mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placeratFusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin g,"
    },
    {
      "id":6,
      "Name": "Media Keyboard",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1065.jpg",
      "Description":" Media Keyboard mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placeratFusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin g,"
    },
    {
      "id":7,
      "Name": "Ultra Jet Super Highspeed",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1052.jpg",
      "Description":" Ultra Jet Super Highspeed mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placeratFusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin g,"
    },
    {
      "id":8,
      "Name": "Multi Print",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1055.jpg",
      "Description":" Multi Print mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placeratFusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin g,"
    },
    {
      "id":9,
      "Name": "Ultra Jet Mobile",
      "Price": 956,
      "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1051.jpg",
      "Description":" Ultra Jet Mobile mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placeratFusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin g,"
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
