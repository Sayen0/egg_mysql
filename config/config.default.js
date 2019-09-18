/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_123456';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // config.security = {
  //   csrf: {
  //     enable: false
  //   }
  // };
  
  
  config.view={
    mapping:{
        '.html':'ejs' //'指定后缀':'指定模板引擎'
    }
  },
  // config.mongoose={
  //   client:{
  //     url:''
  //   }
  // }



  // config.cors = {
  //   origin:'*',
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  // };
  config.view={
    mapping:{
      '.ejs':'ejs'
    }
  };
  config.security={
    csrf:{
      enable:false,
      ignore:ctx=>{
        if(ctx.request.url=='/home/doLogin'){
          return true;
        }
        return false;
      }
    }
  };

  config.mysql={
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '173034',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }

  return {
    ...config,
    ...userConfig,
  };
};