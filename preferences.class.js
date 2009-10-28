#ifndef _CLASS_PREFERENCES
#define _CLASS_PREFERENCES
#include "class.lib.js"
#include "settings.class.js"
#include "ui.class.js"

var Preferences = new Class({
	Extends: UI,
	construct: function() {
		
	},
	close: function() {
		
	}
});

var pref_textarea = <><![CDATA[
<div class="generic_dialog_popup" style="top: 95px;">
	<table id="pop_dialog_table" class="pop_dialog_table" style="width:400px !important;">
	<tbody>
		<tr>
			<td class="pop_topleft"></td>
			<td class="pop_border pop_top"></td>
			<td class="pop_topright"></td>
		</tr>
		<tr>
			<td class="pop_border pop_side"></td>
			<td id="pop_content" class="pop_content">
				<h2 class="dialog_title"><span id="a_title" class="mwtp_textarea_title">Enter Mobs</span></h2>
				<div class="dialog_content">
					<div id="a_content" class="dialog_body">
						<center>Type in the Mob 'ID's below, with ONLY one ID per line.</center>
						<textarea id="mwtp_textarea" style="width:350px;height:200px;"></textarea>
					</div>
					<div class="dialog_buttons">
						<input id="mwtp_textarea_save" value="Save" name="save" class="inputsubmit" type="button">
						<input id="mwtp_textarea_cancel" value="Cancel" name="cancel" class="inputsubmit inputaux" type="button">
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

var pref_html = <><![CDATA[
<div class="generic_dialog_popup" style="top: 30px;">
	<table id="pop_dialog_table" class="pop_dialog_table">
	<tbody>
		<tr>
			<td class="pop_topleft"></td>
			<td class="pop_border pop_top"></td>
			<td class="pop_topright"></td>
		</tr>
		<tr>
			<td class="pop_border pop_side"></td>
			<td id="pop_content" class="pop_content">
				<h2 class="dialog_title"><span>MWTurbo Preferences</span></h2>
				<div class="dialog_content">
					<div class="dialog_body" style="overflow-y:auto;height:450px;">
						<h3 class="mwt_pref_title" style="margin-top:0;">General</h3>
						<setline>
							<preflabel>Bank Cash:</preflabel>
							<input id="pref_bank" type="checkbox" style="display:block;float:left;" />
							<description title="Do you want to bank your cash went it reaches the limit?">?</description>
						</setline>
						<setline>
							<preflabel>Bank Limit:</preflabel>
							<input id="pref_bank_limit" type="text" class="pref number" />
							<description title="Bank cash when reaches this amount?">?</description>
						</setline>
						<setline>
							<preflabel>Heal:</preflabel>
							<input id="pref_heal" type="checkbox" style="display:block;float:left;" />
							<description title="Do you want your boss healed when below set health?">?</description>
						</setline>
						<setline>
							<preflabel>Min Health: (%)</preflabel>
							<input id="pref_min_health" type="text" class="pref number" />
							<description title="Minimum health as a %">?</description>
						</setline>
						<setline>
							<preflabel>Max Health: (%)</preflabel>
							<input id="pref_max_health" type="text" class="pref number" />
							<description title="Stops healing once above this %. Maximum is 60%.">?</description>
						</setline>
						<setline>
							<preflabel>Min Refresh:</preflabel>
							<input id="pref_min_refresh" type="text" class="pref number" />
							<description title="Minimum page refresh time in seconds.">?</description>
						</setline>
						<setline>
							<preflabel>Max Refresh:</preflabel>
							<input id="pref_max_refresh" type="text" class="pref number" />
							<description title="Maximum page refresh time in seconds.">?</description>
						</setline>
						<setline>
							<preflabel>Script Repeat:</preflabel>
							<input id="pref_script_repeat" type="text" class="pref number" /> <span class="infinite">[Infinite]</span>
							<description title="How many times you want to do a action.">?</description>
						</setline>
						<setline>
							<preflabel>Avoid Mobs:</preflabel>
							<input id="pref_avoid_mobs" type="text" class="pref number text" style="display:none;" /><span class="text_pref" description="Avoid Mobs" updates="#pref_avoid_mobs">Click here to input Mobs</span>
							<description title="Choose Mob's that you don't want to attack on all scripts here. Comes preset with a few including Enforcers.">?</description>
						</setline>
						<setline>
							<preflabel>Use Exp Points:</preflabel>
							<input id="pref_level" type="checkbox" style="display:block;float:left;" />
							<description title="Do you want MWT to automatically spend your Level up points?">?</description>
						</setline>
						<setline>
							<preflabel>Skill ratio:</preflabel>
							<span class="pref_text">A:</span> <input id="pref_level_attack" type="text" class="pref small" />
							<span class="pref_text">D:</span> <input id="pref_level_defence" type="text" class="pref small" />
							<span class="pref_text">E:</span> <input id="pref_level_energy" type="text" class="pref small" />
							<span class="pref_text">H:</span> <input id="pref_level_health" type="text" class="pref small" />
							<span class="pref_text">S:</span> <input id="pref_level_stamina" type="text" class="pref small" />
							<description title="Choose how Experience points should be distributed. A=Attack, D=Defence, E=Energy, H=Health, S=Stamina">?</description>
						</setline>
						<setline>
							<preflabel>Insider:</preflabel>
							<input id="pref_insider" type="checkbox" style="display:block;float:left;" />
							<description title="Check this if you are a Mob Wars Insider, and would like the timers re-accounted for.">?</description>
						</setline>
						<setline>
							<preflabel>Captcha Sound:</preflabel>
							<input id="pref_captcha_sound" type="checkbox" style="display:block;float:left;" />
							<description title="Do you want to play a sound when a captcha is found?">?</description>
						</setline>
						<h3 class="mwt_pref_title">Chain Attack Detection</h3>
						<setline>
							<preflabel>Chain Time:</preflabel>
							<input id="pref_chain_time" type="text" class="pref number" />
							<description title="The maximum time in seconds between attacks to be considered a chain atacker.">?</description>
						</setline>
						<setline>
							<preflabel>Chain Attacks:</preflabel>
							<input id="pref_chain_attacks" type="text" class="pref number" />
							<description title="The minimum number of attacks before considered a chain attacker.">?</description>
						</setline>
						<h3 class="mwt_pref_title">Fight Script</h3>
						<setline>
							<preflabel>Start Stamina:</preflabel>
							<input id="pref_fight_stamina_start" type="text" class="pref number" />
							<description title="When stamina reaches this amount, start fighting.">?</description>
						</setline>
						<setline>
							<preflabel>Stop Stamina:</preflabel>
							<input id="pref_fight_stamina_stop" type="text" class="pref number" />
							<description title="When stamina reaches this amount, recharge to 'Start Stamina'.">?</description>
						</setline>
						<setline>
							<preflabel>Max Mob Size:</preflabel>
							<input id="pref_max_mob_size" type="text" class="pref number" />
							<description title="The biggest Mob you want to fight.">?</description>
						</setline>
						<setline>
							<preflabel>Min Mob Size:</preflabel>
							<input id="pref_min_mob_size" type="text" class="pref number" />
							<description title="The smallest Mob you want to fight.">?</description>
						</setline>
						<setline>
							<preflabel>Max Level:</preflabel>
							<input id="pref_fight_max_level" type="text" class="pref number" /> <span class="off">[Off]</span>
							<description title="The highest level you want to fight.">?</description>
						</setline>
						<setline>
							<preflabel>Fight Repeat:</preflabel>
							<span class="inputlabel">Exp:</span><input id="pref_exp_repeat" name="repeattype" class="prefradio" type="radio" />
							<span class="inputlabel">Cash:</span><input id="pref_cash_repeat" name="repeattype" class="prefradio" type="radio" />
							<span class="inputlabel">Threshold:</span><input id="pref_repeat_threshold" type="text" class="pref number" />
						</setline>
						<setline>
							<preflabel>Repeat Limit:</preflabel>
							<input id="pref_repeat_limit" type="text" class="pref number" /> <span class="infinite">[Infinite]</span> <span class="off">[Off]</span>
							<description title="Maximum number of times to repeativly attack a Mob.">?</description>
						</setline>
						<setline>
							<preflabel>Ignore Reset:</preflabel>
							<input id="pref_fight_reset" type="text" class="pref number" /> <span class="off">[Off]</span>
							<description title="Reset ignore list after this many attacks.">?</description>
						</setline>
						<setline>
							<preflabel>Avoid Mobs:</preflabel>
							<input id="pref_fight_avoid" type="text" class="pref number text" style="display:none;" /><span class="text_pref" description="Fight Avoid Mobs" updates="#pref_fight_avoid">Click here to input Mobs</span>
							<description title="Choose Mob's that you don't want to fight here.">?</description>
						</setline>
						<setline>
							<preflabel>Auto Punch:</preflabel>
							<span class="inputlabel">Off:</span><input id="pref_fight_punch_off" name="fight_punch" class="prefradio" type="radio" />
							<span class="inputlabel">Before Fight:</span><input id="pref_fight_punch_before" name="fight_punch" class="prefradio" type="radio" />
							<span class="inputlabel">Always Punch:</span><input id="pref_fight_punch_always" name="fight_punch" class="prefradio" type="radio" />
							<description title="Do you want to punch mobs before fighting them, or punch instead of attack?">?</description>
						</setline>
						<h3 class="mwt_pref_title">Hitlist Script</h3>
						<setline>
							<preflabel>Start Stamina:</preflabel>
							<input id="pref_hitlist_stamina_start" type="text" class="pref number" />
							<description title="When stamina reaches this amount, start Hitlisting.">?</description>
						</setline>
						<setline>
							<preflabel>Stop Stamina:</preflabel>
							<input id="pref_hitlist_stamina_stop" type="text" class="pref number" />
							<description title="When stamina reaches this amount, recharge to 'Start Stamina'.">?</description>
						</setline>
						<setline>
							<preflabel>Min Bounty:</preflabel>
							<input id="pref_min_bounty" type="text" class="pref number" />
							<description title="What is the smallest bounty you want to attack?">?</description> <span class="off">[Off]</span>
						</setline>
						<setline>
							<preflabel>Max Bounty:</preflabel>
							<input id="pref_max_bounty" type="text" class="pref number" />
							<description title="What is the largest bounty you want to attack?">?</description> <span class="off">[Off]</span>
						</setline>
						<setline>
							<preflabel>Multi Attack:</preflabel>
							<input id="pref_hitlist_multi_attack" type="text" class="pref number" />
							<description title="How many times do you want to try attack your target? NOTE: Will most likely cause un-reliable Log results.">?</description> <span class="off">[Off]</span>
						</setline>
						<setline>
							<preflabel>Avoid Mobs:</preflabel>
							<input id="pref_hitlist_avoid" type="text" class="pref number text" style="display:none;" /><span class="text_pref" description="Hitlist Avoid Mobs" updates="#pref_hitlist_avoid">Click here to input Mobs</span>
							<description title="Choose Mob's that you do not want to Hitlist here.">?</description>
						</setline>
						<h3 class="mwt_pref_title">Revenge Script</h3>
						<setline>
							<preflabel>Targets:</preflabel>
							<input id="pref_revenge_targets" type="text" class="pref number text" style="display:none;" /><span class="text_pref" description="Revenge Targets" updates="#pref_revenge_targets">Click here to input target mobs.</span>
							<description title="What Mobs do you want to release revenge upon?">?</description>
						</setline>
						<setline>
							<preflabel>Wait time:</preflabel>
							<input id="pref_revenge_wait" type="text" class="pref number" />
							<description title="How many seconds to wait before moving on to next target.">?</description>
						</setline>
						<setline>
							<preflabel>Start Stamina:</preflabel>
							<input id="pref_revenge_stamina_start" type="text" class="pref number" />
							<description title="When stamina reaches this amount, start fighting.">?</description>
						</setline>
						<setline>
							<preflabel>Stop Stamina:</preflabel>
							<input id="pref_revenge_stamina_stop" type="text" class="pref number" />
							<description title="When stamina reaches this amount, recharge to 'Start Stamina'.">?</description>
						</setline>
						<setline>
							<preflabel>Attack Mobs:</preflabel>
							<input id="pref_revenge_attack" type="checkbox" style="display:block;float:left;" />
							<description title="Do you want to attack (fight) targets?">?</description>
						</setline>
						<setline>
							<preflabel>Hitlist Mobs:</preflabel>
							<input id="pref_revenge_hitlist" type="checkbox" style="display:block;float:left;" />
							<description title="Do you want to add targets to the hitlist?">?</description>
						</setline>
						<setline>
							<preflabel>Punch Mobs:</preflabel>
							<input id="pref_revenge_punch" type="checkbox" style="display:block;float:left;" />
							<description title="Do you want to punch targets?">?</description>
						</setline>
						<setline>
							<preflabel>Ignore Reset:</preflabel>
							<input id="pref_revenge_ignore_reset" type="text" class="pref number" /> <span class="off">[Off]</span>
							<description title="Reset ignore list after this many actions.">?</description>
						</setline>
						<setline>
							<preflabel>Relatiate:</preflabel>
							<input id="pref_revenge_retaliate" type="checkbox" style="display:block;float:left;" />
							<description title="Do you want to automatically add mobs that chain attack you to the Revenge list?">?</description>
						</setline>
						<setline>
							<preflabel>Chainers:</preflabel>
							<input id="pref_revenge_chainers" type="text" class="pref number text" style="display:none;" /><span class="text_pref" description="Chain Attackers" updates="#pref_revenge_chainers">Click here to view Chain Attackers</span>
							<description title="View the chain attackers that have been added to your Revenge list. Can edit and clear them here.">?</description>
						</setline>
						<setline>
							<preflabel>Temporary:</preflabel>
							<input id="pref_revenge_retaliate_temp" type="checkbox" style="display:block;float:left;" />
							<description title="Would you like chain attackers saved? Or would you like the list reset each time you run Revenge?">?</description>
						</setline>
						<h3 class="mwt_pref_title">Property Script</h3>
						<setline>
							<preflabel>Undeveloped:</preflabel>
							<input id="pref_property_undev" type="checkbox" style="display:block;float:left;" />
							<description title="Do you want to invest in property that can be upgraded?">?</description>
						</setline>
						<setline>
							<preflabel>Reserve Cash:</preflabel>
							<input id="pref_property_reserve" type="text" class="pref number" />
							<description title="How much cash do you want to leave reserved? Setting 0 will spend as much cash as possible on Property.">?</description>
						</setline>
						<h3 class="mwt_pref_title">Job Script</h3>
						<setline>
							<preflabel>Job Number:</preflabel>
							<input id="pref_job_number" type="text" class="pref number" />
							<description title="What job to do. 1 = Mugging, 2 = House Burglary etc.">?</description>
						</setline>
						<h3 class="mwt_pref_title">Defend Script</h3>
						<setline>
							<preflabel>Wait Time:</preflabel>
							<input id="pref_defend_time" type="text" class="pref number" />
							<description title="How long to wait before rechecking stats.">?</description>
						</setline>
						<setline>
							<preflabel>Chain Detect:</preflabel>
							<input id="pref_defend_chain" type="checkbox" style="display:block;float:left;" />
							<description title="Do you want to play dead when chain attacked?">?</description>
						</setline>
						<setline>
							<preflabel>Play Dead:</preflabel>
							<input id="pref_defend_dead_wait" type="text" class="pref number" />
							<description title="How long to pause script in minutes when chain attacked.">?</description>
						</setline>
						<h3 class="mwt_pref_title">MWcaptcha Account <span id="mwc_points">My Captcha Points</span></h3>
						<setline>
							<preflabel>Enable:</preflabel>
							<input id="pref_mwcaptcha" type="checkbox" style="display:block;float:left;" />
							<description title="If you have a MWcaptcha account and you want to use it, enable this option.">?</description>
						</setline>
						<setline>
							<preflabel>Safe Mode:</preflabel>
							<input id="pref_mwcaptcha_safe" type="checkbox" style="display:block;float:left;" />
							<description title="Safe Mode is a lot less likely to get reliable results, but removes all threats of being discovered using a bot.">?</description>
						</setline>
						<setline>
							<preflabel>Mode:</preflabel>
							<span class="inputlabel">Earn Points:</span><input id="pref_mwc_earn" name="mwc" class="prefradio" type="radio" />
							<span class="inputlabel">Use Points:</span><input id="pref_mwc_use" name="mwc" class="prefradio" type="radio" />
						</setline>
						<setline>
							<preflabel>Username:</preflabel>
							<input id="pref_mwc_username" type="text" class="pref number text" />
							<description title="Your MWcaptcha Username.">?</description>
						</setline>
						<setline>
							<preflabel>Password:</preflabel>
							<input id="pref_mwc_password" type="password" class="pref number text" />
							<description title="Your MWcaptcha Password.">?</description>
						</setline>
					</div>
					<div class="dialog_buttons">
						<input id="mwtp_save" value="Save" name="save" class="inputsubmit" type="button">
						<input id="mwtp_cancel" value="Cancel" name="cancel" class="inputsubmit inputaux" type="button">
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
