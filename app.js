var express = require('express');
var bodyParser = require('body-parser');
var database = require('./db/database');
var routes = require('./route/controller');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', routes);
app.listen(3000, function() {
    console.log('The app is starting ...');
});
