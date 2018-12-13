
const express=require("express");
const bodyParser=require("body-parser");
/*引入路由模块*/ 
const session=require('express-session')
const index=require('./routes/index.js')
 const user=require('./routes/user.js')
 const details=require('./routes/details')
 const products=require('./routes/products')
 const shop=require('./routes/shop')
const cors=require("cors");

/*构建web服务器*/
var app=express();
//配置允许哪个程序跨域访问脚手架
app.use(cors({
    origin:["http://127.0.0.1:3001","http://localhost:3001"],
    credentials:true
}))
app.listen(3000,()=>{
	console.log("服务器创建成功");
});
/*托管静态资源*/
app.use(express.static("./public"));


/*使用body-parser中间件*/
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(session({
	secret: '128位随机字符串',
	resave: false,
	saveUninitialized: true,
  }))
//使用路由器
//把用户路由器挂载到/user下
app.use('/index',index);
 app.use('/user',user);
 app.use('/details',details);
 app.use('/products',products);
 app.use('/shop',shop);



