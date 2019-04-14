// 用户信息管理
// 获取用户详情
const getUserDetail = (ctx,next) =>{
    //TODO : 从数据库获取对应数据并返回
    
    //TODO : 数据解密
}


const addNewUser = (ctx,nexr) => {
    // 检验数据 
    console.log('start===');

    console.log(ctx);


    console.log('end===');
    
    // 插入数据库

    // 新增数据数据有效性
}

const deleteUser = () => {
    
}

const udpateUserInfo = () => {
    
}


module.exports = {
    getUserDetail,
    addNewUser,
    deleteUser,
    udpateUserInfo
};