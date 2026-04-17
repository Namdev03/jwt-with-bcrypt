
async function authMiddleware(req, res, next) {
 const token = req.cookies.securetoken;
        console.log(token);
    try {       
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;

        if (decoded.role !== 'student') {
            return res.status(403).json({ message: "Access denied" });
        }

        next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

module.exports = authMiddleware;