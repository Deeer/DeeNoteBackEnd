// 获取文件夹详情
const getCardDetail = (ctx,next) =>{
    //TODO : 从数据库获取对应数据并返回
    console.log(ctx.request);
    ctx.body = 'yohoooooo!'
}

// 删除卡片
const deleteCard = (ctx, next) => {

}

// 新增卡片
const addNewCard = (ctx, next) => {

}

// 编辑卡片
const editCard = (ctx, next) => {

}

const markCard = (ctx, next) => {

}


module.exports = {
    getCardDetail,
    deleteCard,
    addNewCard, 
    editCard,
    markCard,
};