const express = require("express")
const app = express()

app.set("port", process.env.PORT || 3000)

app.get("/", (request, response) => {
    response.render("index")
})

app.get("/home", (request, response) => {
    response.render("home")
})

app.get("/register", (request, response) => {
    response.render(require("register"))
})

app.get("/login", (request, response) => {
    response.render(app.path("login"))
})

app.listen(app.get("port"), () => {
    console.log(`Escuchando en puerto ${process.env.PORT}`)
})