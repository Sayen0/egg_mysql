// 单元测试
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async get(name) {
    return name;
  }
}
module.exports = UserService;
