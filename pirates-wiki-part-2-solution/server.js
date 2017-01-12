//===========================
// REQUIREMENTS
//===========================
var express = require("express");
var app = express();
var logger = require("morgan");
var bodyParser = require("body-parser");
var hbs = require('hbs');
//include the method-override package
var methodOverride = require('method-override');

//===========================
// MIDDLEWARE
//===========================
//this is for morgan
app.use(logger("dev"));
//these are for bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//use methodOverride. 
app.use(methodOverride('_method'));
//this is for public static files
app.use(express.static('public'));

app.set("view engine", "hbs");
app.set('views', './views');

//===========================
// CONTROLLERS
//===========================

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);


//===========================
// LISTENERS
//===========================
app.listen(3000, function(req, res){
	console.log("listening");
});
