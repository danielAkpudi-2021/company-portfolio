const express = require('express');
const dotenv = require('dotenv');
const expressLayout = require('express-ejs-layout');

dotenv.config({ path: 'env'});

const app = express();

// ejs template layout
app.use(expressLayout);
app.set('layout', './layouts/mainlayout')