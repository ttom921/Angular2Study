import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:  Product[];
  private imgUrl='http://placehold.it/300x150';
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products=  this.productService.  getProducts();
      
  }

}


