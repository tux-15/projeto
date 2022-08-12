var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var DataBase = require('./classes/db')
const fs = require('fs').promises;
const csv = require ('csvtojson')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// const database = "db_teste";

// var db = new DataBase(
//     'localhost',
//     'user-teste',
//     '12345678',
//     database);

// var values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
// ];

// db.startConnection();
// db.updateTable("db_teste", "endereco", "avião", "Valley 345");
// db.dropTable("db_teste")
// db.deleteFromDataBase(database, "endereco", "maçã");
// db.whereInTable("db_teste", "endereco", "maçã");
// db.selectFromTable("db_teste", "*");
// db.insertMultipleIntoTable("db_teste", "nome, endereco", values);
// db.insertIntoTable("db_teste", "nome, endereco", "'banana', 'maçã'");
// db.alterTable("tabledb", "ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY");
// db.createTable("db_teste", "nome VARCHAR(255), endereco VARCHAR(255)");
// db.createDatabase("db_teste");
// db.endConnection();

const read = async () => {
    const data = await fs.readFile("C:/Users/efilho2/Downloads/Projeto/K97_OP10.txt", encoding='utf8');
    return data;
  }
dados = read();
dados.then(dados => {
    dadoscsv = csv().fromString(dados).then((jsonData)=>{
        console.log(dadoscsv)
    })
    // console.log(dados);
})

module.exports = app;
