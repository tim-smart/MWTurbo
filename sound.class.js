#ifndef _CLASS_SOUND
#define _CLASS_SOUND
#include "class.lib.js"
#include "utils.lib.js"

var Sound = new Class({
	construct: function( url ) {
		this.url = url;
	},
	get tempURL() {
		if ( this.url.indexOf('?') )
			return this.url + '&tmp=' + new Date().getTime();
		return this.url + '?tmp' + new Date().getTime();
	},
	play: function() {
		$i('sound_player').innerHTML = '<embed src="' + this.url + '" hidden="true" autostart="true" loop="false">';
	}
});
#endif
