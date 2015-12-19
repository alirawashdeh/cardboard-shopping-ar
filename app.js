var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var command = '';
var dirty = true;
/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'))
   .use(cookieParser());

app.get('/setcommand', function(req, res) {

  command = req.query.command;
  dirty = false;

  res.send('' + command);
 //res.send(200)
});

app.get('/getcommand', function(req, res) {

    if(dirty)
    {
      command = '';
    }
    res.type('text/plain');
    res.send('' + command);
    dirty = true;
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
