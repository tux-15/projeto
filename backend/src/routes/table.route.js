const {getLines} = require('../middleware')

module.exports = function(app) {
  app.use(function(req, res, next) {
    next();
  });
  app.get(
    "/api/table/all",
    [
      getLines.getAllLines,
    ],
  );
//   app.post("/api/auth/signin", controller.signin);
};