import chalk from 'chalk';
import express from 'express';
import fs from 'fs';
import React from 'react';
import ReactDOM from 'react-dom/server';
import serveStatic from 'serve-static';

import {Base} from './src/components';

const PORT = 3000;

var tmpl = fs.readFileSync('index.html', 'utf8');
var notFound = fs.readFileSync('404.html', 'utf8');

var app = express();

app.use(serveStatic('static'));

app.get('/', (request, response) => {
    var html = tmpl.replace(/MOUNT/, ReactDOM.renderToString(<Base />));
    response.end(html);
});

app.get('*', (request, response) => {
    response.send(notFound);
});

app.listen(PORT, () =>
    console.log(chalk.green("Server listenin' on: http://localhost:%s", PORT))
);

