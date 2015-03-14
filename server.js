/**
 *  Local Server for Happenings
 **
*/

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/less'));

app.get('/', function(req, res) {
  res.redirect('/index.html');
});

app.listen(port, function() {
	console.log('Listening on port 8080');
});