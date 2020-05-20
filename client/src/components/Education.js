import React from "react"
import "../styles/Education.scss"
import { Link } from "react-router-dom"
import "../styles/Education.scss"

export default (props) => {
	return (
		<div className="container">
			<div className="education">
				<div>
					<div className="edLogo">
						<a
							href="https://punchcode.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="/assets/PunchCode.svg" alt="PunchCode logo" />
						</a>
					</div>
					<h3>Certification:</h3>
					<p>Full-Stack Software Engineer Program</p>
					<h3>What is PunchCode?</h3>
					<p>
						PunchCode is a 3 month fulltime coding bootcamp where I learned more
						than just how to write code. I completed 420 hours of education,
						experiences, performances, and examinations to earn my Certificate.
					</p>
					<h3>Why I Did It:</h3>
					<p>
						I realized I had a passion for coding and solving problems while I
						was pursuing my Assocaite's Degree, but I didn't have the right
						knowledge to land a job. I decided to enroll at PunchCode because it
						was a fast way to gain knowledge and experience. Although it was one
						of the toughest things I ever attempted, completing the program was
						beyond rewarding. I learned so much in 3 months, I can't wait to see
						what I can learn in the future.
					</p>
					<div className="edList">
						<h3>Languages/Technologies Learned:</h3>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>React</li>
							<li>Redux</li>
							<li>Node.js</li>
							<li>Express</li>
							<li>Socket.IO</li>
							<li>MySQL</li>
							<li>Sass</li>
							<li>Semantic UI</li>
						</ul>
					</div>
				</div>
				<div>
					<div className="edLogo">
						<img className="snhu" src="/assets/SNHUlogo.png" alt="SNHU logo" />
					</div>
					<h3>Degree:</h3>
					<p>Associate of Science</p>
					<h3>Program:</h3>
					<p>Information Technologies</p>
					<h3>Why I Did It:</h3>
					<p>
						I decided that I needed to make a career change. So I enrolled in
						the fulltime online Associate degree program while I was still
						working fulltime. It took about a year and a half to graduate, but
						it was well worth it. I graduated with a 4.0 GPA and Highest Honors.
						It helped me realize that I have a passion for technology and wanted
						to learn more.
					</p>
					<div className="edList">
						<h3>Featured Courses:</h3>
						<ul>
							<li>Fundamentals Information Technology</li>
							<li>Computer Platform Technologies</li>
							<li>Network and Telecom Management</li>
							<li>Project Management in Info Tech</li>
							<li>Cybersecurity and Information Assurance</li>
							<li>Introduction to Scripting</li>
							<li>Applied Statistics for STEM</li>
							<li>Bus Systems Analysis/Design</li>
						</ul>
					</div>
				</div>
				<Link to={"/"}>
					<button className="homeButton">Home</button>
				</Link>
			</div>
		</div>
	)
}
