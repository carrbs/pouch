var express = require('express');
var app = express();
var React = require('react');
var ReactDOM = require('react-dom/server');

const PORT = 3000;

app.get('*', (request, response) => {
    var example = ReactDOM.renderToString(<YarWoot />);
    response.end(example);
});

app.listen(PORT, () =>
    console.log("Server listenin' on: http://localhost:%s", PORT)
);

var YarWoot = React.createClass({
  render() {
    return <div className="yarWoot">
       yar woot!
    </div>
  }
});
