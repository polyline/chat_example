var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  dir_name = "/Users/tsupei/Documents/github/chat_example/page";
  res.sendFile(dir_name + "/index.html");
  //res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

