const { registerStudent, loginStudent } = require('../Controller/auth.controller')
const router = require('express').Router()

router.post('/',registerStudent)
router.post('/login',loginStudent)

module.exports = router