const express = require("express")
const app = express()

app.set("port", process.env.PORT || 3000)

app.get("/", (request, response) => {
    response.render("index")
})
app.listen(app.get("port"), () => {
    console.log(`Escuchando en puerto ${process.env.PORT}`)
})