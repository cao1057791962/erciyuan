<template>
<section class="bot-wrap">
	<h1>限时好礼</h1>
	<h3>金币换好礼</h3>
	<section class="wrap">
		<a v-for="item in datalist">
			<span>{{item.title}}</span>
			<img :src="item.imgPath">
			<p>{{item.name}}</p>
			<strong>{{item.jinbi}}金币<em>￥{{item.youhui}}</em></strong>
		</a>
	</section>
	<p class="gengduo"><em>查看更多</em><i class="iconfont icon-arrow-right-copy-copy-copy"></i></p>
</section>
</template>

<script>
	import {youhui} from "../../services/home/homeService"
	export default{
		name:"you-com",
		data(){
			return{
				datalist:[]
			}
		},
		created(){
			youhui().then(result=>{
				this.datalist=result;
				
			})
		}
	}
</script>

<style scoped>
	h1{
		padding-top:.2rem;
		color:#000;
		font-weight:900;
	}
	h1,h3{
		text-align: center;
	}
	.wrap{
		padding:.12rem 0 .15rem .15rem;
		width:100%;
		height:auto;
		display:flex;
		justify-content:flex-start;
		flex-wrap: wrap;
	}
	.wrap a{
		width:1.11rem;
		height:1.67rem;
		display:flex;
		justify-content:space-between;
		flex-direction: column;
	}
	.wrap a img{
		width:1.11rem;
		height:1.1rem;
	}
	.wrap span{
		width:.51rem;
		height:.16rem;
		background:#111;
		color:#fff;
		text-align: center;
		line-height:.16rem;
		margin-top:.1rem;
	}
	.wrap a p{
		font-size:.12rem;
		font-weight:600;
	}
	.wrap strong{
		color:#ff5339;
		margin:.05rem 0;
	}
	.wrap strong em{
		color:#aaa;
		text-decoration: line-through;
	}
	.gengduo{
		text-align: center;
		display:block;
		height:.32rem;
		line-height: .32rem;
		color:#ccc;
		padding-bottom:.18rem;
		border-bottom:.18rem solid #ededed;
	}
	.gengduo em,.genduo i{
		font-size:.14rem;
		height:.32rem;
		text-align: center;
		line-height: .32rem;
	}
</style>