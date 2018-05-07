import React,{Component} from "react"
import PropTypes from 'prop-types'
import {getaddress} from "../server/Server.js"
import "../../static/css/common.css"
import Observer from "../../static/js/observer.js"
export default class Dw extends Component{
	constructor(){
		super();
		this.state={
			datalist:[],
			title:"深圳"
		}
	}
	componentWillMount(){
		getaddress(1524741504958).then(result=>{
			this.setState({datalist:result});
			console.log(result[0].list)
		})
	}
	render(){
		let {datalist,title}=this.state;
		return(
			<section id="dw" ref="dwbox">
				<div>
				<div className="dw-top">
					<p>GPS定位你所在城市</p>
					<ul className="clearfix">
						<li>{title}</li>
					</ul>
				</div>
				<div className="dw-top">
					<p>热门城市</p>
					<ul className="clearfix">
						<li>北京</li>
						<li>上海</li>
						<li>广州</li>
						<li>深圳</li>
					</ul>
				</div>
				<div className="dw-top">
					<p>按字母排序</p>
					<ul className="clearfix">
						{
							datalist.map((item,index)=>{
								return(
									<li key={index}>{item.letter}</li>
								)
							})
						}
					</ul>
				</div>
				{
					datalist.map((item,index)=>{
						return(
							<div className="dw-top" key={index}>
								<p>{item.letter}</p>
								<ul className="clearfix">
									{
										item.list.map((act,ind)=>{
										return(
											<li key={ind} onClick={this.setaddress.bind(this)}>{act.name}</li>
										)
										})
									}
								</ul>
							</div>
						)
					})
				}
				</div>
			</section>
		)
	}
	componentDidMount(){
		var myScroll = new IScroll(this.refs.dwbox, {
	  		probeType: 3
	  	});
	  	myScroll.on('beforeScrollStart',()=>{
	  		myScroll.refresh()
	  	});
	}
	setaddress(ev){
		this.setState({title:ev.target.innerText})
		Observer.$emit("address",ev.target.innerText)
	}
}
