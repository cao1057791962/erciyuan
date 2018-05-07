import React,{Component} from "react"
import {HashRouter ,Route, NavLink, Redirect, Switch} from 'react-router-dom'
import Home from "./pages/Home.js"
import Movie from "./pages/Movie.js"
import Cinema from "./pages/Cinema.js"
import Shop from "./pages/Shop.js"
import Dw from "./component/Dw.js"
import Common from "./component/Common.js"
import Mine from "./pages/Mine.js"
import Detail from "./pages/Detail.js"
import "../static/css/reset.css"
export default class App extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<HashRouter>
			<section>
				<Common/>
				 <Switch>
					<Route exact path="/" render={()=>{
                            return <Redirect to="/Home"/>
                    }}/>
                     <Route path="/Shop" component={Shop}/>
                    <Route path="/Dw" component={Dw}/>
					<Route path="/Home" component={Home}/>
					<Route cache="root" path="/Movie"  component={Movie}/>
					<Route path="/Cinema" component={Cinema}/>
					<Route path="/Mine" component={Mine}/>
					<Route path="/Detail/:id" component={Detail}/>
				 </Switch>
			</section>
			</HashRouter>
		)
	}
}
