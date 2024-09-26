const express = require("express");

const app = express()

const PORT = process.env.PORT || 3000

console.log(process.env)

app.get("/", (req, res)=> {

	res.send("hello")

})

app.listen(PORT, () => console.log("server runs on port", PORT))
