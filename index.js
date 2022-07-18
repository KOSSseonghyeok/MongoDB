var express = require('express');
var mongoose = require('mongoose');
var app = express();


// DB setting
mongoose.connect("mongodb+srv://Seonghyeok:k9chan1212@cluster0.9ty5o.mongodb.net/?retryWrites=true&w=majority");
var db = mongoose.connection;
db.once('open', function(){
  console.log('DB connected');
});
db.on('error', function(err){
  console.log('DB ERROR : ', err);
});

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

// Port setting
var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
