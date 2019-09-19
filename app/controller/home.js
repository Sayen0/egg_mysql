// 'use strict';

// const Controller = require('egg').Controller;
// // const url=require('url');

// class HomeController extends Controller {
//   // async post(){
//   //   this.ctx.body=`body: ${JSON.stringify(ctx.request.body)}`
//   // }
//   async login() {
//     await this.ctx.render('home/home.ejs', 'http://127.0.0.1:7001/login');// 渲染静态页面
//   }
//   async do() {
//     // await this.ctx.render('home/home.ejs')//渲染静态页面
//     const username = this.ctx.request.body.username;
//     const password = this.ctx.request.body.password;
//     const code = this.ctx.request.body.code;
//     const result = await this.app.mysql.get('test1', { name: 'lily' });
//     this.ctx.body = result.username;
//   }
//   async loginOut() {
//     // this.service.cookies.set('userinfo','');
//     // this.ctx.redirect('/')
//   }
// }
// module.exports = HomeController;

