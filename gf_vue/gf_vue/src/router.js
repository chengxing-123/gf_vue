import Vue from 'vue'
import Router from 'vue-router'
//引入自定义组件
import IndexContainer from "./components/index.vue"
import ProductsContainer from "./components/products.vue"
import DetailsContainer from "./components/details.vue"
import LoginContainer from "./components/login.vue"
import ShopContainer from "./components/shop.vue"

Vue.use(Router)
//配置访问自定义组件路径
export default new Router({
  routes: [
    {path:'/',redirect:"/index"},
    {path:'/index',component:IndexContainer},
    {path:'/products',component:ProductsContainer},
    {path:'/login',component:LoginContainer},
    {path:'/details/:pid',component:DetailsContainer},
    {path:'/shop',component:ShopContainer}

    
   
   
  ] 
})
