#ifndef _MODULE_SETTINGS
#define _MODULE_SETTINGS

var Settings = new Class({
	construct: function( string ) {
		this.string = string || 'preferences';
		this.values = Function( "return " + GM_getValue( this.string, '({})' ) + ";" )();
		var key;
		for ( key in default_settings )
			this.values[ key ] = this.values[ key ] || default_settings[ key ];
	},
	values: {},
	string: 'preferences',
	save: function() {
		GM_setValue( this.string, this.values.toSource() );
	}
});

var default_settings = {
	bank: false,
	bank_limit: 1,
	heal: true,
	min_health: 0.3,
	max_health: 0.6,
	min_refresh: 1,
	max_refresh: 4,
	script_repeat: -1,
	avoid_mobs: "1439889063\n1646335294\n1750411381\n1746987705",
	level: false,
	level_attack: 1,
	level_defence: 1,
	level_energy: 1,
	level_health: 10,
	level_stamina: 1,
	insider: false,
	captcha_sound: false,
	chain_time: 60,
	chain_attacks: 5,
	fight_stamina_start: 10,
	fight_stamina_stop: 3,
	max_mob_size: 20,
	min_mob_size: 5,
	fight_max_level: 0,
	fight_repeat: true,
	repeat_type: 'exp',
	repeat_threshold: 10,
	repeat_limit: -1,
	fight_reset: 0,
	fight_avoid: '',
	fight_punch: 'off',
	hitlist_stamina_start: 5,
	hitlist_stamina_stop: 0,
	min_bounty: 0,
	max_bounty: 0,
	hitlist_multi_attack: 0,
	hitlist_avoid: '',
	revenge_targets: '',
	revenge_wait: 30,
	revenge_stamina_start: 10,
	revenge_stamina_stop: 3,
	revenge_attack: true,
	revenge_hitlist: false,
	revenge_punch: false,
	revenge_ignore_reset: 0,
	revenge_retaliate: false,
	revenge_chainers: '',
	revenge_retaliate_temp: false,
	property_undev: false,
	property_reserve: 0,
	job_number: 1,
	defend_time: 30,
	defend_chain: true,
	defend_dead_wait: 5,
	mwcaptcha: false,
	mwcaptcha_safe: false,
	mwc_earn: true,
	mwc_use: false,
	mwc_username: '',
	mwc_password: '',
	log_memory: []
}
#endif
