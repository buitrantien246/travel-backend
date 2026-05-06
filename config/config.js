const session = require("express-session");

module.exports = {
    development: {
        dialect: process.env.DB_DIALECT,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    },
    test: { /* ... cấu hình cho môi trường test ... */ },
    production: { /* ... cấu hình cho môi trường production ... */ },
    port: process.env.PORT || 3000, // Cổng mặc định là 3000 nếu không có biến môi trường PORT
    sessionSecret: process.env.SESSION_SECRET ||'your_default_session_secret', // Sử dụng biến môi trường để bảo mật session secret, với giá trị mặc định nếu không có
    env: process.env.NODE_ENV || 'development', // Môi trường hiện tại, mặc định là 'development'
};