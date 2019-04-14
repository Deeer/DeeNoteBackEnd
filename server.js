
// 库文件
const static = require('koa-static')
const path = require('path')
const Koa = require('koa')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const routers = require('./routes/index')
const convert = require('koa-convert')
// config
// TODO: 配置数据库
const config = require('./config')

const bd = require('./database/index')

const app = new Koa()


// 数据库服务
function databaseInitlization() {
    console.log("🎃 start initlization...");
    // 创建数据表
    bd.db_initlization.createAllTables().then(function(status){
        console.log("🍺 initlization successed!");
        startServer();
    }).catch(err => {
        console.log("❌ initlization failed.");
        console.log("error : " + err);    
        console.log("======================================");
    })
}

// 初始化本地服务
function startServer() {
    // 日志中间件
    app.use(convert(koaLogger()))

    // TODO: 添加静态资源文件夹
    app.use(convert(koaStatic(
        path.join(__dirname,'./../static')
    )))

    // post解析中间件
    app.use(bodyParser())

    // 路由中间件
    app.use(routers.routes()).use(routers.allowedMethods)
        
    app.listen(config.port) 

    console.log(`server have been start at ${config.port}`)
}



// 执行数据库初始化
databaseInitlization();

