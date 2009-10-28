// ==UserScript==
// @name           MWTurbo
// @namespace      http://userscripts.org/users/tim
// @include        http://apps.facebook.com/mobwars*
// @include        https://apps.facebook.com/mobwars*
// @license        Attribution-Noncommercial-Share Alike 3.0. http://creativecommons.org/licenses/by-nc-sa/3.0/
// @copyright      (c) 2008 Tim Smart and MWTurbo.com
// @version        5.2.${REVISION}
// @require        http://updater.usotools.co.cc/53234.js?interval=7
// ==/UserScript==

// For full license terms, see: http://creativecommons.org/licenses/by-nc-sa/3.0/legalcode

var product_name = "MWTurbo Full Version",
	script_version = "5.2.${REVISION}";

// USO Updater code
USO.updater.registerMenuToggle();
USO.updater.registerMenuUpdate();

// Load teh super-class
#include "mwturbo.class.js"
var mwturbo = new Mwturbo(),
	$s = mwturbo.settings.values;

// Load modules


// Avoid initiation if we don't have document.body
if ( document.body )
	Page.init();
