require('dotenv').config(); // this loads the defined variables from .env

const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    SECRET_KEY: process.env.SECRET_KEY
};

module.exports = config;