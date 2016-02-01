/**
 * MyInfo Component
 */

var React = require('react');

function getMyInfo() {
    return { 
        isEnabled : 1
    };
}


var MyInfo = React.createClass({

    getInitialState: function() {
        return getMyInfo();
    },

    render: function() {
        return (
            <div>Test</div>
            );
    }

});

module.exports = MyInfo;
