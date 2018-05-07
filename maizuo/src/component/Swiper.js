import React,{Component} from "react"
import PropTypes from 'prop-types'
import {getbanner}from "../server/Server"
import "../../static/css/common.css"

export default class SwiperCom extends Component{
	constructor(){
		super();
		this.state={
			listdata:[]
		}
	}
	componentWillMount(){
		getbanner(1524799612125).then(result=>{
			this.setState({listdata:result})
		})
	}
	render(){
		return(
				<div className="swiper-container" ref="swiper_container">
					  <div className="swiper-wrapper">
					  {
	    				this.state.listdata.map((item,index)=>{
	    					return(
	    						<div className="swiper-slide" key={index}>
	       							<img src={item.url} className="pic"/>
								</div>
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
	}
}
