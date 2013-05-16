
/**
 * Module dependencies.
 */

var express = require('express')
    , async = require('async')
    , mongoose = require('mongoose')
    , resource = require('express-resource')
    , http = require('http')
    , path = require('path')
    , forms = require('express-validator');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('Joujah3uBoo6zooz'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//DB Connection
mongoose.connect('mongodb://localhost/voted');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', require('./routes/index').index);
app.resource('polls', require('./routes/polls'));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
