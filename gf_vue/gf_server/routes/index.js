const express=require("express")
const router=express.Router();
const pool=require("../pool");

router.get("/banner",(req,res)=>{
    var list=[
        {id:1,url:"http://127.0.0.1:3000/img/banner/17_sheshou_m.jpg"},
        {id:2,url:"http://127.0.0.1:3000/img/banner/18_birthday_m.jpg"},
        {id:3,url: "http://127.0.0.1:3000/img/banner/18_xmas_m.png"}
    ]
    res.send(list);

    
})

router.get("/getProducts",(req,res)=>{
    var obj={};
    var sql="SELECT pid,title, price,sell,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid LIMIT 1)as md FROM flower_laptop "
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var n=Math.floor((Math.random()*60));
        obj.sflower=result.slice(n,n+4);

        obj.rose=result.slice(0,6);
        obj.lily=result.slice(10,16);
        obj.box=result.slice(33,39);
        obj.life=result.slice(44,50),
        obj.gife=result.slice(56,61);
        res.send(obj);
        

    })

    
})

module.exports=router;