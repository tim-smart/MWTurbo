#ifndef _CLASS_ANNOUNCE
#define _CLASS_ANNOUNCE
#include "class.lib.js"
#include "ui.class.js"

var Announce = new Class({
	Extends: UI,
	contruct: function( options ) {
		this.element = document.createElement('div');
		this.element.setAttribute( 'style', 'z-index:101 !important;display:none;' );
		this.element.className = "generic_dialog pop_dialog";
		this.element.innerHTML = script_announce;
	},
	title: 'Message',
	body: '',
	id: ''
});

// HTML code for announce
var script_announce = <><![CDATA[
<div class="generic_dialog_popup" style="top: 95px;">
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
				<h2 class="dialog_title"><span id="a_title"></span></h2>
				<div class="dialog_content">
					<div id="a_content" class="dialog_body"></div>
					<div class="dialog_buttons">
						<input class="mwta_close" value="Close" name="cancel" class="inputsubmit inputaux" type="button">
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
