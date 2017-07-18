'use strict';

const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://thorntja:jake2u@ds034677.mlab.com:34677/janus');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var auth = require('./routes/auth');
var api = require('./routes/api');

app.set( 'port', process.env.PORT || 3000 );

// make the entire contents of public directory accessible
app.use( express.static(
	path.join(__dirname, '../', 'public'),
	{
		// index: false, // don't look for index.html files in sub directories.
		extensions:['html']
	})
);

app.use('/api', api);
app.use('/auth', auth);

// for every request made, if the file doesn't exist, return index.html file.
app.get( '/', (req, res) => {
	res.send('hey ;)');
});

app.listen( app.get('port'), function () {
	console.log('Server running at http://localhost:%s', app.get('port'));
});
