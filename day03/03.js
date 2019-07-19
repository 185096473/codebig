// fs  文件系统    操作文件
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	// fs 读文件
	// fs.readFile("./static/3.txt",(err,data)=>{
	// 	 res.end(data.toString())
	// })
	// 写  a=>append   追加    r =>read  读   w=>write  写
	// fs.writeFile("./static/1.txt","我是写入的内容",{flag:"a"},(err)=>{
	// 	if(err){
	// 		throw error
	// 	}
	// 	res.end("success")
	// })
	// 先读取后写入
	// fs.readFile("./static/1.txt",(err,data)=>{
	// 	fs.writeFile("./static/2.txt",data,(err)=>{
    //            res.end("success")
	// 	})
	// })
	// copyFile  复制
	// fs.copyFile("./static/1.txt","./static/3.txt",(err)=>{
	// 	res.end("复制成功")
	// })
	// 改名   rename
	// fs.rename("./static/1.txt","./static/11.txt",(err)=>{
	// 	res.end("success")
	// })
	// 删除一个文件  unlink
	// fs.unlink("./static/2.txt",(err)=>{
	// 	res.end("success")
	// })
	// 目录  创建目录
	// fs.mkdir("./aa",(err)=>{
	// 	console.log("success")
	// 	res.end("success")
	// })
	// 删除目录
	// fs.rmdir("./aa",(err)=>{
	// 	res.end("success")
	// })
	// 读取目录
	// fs.readdir("./static",(err,data)=>{
	// 	console.log(data)
	// 	res.end()
	// })
	// 查看目录信息  stat
	// fs.stat("./static/aa",(err,stats)=>{
	// 	// console.log(stats.isFile())
	// 	console.log(stats.isDirectory())
	// 	res.end()
	// })
	// 流   stream   文件流  createReadStream 创建一个读取文件流
	// 块
	var stream=fs.createReadStream("./static/3.txt")
	var content=""
	// data 数据读取的过程   end  数据读取完成   事件
	stream.on("data",(chunk)=>{
		console.log(chunk)
	   content+=chunk
	//    console.log(content)
	})
	stream.on("end",(chunk)=>{
		console.log("数据接收完毕"+content)
	})
	res.end()
}).listen(3000)

/**
 * 
 * 从aa的文件夹中取出所有文件夹
 * for    let（除了该方式想其他方式）
 * 
 */