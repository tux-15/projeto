const mysql      = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   port     : 3003,
//   user     : 'user_teste',
//   password : '12345678',
//   database : 'db_teste'
// });

// connection.connect((err) => {
//     if(err) return console.log(err);
//     console.log('Conectado ao banco de dados.');
//   })

class DataBase {
    constructor(host, user, password, dataBase) {
        this.host = host;
        this.user = user;
        this.password = password;
        this.dataBase = dataBase

        this.con = mysql.createConnection({
            host: this.host,
            user: this.user, // Um usuário do banco. Ex: user 
            password: this.password, // A senha do usuário. Ex: user123
            database: this.dataBase, // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
        });
    }

    startConnection() {
        this.con.connect(function (err) {
            if (err) throw err;
            console.log("Connection OK");
        })
    };

    endConnection() {
        this.con.end((err) => {
            if (err) {
                console.log('Erro to finish connection...', err)
                return
            }
            console.log('The connection was finished...')
        })
    }

    query(sql, message) {
        this.con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(message);
        })
    }

    testConnection() {
        this.startConnection();
        this.endConnection();
    }

    createDatabase(name) {
        const sql = "CREATE DATABASE " + name;
        this.query(sql, "DataBase created.");
    }

    createTable(tableName, columns) {
        const sql = "CREATE TABLE " + tableName +
            "(" + "id INT AUTO_INCREMENT PRIMARY KEY," +
            columns + ")";
        this.query(sql, "Table created.");
    }

    dropTable(name) {
        const sql = "DROP TABLE IF EXISTS " + name;
        this.query(sql, "Table deleted.");
    }

    alterTable(tableName, modification) {
        const sql = "ALTER TABLE " + tableName + " " + modification;
        this.query(sql, "Table altered.");
    }

    insertIntoTable(table, columns, values) {
        const sql = "INSERT INTO" + " " + table + " (" + columns + ") " +
            "VALUES" + " " + "(" + values + ")";
        this.query(sql, "1 record inserted.");
    }

    //----------------------------------------------------------------------------
    // Implement each query function from this point

    insertMultipleIntoTable(table, columns, values) {
        const sql = "INSERT INTO" + " " + table + " (" + columns + ") " +
            "VALUES ?";
        this.con.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        })
    }

    selectFromTable(table, columns) {
        const sql = "SELECT " + columns + " FROM " + table;
        this.con.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            return result;
        });
    }

    whereInTable(table, key, value) {
        const sql = "SELECT * FROM " + table + " WHERE " + key + " = " + "'" + value + "'";
        this.con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    }

    updateTable(table, key, value, oldValue) {
        const sql = "UPDATE " + table + " SET " + key + " = " + 
        "'" + value + "' " + "WHERE " + key + " =" + " '" + oldValue + "' " ;
        this.con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
        });
    }

    deleteFromDataBase(table, key, value) {
        const sql = "DELETE FROM " + table + " WHERE " +
            key + " = " + "'" + value + "'";
        this.con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Numberof records deleted:" + result.affectedRows);
        })
    }
}

// const database = "db_teste";

// var db = new DataBase(
//     'localhost',
//     'user_teste',
//     '12345678',
//     database);

// db.createDatabase("db_teste");
// db.createTable("db_teste", "username VARCHAR(255), password VARCHAR(255), email VARCHAR(100)");
// db.startConnection();
// db.updateTable("db_teste", "endereco", "avião", "Valley 345");
// db.dropTable("db_teste")
// db.deleteFromDataBase(database, "endereco", "maçã");
// db.whereInTable("db_teste", "endereco", "maçã");
// db.selectFromTable("db_teste", "*");
// db.insertMultipleIntoTable("db_teste", "nome, endereco", values);
// db.insertIntoTable("db_teste", "username, password, email", "'teste_user', 'senha_user', 'user@user'");
// db.alterTable("tabledb", "ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY");
// db.endConnection();

module.exports = DataBase;