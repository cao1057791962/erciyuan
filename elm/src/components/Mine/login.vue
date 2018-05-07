<template>
<section class="top">
	<section class="header">
	<i class="iconfont icon-wode"></i>
	</section>
	<section class="center">
	<p><a>登录&nbsp;/&nbsp;注册</a></p>
	<span>
	<i class="iconfont icon-ai-phone"></i>
	登录后享受更多特权
	</span>
	</section>
	<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
</section>
</template>

<script>
	export default{
		name:"login-com"
	}
</script>

<style scoped>
.top{
	width:100%;
	height:1.1rem;
	background-image: linear-gradient(90deg,#0af,#0085ff);
	color:#fff;
	box-sizing: border-box;
	padding:.25rem .15rem;
	position:relative;
}
.header{
	width:.6rem;
	height:.6rem;
	background:#fff;
	border-radius:50%;
	border:0;
	float:left;
	position:relative;
	overflow: hidden;
}
.header i{
	font-size:.46rem;
	color:rgb(220, 220, 220);
	position:absolute;
	bottom:-0.02rem;
	left:50%;
	transform: translateX(-50%);
	border-radius:50%;
	padding:0;
}
.center{
	height:100%;
	width:2.57rem;
	box-sizing: border-box;
	margin-left:.18rem;
	float:left;
}
.center p{
	height:.25rem;
	width:100%;
	color:#fff;
	margin-bottom:.08rem;
}
.center p a{
	display:block;
	width:100%;
	height:100%;
	line-height:.25rem;
	color:#fff;
	font-size:.2rem;
	font-weight: 900;
}
.center span{
	height:.19rem;
	line-height:.19rem;
}
.icon-arrow-right-copy-copy-copy{
	position:absolute;
	right:.1rem;
	top:50%;
	transform: translateY(-50%);
}
</style>