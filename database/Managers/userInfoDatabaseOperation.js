/*
 * @Author: Dee.he 
 * @Date: 2019-04-14 18:37:53 
 * @Last Modified by: Dee.he
 * @Last Modified time: 2019-04-14 20:27:18
 *  
 * 包含用户相关的本地数据库操作
 *  
 */

const { query } = require('./queryOperation');
var userAddSql = 'INSERT INTO userinfo(id, name, password) VALUE(0,?,?)';
var userSql_Params = ['www','abc'];

// const userInfoOperation =  query(userAddSql,userSql_Params, function(err,result) {
//     if(err) {

//         return;
//     }
// })

  // 新增用户
const insertUser = () => {

}

// 更新用户
const updateUserInfo = () => {
    
}

// 删除用户
const deleteUserInfo = () => {

}

// 查询用户
const fetchUserInfo = () => {

}

module.exports = {
    insertUser,    
    deleteUserInfo,
    updateUserInfo,
    fetchUserInfo,
}