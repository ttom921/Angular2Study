import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService ,Comment} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  comments : Comment[];
  constructor(private routerInfo: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    let productId: number = this.routerInfo.snapshot.params["productId"];
    this.product = this.productService.getProduct(productId);
    this.comments= this.productService.getCommentsForProductId(productId);
  }

}
