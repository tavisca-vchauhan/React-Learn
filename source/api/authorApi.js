"use strict";

var authors = require('./authorData').authors;
var _ = require('lodash');

var _generateId = function(author) {
	return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();

};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var AuthorApi = {
	getAllAuthors: function() {
		return _clone(authors);
	},
	getAllAuthorById: function(id) {
		var author = _.find(authors, {id: id});
		return _clone(author);
	},

	saveAuthor: function(author) {
		console.log('Pretend this just saved the author ');

		if(author.id) {
			var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
			author.splice(existingAuthorIndex, 1, author);
		} else {
			author.id = _generateId(author);
			author.push(author);
		}

		return _clone(author);
	},

	deleteAuthor: function(id) {
		console.log('Pretend this just deleted the author');
		_.remove(authors, {id: id});
	}
};

module.exports = AuthorApi;