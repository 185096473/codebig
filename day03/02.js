var http=require("http")
var art=require("art-template")
var fs=require("fs")
http.createServer((req,res)=>{
   var newData={
	   list:["1","2","3"],
	   arr:["2","3","4"]
   }
   fs.readFile("./view/form.art",(err,data)=>{
	   var str=data.toString()
	   var result=art.render(str,newData)
	   res.end(result)
   })
}).listen(3000)