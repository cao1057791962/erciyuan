import React,{Component} from "react"
import SwiperCom from "../component/Swiper"
import ListCom from "./ListCom"
export default class Home extends Component{
	constructor(){
		super()
	}
	render(){
		return (
			<section className="box" ref="homebox">
				<div>
				<SwiperCom/>
				<ListCom/>
				</div>
			</section>
		)
	}
	componentDidMount(){
		var myScroll = new IScroll(this.refs.homebox, {
	  		probeType: 3
	  	});
	  	myScroll.on('beforeScrollStart',()=>{
	  		myScroll.refresh()
	  	});
	  	
	}
}
