import React,{Component}from "react"
import PropTypes from 'prop-types'
import "../../static/css/shop.css"
import {getbannerlist,getsp}from "../server/Server"
export default class Banner extends Component{
	constructor(){
		super();
		this.state={
			banner:[],
			tipc:[],
			tip:[],
			tip1:[],
			list:[],
			list1:[]
		}
	}
	componentWillMount(){
		getbannerlist().then(result=>{
			this.setState({banner:result[0],
			tipc:result[1],
			tip:result[2],
			tip1:result[3],
			list:result[4],
			list1:result[5]
			})
		})
	}
	render(){
		let {datalist}=this.props;
		console.log(datalist)
		return(
			<div>
			<div className="swiper-container" ref="swiper_container">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
					<img className="bannerpic" src="http://mall.s.maizuo.com/9d59343095beb5b8161bc99423870741.jpg"/>
					</div>
					<div className="swiper-slide">
					<img className="bannerpic" src="http://mall.s.maizuo.com/55739c99de0985e22573d55d4f2c3981.jpg" />
					</div>
				 </div>
			</div>
			<ul className="banner">
				{
					this.state.banner.map((item,index)=>{
						return(
								<li key={index}>
								<img src={item.imageSrc}/>
								<span>{item.name}</span>
							</li>
						)
					})
				}
			</ul>
			<p className="title">有品专区</p>
			<div className="biaoti clearfix">
				{
					this.state.tipc.map((ic,ii)=>{
						return(
							<a key={ii}>
							<img src={ic.imageSrc}/>
							</a>
						)
					})
				}
			</div>
			<div className="biaoti clearfix">
				<img src={this.state.tip} className="biaotipic"/>
				<div ref="rightscroll">
				<div className="clearfix scroll">
				{
					this.state.list.map((itt,lg)=>{
						return(
							<li key={lg}>
								<img src={itt.image}/>
								<p>{itt.name}</p>
								<span>¥{(itt.price/100).toFixed(2)}</span>
							</li>
						)
					})
				}
				</div>
				</div>
			</div>
			<div className="biaoti clearfix">
				<img src={this.state.tip1} className="biaotipic"/>
				<div ref="leftscroll">
				<div className="clearfix scroll">
				{
					this.state.list1.map((itt1,lg)=>{
						return(
							<li key={lg}>
								<img src={itt1.image}/>
								<p>{itt1.name}</p>
								<span>¥{(itt1.price/100).toFixed(2)}</span>
							</li>
						)
					})
				}
				</div>
				</div>
			</div>
			<p className="title">好货精选</p>
			<div className="biaoti clearfix bg">
				{
					datalist.map((item,index)=>{
						return(
							<strong key={index}>
								<img src={item.arr[0].img}/>
								<p>{item.name}</p>
								<span><i>¥{(item.arr[0].price/100).toFixed(2)}</i>已售：{item.shouchu}</span>
							</strong>
						)
					})
				}
			</div>
			</div>
		)
	}
	componentDidMount(){
	  	let SwiperDom = this.refs.swiper_container;
		let Swiper1=new Swiper(SwiperDom, {
			autoplay: 3000,
			loop: true,
			observer: true, 
			observeParents: true, 
			autoplayDisableOnInteraction: false,
		})
		var myScroll = new IScroll(this.refs.leftscroll, {
	  		probeType: 3,
	  		scrollX:true
	  	});
	  	myScroll.on('beforeScrollStart',()=>{
	  		myScroll.refresh()
	  	});
	  	var myScroll1 = new IScroll(this.refs.rightscroll, {
	  		probeType: 3,
	  		scrollX:true
	  	});
	  	myScroll1.on('beforeScrollStart',()=>{
	  		myScroll1.refresh()
	  	});
	}
}
Banner.propTypes = {
  datalist:PropTypes.array
};
