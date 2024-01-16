const mongoose = require('mongooose')
const CategorySchema = new mongoose.schema({
    name:{
    type :String,
    required: true
    },
    quantity:{
        type:Number,
        requried: true,
    },
    category:{
        ref:'Category',
        type: mongoose.Types.objectId
    }
})

const Category=mongoose.modal('category',CategorySchema)
module.exports = Category