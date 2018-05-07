<template>
	<div class="locational">
		<app-header name="选择收货地址"></app-header>
		<div class="input">
			<input type="text" placeholder="请输入地址" @keyup.enter="vul" v-model="text"/>
			<ul class="list">
				<router-link to="/Home">
					<li v-for="(item,index) in datalist" @click="cancelvalue(item)">
						<p>{{item.name}}</p>
						<span>{{item.address}}</span>
					</li>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	import {setAddress} from "../../services/home/homeService"
	import Vuex from "vuex";
	export default{
		data(){
			return {
				text:"",
				datalist:[]
			}
		},
		computed:{
			...Vuex.mapState({
				address:state=>state.Address.address
			})
		},
		methods:{
			...Vuex.mapActions({
				getdu:'Address/userSelectLocation'
			}),
			vul(){
				let {longitude, latitude} = this.address;
				setAddress(this.text,latitude,longitude).then(
					result=>{
					this.datalist=result;
					console.log(this.datalist)
					}
				)
			},
			cancelvalue(item){
				this.getdu({
				longitude: item.longitude,
				latitude: item.latitude
			})
				this.text="";
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	.locational{
		height:100%;
		width:100%;
		background:#fff;
		z-index:2;
		position:absolute;
		top:0;
		left:0;
	}
	.input{
		height:1.76rem;
		width:100%;
		display:flex;
		justify-content: center;
		align-items: center;
		
	}
	input{
		background: #f2f2f2;
		width:3.4rem;
		height:.36rem;
		line-height: .36rem;
		padding-left:.2rem;
		box-sizing: border-box;
		font-size: .16rem;
		border:0;
	}
	.list{
		width:100%;
		height:3rem;
		position:absolute;
		top:1.2rem;
		left:0;
		overflow: auto;
		
	}
	.list li{
		height:.5rem;
		padding-left:.2rem;
		box-sizing: border-box;
	}
	.list li p{
		height:.3rem;
		font-size:.16rem;
		line-height: .3rem;
	}
	.list li span{
		height:.2rem;
		line-height: .2rem;
		font-size:.12rem;
		display:block;
		text-overflow:ellipsis;
		width:3rem;
		overflow:hidden;
		white-space: nowrap;
	}
</style>