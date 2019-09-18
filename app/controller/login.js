'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async register(){
    var name='点击跳转登录'
    await this.ctx.render('home/register.ejs',{
       username:name
   }) 
    var queryname=this.ctx.query.username;
    var querypwd=this.ctx.query.password;
    const newDate = await this.app.mysql.insert("test1",{name:queryname,pwd:querypwd});
    console.log(newDate)
  }
  async login(req,res){
    var name='可忽略*这段话是=>controller/login渲染到ejs文件中*'
     await this.ctx.render('home/home.ejs',{
        username:name
    }) 
    //await this.ctx.render('home/home.ejs')
    var queryname=this.ctx.query.username;
    var querypwd=this.ctx.query.password;
    const result=await this.app.mysql.get("test1",{name:queryname,pwd:querypwd});
    console.log(result)
    if(result){
      this.ctx.body+='登录成功'
    }
    else{
      this.ctx.body+='账号不存在/密码错误'
    }
    console.log(queryname,querypwd) 
  }
  async do(){
    await this.ctx.render('home/home.ejs')
    var queryname=this.ctx.query.username;
    var querypwd=this.ctx.query.password;
    const result=await this.app.mysql.get("test1",{name:queryname,pwd:querypwd});
    console.log(result)
    console.log(queryname) 
  }
}
module.exports = HomeController;

