import React,{Component} from "react"
import "../../static/css/detail.css"
import {getxx} from "../server/Server"
export default class Detail extends Component{
	constructor(){
		super();
		this.state={
			data:null
		}
	}
	componentWillMount(){
		let time =new Date().getTime();
		const id=this.props.match.params.id;
		getxx(id,time).then(result=>{
			let datalist=result;
			let Dom=(
				<section>
				<img className="x-pic" src={datalist.cover.origin}/>
				<div className="boxb">
					<h2>影片介绍</h2>
					<p>导演:{datalist.director}</p>
					<p>主演:{
						datalist.actors.map((item,index)=>{
							return(
								<i key={index}>{item.name}</i>
							)
						})
					}</p>
					<p>地区语言:{datalist.nation}</p>
					<p>类型:{datalist.category}</p>
					<p>上映时间:{new Date(datalist.premiereAt).getMonth()+1}月{new Date(datalist.premiereAt).getDate()}号上映</p>
					<div className="neiron">{datalist.synopsis}</div>
					
				</div>
				<div className="bt">
					<input type="button" value="立即购票"/>
				</div>
				</section>
			)
			this.setState({data:Dom})
		})
	}
	render(){
		let {data}=this.state
		return(
			<div className="box detail" ref="detailbox">
				{data}
			</div>
		)
	}
	componentDidMount(){
		
	}
}
