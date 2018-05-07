// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from "./store"
import router from './router'
import Header from './common/header.vue'
import Content from './common/content.vue'
import observer from './common/observer.js'
import Swiper from './common/Swiper.vue'
import list from './common/ulList.vue'
import SwiperItem from './common/SwiperItem.vue'
Vue.prototype.$observer = observer;
Vue.config.productionTip = false
Vue.component(Header.name, Header);
Vue.component(Content.name, Content);
Vue.component(Swiper.name,Swiper);
Vue.component(list.name,list);
Vue.component(SwiperItem.name,SwiperItem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
