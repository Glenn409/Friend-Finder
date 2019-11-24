const express = require("express")
const router = express.Router()
const path = require('path')


router.get('/',function(req,res){
    // console.log('directing to home page!')
    res.sendFile(path.join(__dirname,'../public/home.html'))
})

router.get("/survey",function(req,res){
    // console.log('directing to survey')
    res.sendFile(path.join(__dirname, '../public/survey.html'))
})

router.use(function(req,res){
    // console.log('unknown path redirecting to homepage')
    res.sendFile(path.join(__dirname,'../public/home.html'))
})

module.exports = router