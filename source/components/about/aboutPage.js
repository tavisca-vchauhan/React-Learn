"use strict";

var React = require('react');
var about = React.createClass({
	render: function(){
		return (
			<div>
				<h1> About</h1>
				<p> This application uses following tech:
				<ul>
				<li>React</li>
				<li> React Router </li>
				<li> Flux</li>
				<li> Gulp</li>
				</ul>
				</p>
			</div>
			);
	}
});

module.exports = about;