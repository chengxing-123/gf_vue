const express=require("express");
const router=express.Router();
var pool=require("../pool.js")

router.get("/cart",(req,res)=>{
	var pid=req.query.pid;
	var count=req.query.count;
	var uid=req.session.uid;
    var sql="select * from flower_shoppingcart where uid=? and pid=? ";
    data=[uid,pid];
    data1=[uid,pid,count];
    var sql1="insert into flower_shoppingcart values(null,?,?,null,?)"  
    var sql2="update flower_shoppingcart set count=count+? where uid=? and pid=?"
    var data2=[count,uid,pid];
	
	
	
	pool.query(sql,data,(err,result)=>{
		if(err) throw err;
		if(result.length==0){
			
			pool.query(sql1,data1,(err,result)=>{
				if(err) throw err;
				res.end();

			})

		}else{
			
			pool.query(sql2,data2,(err,result)=>{
				if(err) throw err;
				res.end();
			})

		}
	})

})

router.get("/items",(req,res)=>{
	var uid=1;
	console.log(uid);
	var sql="SELECT *,(SELECT pics FROM  flower_laptop_pic WHERE flower_laptop_pic.pid=flower_shoppingcart.pid LIMIT 1) as md FROM flower_shoppingcart INNER JOIN flower_laptop ON flower_shoppingcart.pid=flower_laptop.pid WHERE uid=?"



	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})

module.exports=router;