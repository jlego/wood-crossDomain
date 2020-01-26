/**
 * Wood Plugin Module.
 * 跨域处理
 * by jlego on 2018-11-17
 */

module.exports = (app = {}, config = {}) => {
  app.application.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", config.domain || req.headers.origin || '*');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", config.verifyLogin ? "Content-Type,token" : "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  return app;
}
