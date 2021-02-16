import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   products!: Product[];
   product!: Product;
  constructor() { }

  public getProducts(){


    this.products = [
      new Product(1, "Laptop", 50000),
      new Product(2, "iPad", 8000),
      new Product(3, "Harddisk", 10000)
    ]

    return this.products;
  }

  getProductById(id: number): any {
    this.getProducts().forEach(product => {
       if(product.id == id){
        this.product = product;
       }
    })
    return this.product
  }
}
