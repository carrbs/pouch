var express = require('express');
var app = express();

const PORT=3000; 

app.get('*', function (request, response) {
    var paths = []
    paths = request.url.split('/');
    paths.shift() // no leading '/'
    var feedback = '';
    console.log("the length: " + paths.length);
    switch (paths.length) {
        case 0:
            feedback = "hi! put some fun stuff \(like 'foo/bar'\) in the path. ^^^"
            break;
        case 1:
            feedback = "hi " + paths[0] + "! put some fun stuff \(like 'foo/bar'\) in the path. ^^^";
            break;
        default:
            feedback = (paths[0] + ' likes ' + paths[1])
            break;
    }
    if (paths.length > 2) {
        feedback = feedback.concat(handleMany(paths));
    };
    response.end(feedback);
});

function handleMany(list) {
    var things = ''
    if (list.length > 2) {
        list.splice(0,2);
        var things = " and:\n"
        list.forEach(function(thing) {
            things = things.concat('\n' + thing);
            return things;
        });
    }
    return things;
}

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});
