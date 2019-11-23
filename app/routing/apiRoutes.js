const express = require('express')
const router = express.Router()
const friendsArray = require('../data/friends.js')

router.get('/friends',function(req,res){
    return res.json(friendsArray)
})

module.exports = router