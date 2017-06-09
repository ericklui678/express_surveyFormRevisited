var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});
// app.post('/', function(req, res){
//     res.render('index');
// });
var server = app.listen(3000, function(){
    console.log('running on 3000');
});
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
    // when client connects, print this
    // console.log('socket LISTEN SUCCESS');

    // server is listening for submit button click
    socket.on('posting_form', function(data){
        console.log('Someone clicked the button');
        socket.emit('server_response', data);
    })
});
