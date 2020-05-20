import React from "react"
import ReactPlayer from "react-player"
import "../styles/AboutMe.scss"
import { Link } from "react-router-dom"

export default (props) => {
	return (
		<div className="container">
			<div className="aboutMe">
				<div>
					<ReactPlayer
						className="reactPlayer"
						url="https://www.youtube.com/watch?v=XxrOahK4cDE&t=2s"
						controls={true}
					/>
					<p>
						I am a full-stack web developer from Las Vegas and a recent graduate
						from PunchCode’s three month long Full-Stack Software Engineer
						bootcamp. Skilled at building web applications from the ground up –
						from concept, to design, to writing well-designed, testable and
						efficient code while focusing on UX/UI. The completion of my
						capstone project, a vacation planning web application called
						Jurn(ease), showcases how much I have learned in the past three
						months. I am going to continue to learn new languages and techniques
						to improve my overall coding skills.
					</p>
					<p>
						My coding philosophy starts with strategic planning, designing, and
						developing applications to help reach desired objectives and goals.
						I try to surround myself with technical people, activities, hobbies,
						and endeavors that push me to keep learning through experiences.
					</p>
					<p>
						Originally from Milwaukee, WI, my wife and I relocated to Las Vegas
						a few years ago after our children joined the military and informed
						us that they would not be moving back to Wisconsin. We decided it
						was a good time to move somewhere warm to begin an exciting a new
						chapter in our lives. Las Vegas has not let us down. It has so much
						to offer and we have meet some amazing new friends.
					</p>
				</div>
				<Link to={"/"}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	)
}
