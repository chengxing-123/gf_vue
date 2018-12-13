const express=require("express");
const router=express.Router();
var pool=require("../pool.js");

router.get("/products",(req,res)=>{
    var fname=req.query.fname;
    var sql="SELECT pid, title,price,sell ,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid LIMIT 1) as md FROM flower_laptop WHERE fid=(SELECT fid FROM flower_laptop_family WHERE fname=?)"
    pool.query(sql,[fname],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

router.get("/pro",(req,res)=>{
    var sql="SELECT pid, title,price,sell,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid LIMIT 1)as md FROM flower_laptop WHERE fid=4 OR fid=1 "
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

router.get("/prolist",(req,res)=>{
    var sql="SELECT pid,title,price,sell,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid LIMIT 1)as md FROM flower_laptop WHERE fid=3 OR fid=2 "
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
router.get("/proall",(req,res)=>{
    var sql="SELECT pid,title ,price,sell,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid LIMIT 1)as md FROM  flower_laptop"
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
        
    })


})
router.get("/getList",(req,res)=>{
    var kwords=req.query.kwords;
    var arr=kwords.split(" ");
    for(var i=0;i<arr.length;i++){
        arr[i]=`title like "%${arr[i]}%"`
    }
    var where=" where "+arr.join(" and ");
    var sql="SELECT *,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid limit 1) as md FROM flower_laptop";
    pool.query(sql+where,(err,result)=>{
        if(err) throw err;
         res.send(result);
        })




})


module.exports=router;