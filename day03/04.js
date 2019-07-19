var express=require("express")
var app=express()
// 执行了一个get请求
app.get("/",(req,res)=>{
    res.send({"success":"ok"})
})
// 在express中路径不区分大小写  同时支持链式操作
app.get("/About",(req,res)=>{
	res.send("about")
}).get("/new",(req,res)=>{
	res.send("news")
})
// app.post("/news",(req,res)=>{
// 	res.send("news")
// })
app.listen(3000)
// send和end的区别？