//Imports External
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

//Imports Internal
const router = require('./app/routes/router')

//Set View Engine
app.set('view engine', 'ejs')
app.set('viwes' , './views')
app.use(express.static(path.join(__dirname, '/public')))

//Router
app.use('/', router)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App.Listen ->  ${port}`)
})