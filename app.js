const express = require('express');
const path = require('path');

const app = new express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'ejs');

app.use('/', require('./routes/index.js'));


app.listen(PORT, console.log(`Server started on port ${PORT}`));