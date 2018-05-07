<template>
	<div class="search" :class="{top: top}">
	<router-link to="Home/List">
	<span class="search-input">
		搜索饿了么商家、商品名称
	</span>
	</router-link>
</div>

</template>

<script>
export default {
	name: 'search-com',
	props: {
		top: Boolean
	}
}
</script>

<style scoped>
.search{
	background: linear-gradient(90deg,#0af,#0085ff);
	width: 100%;
	height: .4rem;
	padding: .05rem .1rem;
	box-sizing: border-box;
}
.search.top{
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
}
.search .search-input{
	display: block;
	height: 100%;
	background: #fff;
	color: #999;
	text-align: center;
	line-height: .3rem;
	font-size: .12rem;
}

</style>