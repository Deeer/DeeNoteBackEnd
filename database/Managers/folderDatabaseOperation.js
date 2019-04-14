// 文件夹数据库操作

const {query} = require('./queryOperation')
var userAddSql = 'INSERT INTO userinfo(id, name, password) VALUE(0,?,?)';
var userSql_Params = ['www','abc'];


 // 新增文件夹
 const addNewFolder = () => {

}

// 删除文件夹
const deleteFolder= () => {

}

// 更新文件夹
const updateFolder = () => {

}
// 获取文件 
const fetchFileList = () =>{

}

// 获取文件夹列表
const fetchFolderList = () =>{

}





module.exports = {
    addNewFolder,
    deleteFolder,
    updateFolder,
    fetchFileList,
    fetchFolderList
}