const express = require("express")
const app = express()

// app.set("port", process.env.PORT || 30000)

const port = process.env.PORT || 3000
app.listen(port)