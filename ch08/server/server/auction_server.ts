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

app.get('/', (req, res) => {
    res.send("Hello express");
});

app.get('/api/products', (req, res) => {
    //res.send("接收到商品查詢請求");
    res.json(products);
});
app.get('/api/products/:id', (req, res) => {
    res.json(products.find((product) => product.Id == req.params.id));

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