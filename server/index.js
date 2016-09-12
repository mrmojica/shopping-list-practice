var express = require('express');
var app = express();

app.use('/', express.static('build'));

app.get('/api/hello', function(req, res) {
  res.json({message: 'Hello from express!'})
});

app.listen(3000, function () {
  console.log('Listening at 3000!');
});
