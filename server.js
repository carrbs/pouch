var express = require('express');
var app = express();

const PORT=3000;

app.get('*', (request, response) => {
    var funzies = pathFunzies(request);
    response.end(funzies);
});

app.listen(PORT, () =>
    console.log("Server listenin' on: http://localhost:%s", PORT));


function pathFunzies(request) {
    var paths = [];
    paths = request.url.split('/');
    paths.shift();// no leading '/'
    var feedback = '';
    console.log("dat length: " + paths.length);
    switch (paths.length) {
        case 0:
            feedback = "hi! put some fun stuff \(like 'foo/bar'\) in the path. ^^^";
            break;
        case 1:
            feedback = "hi " + paths[0] + "! PUT some fun stuff \(like 'foo/bar'\) in the path. ^^^";
            break;
        default:
            feedback = (paths[0] + ' likes ' + paths[1]);
            break;
    }
    if (paths.length > 2) {
        feedback = feedback.concat(handleMany(paths));
    };
    return feedback;

}


function handleMany(list) {
    var allTheThings = '';
    if (list.length > 2) {
        list.splice(0,2);
        var things = " and:\n";
        list.forEach(thing => {
            allTheThings = allTheThings.concat('\n' + thing);
            return allTheThings;
        });
    }
    return allTheThings;
}
