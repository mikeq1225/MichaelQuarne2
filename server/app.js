const express = require("express")
const exampleRoutes = require("./routes/example")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", exampleRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
