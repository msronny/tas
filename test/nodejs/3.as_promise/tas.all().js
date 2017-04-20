/**
 * Test of Tas.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/tas
 * Released under the MIT License.
 */

var tas = require('../../../lib');
var request = require('superagent');
var data;

tas.all({
	t1: function(){
		var url = 'https://raw.githubusercontent.com/tasjs/tas/master/examples/__res/pics/a.json';
		request.get(url).end(this.done);
	},

	t2: function(){
		var url = 'https://raw.githubusercontent.com/tasjs/tas/master/examples/__res/pics/b.json';
		request.get(url).end(this.done);
	},

	t3: function(){
		var url = 'https://raw.githubusercontent.com/tasjs/tas/master/examples/__res/pics/c.json';
		request.get(url).end(this.done);
	}
});

tas(function(err, d){
	data = d;
});

module.exports = {
	get: function(){
		return data;
	}
};
