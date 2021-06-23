const POSTGRES_CONNECTION = {
    user: process.env.USER, 
    host: process.env.HOST, 
    database: 'bootket_list', 
    password: process.env.PASSWORD, 
    port: process.env.PORT,
}

module.exports = POSTGRES_CONNECTION;