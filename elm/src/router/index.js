import Vue from 'vue'
import Router from 'vue-router'
import Home from "../pages/Home"
import Discover from "../pages/Discover"
import Order from "../pages/Order"
import Mine from "../pages/Mine"
import locational from "../components/Home/locational"
import Shop from "../components/Discover/Shop"
import List from "../components/Home/List"
import ShopList from "../components/Shop/ShopList"
Vue.use(Router)

export default new Router({
    	routes: [
  	{
  		path: '/Home',
  		component: Home,
  		children:[
  		{
  			path:"locational",
  			component:locational
  		},
  		{
  			path:"List",
  			component:List,
  			children:[
  			{
	  			path:"shop",
	  			component:Shop
  			}]
  			}
  		]
  	},
  	{
  		path: '/Discover',
  		component: Discover	
  	},
  	{
  		path: '/Order',
  		component: Order
  	},
  	{
  		path: '/Mine',
  		component: Mine
  	},
  	{
  		path: '/Shop',
  		component:ShopList
  	},
  	{
  		path: '/',
  		redirect: '/Home'
  	},
  	{
  		path: '**',
  		redirect: '/Home'
  	}
  ]
})
