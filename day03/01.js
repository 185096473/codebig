// 引入服务器模块
var http=require("http")
// ejs  模板引擎
var ejs=require("ejs")
// fs =file system  文件系统
var fs=require("fs")
// 创建服务器
http.createServer((req,res)=>{
	// req=request  请求    res=response  响应
	var list=["1","2","3"]
    fs.readFile("./view/index.ejs",(err,data)=>{
		var str=data.toString()
		var result=ejs.render(str,{lists:list})
		res.end(result)
	}) 
}).listen(3000)
// listen  监听端口
