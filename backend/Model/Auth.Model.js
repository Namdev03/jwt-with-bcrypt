const { Schema, model } = require('mongoose')

const authSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role:{
        type:String,
        default:'student'
    }
},
    {
        timeseries: true,
        timestamps: true
    })
module.exports = model("student", authSchema)