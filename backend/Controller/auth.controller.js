const authSchema = require('../Model/Auth.Model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function registerStudent(req,res) {
    try {
        const {name,email,password} = req.body
        const hashPassword =await bcrypt.hash(password,10)
        const register =await authSchema.create({
            name,
            email,
            password:hashPassword
        })
        res.status(201).json({message:'sucessfully registered',Data:register})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}
async function loginStudent(req,res) {
    try {
        const {email,password} = req.body
        const findstudentbyemail = await authSchema.findOne({email})
        if(!findstudentbyemail) {
            return res.status(404).json({message:'email not found'})
        }
        const comparepassword = await bcrypt.compare(password,findstudentbyemail.password)
        if (!comparepassword) {
            return res.status(404).json({message:"email & pasword not found"})
        }
        const tosend ={
            name:findstudentbyemail.name,
            email:findstudentbyemail.email,
            password:findstudentbyemail.password
        }
        const jwtToken = await jwt.sign(tosend,process.env.SECRATE_KEY)
        res.status(200).json({
            message:"sucessfully login",
            Data:findstudentbyemail,
            token: jwtToken
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {registerStudent,loginStudent}