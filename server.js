import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';

import {Box} from './src/components';

const PORT = 3000;
var app = express();

app.listen(PORT, () =>
    console.log("Server listenin' on: http://localhost:%s", PORT)
);

app.get('*', (request, response) => {
    var example = ReactDOM.renderToString(<Box />);
    response.end(example);
});


