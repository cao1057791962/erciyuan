<template>
<div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper" >
	<swiper-item v-for="(actItem, i) in activityList" :key="i">
		<div class="activity">
			<img  :src="actItem"/>
		</div>
	</swiper-item>
    </div>
    <div class="swiper-pagination"></div>
</div>
</template>
<script>
export default {
	name: 'swiper-com',
	data(){
		return {
			activityList: [
				'http://fuss10.elemecdn.com/b/0a/5b1ab540506687c7b93e148704db1jpeg.jpeg?imageMogr/format/webp/',
				'http://fuss10.elemecdn.com/0/e7/64044fb6df771e9cb42196ae3eeeejpeg.jpeg?imageMogr/format/webp/'
			]
		}
	},
	methods: {
		update(){
			//更新滚动视图
			this.swiper.update();
		}
	},
	mounted(){
		//创建滚动视图
		this.swiper = new Swiper(this.$refs.swiper, {
			pagination: '.swiper-pagination',
			loop: true,
			autoplay:3000,
			autoplayDisableOnInteraction:false
		});
		
	}
}
</script>