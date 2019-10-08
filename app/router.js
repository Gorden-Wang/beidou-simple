/**
 * @param {Egg.Application} app - egg application
 * api 相关路由，统一以api开头，做数据聚合用。
 */
module.exports = (app) => {
  const {
    router,
    controller,
  } = app;

  router.post('/ping', controller.index.ping);
};
