var http=require("http")
http.createServer((req,res)=>{
	// res.end((1+2+3+4).toString())
	// 如何解决中文乱码
	console.log(res)
	// text/plain  文本
	// writeHead  写入响应头   文本类型  text/html  格式  utf-8 
	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
	res.end("我喜欢学习node")
}).listen(3000)