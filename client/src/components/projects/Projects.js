import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useProjects } from "../../hooks"
import "../../styles/projects/Projects.scss"

export default (props) => {
	const { projects, fetchProjects } = useProjects()

	useEffect(() => {
		fetchProjects()
	}, [])

	return (
		<div className="container">
			<div className="projects">
				{projects.map((project) => (
					<Link key={"project" + project.id} to={"/Projects/" + project.id}>
						<div className="individProject">
							<img src={project.image} alt={project.title + " replica"} />
							<div>
								<div>
									<p>{project.subtitle}</p>
									<h3>{project.title}</h3>
								</div>
								<p>{project.brief}</p>
							</div>
						</div>
					</Link>
				))}

				<Link to={"/"}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	)
}
