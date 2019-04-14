const { query } = require('./queryOperation');
const fs = require('fs')

// 各类数据表的初始化
const createAllTables = async() => {
    let content = fs.readFileSync( './database/sqlStr/initSql.sql', 'utf8' )
    
    let sqlShellList = content.split(';')

    for(let [i, shell] of sqlShellList.entries() ) {    
        if (shell.trim()==0) {
            continue;
        }
        let result = await query(shell).catch(error => { console.log('query failed >>>> ',error); });
    }
}

module.exports = {
    createAllTables, // 创建数据表
};