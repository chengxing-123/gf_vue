<template>
 <div>
 <div class="login_box">
 <p class="login_title">登录</p>
 <div class="login_center">
   <input placeholder="手机号码" v-model="phone">
   <input placeholder="登录密码" v-model="pwd">
 </div>
 <p class="mess_login">{{mess}}</p>
 <div class="login_but" @click= "getLogin()">登录</div>
 <div class="bot_img"></div>
 </div>
 </div>
</template>
<script>
 export default{
     data(){
         return{
             phone:"",
             pwd:"",
             mess:""

         }
     },
     watch:{
         phone(){
             console.log(this.phone);
         },
         pwd(){
             console.log(this.pwd);
         }
     },
     methods:{
         getLogin(){
            this.$http.get("http://127.0.0.1:3000/user/sigin?phone="+this.phone+"&pwd="+this.pwd).then(result=>{
                console.log(result);
                if(result.body.ok==1){
                    this.phone="";
                    this.pwd="";
                    this.mess=result.body.msg+",即将返回来时页面......";
                    var back=this.$route.query.back;
                    console.log(back);
                    setTimeout(()=>{
                       this.$router.push(back);
                    },3000)
                   
                }else{
                    this.mess=result.body.msg; 
                }
                console.log(this.mess);
             
            })
         }

     }
     
 }
</script>
<style socped>
.login_title{
    font-size:19px;
    font-weight:normal;
    text-align:center;
    margin-top:42px;
}
.login_center input{
    width:318px;
    height:50px;
    margin-top:25px;
    font-size:13px;
    border:none;
    border-bottom:2px solid #e7e7e7;
    text-indent:6px;
    margin-left:20px;
    


}
 .login_but{
    width:319px;
    height:50px;
    margin-left:19px;;
    margin-top:40px;
    text-align:center;
    font-size:20px;
    background:red;
    color:#fff;
    line-height:50px;
    border-radius:36px;
    opacity:0.5;
}
.login_box{
    height:auto;
    background:#fff;
    overflow:hidden;
    
}
.bot_img{
   
    width:100%;
    height:200px;
    background-size:cover;
    margin-top:101px;
}

.mess_login{
    color:red;
    font-size:15px;
    line-height:20px;
    margin-left:20px;
    margin-top:30px;
}
</style>