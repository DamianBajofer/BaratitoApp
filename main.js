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

app.set("login", "./views/login")
app.get("/login", (request, response) => {
    response.render(app.get("login"))
})

app.listen(app.get("port"), () => {
    console.log(`Escuchando en puerto ${process.env.PORT}`)
})