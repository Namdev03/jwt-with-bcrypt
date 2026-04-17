const { registerStudent, loginStudent } = require('../Controller/auth.controller')
const authmiddelware = require('../Middekware/auth.Middel')
const router = require('express').Router()
router.post('/',registerStudent)
router.post('/login',authmiddelware,loginStudent)

module.exports = router