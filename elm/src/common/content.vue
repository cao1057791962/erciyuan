<template>
	<div ref="content" class="content" :class="{'Isheader':Ih,'top-refresh':trefresh,'bottom-refresh':brefresh}">
		<div class="wrap">
			<div class="freshtop" v-if="trefresh">
				<i class="iconfont icon-jiantou-copy-copy" ref="tt"></i>
				<i class="iconfont icon-jiantou tt" ref="tt2"></i>
				<i class="iconfont icon-jiazai" ref="shua"></i>
				<span>{{text1}}</span>
			</div>
			<slot>
				
			</slot>
			<div class="freshbottom" v-if="brefresh">
				<i class="iconfont icon-jiantou" ref="tt1"></i>
				<i class="iconfont icon-jiazai" ref="shua1"></i>
				<span>{{text2}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"app-content",
		props:{
			Ih:Boolean,
			trefresh:Boolean,
			brefresh:Boolean
		},
		data(){
			return {
				text1:"下拉刷新",
				text2:"上拉加载",
			}
		},
	methods: {
  	refresh(){
  		this.contentScroll.refresh();
  	}
 },
  mounted(){
  	//创建滚动视图
  		const wi=document.documentElement.style.fontSize.split("p")[0];
	  	this.contentScroll = new IScroll(this.$refs.content, {
	  		probeType: 3
	  	});
	  	//开始滚动前，更新视图大小
	  	this.contentScroll.on('beforeScrollStart', ()=>{
	  		this.refresh();
	  	});
	  	//向父组件传递滚动的位置
	  	this.contentScroll.on('scroll', ()=>{
	  		this.$emit('scroll', this.contentScroll.y);
	  	});
	  	if(this.trefresh&&this.contentScroll.maxScrollY<=0)
	  	{		
	  		this.contentScroll.scrollTo(0,-(0.5*wi));
	  		const shua=this.$refs.shua;
	  		const tt=this.$refs.tt;
	  		const tt2=this.$refs.tt2;
	  		
	  		
	  		this.contentScroll.on("scroll",()=>{
	  			if(this.contentScroll.y>=0)
	  			{
	  				this.text1 = '下拉立即刷新';
	  				tt.style.display="none";
	  				tt2.style.display="block";
	  			}
	  			else{
	  				tt.style.display="block";
	  				tt2.style.display="none";
	  				this.text1="下拉刷新"
	  			}
	  		});
	  		this.contentScroll.on("scrollEnd",()=>{
	  			if(this.contentScroll.y < 0 && this.contentScroll.y > -(0.5*wi)){
				//下拉没有完全显示，收回下拉刷新
				this.contentScroll.scrollTo(0, -(0.5*wi), 200);
				}
	  			else if(this.contentScroll.y>=0)
	  			{
	  				tt.style.display="none";
	  				shua.style.display="block";
	  				tt2.style.display="none"
	  				this.text1="正在刷新"
	  				this.$emit('on-refresh');
					setTimeout(()=>{
					//收回下拉刷新的效果
					this.contentScroll.scrollTo(0, -(0.5*wi), 200);
					tt.style.display="block";
	  				shua.style.display="none";
	  				tt2.style.display="none";
					this.refreshText = '下拉可以刷新';
				}, 2000);
	  		}
	  		})
	  	}
	  	if(this.brefresh){
	  		const shua1=this.$refs.shua1;
	  		const tt1=this.$refs.tt1;
  		this.contentScroll.on('scroll', ()=>{
			var maxY = this.contentScroll.maxScrollY;
			var y = this.contentScroll.y;
			if(maxY < y){
				
				this.text2 = '上拉加载更多';
			}
			else{
				this.text2 = '释放立即加载';
				
			}
		})
  		
		this.contentScroll.on('scrollEnd', ()=>{
			var maxY = this.contentScroll.maxScrollY;
			var y = this.contentScroll.y;
			if(y >= maxY+(0.5*wi)){
			
			}
			else if(y < maxY+(0.5*wi) && y > maxY){
				
				this.contentScroll.scrollTo(0, maxY+(0.5*wi), 200);
			}
			else if(y <= maxY){
				
				shua1.style.display="block";
				tt1.style.display="none"
				this.text2 = '正在加载中...';
				
				this.$emit('on-loadmore');
				
			}
		})
	
  	}
  	}
}
</script>

<style scoped>
	.content{
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	bottom: .49rem;
	overflow: hidden;
	background:rgba(255,255,255,0.5);
}
.content.Isheader{
	top: .44rem;
}
.freshtop,.freshbottom{
	height:.5rem;
	display:flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background:#F3F3F3;
}
@keyframes xuanzuan{
	from{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg);
	}
}
.icon-jiazai{
	display:none;
	animation: xuanzuan 2s linear infinite;
}
.tt{
	display:none;
}
</style>