// path
var http=require("http")
var path=require("path")
http.createServer((req,res)=>{
	// path.resolve 会将最后一个参数转换为绝对路径   webpack
//    var oldpath=path.resolve("./static/aaa/bb")
    //  path.normalize()   路径的格式化  
	//  var oldpath=path.normalize("/aa/bb/cc//dd////eee")
	// path.extname() 获取文件的扩展名
	// var oldpath=path.extname("index.html")
	// path.format()   将对象转换为路径   
	var oldpath=path.format({
		 root:"",
		 dir:"c:\a\b",
		 base:"\d"
	})
   console.log(oldpath)
  //path.isAbsolute()  返回绝对路径
  //path.join()  将多段路经进行拼接
  //path.relative()  返回相对路径
  //path.dirname()   返回文件目录
 //   path.parse()    解析文件路径 
  //    __dirname
   res.end()
}).listen(3000)