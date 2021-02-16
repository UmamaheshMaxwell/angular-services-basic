import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products!: Product[];
  constructor(private productService: ProductService) {

   }
   ngOnInit(){
    this.products =  this.productService.getProducts();
   }
}
