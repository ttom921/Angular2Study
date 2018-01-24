"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var timers_1 = require("timers");
var app = express();
var Product = /** @class */ (function () {
    function Product(Id, title, price, rating, desc, categories) {
        this.Id = Id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, "第一個商品", 1.99, 3.5, "這是第一商品，是我在學習繤課網Angular入冊實戰", ["電子商品", "硬體設備"]),
    new Product(2, "第二個商品", 2.99, 4.5, "這是第二商品，是我在學習繤課網Angular入冊實戰", ["圖書", "硬體設備"]),
    new Product(3, "第三個商品", 3.99, 5.5, "這是第三商品，是我在學習繤課網Angular入冊實戰", ["硬體設備"]),
    new Product(4, "第四個商品", 4.99, 1.5, "這是第四商品，是我在學習繤課網Angular入冊實戰", ["電子商品", "硬體設備"]),
    new Product(5, "第五個商品", 5.99, 2.5, "這是第五商品，是我在學習繤課網Angular入冊實戰", ["機車商品", "硬體設備"]),
    new Product(6, "第六個商品", 6.99, 3.5, "這是第六商品，是我在學習繤課網Angular入冊實戰", ["電子商品", "圖書"]),
];
var Comment = /** @class */ (function () {
    function Comment(id, procuteId, timesstamp, user, rating, content) {
        this.id = id;
        this.procuteId = procuteId;
        this.timesstamp = timesstamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
var comments = [
    new Comment(1, 1, "2017-02-02 20:20:22", "張三", 3, "東西不錯"),
    new Comment(2, 1, "2017-03-02 21:21:22", "李四", 3, "東西不錯"),
    new Comment(3, 1, "2017-04-02 22:22:22", "王五", 3, "東西不錯"),
    new Comment(4, 2, "2017-05-02 23:23:22", "趙六", 3, "東西不錯")
];
app.get('/', function (req, res) {
    res.send("Hello express");
});
app.get('/api/products', function (req, res) {
    var result = products;
    //res.send("接收到商品查詢請求");
    var params = req.query;
    if (params.title) {
        result = result.filter(function (p) { return p.title.indexOf(params.title) !== -1; });
        console.log('title');
        console.log(result);
    }
    if (params.price && result.length > 0) {
        result = result.filter(function (p) { return p.price <= parseInt(params.price); });
        console.log('price');
        console.log(result);
    }
    if (params.category !== "-1" && result.length > 0) {
        result = result.filter(function (p) { return p.categories.indexOf(params.category) !== -1; });
        console.log('category');
        console.log(result);
    }
    res.json(result);
});
app.get('/api/products/:id', function (req, res) {
    res.json(products.find(function (product) { return product.Id == req.params.id; }));
});
app.get('/api/products/:id/comments', function (req, res) {
    res.json(comments.filter(function (comment) { return comment.procuteId == req.params.id; }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("服務器已啟動，地址是:http://localhost:8000");
});
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    websocket.send("這個消息是服務器主動推動送的");
    websocket.on("message", function (message) {
        console.log("接收到的消息:" + message);
    });
});
timers_1.setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send("這是定時推送");
        });
    }
}, 2000);
