<template>
	<section class="search-wrap">
		<div class="search1">
			<router-link class="header-btn iconfont icon-arrow-right-copy-copy-copy" to="Home/List"></router-link>
		<input type="search" placeholder="输入商家、商品名称"  @keyup.enter="searchshop()" v-model="text1"/>
		<router-link to="##">
			搜索
		</router-link>
		</div>
		<section class="top-wrap" ref="topwrap">
			<div class="leg">
				<a v-for="item in seller[1]">{{item.name}}</a>
			</div>
		</section>
		<section class="listdata" ref="wrap">
			<ul>
				<li v-for="(shop,ind) in seller[0]" @click="sender(shop)">
					<section class="shop shop-top">
						<img :src="shop.imgPath" class="im">
						<section class="cen">
							<p class="name">{{shop.name}}</p>
							<p>
								<span>评价:{{shop.pinjia}}</span>
								<span>|起送费:￥{{shop.qison}}</span>
								<span>|配送费:￥{{shop.free}}</span>
							</p>
						</section>
						<span class="ri">{{shop.juli}}m&nbsp;|{{shop.peison}}分钟</span>
					</section>
					<div class="activities">
					<div class="bottom" v-for="(i, index) in shop.foods" :key="index" v-if="index<=2||shop.isShow">
						<li class="shopli">
							<img :src="i.img" class="pic">
							<section>
								<p>{{i.name}}</p>
								<p>月售:{{i.yue}}份&nbsp;好评率:{{i.haoping}}%</p>
								<P><i>￥{{i.price}}</i><span :style="{color:'#'+i.huodon[0].color}" class="lj">{{i.huodon[0].tips}}</span></P>
							</section>
						</li>
					</div>
					<div class="tip" @click.stop="showAct(shop,ind)">{{shop.foods.length}}个活动<i class="iconfont icon-sanjiaodown jt" ref="xz"></i></div>
				</div>
				</li>
			</ul>
		</section>
</section>
	
</template>

<script>
	import {mostshop} from "../../services/home/homeService"
	import Vuex from "vuex";
	export default {
		name:"Shop",
		props:{
			val:String
		},
		data(){
			return {
				text1:this.val,
				seller:[]
			}
		},
		computed:{
			...Vuex.mapState({
				address:state=>state.Address.address
			})
		},
		methods:{
			sender(shop){
				this.$router.push({path:"/Shop",query:{id:shop.foods[0].restaurantid}})
			},
			showAct(shop,ind){
			shop.isShow = !shop.isShow;
			if(shop.isShow)
			{
				this.$refs.xz[ind].style.transform="rotate(180deg)";
			}
			else{
				this.$refs.xz[ind].style.transform="rotate(0deg)";
			}
		},
			searchshop(){
				this.search();
			},
			search(){
				mostshop(this.text1,this.address.latitude,this.address.longitude).then(
				result=>{
					this.seller=result;
				}
			)
			}
		},
		created(){
			this.search();
		},
		mounted(){
			this.wrapScroll = new IScroll(this.$refs.wrap, {
	  			probeType: 3
	  		})
			this.wrapScroll.on('beforeScrollStart', ()=>{
	  			this.wrapScroll.refresh();
	  		});
			this.topScroll = new IScroll(this.$refs.topwrap, {
	  			probeType: 3,
	  			scrollX: true
	  		})
			this.topScroll.on('beforeScrollStart', ()=>{
	  			this.topScroll.refresh()
	  	});
		},
		watch:{
			text1:{
				handler(){
					if(this.text1.length>=2)
					{this.search();}
				}
			}
		}
	}
</script>

<style scoped>
.box{
		height:100%;
		width:100%;
}
.search-wrap{
		height:100%;
		width:100%;
		background:#fff;
		z-index:2;
		position:absolute;
		top:0;
		left:0;
		overflow: hidden;
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
.top-wrap{
	width:100%;
	height:.42rem;
	padding:0 .14rem;
	box-sizing: border-box;
	overflow: hidden;
}
.top-wrap div{
	height:100%;
	width:auto;
	display:inline-block;
	white-space: nowrap;
}
.top-wrap div a{
	height:100%;
	display:inline-block;
	line-height:.42rem;
	background-color: #f5f5f5;
	margin:0 .16rem 0 0;
	padding:0 .16rem;
}
.im{
	width:.32rem;
	height:.32rem;
	margin-right:.06rem;
	display:block;
	margin-top:.152rem;
}
.shop{
	position:relative;
	padding:0 .16rem;
	box-sizing:border-box;
	display:flex;
	height:.64rem;
	align-content: center;
	justify-content: flex-start;
}
.shop-top::after{
	content:"";
    position: absolute; 
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    border-bottom:1px solid #ccc;
}
.cen{
	display:flex;
	justify-content: center;
	flex-direction: column;
}
.cen p:nth-of-type(2){
	color:#333;
	font-size:.1rem;
}
.listdata{
	height:5.81rem;
	overflow: hidden;
	width:100%;
}
.name{
	width:1.5rem;
	height:0.151rem;
	height:0.18rem;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	display:block;
	color:#333;
	font-size:.14rem;
	margin-bottom:.05rem;
}
.ri{
	position:absolute;
	bottom:.15rem;
	right:.1rem;
	color:#bbb;
	font-size:.10rem;
}
.activities{
	position: relative;
}
 .tip{
	position: absolute;
	bottom:-0.15rem;
	right:0.2rem;
	font-size:.12rem;
	color: #999;
}
.jt{
	margin-left:.05rem;
	font-size:.12rem;
	color:#ccc;
	position:absolute;
	top:.02rem;
	right:-.15rem;
	transition: all .2s linear;
	transform-origin: 50%;
}
.pic{
	width:.64rem;
	height:.64rem;
	display:block;
	margin-right:.1rem;
}
.shopli{
	display:flex;
	padding:0 .16rem;
	justify-content:flex-start;
	align-items:center;
	box-sizing: border-box;
	margin:0.15rem 0;
}
.shopli section{
	height:100%;
	display:flex;
	flex-direction: column;
	justify-content: space-between;
}
.shopli section p{
	width:100%;
	text-overflow:ellipsis;
	overflow: hidden;
	white-space: nowrap;
	height:.2rem;
}
.shopli section p:nth-of-type(1){
	font-size:.14rem;
	color:#333;
}
.shopli section p:nth-of-type(2){
	font-size:.12rem;
	color:#333;
}
.shopli section p:nth-of-type(3) i{
	font-size:.12rem;
	color:#ff5339;
	margin-right:.14rem;
}
.lj{
	padding:0.03rem;
	text-align: center;
}
</style>