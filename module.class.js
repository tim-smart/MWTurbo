#ifndef _CLASS_MODULE
#define _CLASS_MODULE
#include "boss.module.js"
#include "class.lib.js"
#include "page.module.js"
#include "xhr.lib.js"

var Module = new Class({
	construct: function() {
		this.nameLowerCase = this.name.toLowerCase();
	},
	nameLowerCase: '',
	log: function( action ) {
		mwturbo.log( [{
			name: 'Script',
			value: this.name
		},
		{
			name: 'Action',
			value: action
		}] );
		mwturbo.console.status( this.name_lowercase, action );
	},
	ajax: function( details ) {
		details.url = Page.domain + details.url;
		xhr( details, this );
	},
	ajaxParse: function( resp, callback ) {
		// TODO: Check for the bad stuff
	},
	stop: function() {
		mwturbo.toggle( this.nameLowerCase );
	}
});
#endif
