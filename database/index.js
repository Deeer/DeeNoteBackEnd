// 数据库初始化
const  db_initlization  = require('./Managers/initlization');
// 用户信息数据库管理对象
const  userInfoDatabaseManager  =  require('./Managers/userInfoDatabaseOperation');
// 文件夹操作管理对象
const  folderDatabaseManager  =  require('./Managers/folderDatabaseOperation');
// 文件操作管理类
const fileDatabaseManager = require('./Managers/fileDatabaseOperation');

module.exports = { 
    db_initlization,            // 数据库初始化
    userInfoDatabaseManager,    // 用户信息管理
    folderDatabaseManager,      // 文件夹管理
    fileDatabaseManager,        // 文件管理类
}