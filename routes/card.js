
// 管理卡片
const router = require('koa-router')()
const cardManagerController = require('./../controllers/cardManagerController')
const routers = router 
    // 获取卡片详情
    .post('/getCardDetail/:cardID',cardManagerController.getCardDetail)
    // 删除特定卡片
    .post('/deleteCard/:cardID',cardManagerController.deleteCard)
    // 编辑卡片内容
    .post('/editCard/:content',cardManagerController.editCard)
    // 新增卡片
    .post('/addNewCard/:content',cardManagerController.addNewCard) 
    // 标记卡片
    .post('/markNewCard/:cardID',cardManagerController.markCard) 
module.exports = routers