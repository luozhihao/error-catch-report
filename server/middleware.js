const express = require('express');
const fs = require('fs');
const router = express.Router();
const fetch = require('node-fetch');
const sourceMap = require('source-map');

const path = require('path');
const resolve = file => path.resolve(__dirname, file);

// 定义post接口
router.post('/errorMsg/', function(req, res) {

	// 获取前端传过来的报错对象
	let error = req.body;

	let url = error.scriptURI; // 压缩文件路径

	if (url) {
		let fileUrl = url.slice(url.indexOf('client/')) + '.map'; // map文件路径

		// 解析sourceMap
		let smc = new sourceMap.SourceMapConsumer(fs.readFileSync(resolve('../' + fileUrl), 'utf8')); // 返回一个promise对象

		smc.then(function(result) {

			// 解析原始报错数据
		    let ret = result.originalPositionFor({
				line: error.lineNo, // 压缩后的行号
				column: error.columnNo // 压缩后的列号
			});

			console.log(ret);

			// 将异常上报至后台
			/*fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					errorMessage: error.errorMessage, // 报错信息
					source: ret.source, // 报错文件路径
					line: ret.line, // 报错文件行号
					column: ret.column, // 报错文件列号
					stack: error.stack // 报错堆栈
				})
			}).then(function(response) {
				return response.json();
			}).then(function(json) {
				res.json(json);
			});*/
		})
	}
});

module.exports = router;