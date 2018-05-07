import Vue from "vue"
import Vuex from "vuex"
import model from "./address.js"
Vue.use(Vuex);

const store = new Vuex.Store({
	//配置全局状态
	modules:{
		Address: model
	}
});
export default store;