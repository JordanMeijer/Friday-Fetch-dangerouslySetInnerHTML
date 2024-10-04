const express = require("express")
const app = express()
const cors = require("cors")


// middleware
app.use(cors())

// content - html wrapped in a string, must stay on one line
// a paragraph element with some coloured text
const text = ""

// an image element with a path to an image from the internet set to 60vw
const image = ""

// div container with 60vw and display flex
// -inside a paragraph element with some text
// -inside an image element with a path to an image in frontend public
const textAndImage = ""


//routes
app.get("/text", (req, res) => {
    res.json({content: text})
})

app.get("/image", (req, res) => {
    console.log("image end point hit")
    res.json({content: image})
})

app.get("/text-and-image", (req, res) => {
    console.log("text and image end point hit")
    res.json({content: textAndImage})
})


// setup server
app.listen(4000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server is listening at http://localhost:4000")
    }
})