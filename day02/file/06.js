// file=>06.js
/**
 * npm   node的包管理工具
 * npm init  项目初始化   =   npm init -y    =》package.json  
 * npm install   下载   = npm i
 * --save=-S 生产环境  dependencies    --save-dev =-D  开发环境  devdependencies
 * npm uninstall   卸载
 * 
 * 生产环境
 *     线上运行的环境
 * 开发环境
 *    开发过程中
 * 
 * 
 *    
 */
var sd=require("silly-datetime")
// 时间戳格式化
// var time=sd.format(new Date(),"YYYY-MM-DD-hh-mm-ss")
// 距离当前时间的前几秒
var time=sd.fromNow(new Date(),3000)
console.log(time)