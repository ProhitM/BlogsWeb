const {Schema, model} = require('mongoose')
const { randomBytes, createHmac } = require("crypto");
const { generateToken } = require('../services/authentication');

const userSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String, 
        required:true
    },
    profileImage:{
        type:String, 
        default:'/images/profile.png'
    },
    role:{type:String, 
        enum:["USER","ADMIN"], 
        default:"USER"
    },
    salt:{type:String}
    
},{timestamps:true})

userSchema.pre("save", async function(){
    const user = this;

    if(!user.isModified('password')) return;

    const salt = randomBytes(16).toString()

    const hashpassword = createHmac('sha256', salt)
     .update(user.password)
     .digest('hex')

     this.salt = salt;
     this.password=hashpassword;
   
})

userSchema.static('matchPasswordAndGenerateToken', async function({email,password}){
    const user = await this.findOne({email})
    if(!user) throw new Error('user not found');

    const salt = user.salt;
    const hashpassword = user.password

    const providedHashpassword = createHmac('sha256', salt)
    .update(password)
    .digest("hex")

    if(hashpassword !== providedHashpassword) throw new Error('incorrect password')
    // return { ...user, password:undefined, salt:undefined}
    // return user;
    

    const token = generateToken(user)
    return token;
})
 
const User = model('user', userSchema)

module.exports = User