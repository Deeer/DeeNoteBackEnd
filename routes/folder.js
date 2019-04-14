// 管理分组
const router = require('koa-router')()
const folderManagerController = require('./../controllers/folderManagerController')
const routers = router 
    // 获取文件夹列表
    .post('/getFolderList/',folderManagerController.getFolerList)
    // 删除文件夹
    .post('/deleteFolder',folderManagerController.deleteFolder)
    // 新建文件夹
    .post('/createFolder',folderManagerController.addNewFoler) 
    // 标记文件夹
    .post('/markFolder',folderManagerController.markFolder)
module.exports = routers