const express = require('express')
const User = require('../models/user')
const {generateToken} = require('../services/authentication')

const router = express.Router()

router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/home', (req,res)=>{
     res.render('home')
})

router.post('/login', async (req,res)=>{
 const {email,password} = req.body
 try {
    //  const user = await User.matchPassword(req.body.email, req.body.password)
       const token = await User.matchPasswordAndGenerateToken({email, password})
   //  console.log('User', user._doc)
    //    console.log("token", token)
    return res.cookie("token", token).redirect('/')
 } catch (error) {
      return res.render('login',{error:'incorrect password'})
 }

})

router.post('/signup', async (req,res)=>{
 const {fullname, email, password} = req.body
 await User.create({
    fullname,
    email,
    password
 })
 return res.redirect('/')

})

router.get('/logout', (req,res)=>{
    res.clearCookie("token").redirect('/')
})

// for home route
router.get('/', (req,res)=>{
    res.redirect('/')
})

module.exports = router