#ifndef _CLASS_TIMER
#define _CLASS_TIMER
#include "class.lib.js"

var Timer = new Class({
	construct: function( options ) {
		this.time = options.time || 5;
		this.fn = options.fn;
		this.callee = options.callee || window;
	},
	callee: window,
	time: 5,
	remaining: Infinity,
	current: 0,
	fn: null,
	interval: null,
	start: function() {
		this.timestamp = Math.round( new Date().getTime() / 1000 );
		this.remaining = this.time;
		this.fn.call( timer.callee, timer );
		this.interval = setInterval( function( timer ) {
			timer.current = Math.round( new Date().getTime() / 1000 ) - timer.timestamp;
			timer.remaining = timer.time - timer.current;
			timer.fn.call( timer.callee, timer );
			if ( timer.remaining <= 0 )
				clearInterval( timer.interval );
		}, 1000, this );
	},
	stop: function() {
		if ( this.interval )
			clearInterval( this.interval );
	}
});
#endif
