// import ---> require
const express = require('express')
const mongoose = require('mongoose')
// const config = require("./config")
const app = express()
// port 
const port = 1005
mongoose.connect('mongodb://127.0.0.1:27017/trainingAdnan')
    .then(()=>{
        console.log("successfully connected to mongoDB")
    })
    .catch((error)=>{
        console.error("error while connecting to DB :" , error)
    })
require("./routes/course.route")(app)
app.get('/' ,(req , res)=>{
    res.send("hello Adnan your server is working")
} )
app.listen(port , ()=>{
    console.log(`server is working of port ${port}`)
})
// actors (client , courses , student, techer)
// postman(testing tool)