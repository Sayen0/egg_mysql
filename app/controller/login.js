'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async register() {
    const { service } = this;
    const name = '点击跳转登录';
    await this.ctx.render('home/register.ejs', {
      username: name,
    });
    await service.login.register();
  }
  async login() {
    const { service } = this;
    const name = '可忽略*这段话是=>controller/login渲染到ejs文件中*';
    await this.ctx.render('home/home.ejs', {
      username: name,
    });
    // await this.ctx.render('home/home.ejs')
    await service.login.login();
  }
  async do() {
    await this.ctx.render('home/home.ejs');
    const queryname = this.ctx.query.username;
    const querypwd = this.ctx.query.password;
    const result = await this.app.mysql.get('test1', { name: queryname, pwd: querypwd });
    console.log(result);
    console.log(queryname);
  }
}
module.exports = HomeController;

