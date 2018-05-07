import React,{Component} from "react"
import PropTypes from 'prop-types'

import {getcinema} from "../server/Server"
import "../../static/css/home.css"
export default class Cinema extends Component{
	constructor(){
		super()
		this.state={
			datalist:[],
			ishow:false,
			suoyin:-1,
			myScroll:null
		}
	}
	componentWillMount(){
		let time=new Date().getTime()
		getcinema(time).then(result=>{
			this.setState({datalist:result})
		})
	}
	render(){
		let {datalist,ishow,suoyin} =this.state
		return(
			<section className="box" ref="cinemabox">
				<div>
					{
						datalist.map((item,index)=>{
							return(
								<div key={index}>
								<p className="cinematitle" onClick={this.zhankai.bind(this,index)}>{item.letter}</p>
								{(ishow&&suoyin==index)&&<ul className="cinemalist">
									{
										item.list.map((act,ind)=>{
											return(
												<li key={ind}>
												<div>
												<p>{act.name}</p>
												<span>{act.address}</span>
												<span>距离未知</span>
												</div>
												</li>
											)
										})
									}
								</ul>}
								</div>
							)
						})
					}
				</div>
			</section>
		)
	}
	componentDidMount(){
		var myScroll = new IScroll(this.refs.cinemabox, {
	  		probeType: 3
	  	});
	  	myScroll.on('beforeScrollStart',()=>{
	  		myScroll.refresh()
	  	});

	}
	zhankai(index){
		this.setState({ishow:!this.state.ishow,
			suoyin:index
		});
	}
}
