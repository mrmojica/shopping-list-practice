var express = require('express');
var bodyParser = require('body-parser');
var Data = require('./data');


var app = express();
app.use(bodyParser.json());

//allows us to use the same port on the front/backend + connected to the build file (see webpack) to server.
app.use('/', express.static('build'));



var counter = Data.length;

app.get('/data', function(req, res) {
	//retrieving data.json file __dirname + path
	console.log(Data);
	res.send(Data)


});


app.post('/data', function(req,res) {
	if (!req.body) {
		res.sendStatus(404);
	}
	counter ++;
	Data.push({id: counter, item: req.body.item});

	res.status(201).json({});

});

function EditItem(req, res, callback) {
	for(var i = 0; i < Data.length; i++) {
		if(Data[i].id == req.params.id) {
			callback(i)
		} 
	}
	res.status(200).json({});
}

app.put('/data/:id', function(req, res) {
	if(!req.body.item || !req.params.id) {
		res.sendStatus(404);
	}

	EditItem(req, res, function(i) {
		Data[i].item = req.body.item;
	});
		

});


app.delete('/data/:id', function(req, res) {

	if(!Data[req.params.id]) {
		return res.sendStatus(404);
	}

	EditItem(req, res, function(i) {
			Data.splice(i, 1);
	});


});










// connects to port
app.listen(8080, function(){
	console.log('Listening to port 8080');

});