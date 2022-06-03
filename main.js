const express = require("express")
const app = express()
const router = express.Router()
const path = require("path")

app.set("port", process.env.PORT || 3000)

app.get("/", (request, response) => {
    response.render("index")
})

app.get("/home", (request, response) => {
    response.render(path.join(__dirname, "views", "login.html"))
})

app.use("/", router)
app.listen(app.get("port"), () => {
    console.log(`Escuchando en puerto ${process.env.PORT}`)
})