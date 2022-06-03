const express = require("express")
const app = express()
const router = express.Router()
const path = require("path")

app.set("port", process.env.PORT || 3000)

app.set("views", path.join(__dirname, "views"))

router.get("/", (request, response) => {
    response.render("index")
})

router.get("/home", (request, response) => {
    response.render("home")
})

app.use("/", router)
app.listen(app.get("port"), () => {
    console.log(`Escuchando en puerto ${process.env.PORT}`)
})