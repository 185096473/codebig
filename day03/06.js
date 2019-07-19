var express=require("express")
var app=express()
app.get("/",(req,res)=>{
	res.send("index")
})
// 接收get方式传输过来的数据通过  req.query
app.post("/new",(req,res)=>{
   console.log(req.query)
   res.send("接收成功")
})
/**
 * post  中间件   body-parser
 * 
 * express的核心
 * 中间件
 * 路由
 * 提供Api
 * 
 */
app.listen(3000)