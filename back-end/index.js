const express = require("express")
const app = express()
const cors = require("cors")


// middleware
app.use(cors())

// content - html wrapped in a string, must stay on one line
// a paragraph element with some coloured text
const text = ""

// an image element with a path to an image in frontend public sizing the image
const image = ""

// div container with 50vw and display flex
// -inside a paragraph element with some text
// -inside an image element with a path to an image in frontend public
const textAndImage = ""


//route
app.get("/text", (req, res) => {
    res.send(res.json({content: text}))
})

app.get("/image", (req, res) => {
    res.send(res.json({contet: image}))
})

app.get("/text-and-image", (req, res) => {
    res.send(res.json({contet: textAndImage}))
})


// setup server
app.listen(4000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server is listening at http://localhost:4000")
    }
})