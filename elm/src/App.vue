<template>
  <div id="app">
  	<keep-alive>
    <router-view></router-view>
    </keep-alive>
    <tabs></tabs>
  </div>
</template>

<script>
	import tabs from "./common/tabs.vue"
	import Vuex from 'vuex'
export default {
  name: 'App',
  components:{
  	[tabs.name]:tabs
  },
  methods: {
  	...Vuex.mapActions({
  		getLocation: 'Address/getLocation'
  	})
  },
  created(){
  	this.getLocation();//给项目进行定位，得到经纬度
  }
}
</script>

<style>
	h1{
		font-size:.18rem !important;
	}
</style>
