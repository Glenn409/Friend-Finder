const express = require('express')
const router = express.Router()
const friendsArray = require('../data/friends.js')

router.get('/friends',function(req,res){
    return res.json(friendsArray)
})

router.post('/friends',function(req,res){
    let array = req.body.survey
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(parseInt(array[i]))
    }

    friendsArray.push(
        {
            name: req.body.name,
            image: req.body.image,
            survey: newArray
        })
})
module.exports = router