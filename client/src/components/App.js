import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Projects from "./projects/Projects"
import ProjectView from "./projects/ProjectView"
import Education from "./Education"
import SocialBar from "./SocialBar"
import NavBar from "./NavBar"
import Resume from "./Resume"

export default (props) => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Home}></Route>
				<Route path="/" component={SocialBar}></Route>
				<Route path="/" component={NavBar}></Route>
				<Route path="/About" component={AboutMe}></Route>
				<Route path="/Resume" component={Resume}></Route>
				<Route exact path="/Projects" component={Projects}></Route>
				<Route path="/Education" component={Education}></Route>
				{/* Try lazy load for project view */}
				<Route path="/Projects/:id" component={ProjectView}></Route>
			</div>
		</Router>
	)
}
