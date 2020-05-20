import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useProjects } from "../../hooks"
import "../../styles/projects/ProjectView.scss"
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa"
// react-animation for transitions
import { AnimateOnChange, HideUntilLoaded } from "react-animation"

export default (props) => {
	const [left, setLeft] = useState("")
	const [right, setRight] = useState("")
	const { project, fetchProject, fetchLinks } = useProjects()
	const id = props.match.params.id

	// used to scroll left and right through projects and update info
	useEffect(() => {
		fetchProject(id)
		fetchLinks(id).then((data) => {
			setLeft(data.left)
			setRight(data.right)
		})
	}, [id])

	return (
		<div className="container">
			<div className="project">
				<div className="project1">
					<Link className="arrow" to={`/Projects/${left}`}>
						<FaAngleDoubleLeft />
					</Link>
					{/* animates changes when children change */}
					<AnimateOnChange durationOut={600}>
						<div>
							<Link to={"/Projects"}>
								<HideUntilLoaded imageToLoad={project.image2} animation="fade">
									<img src={project.image2} alt={project.title + " replica"} />
								</HideUntilLoaded>
							</Link>
							<div>
								<h1>{project.title}</h1>
								<p>Description:</p>
								<h2>{project.description}</h2>
								<p>Issues Faced:</p>
								<h2>{project.problem}</h2>
								<p>Lessons Learned:</p>
								<h2>{project.lessons}</h2>
								<p>Languages/Technologies Used:</p>
								<h2>{project.tech}</h2>
								<p>Link:</p>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<h2>{project.title}</h2>
								</a>
							</div>
						</div>
					</AnimateOnChange>
					<Link className="arrow" to={`/Projects/${right}`}>
						<FaAngleDoubleRight />
					</Link>
				</div>
				<Link to={"/"}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	)
}
