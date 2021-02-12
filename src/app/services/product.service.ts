import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts(){
    let products: Product[];

    products = [
      new Product(1, "Laptop", 50000),
      new Product(2, "iPad", 8000),
      new Product(3, "Harddisk", 10000)
    ]

    return products;
  }
}
