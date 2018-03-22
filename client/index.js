window.onerror = function(errorMessage, scriptURI, lineNo, columnNo, error) {
	console.log('errorMessage: ' + errorMessage); // 异常信息
    console.log('scriptURI: ' + scriptURI); // 异常文件路径
    console.log('lineNo: ' + lineNo); // 异常行号
    console.log('columnNo: ' + columnNo); // 异常列号
    console.log('error: ' + error); // 异常堆栈信息

	// 构建错误对象
	/*var errorObj = {
		errorMessage: errorMessage || null,
		scriptURI: scriptURI || null,
		lineNo: lineNo || null,
		columnNo: columnNo || null,
		stack: error && error.stack ? error.stack : null
	};

	if (XMLHttpRequest) {
		var xhr = new XMLHttpRequest();

		xhr.open('post', '/middleware/errorMsg', true); // 上报给node中间层处理
		xhr.setRequestHeader('Content-Type', 'application/json'); // 设置请求头
		xhr.send(JSON.stringify(errorObj)); // 发送参数
	}*/
}

console.log(a);