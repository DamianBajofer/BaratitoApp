const express = require("express")
const app = express()

app.set("port", process.env.PORT || 3000)

app.get("/", (request, response) => {
    response.render("index")
})

app.get("/home", (request, response) => {
    response.render(app.path("src/views/home"))
})

app.get("/register", (request, response) => {
    response.render(app.path("/src/views/register"))
})

app.get("/login", (request, response) => {
    response.render(app.path("./src/views/login"))
})

app.get("/tokens", (request, response) => {
    response.render(`${__dirname}/src/views/index`)
})

app.get("/tokens1", (request, response) => {
    response.render(app.path(`${__dirname}/src/views/index`))
})

app.listen(app.get("port"), () => {
    console.log(`Escuchando en puerto ${process.env.PORT}`)
})