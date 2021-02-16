import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 id:number = 0; 
 product!: Product;

  constructor(private activatedRoute: ActivatedRoute, 
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.product = this.productService.getProductById(this.id);
  }

  goHome(){
   // this.router.navigate(['home'])
    this.router.navigateByUrl('home')
  }

  goToProducts(){
    this.router.navigate(['product'])
  }
}
