import React,{Component} from "react"
import {getnow,getcoming} from "../server/Server"
import {Link} from "react-router-dom"
import store from "../store"
import "../../static/css/home.css"
import PropTypes from 'prop-types'
export default class Movie extends Component{
	constructor(){
		super();
		this.state={
			datalist:[],
			data:[],
			now:true,
			coming:false
		}
	}
	componentWillMount(){
		let time=new Date().getTime()
		getnow(time,1,7).then(result=>{
			this.setState({datalist:result})
		});
		getcoming(time,1,7).then(result=>{
			this.setState({data:result})
		});
	}
	render(){
		let {datalist,data,now,coming}=this.state
		return (
			<div className="box movie" ref="moviebox">
				<div>
					<div className="top">
						<span className={now?'activ':""} onClick={this.qiehuan.bind(this)}>正在热映</span>
						<span className={coming?'activ':""} onClick={this.qiehuan1.bind(this)}>即将上映</span>
					</div>
					{now&&<ul>
					{
						datalist.map((item,index)=>{
							return(
								<li key={index}>
								<Link to={"/Detail/"+item.id}>
								<img src={item.poster.origin}/>
								<div>
									<p>{item.name}</p>
									<span>{item.intro}</span>
									<strong>
									<i>{item.cinemaCount}家影院上映</i>
									<i>{item.watchCount}人购票</i>
									</strong>
									<a>{item.grade}<i className="iconfont icon-arrow-right-copy-copy-copy"></i></a>
								</div>
								</Link>
								</li>
							)
						})
					}
					</ul>}
					{coming&&<ul>
					{
						data.map((item,index)=>{
							return(
								<li key={index}>
								<Link to={"/Detail/"+item.id}>
								<img src={item.poster.origin}/>
								<div>
									<p>{item.name}</p>
									<span>{item.intro}</span>
									<strong>
									<i>{item.cinemaCount}家影院上映</i>
									<i>{item.watchCount}人购票</i>
									</strong>
									<a>{item.grade}<i className="iconfont icon-arrow-right-copy-copy-copy"></i></a>
								</div>
								</Link>
								</li>
							)
						})
					}
					</ul>}
				</div>
			</div>
		)
	}
	componentDidMount(){
		this.setState({
			now:store.getState().now,
			coming:store.getState().coming
		})
		var s=1;
		var myScroll = new IScroll(this.refs.moviebox, {
	  		probeType: 3
	  	});
	  	myScroll.on('beforeScrollStart',()=>{
	  		myScroll.refresh()
	  	});
	  	myScroll.on("scrollEnd",()=>{
	  		if(myScroll.y<=myScroll.maxScrollY)
	  		{
	  			s++;
	  			let time=new Date().getTime()
	  			getnow(time,s,7).then(result=>{
					this.setState({datalist:[...this.state.datalist,...result]})
				});
				getcoming(time,s,7).then(result=>{
					this.setState({data:[...this.state.data,...result]})
				});
	  		}
	  	})
	}
	qiehuan(ev){
		this.setState({now:true,coming:false});
	}
	qiehuan1(){
		this.setState({now:false,coming:true})
	}
}
