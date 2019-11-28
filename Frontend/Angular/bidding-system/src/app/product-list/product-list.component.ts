import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Product} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {
  products = [
    {product: 'Ford', bidValue: '100', timestamp: '28 Nov 2019'},
    {product: 'Maruti', bidValue: '', timestamp: ''},
    {product: 'Hyundai', bidValue: '', timestamp: ''},
    {product: 'Honda', bidValue: '', timestamp: ''}
  ];

  // public products: Array<any>

  public showProducts: boolean;

  constructor(private productsSerivce: ProductsService) {
    // this.products = [];
   }

  ngOnInit() {
  }

  public getProducts() {
    this.showProducts = true;
    // this.productsSerivce.requestProducts()
    //   .subscribe(data => {
    //       this.products = [];
    //       console.log(data);
    //       data.forEach(element => {
    //         const product: Product = {
    //           id: element['_id']['$oid'],
    //           name: element['name'],
    //           description: element['description']
    //         };
    //         this.products.push(product);
    //       });
    //     }
    //   );
  }

  public updateRecord() {
    console.log(this.products);
  }

}
