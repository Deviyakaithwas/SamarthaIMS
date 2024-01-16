const express = require('express')
const ItemsDetails = require('../../model/item')
const router = express.Router()

router.post('/add', async (req, res) => {

    try{
        console.log("the body", req.body)
        const item = await ItemsDetails.create(res.body)
    
        return res.status(200).json({
            data: item,
            message: "Item added successfully"
        })
    }catch(error){
        return res.status(500).json({
            data: null,
            message: "error while creating item!"
        })
    }

   

})

router.get('/get', async(req, res)=>{
    try{

        const item = await ItemsDetails.find()
        return res.status(200).json({
            data:ItemsDetails,
            message:"items fetched succesfully!"
        })

    }catch(error){

    }
})

module.exports = router