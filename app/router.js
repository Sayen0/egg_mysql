'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  // router.get('/register',controller.home.register);
  // router.post('/doRegister',controller.home.doRegister)
  router.get('/', controller.login.register);
  router.get('/zlogin', controller.login.login);
  // router.post('/do', controller.home.do);
  // router.get('/loginOut', controller.home.loginOut);
  router.get('/login', controller.login.do);
  // router.get('/l', controller.home.login);
  // router.get('/account/register','account.register');
  // router.get('/account/repass','account.repass');
  router.get('/index', controller.index.index);
};
