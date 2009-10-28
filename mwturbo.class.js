#ifndef _CLASS_MWTURBO
#define _CLASS_MWTURBO
#include "class.lib.js"
#include "console.class.js"
#include "menu.class.js"
#include "preferences.class.js"

var Mwturbo = new Class({
	contruct: function() {
		Page.init();
		this.menu = new Menu();
		this.console = new Console();
		this.preferences = new Preferences();
		this.settings = new Settings();
		this.initGlobalEvents();
	},
	console: null,
	menu: null,
	preferences: null,
	settings: {},
	mwcaptcha: null,
	modules: {},
	instances: {},
	stop: function() {
		var module;
		for ( module in this.instances )
			this.instances[ module ].stop();
	},
	toggle: function( module ) {
		if ( this.instances[ module ] ) {
			this.instances[ module ].log('Stopped running');
			delete this.instances[ module ];
		}
		else if ( this.modules[ module ] )
			this.instances[ module ] = new this.modules[ module ]();
	},
	log: function( details ) {
		this.console.log( details );
		this.settings.values.log_memory.push( details );
	},
	initGlobalEvents: function() {
		$aE( window, 'unload', function() {
			
		} );
	}
});
#endif
