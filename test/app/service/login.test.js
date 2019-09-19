'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('get()', () => {
  it('should get exists user', async () => {
    const ctx = app.mockContext();
    const user = await ctx.service.index.get('yumu');
    assert(user === 'yumu');
  });
});
