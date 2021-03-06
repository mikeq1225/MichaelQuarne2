const express = require("express")
const path = require("path")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

const projects = [
	{
		id: 1,
		title: "Jurn(ease)",
		subtitle: "Capstone project",
		brief: "Complete web application",
		description:
			"A travel planning application that allows multiple users to plan group vacations in the same place.  They can create Jurn(e)s, or trips, and invite others to join.  Then everyone on the Jurn(e) can decide where to go, what do to, and where to stay.",
		problem:
			"How do you take an idea from conception to a finished application.",
		lessons:
			"I learned how to plan and execute a large project, how to take all the languages and tools from class and apply them to one project, how to use AWS as a remote MySQL database for our project, and I learned how to accomplish all of this while working remotely.",
		tech:
			"HTML, CSS, Sass, Semantic UI, JavaScript, React, Redux, Node.js, Express, MySQL, AWS-RDS, Slack, Zoom",
		image: "/assets/JurnEaseScreenShot.png",
		image2: "/assets/Jurnease2.png",
		link: "https://aqueous-refuge-23431.herokuapp.com/",
		link2: "https://demoday.punchcode.org/project/1",
	},
	{
		id: 2,
		title: "ChatRoom",
		subtitle: "8th project",
		brief: "Front & backend clone of Slack",
		description:
			"A week long project the whole class worked on together. We all wrote our own code, but we did the planning side of things as a group.  We had to plan the project from scratch to copy Slack features in an Agile type setting with daily meetings.",
		problem:
			"What is the proper way to plan, track, and execute a larger project while incorporating authentication.",
		lessons:
			"I learned how to use GitHub's Projects tab to create tickets, assign them, and track the progress of the project.  I also created an MVP (minimum viable project) as well as future features for the project.  I also learned the basics of authentication and validation.",
		tech:
			"HTML, CSS, JavaScript, React, Redux, Node.js, Express, Socket.IO, MySQL",
		image: "/assets/chatRoom1.png",
		image2: "/assets/chatRoom2.png",
		link: "https://github.com/mikeq1225/chatRoom",
	},
	{
		id: 3,
		title: "RyansList",
		subtitle: "7th project",
		brief: "Front & backend clone of CraigsList",
		description:
			"We were tasked with making a replica CraigsList website where users could search and add postings using React components and a MySQL database.",
		problem:
			"Using React and Redux to keep track of several different pieces of state on different components while integrating a MySQL database.",
		lessons:
			"I learned how to construct useful and concise MySQL queries to retrieve date from and add data to the database.",
		tech: "HTML, CSS, JavaScript, React, Redux, Node.js, Express, MySQL",
		image: "/assets/ryan_listScreenshot.png",
		image2: "/assets/ryanList2.png",
		link: "https://mighty-garden-83965.herokuapp.com/",
	},
	{
		id: 4,
		title: "Shopping Cart",
		subtitle: "6th project",
		brief: "First project with Redux",
		description:
			"Our first steps in React. We had to recreate a T-shirt website with the ability to add and delete in a cart as well as simulating a checkout/receipt screen.",
		problem:
			"How to use React and Redux to control the state of items in the cart.",
		lessons:
			"I learned how to effectively use components to make my code more manageable as well as creating a seamless experience for the user. I also learned how to use Redux to monitor the state of items in the cart as well as some new CSS properties.",
		tech: "HTML, CSS, JavaScript, React, Redux, Node.js, JSON-Server",
		image: "/assets/ReactShoppingCart.png",
		image2: "/assets/ReactShoppingCart2.png",
		link: "https://mikeq1225.github.io/react-shopping-cart/",
	},
	{
		id: 5,
		title: "Mustang Photo Album",
		subtitle: "5th project",
		brief: "First project with React",
		description:
			"A photo album based an a topic of our choosing. We were given the wire frame layout of each page and we had to replicate it.  We also had to create our own data set in a JSON file and be able to dynamically display that data.",
		problem:
			"How to create different routes within a single page application to make it appear as though the user was navigating to a new page.",
		lessons:
			"I learned how to use React Router to create the routes for each component and make it possible to switch between those routes without reloading the page.",
		tech: "HTML, CSS, JavaScript, React, React Router, JSON-Server",
		image: "/assets/photoAlbum1.png",
		image2: "/assets/photoAlbum2.png",
		link: "https://cryptic-dusk-52003.herokuapp.com/",
	},
	{
		id: 6,
		title: "Superman Memory Game",
		subtitle: "4th project",
		brief: "DOM manipulation with jQuery",
		description:
			"A simple memory game like we used to play as a child.  There is a deck of cards face down. Flip them over and try to match all the pairs before you run out of turns.",
		problem:
			"How to keep track of what the user is doing on each turn and how that turn effects the entire game.",
		lessons:
			"I learned how to use jQuery to manipulate the DOM based on the winning or losing as well as using CSS animations for the card flips.",
		tech: "HTML, CSS, JavaScript, jQuery",
		image: "/assets/memory1.png",
		image2: "/assets/memory2.png",
		link: "https://mikeq1225.github.io/Memory/",
	},
	{
		id: 7,
		title: "BarCade Restaurant",
		subtitle: "3rd project",
		brief: "Group Project of a fictional restaurant",
		description:
			"A group assignment where we utilized Github for version control and collaboration to make a website for a fictional restaurant. We were given a JSON file with menu items.",
		problem:
			"How do we work on the same project without causing problems and still creating a cohesive looking website.",
		lessons:
			"I learned how to use Github branches to ensure my team could work on the same website but in different sections to avoid conflicts.",
		tech: "HTML, CSS, JavaScript, jQuery, GitHub",
		image: "/assets/GroupProject.png",
		image2: "/assets/GroupProject.png",
		link: "https://mikeq1225.github.io/Group-Project/",
	},
	{
		id: 8,
		title: "Etsy Search Page",
		subtitle: "2nd project",
		brief: "HTML recreation with JavaScript",
		description:
			"Given a mock-up of an Etsy page, we had to recreate the page. We were also given a file with dummy data to be used for the search.",
		problem: "How to dynamically import the data without typing all of it out.",
		lessons:
			"This was our first step into JavaScript. I also learned how to use jQuery to create a template to map through and display the data.",
		tech: "HTML, CSS, JavaScript, jQuery",
		image: "/assets/RecreateEtsy.png",
		image2: "/assets/RecreateEtsy.png",
		link: "https://mikeq1225.github.io/Create-Etsy-Search-Page/",
	},
	{
		id: 9,
		title: "Ska8er Site",
		subtitle: "1st project",
		brief: "HTML recreation",
		description:
			"Our first project in class. We were given an image of a website and we had to recreate the site. It was meant to teach us principles of HTML and CSS.",
		problem:
			"Trying to figure out how to position things in the correct space and order.",
		lessons:
			"I learned how to use CSS Grid and Flex quite well. Also learned how to use pseudo elements.",
		tech: "HTML, CSS",
		image: "/assets/Ska8er_Site.png",
		image2: "/assets/Ska8er_Site.png",
		link: "https://mikeq1225.github.io/Sk8er-Site/",
	},
]

app.get("/api/projects", (req, res) => {
	res.json(projects)
})

app.get("/api/projects/:id", (req, res) => {
	const id = Number(req.params.id)
	const project = projects.find((project) => project.id === id)
	if (project) {
		res.json(project)
	} else {
		res.json("No project found")
	}
})

app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname + "/public/index.html"))
})

const port = process.env.PORT || 4001
app.listen(port, () => {
	console.log(`LISTENING ON PORT ${port}`)
})
