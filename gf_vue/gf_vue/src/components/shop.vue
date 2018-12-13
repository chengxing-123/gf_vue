<template>
    <div>
       <div class="carList">
            <ul>
                <span class="clearbox" v-show="hid">你的购物车空啦·······</span>
                <li v-for="item in list">
                    <div class="shopImg"><img :src="item.md" /></div>
                    <div class="shhopData">
                        <div class="shopName">
                            <span>{{item.title}}</span>
                            <div class="butt">
                                <i >-</i>
                                <span>5</span>
                                <i >+</i>
                            </div>
                        </div>
                        <div class="delete" >删除</div>
                        <span class="price">{{item.price}} / 件</span>
                        <span class="count">￥5</span>
                    </div>
                </li>
            </ul>
       </div>
       <div class="pay">
            <span>实付:448.00</span>
            <div class="paybtn">下单</div>
       </div>
       <!--删除数据部分-->
     
    </div>   
</template>
<script>
 export default{
     data(){
         return {
             list:[]
         }
     },
     created(){
         this.$http.get("http://127.0.0.1:3000/shop/items").then((result)=>{
            this.list=result.body;
         })
     }
 }
</script>
<style>
  .clearbox{
      text-align:center;
      line-height:300px;
  }
  .carList{
      background:#fff;
      border-top:1px solid #e7e7e7;
      padding-left:20px;
      height:478px;
  }
  .carList>ul>li{
      width:100%;
      height:140px;
      border-bottom:1px solid #e7e7e7;
      padding:15px 0;
      display:flex;
      justify-content:space-between;
  }
  .shopImg{
      width:80px;
      height:80px;
      border:1px solid #e7e7e7;
  }
  .shopImg>img{
      width:100%;
      height:100%;
  }
  .shhopData{
     width:260px;
     height:100px;
  }
  .shopName{
      height:40px;
  }
   .shopName>span{
     float:left;
     font-size:14px;
     color:#3c2312;
   }
   .butt{
       float:right;
       width:80px;
       display:flex;
       justify-content:space-between;
       line-height:24px;
       text-align:center;
       margin-right:20px;
      
   }
   .butt>i{
       display:block;
       width:24px;
       height:24px;
       border:1px solid #e7e7e7;
       font-weight:bold;
   }
  .delete{
      margin-top:28px;
      height:20px;
      border-bottom:1px solid #e7e7e7;
      text-align:right;
      font-size:13px;
      padding-right:20px;
      color:#aaa;
  }
  .count{
      color:#AA8764;
      text-align:right;
      margin-right:20px;
      margin-top:10px;
      float:right;
  }
  .price{
      color:#3c2314;
      margin-top:10px;
      float:left;
      font-size:13px;
  }
  .pay{
      width:100%;
      height:50px;
      border-top:1px solid #e7e7e7;
      display:flex;
      justify-content:space-between;
      text-align:center;
      line-height:50px;
      position:fixed;
      left:0;
      bottom:53px;
      background:#fff;
  }
  .paybtn{
      width:100px;
      background:#3c2314;
      color:#FBF5DD;
  }
</style>