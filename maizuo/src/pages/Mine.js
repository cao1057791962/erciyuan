import React,{Component} from "react"
import "../../static/css/home.css"
export default class Mine extends Component{
	render(){
		return(
			<div className="box mine">
				<div className="first-input">
				<input type="number" placeholder="输入手机号"/>
				<span></span>
				</div>
				<div>
				<input type="text" placeholder="输入验证码"/>
				<span></span>
				</div>
				<div>
					<input type="button" value="登录"/>
				</div>
			</div>
		)
	}
}
