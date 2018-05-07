import React,{Component} from "react"
import PropTypes from 'prop-types'
import store from "../store"
import {NavLink,Link} from "react-router-dom"
import {getnow,getcoming} from "../server/Server"
import "../../static/css/home.css"
export default class ListCom extends Component{
	constructor(){
		super();
		this.state={
			datalist:[],
			data:[]
		}
	}
	componentWillMount(){
		let time=new Date().getTime()
		getnow(time,1,5).then(result=>{
			this.setState({datalist:result})
		});
		getcoming(time,1,3).then(result=>{
			this.setState({data:result})
		});
	}
	render(){
		let {datalist,data}=this.state
		return(
			<div className="list-wrap">
			<ul className="listwrap">
				{
					datalist.map((item,index)=>{
						return(
							<li key={index} className="picbox">
							<Link to={"/Detail/"+item.id}>
							<div className="firstbox">
							<img src={item.cover.origin}/>
							<div className="re">
							<span>{item.name}</span>
							<p>{item.cinemaCount}家影院上映{item.watchCount}人购票</p>
							<i>{item.grade}</i>
							</div>
							</div>
							</Link>
							</li>
						)
					})
				}
				<li className="btn">
					<NavLink to="/Movie" onClick={this.now.bind(this)}>更多热映电影</NavLink>
				</li>
			</ul>
			<ul className="listwrap">
				{
					data.map((item,index)=>{
						return(
							<li key={index} className="picbox">
							<Link to={"/Detail/"+item.id}>
							<div className="firstbox">
							<img src={item.cover.origin}/>
							<div className="re">
							<span>{item.name}</span>
							<i>{item.grade}</i>
							</div>
							</div>
							</Link>
							</li>
						)
					})
				}
				<li className="btn">
					<NavLink to="/Movie" onClick={this.coming.bind(this)}>更多即将上映电影</NavLink>
				</li>
			</ul>
			</div>
		)
	}
	now(){
		store.dispatch({
            type: 'change-listen1',
            value: {now:true,com:false}
       });
	}
	coming(){
		store.dispatch({
            type: 'change-listen',
            value: {now:false,com:true}
       });
	}
}
