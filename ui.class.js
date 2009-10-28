#ifndef _CLASS_UI
#define _CLASS_UI
#include "class.lib.js"

var UI = new Class({
	show: function() {
		if ( this.element.parentNode )
			this.element.style.display = '';
		else
			document.body.insertBefore( this.element, document.body.lastChild );
	},
	element: null,
	hide: function() {
		this.element.style.display = 'none';
	},
	remove: function() {
		this.element.parentNode.removeChild( this.element );
	}
});
#endif
