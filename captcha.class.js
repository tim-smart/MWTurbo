#ifndef _CLASS_CAPTCHA
#define _CLASS_CAPTCHA
#include "class.lib.js"

var Captcha = new Class({
	construct: function( options ) {
		this.url = options.url || '';
		this.submit = options.fn || null;
		if ( typeof options.type === "string" && options.type !== "mwcaptcha" )
			this.post_data = options.post_data || '';
	},
	url: '',
	post_data: '',
	submit: null
});
#endif
