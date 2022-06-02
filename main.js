const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("HOLA PERROS")
})
app.listen(3000, () => {
    console.log("HOLA PERROS!")
})