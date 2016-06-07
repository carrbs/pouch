import React from 'react';


var Base = React.createClass({
    render() {
        return <html>
                <head>
                    <title>I am a title for up here</title>
                </head>
                <body>
                    <div className="base">
                        <h1>I am a title on the Base</h1>
                        <Box />
                    </div>
                </body>
        </html>
    }
})


var Box = React.createClass({
    render() {
        return <div className="box">
            <h2>I'm a box</h2>
                <img src='http://www.placekitten.com/200/200' />
                <p>I'm a paragraph about the box.</p>
        </div>;
    }
});

module.exports = { Base };
