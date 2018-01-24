import * as express from 'express';
import {Server} from 'ws';
import { setInterval } from 'timers';
const app = express();
export class Product {
    constructor(
        public Id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>) { }
}
const products: Product[] = [
    new Product(1, "第一個商品", 1.99, 3.5, "這是第一商品，是我在學習繤課網Angular入冊實戰", ["電子商品", "硬體設備"]),
    new Product(2, "第二個商品", 2.99, 4.5, "這是第二商品，是我在學習繤課網Angular入冊實戰", ["圖書", "硬體設備"]),
    new Product(3, "第三個商品", 3.99, 5.5, "這是第三商品，是我在學習繤課網Angular入冊實戰", ["硬體設備"]),
    new Product(4, "第四個商品", 4.99, 1.5, "這是第四商品，是我在學習繤課網Angular入冊實戰", ["電子商品", "硬體設備"]),
    new Product(5, "第五個商品", 5.99, 2.5, "這是第五商品，是我在學習繤課網Angular入冊實戰", ["機車商品", "硬體設備"]),
    new Product(6, "第六個商品", 6.99, 3.5, "這是第六商品，是我在學習繤課網Angular入冊實戰", ["電子商品", "圖書"]),
];
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
const comments: Comment[] = [
    new Comment(1, 1, "2017-02-02 20:20:22", "張三", 3, "東西不錯"),
    new Comment(2, 1, "2017-03-02 21:21:22", "李四", 3, "東西不錯"),
    new Comment(3, 1, "2017-04-02 22:22:22", "王五", 3, "東西不錯"),
    new Comment(4, 2, "2017-05-02 23:23:22", "趙六", 3, "東西不錯")
  ];

app.get('/', (req, res) => {
    res.send("Hello express");
});

app.get('/api/products', (req, res) => {
    let result=products;
    //res.send("接收到商品查詢請求");
    let params = req.query;
    if(params.title){
        result = result.filter( p =>p.title.indexOf(params.title) !==-1 );
        console.log('title');
        console.log(result);
    }
    if(params.price && result.length > 0){
        result = result.filter( p =>p.price <= parseInt(params.price) );
        console.log('price');
        console.log(result);
    }
    if(params.category !=="-1" && result.length > 0){
        result = result.filter( p =>p.categories.indexOf(params.category) !==-1 );
        console.log('category');
        console.log(result);
    }

    res.json(result);
});
app.get('/api/products/:id', (req, res) => {
    res.json(products.find((product) => product.Id == req.params.id));

});
app.get('/api/products/:id/comments', (req, res) => {
    res.json(comments.filter((comment:Comment)=> comment.procuteId == req.params.id));

});

const server = app.listen(8000, "localhost", () => {
    console.log("服務器已啟動，地址是:http://localhost:8000");
});

const wsServer = new Server( {port:8085});

wsServer.on("connection",websocket =>{
    websocket.send("這個消息是服務器主動推動送的");
    websocket.on("message",message =>{
        console.log("接收到的消息:"+ message);
    });
});

setInterval( ()=>{
    if(wsServer.clients){
        wsServer.clients.forEach(client =>{
            client.send("這是定時推送");
        }   );
    }
},2000);