// 单元测试
'use strict';
const Controller = require('egg').Controller;
class indexController extends Controller {
  async index() {
    this.ctx.body = 'hi,egg';
  }
}
module.exports = indexController;
