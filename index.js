const express  =  require('express')
const mongoDB = require('./config/mongoose')
const PORT = 5000
const app= express()

app.use('/', require('./routes'))

mongoDB.then( () => {
    app.listen(PORT,() => {
        console.log("Server is running on port")
    })
}).catch((error)=>{
    console.log("Error is connecting to DB!")
})
