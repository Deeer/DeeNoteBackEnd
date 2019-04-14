const mySql = require('mysql')

// 数据库管理实际操作对象

const pool = mySql.createPool({
    host     :  '127.0.0.1',
    user     :  'dee',
    password :  '123456',
    database :  'deenote',
    port        : 3306,
  })

let query = function(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
                if(err) {
                    reject(err);
                } else {
                    connection.query(sql,values, (err, rows) => {
                        if(err) {
                            reject(err)
                        }  else {
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
        })
    })
}

module.exports = {
    query
}