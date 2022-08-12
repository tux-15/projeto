const mysql = require('mysql');

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


module.exports = DataBase;