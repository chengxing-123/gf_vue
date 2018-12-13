<template>
 <div class="app-comment">
  <h1>评论子组件</h1>
  <!--发表评论的区域-->
 <textarea  placeholder="请吐槽最多120个字" maxlength="120" v-model="msg">
  
 </textarea>
 <mt-button size="large" @click="postComment">发表评论</mt-button>
 <div class="cmt-list">
    <div class="cmt-item" v-for="(item,i) in list" :key="item.id">
        <div class="cmt-info">第{{i+1}}楼 用户：{{item.user_name}} 发表时间 {{item.ctime | dataFilter}}</div>
        <div class="cmt-body">
        {{item.content}}
        </div>
    </div>
 </div>
<mt-button size="large" @click=" getMore">加载更多</mt-button>
 </div>
</template>
<script>
//单独引入Toast组件
import {Toast} from "mint-ui"
 export default {
     data(){
         return {
             msg:"",
             pageIndex:0,//当前页码
             pageSize:5 ,//页大小
             list:[] ,//分页数据
             pageCount:3,
             hasMore:true
         }
         
     },
     props:["id"],
     methods:{
         getMore(){
           this.pageIndex++;
            //判段是否有下一页的数据
           this.hasMore=this.pageIndex <= this.pageCount;
          //如果没有下一页的数据停止函数执行
          if(!this.hasMore){return}
           var p=this.pageIndex;//页码
           var s=this.pageSize;//页大小
           var id=this.id;//新闻编号
           var url="getComment?id="+id+"&pno="+p+"&pageSize="+s;
           this.$http.get(url).then(result=>{
               console.log(result)
               //this.list=result.body.data;
               var rows=this.list.concat(result.body.data);
               this.list=rows;
           })
         },
         postComment(){
             //获取新闻编号
             var nid=this.id;
             //获取评论内容
             var pmsg=this.msg;
             //判断新闻评论内容不能为空
             if(pmsg.trim().length==0){
               Toast("评论内容不能为空!")  
               return;
             }
             //发送post请求
             var url="http://127.0.0.1:3000/postcomment";
             this.$http.post(url,{nid:nid,msg:pmsg}).then(result=>{
                console.log(result)
                Toast("发表成功");
                this.pageIndex=0;
                this.list=[];
                this.getMore();
             })
             //获取服务器程序返回结果
             //提示用户评论成功

             
         }
     },
     created(){
         this.getMore()
     }
    
 }

</script>
<style>
.app-comment h1{
    font-size:18px;
    
}
.app-comment textarea{
    font-size:14px;
    height:85px;
    margin:0;
}
.app-comment .cmt-list{
    margin:5px 0;

}
.cmt-list .cmt-item .cmt-info{
    line-height:30px;
    background:#ccc;

}
.cmt-list .cmt-item .cmt-body{
    line-height:35px;
    text-indent:2em;
}
</style>