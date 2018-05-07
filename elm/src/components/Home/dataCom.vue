<template>
<list :listData="listData" @update-list="updateList()">
</list>
</template>
<script>
	import {getTopSeller} from "../../services/home/homeService.js"
	import Vuex from "vuex"
	export default{
		name:"data-com",
		data(){
		return {
			limit: 8,
			listData:[]
		}
	},
	computed: {
		...Vuex.mapState({
				address:state=>state.Address.address
			}),
		offset(){
			return this.listData.length;
		}
	},
	methods: {
		getData(){
			//请求推荐商家数据
			getTopSeller(this.address.latitude,this.address.longitude, this.offset, this.limit)
			.then(result=>{
				this.listData = result;
				
			})
		},
		appendData(){
			//请求推荐商家数据
			getTopSeller(this.address.latitude,this.address.longitude, this.offset, this.limit)
			.then(result=>{
				this.listData = [...this.listData, ...result];
			})
		},
		updateList(){
			this.$emit('update-list');
		}
	},
	watch: {
		address: {
			handler(){
				//请求第一次的数据
				//或者修改过地址，重新请求数据
				this.getData();
			},
			deep: true
			}
		}
}
</script>

