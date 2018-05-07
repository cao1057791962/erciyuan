<template>
	<header class="header">
		<i class="header-btn iconfont icon-arrow-right-copy-copy-copy" @click="huitui"></i>
		<h1 class="title">{{name}}</h1>
	</header>
</template>

<script>
	export default {
		name:"app-header",
		props:{
			name:String
		},
		methods:{
			huitui(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.header{
	width: 100%;
	height:.44rem;
	position: absolute;
	top: 0;
	left: 0;
	background: linear-gradient(90deg,#0af,#0085ff);
}
.header .title{
	width: 100%;
	text-align: center;
	line-height: .44rem;
	font-size: .14rem;
	color: #fff;
}
.header .header-btn{
	position: absolute;
	top: .05rem;
	left: .05rem;
	padding: 0rem .1rem;
	height: .34rem;
	line-height: .34rem;
	color: #fff;	
}
.icon-arrow-right-copy-copy-copy{
	transform:rotate(180deg);
}
</style>