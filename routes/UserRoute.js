const router = require('express').Router()
const auth = require('../middleware/auth')
const usercontrol = require('../controllers/user.controller')

router.post('/regist', usercontrol.addUser)
router.post('/login',usercontrol.login)
router.get('/info',auth,usercontrol.info)

module.exports = router