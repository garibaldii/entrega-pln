const express = require("express")
const path = require("path")
const routes = require("./routes/SearchRoute")

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.use("/api", routes)

app.listen("3000", () => {
    console.log("Servidor rodando!!")
})