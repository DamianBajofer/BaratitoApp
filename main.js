const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("HOLA PERROS")
})

app.listen(80, () => {
    console.log("HOLA PERROS!")
})