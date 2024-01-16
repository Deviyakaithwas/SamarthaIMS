const mongoose = require('mongoose')

const mongoDB=  mongoose.connect('mongoDB://localhost:27017/IMS')

module.exports=mongoDB