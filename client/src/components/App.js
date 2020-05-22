import React, { Suspense } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import AboutMe from "./AboutMe"
import Projects from "./projects/Projects"
// import ProjectView from "./projects/ProjectView"
import Education from "./Education"
import SocialBar from "./SocialBar"
import NavBar from "./NavBar"
import Resume from "./Resume"

const ProjectView = React.lazy(() => import("./projects/ProjectView"))

export default (props) => {
	return (
		<Router>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<Route exact path="/" component={Home}></Route>
					<Route path="/" component={SocialBar}></Route>
					<Route path="/" component={NavBar}></Route>
					<Route path="/About" component={AboutMe}></Route>
					<Route path="/Resume" component={Resume}></Route>
					<Route exact path="/Projects" component={Projects}></Route>
					<Route path="/Education" component={Education}></Route>
					<Route path="/Projects/:id" component={ProjectView}></Route>
				</Suspense>
			</div>
		</Router>
	)
}
