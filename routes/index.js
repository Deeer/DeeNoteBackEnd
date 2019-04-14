// 作为路由入口
const router = require('koa-router')()

const user = require('./user')
const card = require('./card')
const folder = require('./folder')

router.use('/user',user.routes()).use(user.allowedMethods())
router.use('/card',card.routes()).use(card.allowedMethods())
router.use('/folder',folder.routes()).use(folder.allowedMethods())


module.exports = router