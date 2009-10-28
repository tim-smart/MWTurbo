#ifndef _LIB_XHR
#define _LIB_XHR

function xhr( details, callee ) {
	details.method = details.method || "get",
		details.headers = details.headers || { 'Content-Type': 'application/x-www-form-urlencoded' },
		details.called = false,
		details.timeout = setTimeout( function( details ) {
			details.called = true;
			xhr( details, callee );
		}, 20000, details ),
		details.onload = function( xhr ) {
			if ( details.called )
				return;
			clearTimeout( this.timeout );
			this.success.call( callee ? callee : this, xhr.responseText, xhr );
		};
	return GM_xmlhttpRequest( details );
}
#endif
