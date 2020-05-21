const express = require("express")
const router = express.Router()

// router.get("*", (req, res, next) => {
// 	res.json({ message: "hello world" })
// })

router.get("/projects", (req, res, next) => {
	res.json(projects)
})

// router.get("/projects/:id", (req, res, next) => {
// 	res.json(projects)
// })

module.exports = router
