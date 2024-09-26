const express = require("express");

const app = express()

const PORT = process.env.PORT || 3000

console.log(process.env)

app.use(express.json())

app.get("/", (req, res)=> {

	res.send("hello")

})

app.get("/hello", (req, res)=> {


	console.log("hello")
	res.send("siuuu")

})

app.post("/something", (req, res) => {

	console.log(req.body)	

	res.send(req.body)
})

app.listen(PORT, () => console.log("server runs on port", PORT))
