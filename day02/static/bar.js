// 变量抛出
var obj={
	name:"222",
	age:111
}
// exports.obj=obj
// exports.a=1
// module.exports={
// 	b:2
// }
// 函数(对象)抛出
function show(){
	console.log(1)
}
// exports.show=show
// module.exports={
// 	show:show
// }
//module.exports和exports的区别?
// 1.exports是module.exports的引用
// 2.module.exports默认是一个空对象 ,当然module.exports必须是一个空对象，
// 反之会覆盖exports里面的值

// console.log(module)
// export default {obj}
