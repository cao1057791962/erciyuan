import React,{Component} from "react"
import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom"
import Observer from "../../static/js/observer.js"
import "../../static/css/common.css"
export default class Common extends Component {
	constructor(){
		super()
		this.state={
			IsShow:false,
			title:"卖座电影",
			pipe:"深圳"
		}
	}
	componentWillMount(){
		Observer.$on("address",msg=>{
			console.log(msg)
			this.setState({pipe:msg})
		})
	}
	render(){
		let{IsShow,title,pipe}=this.state
		return (
			<section>
				<header id="header">
				<p>
				<i className="iconfont icon-liebiao" onClick={this.Show.bind(this)}></i>
				<span>{title}</span>
				</p>
				<p>
				<span>{pipe}</span>
				<NavLink to="/Dw" onClick={this.set.bind(this,"选择城市")} className="iconfont icon-sanjiaodown"></NavLink>
				<i className="iconfont icon-guanbi"></i>
				</p>
				</header>
				<section id="wrap" className={IsShow?"acti":""} onClick={this.Show.bind(this)}>
					<nav className="nav">
					<NavLink to="/Home" className="tab" onClick={this.set.bind(this,"卖座电影")}><span>首页</span><i className="iconfont icon-arrow-right-copy-copy-copy"></i></NavLink>
					<NavLink to="/Movie" className="tab1" onClick={this.set.bind(this,"卖座电影")}><span>影片</span><i className="iconfont icon-arrow-right-copy-copy-copy"></i></NavLink>
					<NavLink to="/Cinema" className="tab2" onClick={this.set.bind(this,"卖座影院")}><span>影院</span><i className="iconfont icon-arrow-right-copy-copy-copy"></i></NavLink>
					<NavLink to="/Shop" className="tab3" onClick={this.set.bind(this,"卖座商城")}><span>商城</span><i className="iconfont icon-arrow-right-copy-copy-copy"></i></NavLink>
					<NavLink to="/Mine" className="tab4" onClick={this.set.bind(this,"登录")}><span>我的</span><i className="iconfont icon-arrow-right-copy-copy-copy"></i></NavLink>
					<NavLink to="/Card" className="tab5" onClick={this.set.bind(this,"查询")}><span>卖座卡</span><i className="iconfont icon-arrow-right-copy-copy-copy"></i></NavLink>
					</nav>
				</section>
			</section>
		)
	}
	Show(){
	this.setState({
		IsShow:!this.state.IsShow
	})
	}
	set(res){
		this.setState({title:res})
	}
}