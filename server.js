require('dotenv').config();

const express = require("express")
const path = require('path')
const UserRoute = require('./Routes/user')
const mongoose = require('mongoose')
const cookieparser = require('cookie-parser')
const { checkAuthenticationCookieToken } = require("./middleware/authentication")



const blogRoute = require('./Routes/blog')
const Blog = require("./models/blog")

const app = express()
const PORT = process.env.PORT || 8000

app.set("view engine", 'ejs')
app.set('views', path.resolve('./views'))

// db connections 
mongoose.connect(process.env.MONGO_URL).then(()=>{console.log('db is connected')})

// middleware 
app.use(express.urlencoded({extended:false}))
app.use(cookieparser())
app.use(checkAuthenticationCookieToken("token"))
app.use(express.static(path.resolve('./public')))

// routes 
app.use('/user', UserRoute )
app.use('/blog', blogRoute)

app.get('/', async (req,res)=>{
    const allBlogs = await Blog.find({}).sort({"createdAt":-1})

    res.render('home', {
        user:req.user,
        blogs: allBlogs,
    })
})

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})