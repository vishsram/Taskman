#!/usr/bin/env nodejs

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var events = require("events");
var eventEmitter = new events.EventEmitter();
var shell = require('shelljs');
var path    = require("path");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var server = app.listen(4545, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Routing server listenig at http://%s:%s", host, port)

})

// Call Exec Function
//function callExec (cmd, function(err, output) {
//    if (!err) {

//    }
//})

// GET request
app.get('/taskman/text/:info', function (req, res) {
   console.log("Request received for task manager!" + req.params.info);
   // Async call to exec()
   var version = shell.exec('luajit json-util.lua ' + req.params.info, function(status, output) {
    console.log('Exit status:', status);
    res.send(JSON.parse(output));
   }

)
})

app.get('/memgraph',function(req,res){
      res.sendFile(path.join(__dirname+'/index.html'));
        //__dirname : It will resolve to your project folder.
      //
});


