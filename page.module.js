#ifndef _MODULE_PAGE
#define _MODULE_PAGE

var Page = {
	init: function() {
		GM_addStyle( script_css );
	},
	domain: "http://apps.facebook.com"
};

var script_css = <><![CDATA[
div#mwt_menu {
	position:fixed;
	bottom:27px;
	right:2px;
	width:200px;
	overflow:hidden;
	z-index:10;
}
div#mwt_menu_links span, div#mwt_menu_options span {
	display:block;
	color:#3B5998;
	cursor:pointer;
	margin:16px 0;
}
div#mwt_menu_links span:hover, div#mwt_menu_options span:hover {
	text-decoration:underline;
}
h3.mwt_pref_title {
	margin:3px 0;
	padding:0;
	color:#333333;
	font-size:13px;
	font-weight:bold;
	width:100%;
	border:solid #D8DFEA;
	border-width:0 0 1px;
}
table.mwt_stats td {
	color:gray;
}
table.mwt_stats span {
	color:#000000;
	font-size:12px;
}
tbody#mwt_status td {
	color:gray;
	font-size:11px;
	vertical-align:baseline;
}
tbody#mwt_status span{
	font-size:14px;
	color:#BF0000;
	cursor:pointer;
	padding:0 10px 0 0;
}
tbody#mwt_status span:hover{
	text-decoration:underline;
}
span.running {
	color:#00AA00 !important;
}
td.script_name {
	text-align:right;
	width:70px;
}
select#mwt_logger option{
	padding: 6px 0pt 0pt;
	height:18px;
	font-size: 9px;
}
setline {
	margin:0;
	padding:0;
	display:block;
	overflow:hidden;
	height:22px;
}
preflabel {
	margin:0;
	padding:4px 0 0;
	font-size:11px;
	display:block;
	float:left;
	width:90px;
	color:gray;
	clear:left;
}
description {
	display:block;
	height:18px;
	width:18px;
	background-color:#3B5998;
	font-size:12px;
	font-weight:bold;
	color:#FFF;
	float:right;
	clear:right;
	text-align:center;
	cursor:help;
}
input.pref {
	display: block;
	float:left;
	border:1px solid #BDC7D8;
	padding:3px;
	font-size:11px;
}
input.number {
	width:79px;
}
input.small {
	width:30px !important;
}
input.string {
	width:100px;
}
input.prefradio {
	display:block;
	float:left;
}
span.inputlabel {
	margin:0;
	padding:4px 2px 0 3px;
	font-size:11px;
	display:block;
	float:left;
	color:#000000;
}
span.pref_text {
	display:block;
	float:left;
	padding:3px 2px 0;
}
span.infinite, span.off, span.text_pref {
	display:block;
	float:left;
	padding:3px 2px 0;
	color:#3B5998;
	cursor:pointer;
}
span.infinite:hover, span.off:hover, span.text_pref:hover {
	text-decoration:underline;
}
span#mwc_points{
	text-decoration:underline;
	color:#3B5998;
	font-size:11px;
	cursor:pointer;
}
]]></>.toString();
#endif
