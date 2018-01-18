import { Injectable } from '@angular/core';
import { CommaExpr } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, "第一個商品", 1.99, 3.5, "這是第一商品，是我在學習繤課網Angular入冊實戰", ["電子商品", "硬體設備"]),
    new Product(2, "第二個商品", 2.99, 4.5, "這是第二商品，是我在學習繤課網Angular入冊實戰", ["圖書", "硬體設備"]),
    new Product(3, "第三個商品", 3.99, 5.5, "這是第三商品，是我在學習繤課網Angular入冊實戰", ["硬體設備"]),
    new Product(4, "第四個商品", 4.99, 1.5, "這是第四商品，是我在學習繤課網Angular入冊實戰", ["電子商品", "硬體設備"]),
    new Product(5, "第五個商品", 5.99, 2.5, "這是第五商品，是我在學習繤課網Angular入冊實戰", ["機車商品", "硬體設備"]),
    new Product(6, "第六個商品", 6.99, 3.5, "這是第六商品，是我在學習繤課網Angular入冊實戰", ["電子商品", "圖書"]),
  ];
  private comments: Comment[] = [
    new Comment(1, 1, "2017-02-02 20:20:22", "張三", 3, "東西不錯"),
    new Comment(2, 1, "2017-03-02 21:21:22", "李四", 3, "東西不錯"),
    new Comment(3, 1, "2017-04-02 22:22:22", "王五", 3, "東西不錯"),
    new Comment(4, 2, "2017-05-02 23:23:22", "趙六", 3, "東西不錯")
  ];
  constructor() { }
  getAllCategories(): string[] {
    return ["電子商品", "硬體設備","圖書"];
  }
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.Id == id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.procuteId == id);
  }
}
export class Product {
  constructor(
    public Id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}

export class Comment {
  constructor(public id: number,
    public procuteId: number,
    public timesstamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {
  }
}
