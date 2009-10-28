#ifndef _CLASS_FIGHT
#define _CLASS_FIGHT
#include "class.lib.js"
#include "module.class.js"

mwturbo.modules['fight'] = new Class({
	Extends: Module,
	construct: function( resume ) {
		this.parent(); // Calls Module.construct();
	},
	name: 'Fight'
});
#endif
