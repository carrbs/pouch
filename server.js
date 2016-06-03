var express = require('express');
var app = express();
var React = require('react');
var ReactDOM = require('react-dom/server');

import {YarWoot} from './src/components';

const PORT = 3000;

app.listen(PORT, () =>
    console.log("Server listenin' on: http://localhost:%s", PORT)
);

app.get('*', (request, response) => {
    var example = ReactDOM.renderToString(<YarWoot />);
    response.end(example);
});


