const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const {connetDb} = require("./config/database")
const transactionRoutes = require('./routers/router')
app.use(express.json())
app.use(bodyParser.json())



app.use('/',transactionRoutes)

connetDb().then(() =>{
    console.log("connected succesfully")
    app.listen(3000, () =>{
        console.log("server running on http://localhost:3000/")
    })
}).catch(() =>{
    console.log("Something went wrong!!!")
})

