var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
})

console.log('Starting server on port 3000...');
app.listen(3000);
