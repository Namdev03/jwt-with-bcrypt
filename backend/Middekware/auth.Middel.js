async function authmiddelware(req,res,next) {
const token = req.headers.authorization?.split(" ")[1]

    try {
        const tokenverify = jwt.verify(token, process.env.SECRET_KEY)
        
    } catch (error) {
        throw new Error(error)
    }
}