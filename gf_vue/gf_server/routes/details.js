const express=require("express")
const router=express.Router();
const pool=require("../pool");

router.get("/details",(req,res)=>{
    var pid=req.query.pid;
    var obj={};
    var sql="SELECT * FROM flower_laptop WHERE pid=?";
    var sql1="SELECT pid,pics FROM flower_laptop_pic WHERE pid=?"
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        obj.mess=result;
        pool.query(sql1,[pid],(err,result)=>{
            if(err) throw err;
            obj.list=result;
            res.send(obj);
        })
    })
})

router.get("/view",(req,res)=>{
    var pno=req.query.pno;
    var pageSize=5;
    var sql="SELECT * FROM flower_laptop_view ";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result.slice((pno-1)*pageSize,(pno-1)*pageSize+5));
    })
})

module.exports=router;