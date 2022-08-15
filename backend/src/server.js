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
    'user_teste',
    '12345678',
    'db_teste');

server.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


// server.get('/', function(request, response) {
// 	// Render login template
// 	response.sendFile(path.join(__dirname + '/login.html'));
// });

server.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM db_teste WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/paginaTabela');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

server.listen(port, function () {
    console.log(`Backend started on port ${port}`);
})