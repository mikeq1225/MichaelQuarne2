import React, { Suspense } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import SocialBar from "./SocialBar"
import NavBar from "./NavBar"

const ProjectView = React.lazy(() => import("./projects/ProjectView"))
const AboutMe = React.lazy(() => import("./AboutMe"))
const Education = React.lazy(() => import("./Education"))
const Resume = React.lazy(() => import("./Resume"))
const Projects = React.lazy(() => import("./projects/Projects"))

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
