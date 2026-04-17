const jwt = require('jsonwebtoken');
async function authMiddleware(req, res, next) {
 const token =  req.cookies?.securetoken
    // req.headers.authorization?.split(' ')[1];
        console.log("midelleware token",token);
    try {   
        console.log("try is running")    
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        console.log(process.env.JWT_SECRET);
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log("decoded",decoded);
        if (decoded.role !== 'student') {
            return res.status(403).json({ message: "Access denied" });
        }
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

module.exports = authMiddleware;