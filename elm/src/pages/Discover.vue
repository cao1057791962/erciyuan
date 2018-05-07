<template>
	<div>
		<app-header name="发现"></app-header>
		<app-content :Ih="true" :trefresh="false" :brefresh="false">
			<a class="pic">
			<img src="https://fuss10.elemecdn.com/a/5c/c19ebf245df0e585f8e7f983c5f68gif.gif" alt="奶茶甜品" class="top-banner">
			</a>
			<!--导航-->
			<data-com></data-com>
			<!--优惠-->
			<you-com></you-com>
		</app-content>
	</div>
	

</template>

<script>
	import dataCom from "../components/Discover/data-nav"
	import youCom from "../components/Discover/youCom"
	export default{
		components:{
			[dataCom.name]:dataCom,
			[youCom.name]:youCom
		}
	}
</script>

<style scoped>
	.pic{
		width:100%;
		height:1.25rem;
		display:block;
		outline: none;
    	color: inherit;
    	text-decoration: none;
    	padding:0;
	}
	.pic img{
		display:block;
		height:100%;
		width:100%;
	}
</style>