const express = require("express")
const app = express()

app.set("port", process.env.PORT || 3000)

app.get("/home", (request, response) => {
    response.render("./src/views/index")
})
app.listen(app.get("port"), () => {
    console.log(`Escuchando en puerto ${process.env.PORT}`)
})