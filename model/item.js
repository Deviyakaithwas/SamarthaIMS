const mongoose = require('mongoose')

const itemsDetailISchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    }, 
    prices:{
        type:Number,
        required: true,
    },
    supplierinfo:{
        type: String,
        required: true
    },
    mfgdate:{
        type:Date,
        required: true,
    }
})

const ItemDetails = mongoose.model('Item', itemsDetailISchema)
module.exports = ItemDetails