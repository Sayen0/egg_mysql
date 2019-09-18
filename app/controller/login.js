'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async login(req,res){
    var name='这段话是=>controller渲染到ejs文件中'
     await this.ctx.render('home/home.ejs',{
        username:name
    }) 


    //await this.ctx.render('home/home.ejs')
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

