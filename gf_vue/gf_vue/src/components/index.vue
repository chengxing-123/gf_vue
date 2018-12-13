<template>
<div >
  <Header></Header>
   <swiper :list="list" ></swiper>
   <nav class="nav_list">
    <router-link to="/products?fname=康乃馨" class="list_item">
    <img src="http://127.0.0.1:3000/img/vue/xianhua_icon.png"></img>
     <p>康乃馨</p>
    </router-link>
     <router-link to="/products?fname=永生花" class="list_item">
     <img src="http://127.0.0.1:3000/img/vue/yongshenghua_icon.png"></img>
     <p>永生花</p>
    </router-link>
     <router-link to="/products?fname=礼品" class="list_item">
      <img src="http://127.0.0.1:3000/img/vue/gift_icon.png"></img>
     <p>礼品</p>
    </router-link>
     <router-link to="/products?fname=玫瑰" class="list_item">
     <img src="http://127.0.0.1:3000/img/vue/choclate_icon.png"></img>
     <p>玫瑰花</p>
    </router-link>
    <router-link to="/products?fname=花篮" class="list_item">
     <img src="http://127.0.0.1:3000/img/vue/cake_icon.png"></img>
     <p>花篮</p>
    </router-link>
   </nav>
  <div class="product">
    <div class="product_time">
        <p>限时秒杀</p>
        

        <div class="time_list">
        <p>距离结束</p>
        <div class="timer">  
            <div class="time_item"><span>{{h}}</span></div><p>:</p>
            <div class="time_item"><span>{{m}}</span></div><p>:</p>
            <div class="time_item"><span>{{s}}</span></div>
        </div>
        </div>
    
    </div>
    <div class="product_list">
        <ul>
        <li v-for="item in obj.sflower">
            <router-link :to="'/details/'+item.pid">
                <div class="pic"> 
                <img :src="item.md">
                </div>
                <p>{{item.title}}</p>
                <div class="message">
                    <span>￥{{item.price.toFixed(2)}}</span>
                    <span>已售 {{item.sell}} 件</span>

                </div>
            </router-link>
        </li>
        
        
        </ul>
    </div>
  </div>

  <div class="product">
    <div class="product_time">
        <h1>韩式鲜花</h1>
        <h2>意 ~ 爱的简约而不简单</h2>
    
    </div>
    <div class="product_list">
        <ul>
        <li v-for="item in obj.rose">
       <router-link :to="'/details/'+item.pid">
            <div class="pic">
            <img :src="item.md">
            </div>
            <p>{{item.title}}</p>
            <div class="message">
                <span>￥{{item.price}}</span>
                <span>已售{{item.sell}} 件</span>

            </div>
        </router-link>
        </li>

        
        </ul>
    </div>
    <div class="product_more">
      <a>查看更多 &gt;</a>
    </div>
  </div>
  
   <div class="product">
    <div class="product_time">
        <h1>创意花盒</h1>
        <h2>质 ~ 高档花材/奢侈一族</h2>
    
    </div>
    <div class="product_list">
        <ul>
        <li v-for="item in obj.box">
         <router-link :to="'/details/'+item.pid">
            <div class="pic">
            <img :src="item.md">
            </div>
            <p>{{item.title}}</p>
            <div class="message">
                <span>￥{{item.price}}</span>
                <span>已售 {{item.sell}} 件</span>

            </div>
        </router-link>
        </li>
        
        
        </ul>
    </div>
    <div class="product_more">
      <a>查看更多 &gt;</a>
    </div>
  </div>
   
  <div class="product">
    <div class="product_time">
        <h1 class="parent">长辈鲜花</h1>
        <h2>送 ~ 父母/恩师/长辈</h2>
    
    </div>
    <div class="product_list">
        <ul>
        <li v-for="item in obj.lily">
         <router-link :to="'/details/'+item.pid">
            <div class="pic">
            <img :src="item.md">
            </div>
            <p>{{item.title}}</p>
            <div class="message">
                <span>￥{{item.price}}</span>
                <span>已售 {{item.sell}} 件</span>

            </div>
        </router-link>
        </li>
        
        </ul>
    </div>
    <div class="product_more">
      <a>查看更多 &gt;</a>
    </div>
  </div>
  <div class="product">
    <div class="product_time">
        <h1 class="flower">永生花</h1>
        <h2>许 ~ 他一生承诺</h2>
    
    </div>
    <div class="product_list">
        <ul>
        <li v-for="item in obj.life">
         <router-link :to="'/details/'+item.pid">
            <div class="pic">
            <img :src="item.md">
            </div>
            <p>{{item.title}}</p>
            <div class="message">
                <span>￥{{item.price}}</span>
                <span>已售 {{item.sell}} 件</span>

            </div>
        </router-link>
        </li>
       
        
        </ul>
    </div>
    <div class="product_more">
      <a>查看更多 &gt;</a>
    </div>
  </div>




</div>
</template>
<script>
import Swiper from './sub/swiper.vue'
import Header from './sub/header.vue'
 export default{
     data(){
         return {
             list:[],
             obj:[],
             h:0,
             m:0,
             s:0
           
         
           
    
         }
     },
    components:{
     "Swiper":Swiper,
     "Header":Header
  },
  methods:{
       timer(){
            var now=new Date();
            var end=new Date("2022/12/26 10:00:00");
            var s=parseInt((end-now)/1000);
            var h=parseInt(s%(3600*24)/3600);
            if(h<10) h="0"+h;
            var m=parseInt(s%3600/60);
            if(m<10) m="0"+m;
            s%=60;
            if(s<10) s="0"+s;
            this.h=h;
            this.m=m;
            this.s=s;
            
       }
       
  },
   created(){
       this.timer();
       setInterval(this.timer,1000);
       this.$http.get("http://127.0.0.1:3000/index/banner").then(result=>{
           this.list=result.body;
           console.log(this.list);
       

       })
        this.$http.get("http://127.0.0.1:3000/index/getProducts").then(result=>{
            this.obj=result.body;
            console.log(this.obj)
        })

          
      
   }
 }
 
</script>

<style socped>
 *{
  margin: 0;
  padding: 0;
}
 
 
 .mint-swipe>.mint-swipe-indicators{
     bottom:21px;
 }
 .nav_list{
    margin-top: 1px;
    padding: 8px 0;
    font-size: 0;
    background-color: #fff;
    
 }
 .list_item{
    text-decoration: none;
    color: #494949;
    display:inline-block;
    padding:0 12px;
    box-sizing:border-box;
 }
 .list_item>img{
     width:50px;
     height:50px;
     display:inline-block;
     
 }
 .list_item>p{
     font-size:12px;
     margin-left:11px
     
 }
 .app-subswipe{
     height:180px;
 }

 .product_time{
    width: 100%;
    height: 47px;
    background: #fff;
    margin-top:5px;
 }
 .product_time>p{
  font-size: 16px;
  color: #555;
  line-height: 30px;
  font-weight: bold;
  margin-left: 17px;
  margin-top: 14px;
  float:left;


 }
 
 
 .time_item{
  width: 30px;
  height: 30px;
  background: red;
  border-radius: 8px;
  float: left;
  margin-top: 5px;

 }
 .time_list{
  height: 48px;
  float:left;
  margin-top:6px;
 }
 .time_list>p{
  font-size: 15px;
  float: left;
  margin-left: 27px;
  margin-top:12px;
  
 }
 .timer{
  float: left;
  margin-left: 18px;
 }
 .timer>p{
  float: left;
  font-size:24px;
  font-weight: bold;
 margin: 9px 3px;
 }
 .time_item>span{
  
  font-size: 19px;
  line-height: 32px;
  margin-left: 4px;
  color: #fff;
 }
 .product_list{
     width:100%;
     height:auto;
     margin-top:8px;

 }
 .product_list>ul{
     list-style:none;
    
 }
 .product_list>ul>li{
     width:180px;
     height:242px;
     background:#fff;
     float:left;
     margin-bottom: 10px;
 }
 .product_list>ul>li:nth-child(2n+1){
     margin-right:10px;
 }
  .product_list>ul:after{
      content:"";
      clear:both;
      display:block;
  }
 
 .product_list>ul>li>a>.pic{
     height:185px;
     width:100%;
     background:#fff;

 }
 .product_list>ul>li>a>.pic>img{
     height:185px;
 }
 .product_list>ul>li>a>p{
     margin-left:9px;
     width:161px;
     height:33px;
     white-space:nowrap;
     overflow:hidden;
     text-overflow:ellipsis;
     line-height:32px;
     font-size:13px;
     color:#383838;
     text-align:center;
     margin-bottom:0px;

 }
 .message>span{
     line-height:14px;
     font-size:15px;
     color:#ff0b0b;
     margin:0 10px;
    
 }
 
 .message>span:last-child{
     color:#696969;

 }
 .product_more{
     width:100%;
     height:40px;
     background:#fff;
     margin-top:-3px;
 }
 .product_more>a{
     width:100%;
     display:inline-block;
     text-align:center;
     line-height:40px;
     height:40px;
     color:#6e6e6e;
     

 }
 .product_time>h1{
     font-size:24px;
     line-height:40px;
     color:#ff0000;
     margin-left:10px;
     float:left;
 }
 .product_time>h2{
     float:left;
      font-size:16px;
     line-height:40px;
     color:#696969;
     margin-left:19px;
     font-weight:normal;
     margin-top:8px;

 }
 .parent{
     color:green !important;
 }
 .flower{
     color:#ff2566;
 }

</style>