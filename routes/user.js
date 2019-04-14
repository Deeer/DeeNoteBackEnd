
const router = require('koa-router')()
const userInfoController = require('../controllers/userInfoController')
const routers = router 
    .get('/getUserDetail/:id',userInfoController.getUserDetail)
    .post('/deleteUser/:id',userInfoController.deleteUser)
    .post('/createNewUser/',userInfoController.addNewUser)
    .post('/updateUserInfo',userInfoController.udpateUserInfo)
module.exports = routers