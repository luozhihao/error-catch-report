const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');
const resolve = file => path.resolve(__dirname, file);

// 读取首页文件
let indexHTML = fs.readFileSync(resolve('../client/index.html'), 'utf-8');

// 挂载中间件
router.use(function(req, res, next) {
	console.log('加载' + req.path + '成功');
	next();
});

// 首页路由
router.get('/', function(req, res) {
	res.send(indexHTML);
});

module.exports = router;
