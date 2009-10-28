#ifndef _CLASS_PARSER
#define _CLASS_PARSER
#include "class.lib.js"

var Parser = new Class({
	construct: function( html ) {
		this.html = html || '';
	},
	html: '',
	to_document: function() {
		var div = document.createElement('div');
		div.innerHTML = this.html;
		return div;
	}
});
#endif
