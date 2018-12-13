<template>
 <div>
 <div class="header">
   <img src="http://127.0.0.1:3000/img/vue/logo1.png">
   <div class="header_right">
    <router-link href="#" to="/products">
      <span></span>
      圣诞节鲜花
    </router-link>
   </div>
   <div class="header_left">
      <a class="login" @click="getLogin">登录</a>
   </div>
 </div>
 </div>
</template>
<script>
 export default{
   data(){
       return {}
   }

 }
</script>
<style socped>

.header{
     width:375px;
     height:42px;
     padding:6px 0 6px 16px;
     background:#fff;
     margin-bottom:2px;
 }
 .header_right{
     margin-left:24px;
     height:100%;
     float:left;
     margin-top:2px;
 }
 .header_right>a{
    display:inline-block;
    float: left;
    width: 200px;
    max-width: 460px;
    height: 28px;
    line-height: 28px;
    background-color: #f5f5f5;
    border-radius: 5px;
    font-size: 10px;
    color:#494949;
 }
 .header_right>a>span{
    display: inline-block;
    width: 12px;
    height: 12px;
    background: url("http://127.0.0.1:3000/img/vue/icon_Search.png") no-repeat center center;
    background-size: 24px 24px;
    opacity: 0.5;
    vertical-align: middle;
    margin: 0 8px;
 }
 .header img{
     width:70px;
     padding:0 6px;
     box-sizing:border-box;
     float:left;
 }
 .header_left{
    float: left;
    font-size: 14px;
    width: 40px;
    text-align: center;
    height: 28px;
    line-height: 28px;
    overflow: hidden;
    margin-left:12px;
 }
 .header_left>a{
     color:#494949;
 }
</style>
<script>
 export default{
     data(){
         return{

         }
     },
     methods:{
         getLogin(){
             this.$router.push("/login?back="+decodeURI(location.href.split("http://127.0.0.1:3001/#")[1]));
         }
     }
 }
</script>