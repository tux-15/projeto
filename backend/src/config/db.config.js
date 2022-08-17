module.exports = {
    HOST: "localhost",
    USER: "user-teste",
    PASSWORD: "12345678",
    DB: "sistemaTabelas",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}