import Vue from 'vue'
import App from './App.vue'
import router from './router'


import'mint-ui/lib/style.css'
Vue.config.productionTip = false
//引入mui的css文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//引入vue-resource 发送ajax
//引入vue-resource库所有组件
import VueResource from "vue-resource";


//引入组件mintui库Header
//import {Header,Swipe,SwipeItem,Button,Lazyload} from "mint-ui";
//引入指定组件
//注册当前项目中
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name,Swipe);
// Vue.component(SwipeItem.name,SwipeItem);
// Vue.component(Button.name,Button);
// Vue.use(Lazyload)
//完整引入
import MintUI from "mint-ui";
Vue.use(MintUI )
//将所有组件注册
Vue.use(VueResource)


//main.js 创建过滤器
//原日期对象
//返回日期格式对象
Vue.filter("datetimeFilter",function(val){
  var data=new Date(val);
  var y=data.getFullYear();
  var m=data.getMonth()+1;
  var d=data.getDate();
  var h=data.getHours();
  var min=data.getMinutes();
  var s=data.getSeconds();
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);  
  return `${y}-${m}-${d} ${h}:${min}:${s}`
})
//配置VueResource 服务器根目录
Vue.http.options.root="http://127.0.0.1:3000/"


//修改请求头
//Vue.http.options.emulateJSON=true


//创建vue实例对象中
  //1下载Vue npm i vuex -D
  //2 引入
  import Vuex from "vuex"
  //3 注册
  Vue.use(Vuex)
  //4 创建vuex实例对象
  var store=new Vuex.Store({
    state:{count:0},//购物车商品数量
    mutations:{
      increment(state,c){
        state.count+=parseInt(c);
      },//修改共享数据方法
      substract(state){
        state.count--;
      } //参数共享数据属性
    },
    getters:{
      optCount:function(state){
        return state.count;//返回共享数据
      }
    }
  })
//注册Vue实例
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')