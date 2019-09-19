'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/index.test.js', () => {
  // it('should assert', () => {
  //   const pkg = require('../../../package.json');
  //   assert(app.config.keys.startsWith(pkg.name));

  //   // const ctx = app.mockContext({});
  //   // yield ctx.service.xx();
  // });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/index')
      .expect('hi,egg')
      .expect(200);
  });
  it('should send multi requests', async () => {
    await app.httpRequest()
      .get('/index')
      .expect('hi,egg')
      .expect(200);
    const result = await app.httpRequest()
      .get('/index')
      .expect(200)
      .expect('hi,egg');
    assert(result.status === 200);
  });
});
