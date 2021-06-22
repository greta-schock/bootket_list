const POSTGRES_CONNECTION = {
    user: process.env.USER, 
    host: process.env.HOST, 
    database: 'products_overview', 
    password: process.env.PASSWORD, 
    port: process.env.PORT,
}

module.exports = POSTGRES_CONNECTION;