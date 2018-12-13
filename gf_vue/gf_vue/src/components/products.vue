<template>
 <div>

 <div class="heade">
   <img src="http://127.0.0.1:3000/img/vue/logo1.png">
   <div class="text_box">
    <input class="input_text" v-model="list" @click.13=getList() >
    <span @click="getList" ></span>
    </div>
    <p class="login_text" @click="Login">登录</p>
    
</div>
<div class="list">
 <ul class="display">
  <li @click=getAll><a @click=getbox1 :class="box==1?'style':'' ">全部</a></li>
  <li @click=getMess><a @click=getbox2 :class="box==2?'style':''">爱情鲜花</a></li>
  <li @click=getList><a @click=getbox3 :class="box==3?'style':''">问候长辈</a></li>
 </ul>
</div>
<ul class="order">

  <li><a>综合</a></li>
  <li><a>价格</a></li>
  <li><a>销量</a></li>

</ul>
<div class="product_list pro_dis">
        <ul>
        <li v-for="item in product">
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

 </div>

</template>
<script>

 export default{
   data(){
       return {
            product:[],
            box:1,
            list:""
            
       }
   },
   watch:{
       list(){
           console.log(this.list)
       }
   },
   
  methods:{
      getMess(){

        this.$http.get("http://127.0.0.1:3000/products/pro").then(result=>{
            this.product=result.body.reverse();
            console.log(this.product);
        
        })
      },
      getList(){
         this.$http.get("http://127.0.0.1:3000/products/prolist").then(result=>{
            this.product=result.body;
            console.log(this.product);
            console.log(555555);
        }) 
      },
      getAll(){
        this.$http.get("http://127.0.0.1:3000/products/proall").then(result=>{
            this.product=result.body;
            console.log(this.product);
            console.log(555555);
        })
      },
      getbox1(){
          this.box=1;
      },
      getbox2(){
          this.box=2;
      },
      getbox3(){
          this.box=3;
      },
      getList(){
        this.$http.get("http://127.0.0.1:3000/products/getList?kwords="+decodeURI(this.list)).then(result=>{
            this.product=result.body;
        })
      },
      Login(){
          this.$router.push("/login?back="+decodeURI(location.href.split("http://127.0.0.1:3001/#")[1]));
      }
  },
  created(){
      var fname=decodeURI(this.$route.query.fname)
      this.$http.get("http://127.0.0.1:3000/products/products?fname="+fname).then(result=>{
         this.product=result.body;
      })
       this.getAll()
      
  }

 }
</script>
<style socped>

.list{
    width:100%;
    height:40px;
    background:#fff;

}
.display{
    width:100%;
    height:100%;
    list-style:none;
    clear:both;
    display:flex;
}

.display>li{
   
    width:90px;
   
    line-height:40px;
    padding:3px 0 0;
    font-size:14px;
    box-sizing:border-box;
    text-align:center;

}
.display>li:nth-child(2),.list>ul>li:nth-child(3){
    margin-left:5px;
}
.display>li>a{
    display:inline-block;
    width:90px;
    height:39px;
    color:#48414a;
}
.style{
    color:#ff0000 !important;
    border-bottom:4px solid #ff0000;
}

.order{
     width:100%;
    height:40px;
    background:#fff ;
    margin-top:3px;
}
.order{
    list-style:none;
    display:flex;
}
.order>li{
   
    font-size:13px;
    box-sizing:border-box;
    text-align:left;
    line-height:52px;
   

}
.order>li:nth-child(1){
    margin-left:27px;
}
.order>li:nth-child(2),.order>li:nth-child(3){
    margin-left:29px;
}
.order>li>a{
   color:#646464;
}
.pro_dis{
    margin-bottom:40px;
}
.input_text{
    width:203px ;
    height:30px ;
    display:inline-block ;
    border-radius:16px;
    outline:none;
    margin-left:20px;
    border:2px solid #e7e7e7;
    margin-top:7px;
    text-indent:10px;
}
.heade{
     width:375px;
     height:42px;
     background:#fff;
     margin-bottom:2px;
     display:flex;

    
 }
.heade img{
     width:70px;
     padding:0 6px;
     box-sizing:border-box;
     margin-top:5px;
     
 }
 .text_box span{
    position: absolute;
    top: 4px;
    right: 0px;
    display: inline-block;
    width: 37px;
    height: 37px;
    background: url(http://127.0.0.1:3000/img/vue/icon_Search.png) no-repeat center center;
    background-size: 37px 37px;
    opacity: 0.5;
    vertical-align: middle;
    margin: 0 8px;
 }
 .text_box{
     position:relative;
    

 }
 .login_text{
     margin-left:40px;
     margin-top:10px;
     font-size:15px;
     color:#494949;
 }
</style>