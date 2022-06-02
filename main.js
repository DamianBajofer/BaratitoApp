const express = require("express")
const app = express()

app.set("port", process.env.PORT || 30000)

app.get("/", (request, response) => {
    response.send("HOLA PERROS")
})
app.listen(app.get("port"), () => {
    console.log(`Youre in port ${process.env.PORT}`)
})