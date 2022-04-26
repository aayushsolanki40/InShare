const mongoose = require('mongoose');
require('dotenv').config();

function connectDB(){
    //Database connection
    var url = process.env.MONGO_CONNECTION_URL;
    mongoose.connect(url);
    const connection = mongoose.connection;

    try {
        connection.once('open', () => {
            console.log('Database connected');
        });   
    } catch (error) {
        console.log('Connection Failed : '+error);
    }
}
module.exports = connectDB;