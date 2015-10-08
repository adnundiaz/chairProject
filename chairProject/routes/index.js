var express = require('express');
var http = require('http').Server(express);
var router = express.Router();
var io = require('socket.io')(http);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cinema 5000' });
});

io.on('connection', function(socket){
	console.log('connection on');
});
module.exports = router;
