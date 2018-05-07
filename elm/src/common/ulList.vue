<template>
	<div class="datalist" @update-list="updatelist()">
		<h3>推荐商家</h3>
		<div class="data-wrap" ref="shop">
			<section v-for="(item,ind) in listData" class="list">
				<div class="top" @click="sender(item)">
					<img :src=item.imgPath>
						<p>
							<span>{{item.name}}</span>
							<span>
								<p id="pic"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=">
								<em :style="{width:100-item.pinjia*20+'%'}"></em></p>
								{{item.pinjia}}&nbsp;&nbsp;月售：{{item.yueshou}}</span>
							<span><i>￥{{item.minprice}}起送&nbsp;|&nbsp;优惠配送价{{item.peison}}</i><i>{{item.juli}}m&nbsp;|&nbsp;{{item.peisontime}}分钟</i></span>
						</p>
				</div>
				<div class="activities">
					<div class="bottom" v-for="(i, index) in item.acti" :key="index" v-if="index<2 || item.isShow">
					<li ><span :style="{background:'#'+i.color}">{{i.letter}}</span><a>{{i.name}}</a></li>
					</div>
					<div class="tip" @click.stop="showAct(item,ind)">{{item.acti.length}}个活动<i class="iconfont icon-sanjiaodown jt" ref="xz"></i></div>
				</div>
				
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: 'list',
	props: {
		listData:Array
	},
//	components: {
//		
//	},
	methods: {
		showAct(item,ind){
			item.isShow =!item.isShow;
			if(item.isShow)
			{
				this.$refs.xz[ind].style.transform="rotate(180deg)"
			}
			else{
				this.$refs.xz[ind].style.transform="rotate(0deg)"
			}
			this.$nextTick(()=>{
				//更新滚动视图
				this.$emit('update-list');
			})
		},
		sender(item){
			this.$router.push({path:"Shop",query:{id:item.id}})
		}
	}
}
</script>

<style scoped>
	h3{
		text-align: center;
		height:.36rem;
		width:100%;
		line-height: .36rem;
		font-size:.16rem;
	}
	.list{
		margin:.2rem 0;
		padding-bottom:.05rem;
		border-bottom:1px solid #f1f1f1;
	}
	img {
		width:.65rem;
		height:.65rem;
	}
	.top{
		display:flex;
		justify-content: space-around;
	}
	.top p{
		width:2.8rem;
		height:.65rem;
		padding-left:.12rem;
		box-sizing: border-box;
	}
	.top p span{
		display:block;
		box-sizing:border-box;
	}
	.top p span:nth-of-type(1){
		height:.2rem;
		line-height: .2rem;
		font-size:.16rem;
		font-weight: 900;
	}
	.top p span:nth-of-type(2){
		height:.15rem;
		line-height: .15rem;
		font-size:.12rem;
		color:#333;
		margin:.05rem 0;
	}
	.top p span:nth-of-type(3){
		height:.2rem;
		line-height: .2rem;
	}
	.top p span i{
		display:block;
		float:left;
		width:50%;
		color:#999;
		font-size:.1rem;
		box-sizing: border-box;
	}
	.top p span i:nth-child(2){
		text-align: right;
	}
	.bottom li{
		width:100%;
		height:.2rem;
		line-height:.2rem;
		box-sizing:border-box;
		padding-left:1rem;
	}
	.bottom li a{
		display:block;
		float:left;
		width:2rem;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.bottom span{
		color:#fff;
		display:block;
		float:left;
		height:.15rem;
		width:.15rem;
		text-align: center;
		line-height: .15rem;
		margin-right:.05rem;
	}
 .activities{
	position: relative;
}
 .tip{
	position: absolute;
	top:.02rem;
	right:.25rem;
	font-size:.12rem;
	color: #999;
}
.jt{
	margin-left:.05rem;
	font-size:.12rem;
	color:#ccc;
	position:absolute;
	top:.02rem;
	right:-.15rem;
	transition: all .2s linear;
	transform-origin: 50%;
}
#pic{
	width:.51rem;
	height:.1rem;
	position:relative;
	display:inline-block;
	padding:0;
}
#pic img{
	width:100%;
	height:100%;
	display:block;
}
#pic em{
	position:absolute;
	top:0;
	right:0;
	background:#fff;
	display:block;
	height:100%;
}
</style>