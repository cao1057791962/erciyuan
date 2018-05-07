<template>
	<div class="Home">
	<!--头部搜索框-->
	<search-com v-show="showSearch" :top="true"></search-com>
	<!--内容区-->
	<app-content ref="content" 
		@on-refresh="handleRefresh()"
		@on-loadmore="handleLoadMore()"
		@scroll="handleContentScroll" :trefresh="true" :brefresh="true">
		<!--定位-->
		<loca-top ref="header"></loca-top>
	<!--搜索框-->
		<search-com></search-com>
		
		<!--轮播图-->
		<swiper-com></swiper-com>
		<!--//导航-->
		<banner-com ref="banner"></banner-com>
		<!--图片-->
		<pic-com></pic-com>
		<!--商品列表-->
		<data-com ref="list" @update-list="handleUpdateList()"></data-com>
		
	</app-content>
	
	<transition enter-active-class="bounceInRight" leave-active-class="bounceOutRight">
		<router-view>
			<slot></slot>
		</router-view>
	</transition>
	
	</div>
</template>

<script>
	import locations from "../components/Home/location"
	import search from "../components/Home/search"
	import activity from "../components/Home/activity"
	import banner from "../components/Home/banner"
	import dataCom from "../components/Home/dataCom"
	import  picCom from "../components/Home/picCom"
	export default{
	data(){
		return {
			showSearch: false,
		}
	},
	methods:{
		handleContentScroll(position){
			const wi=document.documentElement.style.fontSize.split("p")[0];
			if(position < -(0.9*wi)){
				this.showSearch = true;
			}else{
				this.showSearch = false;
			}
		},
		handleUpdateList(){
			this.$refs.content.refresh();
		},
		handleRefresh(){
			//执行下拉刷新，由home中的各个组件完成下拉刷新
			this.$refs.header.getData();	
			this.$refs.banner.getData();	
			this.$refs.list.getData();	
			this.$refs.content.refresh();
		},
		handleLoadMore(){
			this.$refs.list.appendData();
		}
	},
	components:{
			[locations.name]:locations,
			[search.name]: search,
			[activity.name]:activity,
			[banner.name]:banner,
			[dataCom.name]:dataCom,
			[picCom.name]:picCom
	}
	}
	
</script>

<style>
.banner{
	overflow: hidden;
	background: #fff;
}
.banner .banner-item{
	padding: .1rem 0;
	width: 20%;
	float: left;
}
.banner .banner-item img{
	width: .3rem;
	margin: 0 auto;
}
.banner .banner-item span{
	display: block;
	text-align: center;
	color: #666;
	font-size: .12rem;
}
.activity img{
	width: 100%;
}
.bounceInRight,.bounceOutRight{
	animation-duration: 1000ms;
}
</style>