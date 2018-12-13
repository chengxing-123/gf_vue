<template>
 <div class="app-container">
  <!--容器显示不同组件-->
   <router-view></router-view>
  <!--底部导航栏-->
   <nav class="mui-bar mui-bar-tab ">
			<router-link to="/index" class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<a  class="mui-tab-item"  @click="getAdd">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">登录</span>
			</a>
			<router-link to="/shop" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.optCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/products" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
 </div>
</template>

<script>
 export default{
     data(){
         return {

         }

     },
     methods:{
         getAdd(){
             this.$router.push("/login?back="+decodeURI(location.href.split("http://127.0.0.1:3001/#")[1]));
         }
     }
 }
</script>

<style>
  

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
.app-container{
    height:auto;
}
</style>

