var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var toggle = 1;
/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'))
   .use(cookieParser());

app.get('/toggle', function(req, res) {
 if(toggle)
 {toggle = 0;}
 else {
 {toggle = 1;}
 }
 res.send(200)
});

app.get('/gettoggle', function(req, res) {
    res.type('text/plain');
    res.send('' + toggle);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
