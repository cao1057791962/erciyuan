<template>
<div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper" >
        <slot ></slot>
    </div>
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
export default {
	name: 'swiper',
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
			autoplayDisableOnInteraction:false
		});
		
	}
}
</script>

<style scoped>

</style>