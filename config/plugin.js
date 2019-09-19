'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  // cors:{
  //   enable: true,
  //   package: 'egg-cors'
  // },

  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  view: {
    enable: true,
    package: 'egg-view',
  },
  // test: {
  //   enable: true,
  //   package: 'egg-bin test',
  // },
  // cov: {
  //   enable: true,
  //   package: 'egg-bin cov',
  // },

};
