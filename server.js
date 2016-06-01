var express = require('express');
var app = express();

const PORT=3000; 

app.get('*', function (request, response){
    response.end('It Works!! Path Hit: ' + request.url);
});

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
