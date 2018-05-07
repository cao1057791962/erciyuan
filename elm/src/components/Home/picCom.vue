<template>
	<div class="pic-wrap">
		<div class="pic-left">
			<h3 class="index-1qvN6_0">限量抢购</h3>
			<div class="index-2W67h_0">超值美味 9.9元起</div>
			<div class="index-1DFa7_0"><span>760人</span>正在抢 &gt;</div>
			<img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/">
         </div>
         <div class="pic-right">
         	<h3 class="index-1qvN6_0">品质套餐</h3>
         	<div class="index-2W67h_0">搭配齐全吃得好</div>
         	<div class="index-1DFa7_0"><!---->立即抢购 &gt;</div>
         <img src="//fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'pic-com'
	}
</script>

<style scoped>
	.pic-wrap{
		height:1.4rem;
		width:100%;
		display:flex;
		justify-content: space-between;
	}
	.pic-left,.pic-right{
		width:50%;
		height:100%;
		padding-left:.2rem;
		box-sizing: border-box;
		position:relative;
	}
	img{
		display:block;
		height:.8rem;
		width:1.2rem;
		position:absolute;
		bottom:0;
		right:0;
	}
	h3{
		color: #e81919;
		font-size:.16rem;
	}
	.index-2W67h_0{
		color: #777;
		height:.25rem;
		line-height:.25rem;    
	}
	.index-1DFa7_0{
		color: #af8260;
	}
	.index-1DFa7_0 span{
		color: #e81919;
	}
</style>