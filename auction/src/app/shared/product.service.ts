import { Injectable } from '@angular/core';
import { CommaExpr } from '@angular/compiler/src/output/output_ast';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class ProductService {


  constructor(private http: HttpClient) { }
  getAllCategories(): string[] {
    return ["電子商品", "硬體設備", "圖書"];
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>('/api/products' + id);
  }
  getCommentsForProductId(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/products' + id + '/comments');
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
