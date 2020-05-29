const express = require("express")
const router = express.Router()

// router.get("/projects", (req, res, next) => {
// 	res.json(projects)
// })

// router.get("/projects/:id", (req, res, next) => {
// 	res.json(projects)
// })

router.get("/api/projects", (req, res) => {
	res.json(projects)
})

router.get("/api/projects/:id", (req, res) => {
	const id = Number(req.params.id)
	const project = projects.find((project) => project.id === id)
	if (project) {
		res.json(project)
	} else {
		res.json("No project found")
	}
})

module.exports = router
