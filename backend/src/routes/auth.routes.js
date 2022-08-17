const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signUp
  );
  app.post("/api/auth/signin", controller.signin);
};


// const express = require('express');
// const router = express.Router();
// const db = require('../db');

// router.post('/', function (request, response) {
// 	let username = request.body.username;
// 	let password = request.body.password;
// 	// console.log(request.body);
// 	// Ensure the input fields exists and are not empty
// 	if (username && password) {
// 		(async function () {
// 			result = await db.whereInTable("users", username, password);
// 			// console.log(result);
// 			if (result.length > 0) {
// 				// Authenticate the user
// 				request.session.loggedin = true;
// 				request.session.username = username;
//                 request.session.email = result[0]["email"];
//                 console.log("session started");
// 				// Redirect to home page
// 				response.redirect('http://localhost:3000/paginaTabela/');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}
// 			response.end();
// 		})();
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });

// router.post('/logout', function(request, response){
//     console.log("Log out");
//     request.session.destroy(function(err){
//         if (err) throw err;
//     })
// })

// router.get('/check', function(request, response){
//     console.log('Checking if user is logged');
//     console.log(request.headers.cookie);
//     if (request.session.loggedin === true){
//         response.json({username: request.session.username, 
//             isLogged: request.session.loggedin}).status(200);
//     }
//     else(response.send('User not logged').status(403));
// });

// module.exports = router;