const express = require("express");
const http = require("http")
const app = express()
const body_parser = require("body-parser")
const PORT = process.env.PORT || 3000

const ws = require("ws")

const server = http.createServer(app)

const wss = new ws.WebSocketServer({server})

wss.on("connection", socket => {


	socket.on("message", msg => {

		console.log(msg.toString())

		socket.send("ping")

	})

})

app.use(express.json())
app.use(body_parser())

app.get("/", (req, res)=> {

	res.send("hello")

})

app.get("/hello", (req, res)=> {


	console.log("hello")
	res.send("siuuu")

})

app.post("/something", (req, res) => {

	console.log(req.body)	

	res.send("hello")
})

server.listen(PORT, () => console.log("server runs on port", PORT))
