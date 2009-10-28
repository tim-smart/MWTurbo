#ifndef _CLASS_ANNOUNCE
#define _CLASS_ANNOUNCE
#include "class.lib.js"
#include "ui.class.js"

var Log = new Class({
	Extends: UI,
	construct: function() {
		
	}
});

var script_log_viewer = <><![CDATA[
<div class="generic_dialog_popup" style="top: 95px; width:570px !important;">
	<table id="pop_dialog_table" class="pop_dialog_table" style="width:570px !important;">
	<tbody>
		<tr>
			<td class="pop_topleft"></td>
			<td class="pop_border pop_top"></td>
			<td class="pop_topright"></td>
		</tr>
		<tr>
			<td class="pop_border pop_side"></td>
			<td id="pop_content" class="pop_content">
				<h2 class="dialog_title"><span id="a_title">Log Viewer</span></h2>
				<div class="dialog_content">
					<div id="a_content" class="dialog_body">
						<h3 class="mwt_pref_title">Filter</h3>
						<center>Bounty Wins <input type="checkbox" id="mwtlv_bounty" /> -
						Fights Won <input type="checkbox" id="mwtlv_fightswon" /> -
						Fights Lost <input type="checkbox" id="mwtlv_fightslost" /> -
						Jobs Done <input type="checkbox" id="mwtlv_jobs" /><br />
						Purchases <input type="checkbox" id="mwtlv_property" /> -
						Hospital <input type="checkbox" id="mwtlv_hospital" /> -
						Bank <input type="checkbox" id="mwtlv_bank" /> -
						Level <input type="checkbox" id="mwtlv_level" /></center>
						<h3 class="mwt_pref_title">Result</h3>
						<textarea readonly="readonly" id="mwtlv_log" style="width:520px;height:250px;"></textarea>
					</div>
					<div class="dialog_buttons">
						<input id="mwtlv_close" value="Close" name="cancel" class="inputsubmit inputaux" type="button">
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
