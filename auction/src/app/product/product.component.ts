import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl='http://placehold.it/300x150';
  constructor() { }

  ngOnInit() {
    this.products=[
      new Product(1,"第一個商品",1.99,3.5,"這是第一商品，是我在學習繤課網Angular入冊實戰",["電子商品","硬體設備"]),
      new Product(2,"第二個商品",2.99,4.5,"這是第二商品，是我在學習繤課網Angular入冊實戰",["圖書","硬體設備"]),
      new Product(3,"第三個商品",3.99,5.5,"這是第三商品，是我在學習繤課網Angular入冊實戰",["硬體設備"]),
      new Product(4,"第四個商品",4.99,1.5,"這是第四商品，是我在學習繤課網Angular入冊實戰",["電子商品","硬體設備"]),
      new Product(5,"第五個商品",5.99,2.5,"這是第五商品，是我在學習繤課網Angular入冊實戰",["機車商品","硬體設備"]),
      new Product(6,"第六個商品",6.99,3.5,"這是第六商品，是我在學習繤課網Angular入冊實戰",["電子商品","圖書"]),
    ];
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
