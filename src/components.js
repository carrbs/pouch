import React from 'react';
import _ from 'lodash';

var YarWoot = React.createClass({
    render() {
        return <div className="yarWoot">
            yar woot!
        </div>
    }
});

var Box = React.createClass({
    render() {
        var styles = _.cloneDeep(this.constructor.styles);
        styles.box.borderColor = this.props.color;

        return <div style={styles.box} className="tile">
            <YarWoot />
        </div>
    }
});

Box.styles = {
    box: {
        border: "2px solid green",
        padding: 5,  // Becomes "10px" when rendered.
        color: "#333"
        
    },
    boxHint: {
        fontStyle: "italic"
    }
};


module.exports = { Box };
