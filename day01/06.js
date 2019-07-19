/**
 * 登录
 * 1.前端
 *    html   用户名   密码  
 *    form   get    
 * 2.后端
 * 服务器  http
 * 地址模块  url   默认字符串   对象  url.parse(url,true).query
 * 
 * 假设数据库   用户名   密码 
 * 
 */
var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	// 数据库存放的内容
   var admin={
	   username:"admin",
	   password:123456
   }
   var query=url.parse(req.url,true).query
   res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
   if(query.username==admin.username&&query.password==admin.password){
	   res.end("登录成功")
   }else{
	   res.end("登录失败")
   }
}).listen(3000)
