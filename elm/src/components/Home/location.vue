<template>
	<div class="location">
		<router-link to="Home/locational" class="iconfont icon-dingwei1">
		</router-link>
		<span class="info" >{{txt}}</span>
		<router-link to="Home/locational" class="iconfont icon-sanjiaodown"></router-link>
		
	</div>
</template>

<script>
	import {getAddress} from "../../services/home/homeService.js"
	import Vuex from "vuex";
	export default{
		name:"loca-top",
		data(){
			return {
				txt:"正在定位..."
			}
		},
		computed: {
		...Vuex.mapState({
			address: state=>state.Address.address
		})
		},
		methods:{
			getData(){
				let {longitude, latitude} = this.address;
				getAddress(latitude,longitude).then(result=>{
						this.txt=result;
				})
			}
		},
		watch: {
		address: {
			handler(){
				console.log('请求了');
				//请求第一次的数据
				//或者修改过地址，重新请求数据
				this.getData();
			},
			deep: true
			}
		}
	}
</script>

<style>
	.location{
	width: 100%;
	line-height: 0.4rem;
	background: linear-gradient(90deg,#0af,#0085ff);
	padding: 0 .1rem;
	box-sizing: border-box;
	display:flex;
	justify-content:flex-start;
}
.location .info{
	font-size: 0.16rem;
	font-weight:900;
	color: #fff;
	display:block;
	margin:0 .1rem;
	max-width:2rem;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.icon-dingwei1,.icon-sanjiaodown{
	color:#fff;
}
</style>