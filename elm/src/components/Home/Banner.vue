<template>
<swiper ref="banner" v-if="categoryList.length>0">
	<swiper-item v-for="(list, i) in categoryList" :key="i" v-once>
		<div class="banner">
			<div v-for="(item, j) in list" class="banner-item" :key="j">
				<img :src="item.imgPath" />
				<span>{{item.name}}</span>
			</div>
		</div>
	</swiper-item>
</swiper>
</template>

<script>
import { getSellerCategory } from '../../services/home/homeService'
export default {
	name: 'banner-com',
	data(){
		return {
			categoryList: []
		}
	},
	methods: {
		getData(){
			//请求商家分类数据
			getSellerCategory(22.626024,113.837884, ['main_template', 'favourable_template', 'svip_template'])
			.then(result=>{
				//dom显示数据
				//改变轮播数据
				this.categoryList = result;
				//数据变化，导致dom更新完毕之后，刷新轮播图
				this.$nextTick(()=>{
				
					//更新滚动视图
					this.$refs.banner.update();
				})
			})
		}
	},
	created(){
		//请求第一次的数据
		this.getData();
		
	}
}
</script>
<style scoped>
	.banner{
		display:flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.banner-item{
		width:20%;
		display:flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		height:50%;
	}
</style>