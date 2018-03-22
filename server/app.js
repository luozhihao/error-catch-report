const express = require('express');
const fs = require('fs');

const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const resolve = file => path.resolve(__dirname, file);

// 挂载静态资源
const serve = (path, cache) => express.static(resolve(path))

app.use('/client', serve('../client'));

// 接口参数处理
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 挂载中间层
let middleware = require('./middleware');
app.use('/middleware', middleware);

// 挂载路由
let routes = require('./route');
app.use('/', routes);

const port = process.env.PORT || 3031; // 端口设置

// 启动服务
app.listen(port, () => {
  	console.log(`server started at localhost:${port}`);
});