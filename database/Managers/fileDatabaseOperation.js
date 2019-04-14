const {query} = require('./queryOperation')
var userAddSql = 'INSERT INTO userinfo(id, name, password) VALUE(0,?,?)';
var userSql_Params = ['www','abc'];

// 新增文件
const insertNewFileWitnContent = () => {

}, 

// 删除文件
const deleteFile = () => {

},

// 获取文件内容
const fetchFileContent = () => {

},

// 更新文件
const updateFile = () => {

}

module.exports = {
    insertNewFileWitnContent,
    deleteFile,
    fetchFileContent,
    updateFile,   
}