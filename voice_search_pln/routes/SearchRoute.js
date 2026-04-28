const express = require("express")
const router = express.Router()

const controller = require("../controller/SearchController")

router.get("/search", controller.search)

module.exports = router