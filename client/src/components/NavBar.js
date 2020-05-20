import React from "react"
import "../styles/NavBar.scss"
import { Link } from "react-router-dom"

export default (props) => {
	return (
		<div className="navMenu">
			<Link to={"/About"}>
				<button>About Me</button>
			</Link>
			<Link to={"/Projects"}>
				<button>Projects</button>
			</Link>
			<Link to={"/Education"}>
				<button>Education</button>
			</Link>
			<Link to={"/Resume"}>
				<button>Resume</button>
			</Link>
		</div>
	)
}
