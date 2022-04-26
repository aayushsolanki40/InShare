var express = require('express');
var app = express();
const path = require('path');


const connectDB = require('./config/db');
connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('public'));

//Template Engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
}) 