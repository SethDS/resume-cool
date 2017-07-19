var express = require('express');

var app = express();

app.use(express.static(__dirname + './front'));


var port = process.env.PORT || 5051;
app.listen(port, function(){
    console.log('listening on port ' + port + '...');
});