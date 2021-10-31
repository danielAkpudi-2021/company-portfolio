const express = require('express');
const dotenv = require('dotenv');
const expressLayout = require('express-ejs-layouts');

const mainRoute = require('./server/routes/mainRoute');

dotenv.config({ path: 'env'});

const app = express();

// ejs template layout
app.use(expressLayout);
app.set('layout', './layouts/mainlayout');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', mainRoute);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`site is open on port ${PORT}`));