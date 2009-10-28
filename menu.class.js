#ifndef _CLASS_MENU
#define _CLASS_MENU
#include "class.lib.js"
#include "page.module.js"
#include "ui.class.js"
#include "utils.lib.js"

var Menu = new Class({
	Extends: UI,
	construct: function() {
		this.element = document.createElement('div');
		this.element.id = 'mwt_menu';
		this.element.innerHTML = script_menu;
		this.show();
		var ref = this;
		$aE( 'mwt_console', 'click', function() {
			if ( mwturbo.console.visable === true ) {
				ref.console_hidden = ref.console_hidden || false;
				if ( ref.console_hidden === true ) {
					mwturbo.console.show();
					this.textContent = 'Hide MWT';
					ref.console_hidden = false;
				}
				else {
					mwturbo.console.hide();
					this.textContent = 'Show MWT';
					ref.console_hidden = true;
				}
				return;
			}
			mwturbo.console.toggle();
			this.textContent = 'Hide MWT';
		});
		$aE( 'mwt_return', 'click', function() {
			ref.switch();
		});
		$aE( 'mwt_options', 'click', function() {
			ref.switch();
		});
		$aE( 'mwt_pref_button', 'click', function() {
			// TODO: show preferences
		});
		$aE( 'mwt_reset', 'click', function() {
			// TODO: reset preferences
		});
		$aE( 'mwt_version', 'click', function() {
			alert( product_name + "\n" + "Version: " + script_version );
		});
	},
	console_hidden: false,
	switch: function() {
		var options = $i('mwt_menu_options');
		if ( options.style.display === 'none' ) {
			$i('mwt_menu_links').style.display = 'none';
			options.style.display = '';
		}
		else {
			options.style.display = 'none';
			$i('mwt_menu_links').style.display = '';
		}
	}
});

var script_menu = <><![CDATA[
<div style="height:25px;color:#ffffff;background:#3b5998;width:100%;font-size:14px;font-weight:bold;-moz-border-radius-topleft:5px;-moz-border-radius-topright:5px;text-align:center;padding:6px 0 0 0;">MWTurbo</div> 
<div id="mwt_menucontent" style="background-color:#ffffff;padding:5px;width:188px;border:solid #3b5998;border-width:0 1px 1px;"> <center> 

<div id="mwt_menu_links" style="padding:0 0 16px 0;">
	<span style="margin-top: 0;"><button type="button" id="mwt_console" class="inputsubmit">Start MWT</button></span>
	<button type="button" id="mwt_options" class="inputsubmit">Options</button>
</div> 

<div id="mwt_menu_options" style="display:none;padding:0 0 16px;">
	<span id="mwt_reset" style="margin-top: 0;">Reset MWTurbo</span>
	<span id="mwt_version">Current Version</span>
	<button type="button" id="mwt_return" class="inputsubmit">Main Menu</button>
</div>

<button type="button" id="mwt_pref_button" class="inputsubmit">Preferences</button> </center></div>
<div id="sound_player" style="overflow: hidden; height: 0pt; width: 0pt;"></div>
]]></>.toString();
#endif
