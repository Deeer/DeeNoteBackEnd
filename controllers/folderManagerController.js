const databaseManager = require('../database/Managers//folderDatabaseOperation')
// 文件夹管理

// 文件夹列表
const getFolerList = (ctx,next) =>{

}

// 删除文件夹
const deleteFolder = (ctx, next) => {

}

// 新增文件夹
const addNewFoler = (ctx, next) => {
    // 文件夹名称
    let title = ctx.request.body.title;
    // 检查数据
    if(title.strim() != 0) {
        // 插入数据
        
        return;
    }  

    // 数据返回失败
    ctx.response.body = "文件夹名称为空,新建失败";    
}

const markFolder = (ctx,next) => {

}

module.exports = {
    getFolerList,
    deleteFolder,
    addNewFoler,
    markFolder,
};