const express=require("express");
const router=express.Router();
var pool=require("../pool.js")

router.get("/sigin",(req,res)=>{
    var $phone=req.query.phone;
    var $pwd=req.query.pwd;
    console.log($phone,$pwd);
    var sql="SELECT * FROM flower_user_register WHERE phone=? AND pwd=?";
    pool.query(sql,[$phone,$pwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            var user=result[0];
           req.session.uid=user.uid;
         console.log(req.session.uid);
            res.send(
                {ok:1,
                 msg:"登录成功"
                }
            );
        }else{
            res.send({
                ok:0,
                msg:"密码或用户名错误"
            })
        }
    })
})

router.get("/islogin",(req,res)=>{
    res.writeHead(200);
    if(req.session.uid==undefined){
        res.write(JSON.stringify({ok:0}))
        res.end()
    }else{
        
       var uid=req.session.uid;
       var sql="select * from flower_user_register where uid=?";
       pool.query(sql,[uid],(err,result)=>{
           if(err) throw err;
           var user=result[0];
           
           res.write(JSON.stringify({
            ok:1,uphone:user.phone
          }))
          res.end();
          
       })
       

    }
})

module.exports=router;