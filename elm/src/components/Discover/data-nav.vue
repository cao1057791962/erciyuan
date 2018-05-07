<template>
	<section class="wrap">
		<a v-for="item in datalist">
			<section>
			<h3 :style="{color:item.titleColor}">{{item.title}}</h3>
			<h4>{{item.subtitle}}</h4>
			</section>
			<img :src="item.imgPath">
		</a>
	</section>
</template>

<script>
	import {getnav} from "../../services/home/homeService"
	export default{
		name:"data-com",
		data(){
			return {
				datalist:[]
			}
		},
		created(){
			getnav().then(
				result=>{
					this.datalist=result
				}
			)
		}
	}
</script>

<style scoped>
	.wrap{
		width:100%;
		height:2.41rem;
		border-bottom:.1rem solid #ededed;
	}
	a{
		width:50%;
		height:33.3%;
		display:flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		float:left;
		position:relative;
	}
	a:nth-child(1){
		height:66.6%;
	}
	a:nth-child(1) section{
		position:absolute;
		top:.23rem;
		left:.2rem;
	}
	a:nth-child(1) img{
		height:.75rem;
		width:.75rem;
		position:absolute;
		bottom:.1rem;
		right:.1rem;
	}
	a section{
		display:flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	a img{
		width:.45rem;
		height:.45rem;
		display:block;
	}
	h3{
		font-size:.16rem;
	}
	h4{
		color:#aaa;
	}
</style>