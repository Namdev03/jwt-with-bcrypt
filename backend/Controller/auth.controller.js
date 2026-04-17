const authSchema = require('../Model/Auth.Model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')


async function registerStudent(req, res) {
    try {
        const { name, email, password } = req.body
        const hashPassword = await bcrypt.hash(password, 10)
        const register = await authSchema.create({
            name,
            email,
            password: hashPassword
        })
        res.status(201).json({ message: 'sucessfully registered', Data: register })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}
async function loginStudent(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const student = await authSchema.findOne({ email });
        if (!student) {
            return res.status(404).json({ message: 'Email not found' });
        }

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const payload = {
            id: student._id,
            email: student.email,
            name: student.name,
            role: student.role
        };
console.log('controller payload', payload);
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        console.log('controller middleware token', token);

        res.cookie('securetoken', token, {
            httpOnly: true,
            // secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000
        });

        res.status(200).json({
            message: "Successfully logged in",
            data: {
                id: student._id,
                name: student.name,
                email: student.email
             },
            token
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { registerStudent, loginStudent }