var express = require('express');
var app 	= express();

app.set('view engine', 'ejs');


app.get('/', function(request, response) {
	response.render('index');
});

var server = app.listen(process.env.PORT || 3000, function() {
	console.log("all systems green, in position at localhost3000");
});