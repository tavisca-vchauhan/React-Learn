"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1> React Admin</h1>
                <p> React, React flux for practice</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
});

module.exports = Home;