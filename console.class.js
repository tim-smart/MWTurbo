#ifndef _CLASS_CONSOLE
#define _CLASS_CONSOLE
#include "class.lib.js"
#include "log.class.js"
#include "mwcaptcha.class.js"
#include "sound.class.js"
#include "ui.class.js"
#include "utils.lib.js"

var Console = new Class({
	Extends: UI,
	construct: function() {
		this.sound = new Sound('http://www.mwturbo.com/sound.wav');
		this.element = document.createElement('div');
		this.element.setAttribute('style', 'z-index:99 !important;');
		this.element.id = "mwt_console_pop";
		this.element.className = "generic_dialog pop_dialog";
		this.element.innerHTML = script_console;
		var status = $xp( ".//tbody[@id='mwt_status']", this.element ),
			module,
			tr,
			td,
			span;
		for ( module in modules ) {
			tr = document.createElement('tr');
			td = document.createElement('td');
			span = document.createElement('span');
			span.id = 'mwt_' + module;
			span.className = 'running';
			span.textContent = modules[ module ].prototype.name;
			td.appendChild( span );
			td.className = 'script_name';
			tr.appendChild( td );
			td = document.createElement('td');
			td.id = 'status_' + module;
			tr.appendChild( td );
			status.appendChild( tr );
		}
		tr = td = span = null;
	},
	visable: false,
	toggle: function() {
		if ( this.visable === true ) {
			// Stop MWCaptcha solver
			if ( mwturbo.mwcaptcha !== null ) {
				mwturbo.mwcaptcha.stop();
				mwturbo.mwcaptcha = null;
			}
			mwturbo.stop();
			this.remove();
			this.visable = false;
			return;
		}
		// Show console and add events
		this.show();
		var ref = this;
		$aE( 'mwtc_close', 'click', function() {
			var menu = $i('mwt_console');
			menu.hidden = false,
				menu.textContent = 'Start MWT';
			ref.toggle();
		});
		$aEX( ".//tbody[@id='mwt_status']//span", 'click', function() {
			mwturbo.toggle( this.id.match( /mwt_(.+)/ )[1] );
		});
		$aE( 'mwtc_lv', 'click', function() {
			mwturbo.log.show();
		});
		$aE( 'mwtc_clearlog', 'click', function() {
			ref.clear_log();
			mwturbo.log.memory = [];
			alert('Log Memory Cleared!');
		});
		$aE( 'captcha_submit', 'click', function() {
			mwturbo.captcha.submit();
		});
		$aE( 'captcha_answer', 'keyup', function( event ) {
			if ( event.keyCode === 13 )
				mwturbo.captcha.submit();
		});
		$aE( 'mwcaptcha_answer', 'keyup', function( event ) {
			if ( event.keyCode === 13 )
				mwturbo.mwcaptcha.submit();
		});
		$aE( 'mwcaptcha_submit', 'click', function() {
			mwturbo.mwcaptcha.submit();
		});
		this.visable = true;
		if (Settings.mwcaptcha === true && Settings.mwc_earn === true) {
			mwturbo.mwcaptcha = new Mwcaptcha_solve({
				username: Settings.mwc_username,
				password: Settings.mwc_password
			});
		}
	},
	clear_log: function() {
		$i('mwt_logger').textContent = '';
	},
	show_captcha: function() {
		var input = $i('mwcaptcha_answer');
		$i('mwcaptcha_image').src = mwturbo.captcha.url;
		input.value = "";
		$i('mwc_captcha_box').style.display = '';
		input.focus();
		if (Settings.captcha_sound) {
			this.sound.play();
		}
	},
	show_mwcaptcha: function() {
		var input = $i('mwcaptcha_answer');
		$i('mwcaptcha_image').src = mwturbo.mwcaptcha.url;
		input.value = "";
		$i('mwc_captcha_box').style.display = '';
		input.focus();
		if (Settings.captcha_sound) {
			this.sound.play();
		}
	}
});

var script_console=<><![CDATA[
<div class="generic_dialog_popup" style="top: 50px; width:600px !important;">
	<table id="pop_dialog_table" class="pop_dialog_table" style="width:600px !important;">
	<tbody>
		<tr>
			<td class="pop_topleft"></td>
			<td class="pop_border pop_top"></td>
			<td class="pop_topright"></td>
		</tr>
		<tr>
			<td class="pop_border pop_side"></td>
			<td id="pop_content" class="pop_content">
				<h2 class="dialog_title" style="position:relative;"><span>MWTurbo Console</span>
					<img id="mwt_working" style="display:none; position: absolute; top: 6px; right: 6px;" src="http://www.mwturbo.com/work.gif" />
				</h2>
				<div class="dialog_content">
					<div class="dialog_body">
						<h3 class="mwt_pref_title" style="margin-top:0;">Stats</h3>
						<table class="mwt_stats" style="width:100%;border:none:padding:0;margin:0;">
						<tbody>
							<tr>
								<td width="50%">Cash: <span id="mwt_cash">$0</span></td>
								<td width="50%">Health: <span id="mwt_health">0/0</span></td>
							</tr>
						<table class="mwt_stats" style="width:100%;border:none:padding:0;margin:0;">
						<tbody>
							<tr>
								<td width="50%">Energy: <span id="mwt_energy">0/0</span></td>
								<td width="50%">Stamina: <span id="mwt_stamina">0/0</span></td>
							</tr>
						<table class="mwt_stats" style="width:100%;border:none:padding:0;margin:0;">
						<tbody>
							<tr>
								<td width="50%">Total Damage Dealt: <span id="mwt_damaged">0</span></td>
								<td width="50%">Total Damage Recieved: <span id="mwt_damager">0</span></td>
							</tr>
						</tbody>
						</table>
						<table class="mwt_stats" style="width:100%;border:none:padding:0;margin:0;">
						<tbody>
							<tr>
								<td width="50%">Total $ Won: <span id="mwt_won">$0</span></td>
								<td width="50%">Total Exp Gain: <span id="mwt_exp">0</span></td>
							</tr>
						</tbody>
						</table>
						<table class="mwt_stats" style="width:100%;border:none:padding:0;margin:0;">
						<tbody>
							<tr>
								<td width="50%">Total Bounties: <span id="mwt_bount">0</span></td>
								<td width="50%">Total Wins: <span id="mwt_wins">0</span></td>
							</tr>
						</tbody>
						</table>
						<h3 class="mwt_pref_title">Status</h3>
						<table style="width:100%;border:none:padding:0;margin:0;"><tbody id="mwt_status"></tbody></table>
						<h3 class="mwt_pref_title">Log <span style="font-size:10px;"><a id="mwtc_lv" href="#" onclick="return false;">[Log Viewer]</a> <a id="mwtc_clearlog" href="#" onclick="return false;">[Clear]</a></span></h3>
						<select multiple="multiple" id="mwt_logger" style="width:100%;height:120px;"></select>
						<div id="mwt_captcha_box" style="display:none;"><h3 class="mwt_pref_title">Captcha Found!</h3>
						<img id="captcha_image" style="display: block;float:left;" src="" alt="captcha" />
						<input id="captcha_answer" style="display: block;float:left;width: 150px;margin:18px 0 0 15px;" type="text" />
						<input id="captcha_submit" style="display: block;float:left;margin: 17px 0pt 0pt 15px;" value="Submit" name="save" class="inputsubmit" type="button">
						<div style="clear:both;"></div></div>
						<div id="mwc_captcha_box" style="display:none;"><h3 class="mwt_pref_title">You have a MWcaptcha to solve!</h3>
						<img id="mwcaptcha_image" style="display: block;float:left;" src="" alt="captcha" />
						<input id="mwcaptcha_answer" style="display: block;float:left;width: 150px;margin:18px 0 0 15px;" type="text" />
						<input id="mwcaptcha_submit" style="display: block;float:left;margin: 17px 0pt 0pt 15px;" value="Submit" name="save" class="inputsubmit" type="button">
						<div style="clear:both;"></div></div>
					</div>
					<div class="dialog_buttons">
						<input id="mwtc_close" value="Shut Down" name="save" class="inputsubmit" type="button">
					</div>
				</div>
			</td>
			<td class="pop_border pop_side"></td>
		</tr>
		<tr>
			<td class="pop_bottomleft"></td>
			<td class="pop_border pop_bottom"></td>
			<td class="pop_bottomright"></td>
		</tr>
	</tbody>
	</table>
</div>
]]></>.toString();
#endif
