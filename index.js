const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")

app.use(express.urlencoded({ extended: true })) //for req.body
app.use(express.json()) //for req.body
app.use(cors()) //for cross-origin requests

app.get("/", cors(), async (req, res) => {
    res.send("Hello World")
 })

 app.post("/signup", async(req, res) => {
    console.log('hi')
    let { name, email, password, age, salary, rent, goals } = req.body
    const success = true;
    console.log(name, email, password,  age, salary, rent, goals)
    res.json({ success });
 })

 app.get("/home", cors(), async (req, res) => {
    res.send("Welcome to home page")
 })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})