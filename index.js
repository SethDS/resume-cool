var express = require('express');
var app = express();

app.set('port', (process.emv.port || 5051));

app.use(express.static('./index.html'));

app.listen(app.get('port'), function(){
    console.log('Node app is running on port:', app.get('port'));
});