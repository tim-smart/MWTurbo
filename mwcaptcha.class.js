#ifndef _CLASS_MWCAPTCHA
#define _CLASS_MWCAPTCHA
#include "class.lib.js"
#include "utils.lib.js"
#include "xhr.lib.js"

var Mwcaptcha = new Class({
	construct: function( options ) {
		this.username = encodeURIComponent( options.username || '' );
		this.password = encodeURIComponent( options.password || '' );
		var ref = this;
		window.addEventListener( 'unload', function() {
			ref.stop();
		}, false );
	},
	api: 'https://www.mwturbo.com/mwcaptcha/api.php',
	client: 'mwturbo',
	username: '',
	password: '',
	stopping: false,
	stop: function() {
		this.stopping = true;
	},
	request: function( options ) {
		return xhr({
			method: "post",
			url: this.api,
			data: 'client=' + this.client + '&' + options.data,
			success: options.success
		}, this );
	},
	handle_response: function( response, callback ) {
		switch ( response ) {
			case "USERNAME":
				alert('MWcaptcha Username is missing!');
				break;
			case "PASSWORD":
				alert('MWcaptcha Password is missing or incorrect!');
				break;
			case "SUBMIT":
				break;
			case "ANSWER":
				alert('MWcaptcha required field is missing!');
				break;
			case "POINTS":
				alert('You don\t have enough MWcaptcha points!');
				break;
			case "EXPIRED":
				alert('You took too long! You only have 10 seconds to solve someone elses Captcha!');
			case "SUSPEND":
				alert('Your MWcaptcha account has been suspended!');
				break;
			case "OFFLINE":
				alert('MWcaptcha service is current offline until further notice.');
				break;
			default:
				if ( callback )
					callback.call( this, response );
				break;
		}
	},
	points: function() {
		this.request({
			data: 'act=points&username=' + this.username,
			success: function( resp ) {
				Mwcaptcha.handle_response( resp, function( resp ) {
					alert('You have ' + resp + ' MWcaptcha Captcha points.');
				} );
			}
		});
	}
});

var Mwcaptcha_solve = new Class({
	Extends: Mwcaptcha,
	construct: function( options ) {
		this.parent( options );
		this.solve();
	},
	solve: function() {
		this.request({
			data: 'act=solve&username=' + this.username + '&password=' + this.password,
			success: function( resp ) {
				this.handle_response( resp, function( resp ) {
					// No image yet
					if ( resp === "CONTINUE" && this.stopping === false ) {
						this.solve();
						return;
					}
					// We got one!
					else if ( this.stopping === false ) {
						mwturbo.mwcaptcha = new Captcha({
							type: 'mwcaptcha',
							url: resp
						});
						mwturbo.console.show_mwcaptcha();
					}
				} );
			}
		});
	},
	answer: function( answer ) {
		this.request({
			data: 'act=answer&username=' + this.username + '&password=' + this.password + '&answer=' + encodeURIComponent( answer ),
			success: function( resp ) {
				Mwcaptcha.handle_response( resp, function( resp ) {
					this.solve();
				} );
			}
		});
	}
});

var Mwcaptcha_get = new Class({
	Extends: Mwcaptcha,
	construct: function( options ) {
		this.parent( options );
		this.captcha = options.captcha || {};
		this.safe = options.safe ? true : false;
		this.add();
	},
	safe: false,
	captcha: {},
	handle_add: function( resp ) {
		this.handle_response( resp, function( resp ) {
			if ( this.stopping === false ) {
				this.trans_id = encodeURIComponent( resp );
				this.get();
			}
		} );
	},
	add: function() {
		// Do we send URL or raw image data?
		if ( this.safe === true )
			xhr({
				url: this.captcha.url,
				overrideMimeType: 'text/plain; charset=x-user-defined',
				success: function( resp ) {
					var data = '';
					for ( var i = 0, il = resp.length; i < il; i++ )
						data += String.fromCharCode( ( resp[ i ].charCodeAt(0) & 0xff ) ); // Only want single byte characters
					data = btoa( data );
					$i('captcha_image').setAttribute( 'src', 'data:image/gif;base64,' + data );

					// Send data to API
					this.request({
						data: 'act=add&username=' + this.username + '&password=' + this.password +
							'&image=' + encodeURIComponent( 'data:image/gif;base64,' + data ),
						success: function( resp ) {
							this.handle_add( resp );
						}
					} );
				}
			}, this );
		else
			this.request({
				data: 'act=add&username=' + this.username + '&password=' + this.password + '&image=' + encodeURIComponent( this.captcha.url ),
				success: function( resp ) {
					this.handle_add( resp );
				}
			});
	},
	get: function() {
		this.request({
			data: 'act=get&trans_id=' + this.trans_id,
			success: function( resp ) {
				this.handle_response( resp, function( resp ) {
					// Server hasn't got answer yet
					if ( resp === "CONTINUE" && this.stopping === false ) {
						this.get();
						return;
					}
					// Transaction ID was missing
					else if ( resp === "TRANS_ID" && this.stopping === false )
						this.captcha.submit('0');

					// Yay! Answer has been given
					else if ( this.stopping === false )
						this.captcha.submit( resp );
				} );
			}
		});
	},
	result: function( success ) {
		this.request({
			data: 'act=result&trans_id=' + this.trans_id + '&result=' + ( success === false ? "FAIL" : "TRUE" ),
			success: function( resp ) {
				this.handle_response( resp );
			}
		});
	}
});
#endif
