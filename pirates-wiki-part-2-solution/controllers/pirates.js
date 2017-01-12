//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});

//this is the edit route
router.get('/:id/edit', function(req, res){
	//grab params id number and save in id
	var id = req.params.id;

  res.render('pirates/edit', {
    pirate: {
			id: req.params.id,
			name: pirates[id].name,
			birthplace: pirates[id].birthplace,
			death_year: pirates[id].death_year,
			base: pirates[id].base,
			nickname: pirates[id].nickname
    }
  });

});
//==============================
// CREATE
//==============================
//this is for posting new pirates
router.post('/', function(req, res){

	//push req.body into the pirates array
	pirates.push(req.body);
	//redirect back to main pirates page when done
	res.redirect('/pirates');
});

//==============================
// UPDATE
//==============================
router.put('/:id', function(req, res){
    pirates[req.params.id] = {
			name: req.body.name,
			birthplace: req.body.birthplace,
			death_year: req.body.death_year,
			base: req.body.base,
			nickname: req.body.nickname
		};
    res.redirect('/pirates/' + req.params.id); //redirect to the index page
});

//==============================
// DESTROY
//==============================
router.delete('/:id', function(req, res){
    pirates.splice(req.params.id, 1); //remove the item from the array
    res.redirect('/pirates');  //redirect back to index route
});


//==============================
// EXPORTS
//==============================

module.exports = router;
