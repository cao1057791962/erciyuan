<template>
	<section id="footer" class="footer border-top">
		<li v-for="item in navList" class="nav">
			<router-link :to="item.path">
				<i class="iconfont" :class="item.icon"></i>
				<span>{{item.name}}</span>
			</router-link>
		</li>
	</section>
</template>
<script>
	export default{
		name:"tabs",
		data(){
			return{
				navList:[
				{name:"首页",path:"Home",icon:"icon-changyonglogo40"},
				{name:"发现",path:"Discover",icon:"icon-faxian"},
				{name:"订单",path:"Order",icon:"icon-icondd1"},
				{name:"我的",path:"Mine",icon:"icon-wode"},
				]
			}
		}
	}
</script>

<style scoped>
	#footer{
		height:0.49rem;
		width:100%;
		position:absolute;
		bottom:0;
		left:0;
		background:#fff;
		display:flex;
		justify-content: space-between;
		align-items: center;
	}
	#footer li {
		width:25%;
		height:100%;
	}
	#footer li a{
		height:100%;
		width:100%;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#footer li a span{
		margin-top:.02rem;
	}
	.icon-faxian,.icon-icondd1{
		font-weight: 900;
	}
	.border-top::after {
   	content:"";
    position: absolute; 
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    border-top:1px solid #ccc;
}
</style>