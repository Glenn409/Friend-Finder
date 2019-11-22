const express = require('express')
const router = express.Router()

let friends = [
    {test:'test'}
    ,{af:'eat'}
]

router.get('/friends',function(req,res){
    console.log('getting api data')
    console.log(friends)
    return res.json(friends)
})

module.exports = router