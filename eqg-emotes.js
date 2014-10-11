// ==UserScript==
// @name FIMFiction Emote Extender: Equestria Girls Module
// @namespace ffemoteextender
// @description Adds additional emotes to fimfiction.net.
// @include http*://www.fimfiction.net/*
// @include http*://fimfiction.net/*
// @grant none
// @require https://raw.github.com/KrazyTheFox/Fimfiction-Emote-API/master/emoteAPI.js
// @version 3.0
// ==/UserScript==

$(document).ready(run());

function run() {

	//Use the following settings only in the first script you run.

	//Uncomment to enable verbose emote tables:
	//$("body").append("<div id='verboseEnabled'></div>");

	//Uncomment *one* line to select emote size:
	//$("body").append("<div id='emoteSizeSmall'></div>"); //Small Emotes
	//$("body").append("<div id='emoteSizeRegular'></div>"); //Regular Emotes
	//$("body").append("<div id='emoteSizeLarge'></div>"); //Large Emotes

    addEmote("http://i.imgur.com/PXXztBb.png", "eqgTwiOK", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/eTNGltp.png", "eqgAJLiar", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/64YcgsG.png", "eqgDashComeAtMe", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/mJ36Djc.png", "eqgRareNotAmused", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/lx5XiWm.png", "eqgPinkieSquee", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/CxbQtjH.png", "eqgShyStageFright", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/UXwgDwe.png", "eqgSpikeGarwsh", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/iKw10C0.png", "eqgVinylStoic", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/KnLyWTi.png", "eqgRariPunk", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/mI33oTu.png", "eqgShimmerbetes", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/XXo8Tn3.png", "eqgSunsetDetermined", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/Yd8nH5f.png", "eqgSunsetAck", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/hUPsyJu.png", "eqgTrixieGrin", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/tmryKRs.png", "eqgAdagioMine", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/cO4oOp3.png", "eqgAriaGrumpy", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/nPSbliU.png", "eqgSonataPondering", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/f0lc16r.png", "eqgSonataGrin", "EQG", "Equestria Girls", 1);
    addEmote("http://i.imgur.com/YsheuiO.png", "eqgHumanTwi", "EQG", "Equestria Girls", 1);

}