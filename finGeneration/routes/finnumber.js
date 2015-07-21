var express = require('express');
var finnumber = require('./finNumberGenerator');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

	var preFixChar = req.query.sendValue;
	var age = req.query.age;
	console.log("params " +preFixChar + " " + age);
  	res.send(finnumber.getFinNumber(preFixChar,age));
});

module.exports = router;
