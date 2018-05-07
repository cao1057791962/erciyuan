<template>
	<div class="search-wrap">
		<div>
		<div class="search1">
			<a class="header-btn iconfont icon-arrow-right-copy-copy-copy" @click="huitui"></a>
		<input type="search" placeholder="输入商家、商品名称" @input="chazhao()" @keyup.enter="tab()" v-model="text1"/>
		<router-link to="/Shop">
			搜索
		</router-link>
		</div>
		<ul class='list'>
			<li v-for="item in seller" class="libottom" @click="sender(item)">
				<img :src="item.imgPath">
				<p><em>{{item.name}}</em><i :style="{background:'#'+item.tags[0].name_color}">{{item.tags[0].name}}</i></p>
				<span>评价&nbsp;{{item.rating}}</span>
			</li>
		</ul>
		<ul class="history">
			<h3>历史搜索</h3>
			<span @click="del()">×</span>
			<li v-for="item in cookie" >{{item}}</li>
		</ul>
		<ul class="history">
			<h3>热门搜索</h3>
			<li v-for="item in data">{{item.word}}</li>
		</ul>
	</div>
		<transition enter-active-class="bounceInRight" leave-active-class="bounceOutRight">
		<router-view :val="text1">
			<slot></slot>
		</router-view>
	</transition>
	</div>
</template>
<script>
	import {getSeller,search} from "../../services/home/homeService"
	import Vuex from "vuex";
	export default{
		data(){
			return {
				text1:"",
				seller:[],
				cookie:{},
				data:[]
			}
		},
		computed:{
			...Vuex.mapState({
				address:state=>state.Address.address
			})
		},
		methods:{
			sender(item){
				this.$router.push({path:"Shop",query:{id:item.id}});
			},
			huitui(){
				this.$router.go(-1);
			},
			chazhao(){
				if(this.text1.length>=2){
					getSeller(this.text1,this.address.latitude,this.address.longitude).then(
					result=>{
						this.seller=result;
					}
				)
				}
			},
			tab(){
				if(this.text1.length>=2)
				{
					this.cookie[this.text1]=this.text1;
					var str=JSON.stringify(this.cookie);
					localStorage.admin=str;
					this.$observer.$emit("fason",this.text1)
				}
				this.$router.push("List/Shop")
			},
			del(){
				localStorage.removeItem("admin");
				this.cookie={};
			}
		},
		created(){
			search(this.address.latitude,this.address.longitude).then(result=>{
				this.data=result
			})
			var num=localStorage.getItem("admin");
			if(num)
			{
				num=JSON.parse(num);
				this.cookie=num;
			}
		}
	}
</script>
<style scoped>
	.search-wrap{
		height:100%;
		width:100%;
		background:#fff;
		z-index:2;
		position:absolute;
		top:0;
		left:0;
	}
	.search1{
		height: .44rem;
		width: 100%;
		display:flex;
		justify-content: space-between;
		align-items: center;
	}
	.search1 a{
		display:inline-block;
		margin:0 .1rem;
		font-size:.18rem;
	}
	.search1 input{
		width:2.5rem;
		height:.24rem;
		border:0;
		background:#f8f8f8;
		box-sizing: border-box;
		padding-left:.2rem;
		font-size:.14rem;
	}
	.icon-arrow-right-copy-copy-copy{
	transform:rotate(180deg);
}
.list{
	z-index:2;
}
.list li{
	height:.5rem;
	width:100%;
	line-height:.5rem;
	display:flex;
	justify-content:flex-start;
	align-items: center;
	position:relative;
}
.libottom::after{
	content:"";
	width:100%;
	border-bottom:1px solid #ccc;
	position:absolute;
	left:0;
	bottom:0;
	transform: scaleY(0.5);
}
.list p{
	width:2.5rem;
	height:100%;
	line-height:.5rem;
	display:flex;
	justify-content: flex-start;
	align-items: center;
}
.list p em{
	font-size:.14rem;
}
.list p i{
	color:#fff;
	margin:0 .1rem;
	width:.16rem;
	height:.16rem;
	font-size:.12rem;
	text-align: center;
	line-height:.16rem;
	border-radius:.02rem;
}
.list li img{
	display:block;
	width:.24rem;
	height:.24rem;
	margin:0rem .1rem 0 .15rem;
}
.list li span{
	color:#aaa;
}
.history{
	width:100%;
	display:flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	position:relative;
	padding:.12rem 0;
}
.history h3{
	width:100%;
	height:.3rem;
	line-height:.3rem;
	font-size:.16rem;
	padding-left:.12rem;
	box-sizing: border-box;
}
.history li{
	height:.3rem;
	line-height:.16rem;
	margin:.12rem .12rem 0 .12rem;
	padding:.07rem .1rem;
	box-sizing: border-box;
	color: #666;
    background-color: #f7f7f7;
    border-radius:.05rem;
}
.history span{
	position:absolute;
	top:.18rem;
	right:.3rem;
	display:block;
	width:.16rem;
	height:.16rem;
	text-align: center;
	line-height: .16rem;
	font-size:.18rem;
}
</style>