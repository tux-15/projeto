const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const path = require('path');
const server = express();
const db = require('./db');

//https://www.bezkoder.com/node-js-jwt-authentication-mysql/
const auth = require('./routes/auth.routes');

const port = 3003;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, 'static')));

db.startConnection();

server.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

server.use('/auth', auth);
server.listen(port, function () {
	console.log(`Backend started on port ${port}`);
});