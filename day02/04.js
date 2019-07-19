var http=require("http")
var router=require("./static/router")
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
     if(req.url=="/"){
		 router.showIndex(req,res)
	 }else if(req.url=="/about"){
		 router.showAbout(req,res)
	 }else if(req.url=="/new"){
		 router.showNew(req,res)
	 }else{
		 router.show404(req,res)
	 }
}).listen(3000)
/**
 * 访问/       则显示首页
 * 访问/about  显示about
 * 访问/new    显示news
 * 
 * 
 */