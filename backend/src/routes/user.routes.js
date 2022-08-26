const { authJwt } = require("../middleware");
const controller = require('../controllers/user.controller')
module.exports = function(app) {
  app.use(function(req, res, next) {
    next();
  });
  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
