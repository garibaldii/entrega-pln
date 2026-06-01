const express = require("express")
const path = require("path")
const routes = require("./routes/SearchRoute")
const dotenv = require('dotenv')

dotenv.config()
const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.use("/api", routes)

app.listen("3000", () => {
    console.log("Servidor rodando!!")
})