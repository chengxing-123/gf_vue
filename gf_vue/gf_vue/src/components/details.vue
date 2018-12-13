<template>
 <div class="app-details">
  <mt-swipe :auto="2000"  >
    <mt-swipe-item v-for="item in list.slice(0,2)" >
        <img :src="item.pics">
    </mt-swipe-item>
 </mt-swipe>
<div class="all_info">
    <div class="info_box">
        <p>{{mess[0].title}}</p>
        <div class="info_mess">
        <span>￥{{mess[0].price.toFixed(2)}}</span>
        <p>原价:<span>{{mess[0].oldPrice.toFixed(2)}}</span></p>
        <div class="info_dcount">{{mess[0].dcount.toFixed(2)}}折</div>
        <div  class="info_gif" @click="shopMess()"><img src="http://127.0.0.1:3000/img/vue/2.jpg"></div>
        </div>
    </div>
   
 </div> 
  <ul class="all_count">
      <li>销量:<span>{{mess[0].sell}}</span></li>
      <li>访问:<span>{{mess[0].traffic}}</span></li>
      <li><a href="#userView">好评:<span>{{mess[0].eval}}</span></a></li>

    </ul>
    <div class="pro_all">
        <div class="pro_pic"><img src="http://127.0.0.1:3000/img/vue/pic.png"></div>
        <p class="pro_text">细节展示</p>
        <ul class="pro_detail">
        <li v-for="item in list.slice(2,4)">
        <img :src="item.pics"></img>
        </li>
        </ul>
    </div>
    <div class="eval">
     <p id="userView">用户评价</p>
     <ul class="eval_list">
       <li v-for="item in obj">
        <div class="eval_item1">
            <div class="eval_item1_left">
            <img src="http://127.0.0.1:3000/img/vue/132 (1).jpg">
            <span>{{item.pname}}</span>
            </div>
            <div class="eval_item1_right"><img src="http://127.0.0.1:3000/img/vue/star5.png"></div>
        </div>
        <p class="eval_item2">{{item.pview}}</p>
        <div class="eval_item3">
            <div class="eval_item3_left">
            <img src="http://127.0.0.1:3000/img/vue/deliver_area_icon.png">
            <span>{{item.padd}}</span>
            </div>
            <div class="eval_item3_right">
            <span>{{item.timer}}</span>
            </div>
        </div>
      
        
      </li>
     </ul>
    </div>
    <div class="pro_more" @click=getView v-text="pno<3?'查看更多':'暂无更多数据'"></div>
   
 </div>
   
</template>
<script>

 export default{
   data(){
       return{
           mess:[],
           list:[],
           obj:[],
           pno:1
           
       }
   },
   methods:{
       getView(){
         this.pno++;
         if(this.pno<4){
         this.$http.get("http://127.0.0.1:3000/details/view?pno="+this.pno).then(result=>{
           this.obj=this.obj.concat(result.body);
           
       }) 
       }
       
       },
       shopMess(){
           this.$http.get("")

       }
        
   },
   
   created(){
       var pid=this.$route.params.pid;
       this.$http.get("http://127.0.0.1:3000/details/details?pid="+pid).then(result=>{
           this.mess=result.body.mess;
           this.list=result.body.list;
           console.log(this.mess);
           
           
       })
       this.$http.get("http://127.0.0.1:3000/details/view?pno="+this.pno).then(result=>{
           this.obj=result.body;
          // console.log(this.obj);
       })
       
   }
 }

</script>
<style socped>
*{
    margin:0;
    padding:0;
}
 .app-details .mint-swipe{
     height:375px;
     
 }
 .app-details .mint-swipe .mint-swipe-item img{
     width:375px;
     
 }
 .all_info{
     background:#fff;
 }
 .info_box{
     overflow:hidden;
 }
.info_box>p{
    font-size:17px;
    margin-top:9px;
    color:#232323;
    margin-left:12px;
    
    
}
.info_mess{
    display:flex;
    margin-left:8px;
}
.info_mess>span{
    font-size:18px;
    color:#ff0000;
    font-weight:700;
   margin-top:7px;
}
.info_mess>p{
    font-size:12px;
    color:#848284;
    margin-left:12px;
    margin-top:7px;

}
.info_mess>p>span{
    text-decoration:line-through;
}
.info_dcount{
    width:57px;
    height:24px;
    background:#ff0000;
    font-size:15px;
    color:#fff;
    text-align:center;
    line-height:24px;
    border-radius:7px;
    margin-left:13px;
    margin-top:3px;

    
}
.all_count{
    font-size:14px;
    color:#4a414a;
    display:flex;
    list-style:none;
    box-sizing:border-box;
    background:#fff;
    margin-top:3px;
}
.all_count>li{
    margin-left:7px;
}
.all_count>li:nth-child(2),.all_count>li:nth-child(3){
 margin-left:42px;
}
.all_count>li>span{
    margin-left:8px;
    font-size:15px;
    color:#ff0000;
}
.all_count>li>a{
    
    
    color:#4a414a;
}
.all_count>li>a>span{
    margin-left:8px;
    font-size:15px;
    color:#ff0000;
}
.pro_detail{
    background:#fff;

}
.pro_detail>li{
    width:100%;
    height:375px;
    text-align:center;
    margin-top:30px;
}
.pro_detail img{
    
   width:375px;
  
}
.pro_pic>img{
    width:375px
}
.pro_text{
  width:100%;
  font-size:21px;
  text-align:center;
  margin-top:10px;
}
.eval{
    width:100%;
    height:auto;
    background:#fff;
    overflow:hidden;

}
.eval>p{
  font-size:17px;
  margin-top:10px;
  color:#000;
  border-bottom:1px solid #ddd;
  padding-bottom:10px;
  box-sizing:border-box;
  

}
.eval_list{

    list-style:none;
   
}
.eval_list>li{
    margin:10px 10px 20px;
}
.eval_item1{
    display:flex;
    justify-content:space-between;
}
.eval_item1_left>span{
    font-size:12px;
    margin-left:8px;
    
}
.eval_item1_left>img{
    width:30px;

}
.eval_item1_right {
    margin-right:18px;
   


}
.eval_item1_right>img{
    width:73px;
}
.eval_item3_left>img{
    width:15px;
    margin-top:4px;
    display:inline-block;
    vertical-align:top;
}
.eval_item3_left>span{
    font-size:9px;
    color:#777;
}
.eval_item3{
    display:flex;
    justify-content:space-between;
    margin-top:-8px;
}
.eval_item3_right>span{
  font-size:9px;
    color:#777;
    margin-right:30px;
    
}
.pro_more{
    margin-top:4px;
    background:#fff;
    width:100%;
    height:30px;
    font-size:16px;
    text-align:center;
    line-height:30px;
    margin-bottom:53px;
}
.info_gif{
    margin-left:89px;
    transform:rotateY(180deg);
    
}
.info_gif>img{
    width:29px;
    display:inline-block;

}

</style>