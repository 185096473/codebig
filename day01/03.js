// import  和require的区别
var http=require("http")
// fs=file system   文件系统
var fs=require("fs")
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
	// readFile  读文件
	fs.readFile("./static/1.txt",(err,data)=>{
		res.end(data)
	})
}).listen(3000)