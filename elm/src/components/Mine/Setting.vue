<template>
<section class="set-wrap">
	<section class="set-top border-bottom">
		<a class="list border-right">
		<p>
		<i class="iconfont icon-qian"></i>
		</p>
		<span>钱包</span>
		</a>
		<a class="list border-right">
		<p>
		<i class="iconfont icon-icon--"></i>
		</p>
		<span>红包</span>
		</a>
		<a class="list">
		<p>
		<i class="iconfont icon-jinbi"></i>
		</p>
		<span>金币</span>
		</a>
	</section>
	<section class="set-center mar-top">
		<i class="iconfont icon-dingwei1"></i>
		<p>我的地址</p>
		<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
	</section>
	<section class="set-center mar-top">
		<i class="iconfont icon-fenqishangcheng1"></i>
		<p>金币商城</p>
		<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
	</section>
	<section class="set-center ">
		<i class="iconfont icon-lipintianchong"></i>
		<p>分享拿5元现金</p>
		<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
	</section>
	<section class="set-center mar-top">
		<i class="iconfont icon-msnui-service-call"></i>
		<p>我的客服</p>
		<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
	</section>
	<section class="set-center">
		<i class="iconfont icon-changyonglogo40"></i>
		<p>下载饿了么APP</p>
		<i class="iconfont icon-arrow-right-copy-copy-copy"></i>
	</section>
</section>
</template>

<script>
	export default{
		name:"set-com"
	}
</script>

<style scoped>
.set-wrap{
	background:#EFEFEF;
}
.set-top{
	height:.84rem;
	display:flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	background: #fff;
}
.icon-dingwei1{
	color:#4AA5F0;
}
.icon-fenqishangcheng1{
	color:#96DA4E;
}
.icon-lipintianchong{
	color:#FC7B53;
}
.icon-msnui-service-call,.icon-changyonglogo40{
	color:#4DA6F0;
}
.list{
	display:flex;
	height:100%;
	width:33.3%;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	position:relative;
}
.list p{
	width:.25rem;
	height:.25rem;
	border-radius:50%;
	color:#fff;
	position:relative;
}
.list span{
	margin-top:.03rem;
}
.list p i{
	position:absolute;
	top:50%;
	left:50%;
	transform: translate(-50%,-50%);
}
.list:nth-child(1) p{
	background:#FF9900;
}
.list:nth-child(2) p{
	background:#FF5F3E;
}
.list:nth-child(3) p{
	background:#6AC20B;
}
.border-right::after{
	content:"";
	height:100%;
	position:absolute;
	right:0;
	top:0;
	width:1px;
	transform: scaleX(0.5);
	border-right:1px solid #ccc;
}
.border-bottom::after {
   	content:"";
    position: absolute; 
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    border-top:1px solid #ccc;
}
.set-center{
	width:100%;
	height:.44rem;
	line-height:.44rem;
	background: #fff;
}
.set-center i:nth-child(1){
	float:left;
	margin-left:.22rem;
	margin-right:.05rem;
}
.set-center p{
	font-size:.16rem;
	color:#333;
	width:3rem;
	height:100%;
	line-height:.44rem;
	float:left;
	box-sizing: border-box;
}
.set-center i:nth-child(3){
	float:right;
	margin-right:.1rem;
}
.mar-top{
	margin-top:.2rem;
}
</style>