const mongoose = require('mongoose')
const authDataBaseConnection = async()=>{
    try {
        const connection= await mongoose.connect(process.env.URI_DB)
        console.log(`Database connected succesfully on ${process.env.URI_DB}`);
        
    } catch (error) {
        throw new Error(error);
        
    }
}
module.exports = authDataBaseConnection