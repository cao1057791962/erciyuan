import React,{Component} from "react"
import "../../static/css/shop.css"
import Banner from "../component/Banner.js"
import {getsp}from "../server/Server"
export default class Shop extends Component{
	constructor(){
		super();
		this.state={
			datali:[]
		}
	}
	render(){
		let {datali}=this.state;
		return (
			<section className="box" ref="shopbox">
				<div>
					<Banner datalist={datali}/>
				</div>
			</section>
		)
	}
	componentDidMount(){
		var s=1;
		var myScroll = new IScroll(this.refs.shopbox, {
	  		probeType: 3
	  	});
	  	myScroll.on('beforeScrollStart',()=>{
	  		myScroll.refresh()
	  	});
	  	myScroll.on("scrollEnd",()=>{
	  		if(myScroll.y<=myScroll.maxScrollY)
	  		{
	  			s++;
	  			getsp(s,20).then(result=>{
					this.setState({datali:[...this.state.datali,...result]})
				})
	  		}
	  	})
	}
}
