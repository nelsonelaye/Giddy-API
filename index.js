require("dotenv").config()
const { config } = require("dotenv")
const express = require("express")
const port = process.env.PORT || 1990

const server = express()
server.use(express.json())

server.get("/", (req, res) => {
    res.status(200).json({
        message: "Looking at the sky, tell you really, I can't cry..."
    })
})

server.listen(port , ()=> {
    console.log("Port ", port)
})
