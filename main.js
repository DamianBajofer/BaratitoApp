const express = require("express")
const app = express()

// app.set("port", process.env.PORT || 30000)

app.get("/", (request, response) => {
    response.send("HOLA PERROS")
})

const port = process.env.PORT || 3000
app.listen(port)