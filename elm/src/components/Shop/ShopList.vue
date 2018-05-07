<template>
	<section id="List" ref="topwrap">
		<section>
			<section class="header">
				<nav @click="hui()"><i class="iconfont icon-arrow-right-copy-copy-copy"></i></nav>
				<section class="header-center">
				<img :src="headerlist.imgPath">
					<section>
						<h1>{{headerlist.name}}</h1>
						<p>
							<i>{{headerlist.grade}}</i>
							<i>月售:{{headerlist.sale}}单</i>
							<i>商家配送</i>
							<i>约{{headerlist.time}}分钟</i>
							<i>距离{{headerlist.km}}m</i>
						</p>
						<p>欢迎光临，用餐高峰期请提前下单，谢谢。</p>
					</section>
				</section>
				<ul>
						<li v-for="(i,index) in headerlist.activities" v-if="index <1">
							<span :style="{background:'#'+i.color}">{{i.name}}</span>
							<span>{{i.title}}</span>
						</li>
				</ul>
			</section>
			<section class="qiehuan">
			<ul>
				<li @click="btn">点餐</li>
				<li @click="btn1">评价</li>
				<li @click="btn2">商家</li>
			</ul>
			</section>
			<section class="list clearfix" v-show="va==1">
				<ul class="loucen" ref="rightwrap">
					<div>
					<li v-for="(item,index) in data" class="lou" :class="{'acti':sij==index}" @click="acti(index)">{{item.name}}</li>
					</div>
				</ul>
				<div class="right" ref="gun">
				<ul class="gunnima">
					<li v-for="act in rightdata">
						<img :src="act.imagepath">
							<div class="cart">
								<p>{{act.name}}</p>
								<p>月售：{{act.month}}份&nbsp;好评率:{{act.rate}}</p>
								<p>￥{{act.price[0].jia}}</p>
								<span>+</span>
							</div>
					</li>
				</ul>
				</div>
			</section>
			<section class="ratewrap clearfix" ref="leftwrap" v-show="va==2">
				<div class="dd">
					<ul class="rate clearfix">
						<li>全部</li>
						<li>满意</li>
						<li>不满意</li>
						<li>有图</li>
					</ul>
					<ul class="ratetext">
						<li v-for="item in ratelist">
							<p>{{item.user}}<i>{{item.ratetime}}</i></p>
							<span>{{item.time}}</span>
							<p>{{item.text}}</p>
						</li>
					</ul>
				</div>
			</section>
		</section>
	</section>
</template>

<script>
	import{getList,getshop,getfalse,pinjia} from "../../services/home/homeService"
	export default{
		name:"seller-com",
		data(){
			return {
				headerlist:[],
				data:[],
				va:1,
				sij:0,
				rightdata:[],
				ratelist:[]
			}
		},
		methods:{
			acti(index){
				this.sij=index;
			},
			btn(){
				this.va=1;
			},
			btn1(){
				this.va=2;
			},
			btn2(){
				this.va=3;
			},
			hui(){
				this.$router.push("/Home")
			},
			getshop(id){
				getshop(id).then(result=>{
				this.data=result;
				result.map(item=>{
					item.foods.map(ite=>{
						this.rightdata.push(ite);
					})
				})
				
			});
			pinjia(id).then(result=>{
				this.ratelist=result
			})
			}
		},
		activated(){
			this.rightdata=[];
			getfalse().then(result=>{
				this.headerlist=result;
			}),
			this.getshop(this.$route.query.id);
	},
	mounted(){
		this.rightScroll=new IScroll(this.$refs.rightwrap,{
			probeType: 3
		});
		this.rightScroll.on('beforeScrollStart', ()=>{
	  		this.rightScroll.refresh()
	  	});
		this.leftScroll=new IScroll(this.$refs.leftwrap,{
			probeType: 3
		});
		this.leftScroll.on('beforeScrollStart', ()=>{
	  		this.leftScroll.refresh()
	  	});
		this.gunScroll = new IScroll(this.$refs.gun, {
	  			probeType: 3
	  	});
	  	this.gunScroll.on('beforeScrollStart', ()=>{
	  		this.gunScroll.refresh()
	  	});
	}
}
</script>

<style scoped>
#List{
	height:100%;
	width:100%;
	background:#fff;
	position:absolute;
	z-index:4;
	overflow: hidden;
}
.header{
	height:2.12rem;
}
.header nav{
	height:.68rem;
	width:100%;
	background:#917764;
}
nav .icon-arrow-right-copy-copy-copy{
	transform:rotate(180deg);
	display:block;
	width:.4rem;
	height:.4rem;
	color:#fff;
	text-align: center;
	line-height:.4rem;
}
.header-center{
	position:relative;
	display: flex;
    background-color: #fff;
    text-align: center;
    padding:.34rem .1rem 0 .1rem;
    box-sizing: border-box;
}
.header-center img{
	height:.65rem;
	width:.65rem;
	display:block;
	position:absolute;
	top:0;
	left:50%;
	transform: translate(-50%,-50%);
}
.header-center section{
	width:100%;
	height:100%;
}
.header-center section h1{
	font-size:.16rem;
	font-weight: 900;
}
.header-center section i{
	margin:0 .05rem;
}
.header-center section p{
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.header-center section p:nth-of-type(2){
	color:#ccc;
	font-size:.12rem;
	line-height:.14rem
}
.header ul{
	width:3rem;
	margin:.1rem auto;
	border:1px solid #EEEEEE;
}
.header ul li{
	padding:.03rem;
}
.header ul li span{
	margin-right:.1rem;
}
.header ul li span{
	font-size:.12rem;
	display:inline-block;
	color:#333;
}
.header ul li span:nth-of-type(1){
	color:#fff;
	padding:0 .02rem;
}
.qiehuan{
	position:relative;
}
.qiehuan::after{
	content:"";
	width:100%;
	position: absolute;
	bottom:0;
	left:0;
	border-bottom:1px solid #eee;
	transform: scaleY(0.5);
}
.qiehuan ul {
	display:flex;
	justify-content: space-around;
	align-content: center;
	width:100%;
	height:.4rem;
}
.qiehuan ul li{
	height:100%;
	padding:0 .1rem;
	line-height: .4rem;
	font-size:.14rem;
}
.list{
	position:relative;
}
.loucen{
	width:.77rem;
	background:#eee;
	position:absolute;
	top:0rem;
	left:0;
	height:4.15rem;
	overflow:hidden;
}
.loucen li{
	height:.5rem;
	line-height:.5rem;
	text-align: center;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.right{
float:right;
width:2.83rem;
height:4.2rem;
overflow: hidden;
}
.dd{
	width:100%;
}
.right li{
	display:flex;
	justify-content: flex-start;
	align-items: center;
	margin:.1rem 0;
	height:1.03rem;
	padding:.1rem 0;
	box-sizing: border-box;
}
.right img{
	width:.75rem;
	height:.75rem;
} 
.right div{
	height:100%;
	padding-left:.1rem;
	box-sizing: border-box;
}
.right p:nth-of-type(1){
	font-size:.14rem;
	height:.18rem;
	line-height: .18rem;
	font-weight:900;
	width:100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.right p:nth-of-type(2){
	height:.12rem;
	line-height: .12rem;
	font-size:.12rem;
	color:#aaa;
	margin:.06rem 0; 
}
.right p:nth-of-type(3){
	height:.2rem;
	line-height: .2rem;
	position:relative;
	color: #f60;
	font-size:.14rem;
	margin-top:.22rem;
}
.cart{
	position:relative;
	width:2rem;
}
.cart span{
	display:block;
	width:.24rem;
	height:.24rem;
	background:#53AAF7;
	line-height: .24rem;
	color:#fff;
	font-size:.2rem;
	position:absolute;
	right:.02rem;
	bottom:.05rem;
	font-weight:900;
	border-radius: 50%;
	text-align: center;
}
.lou.acti{
	background:#fff;
}
.rate{
	width:100%;
	margin-bottom:.1rem;
}
.rate li{
	float:left;
	height:.18rem;
	padding:.1rem .2rem;
	margin:.2rem .1rem;
	background:#007AFF;
	font-size:.14rem;
	color:#fff;
}
.ratetext {
	height:auto;
	width:100%;
	display:flex;
	justify-content: flex-start;
	flex-direction: column;
}
.ratetext li{
	width:100%;
	height:.6rem;
	margin:.1rem 0;
	display:block;
	padding-left:.2rem;
	box-sizing:border-box;
}
.ratewrap{
	height:6.96rem;
	overflow: hidden;
	width:100%;
}
</style>