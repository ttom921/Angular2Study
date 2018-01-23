import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  comments: Comment[];
  newRating: number = 5;
  newComment: string = "";
  isCommentHidden: boolean = true;

  constructor(private routerInfo: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    const productId: number = this.routerInfo.snapshot.params['productId'];
    this.productService.getProduct(productId).subscribe(
      res => this.product = res
    );
    this.productService.getCommentsForProductId(productId).subscribe(
      res => this.comments = res
    );
  }
  addComment() {
    let comment = new Comment(
      0,
      this.product.Id,
      new Date().toDateString(),
      "someone",
      this.newRating,
      this.newComment);
    this.comments.unshift(comment);

    //計算平均
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    //
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
