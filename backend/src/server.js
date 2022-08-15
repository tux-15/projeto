const bodyParser = require('body-parser');
// const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const DataBase = require('./db')

const port = 3003;

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, 'static')));

// const database = "db_teste";
var db = new DataBase(
	'localhost',
	'user-teste',
	'12345678',
	'sistemaTabelas');

db.startConnection();

server.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


// server.get('/', function(request, response) {
// 	// Render login template
// 	response.sendFile(path.join(__dirname + '/login.html'));
// });

server.post('/auth', function (request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	console.log(request.body);
	console.log(request.body.username);
	console.log(request.body.password);

	// Ensure the input fields exists and are not empty
	if (username && password) {
		(async function () {
			result = await db.whereInTable("users", username, password);
			console.log(result);
			if (result.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				console.log("User logged")
				response.redirect('http://localhost:3000/paginaTabela/');
			} else {
				response.send('Incorrect Username and/or Password!');
			}
			response.end();
		})();
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

server.listen(port, function () {
	console.log(`Backend started on port ${port}`);
})