// Connie Sivadon
// SDI 1302
// Project 2
// 21 February 2013

// main code variables
var jsonClanInfo = {
	"clanName"			 : "Enthusiastic Daddlers Online",
	"clanTag" 			 : "edo",
	"numberOfActiveMemb" : 9,
	"clanMemberInfo" : [
		{
			"name" 			 : "Patrick",
			"clanPosition"   : "Leader",
			"memberForYears" : 7
		},{
			"name" 			 : "Connie",
			"clanPosition" 	 : "Member",
			"memberForYears" : 6
		},{
			"name" 			 : "Michael",
			"clanPosition" 	 : "Member",
			"memberForYears" : 6
		},{
			"name"			 : "Chris",
			"clanPosition" 	 : "Member",
			"memberForYears" : 3

		},{
			"name" 			 : "Andre",
			"clanPosition" 	 : "Member",
			"memberForYears" : 3
		},{
			"name" 			 : "Stephan",
			"clanPosition" 	 : "Member",
			"memberForYears" : 3
		},{
			"name" 			 : "Danny",
			"clanPosition"	 : "Member",
			"memberForYears" : 1
		},{
			"name"			 : "Jessy",
			"clanPosition" 	 : "Member",
			"memberForYears" : 1
		},{
			"name" 			 : "Carsten",
			"clanPosition" 	 : "Member",
			"memberForYears" : 2
		},
	] // clanMemberInfo
}; //jsonClanInfo
// console.log (jsonClanInfo);
console.log ("Our clan's name is " + jsonClanInfo.clanName + ".");

// Global variables
var leaderName = jsonClanInfo.clanMemberInfo[0]["name"];
var yearsAsLeader = jsonClanInfo.clanMemberInfo[0]["memberForYears"] + " years.";
var clanOnline = true;
var numberOfMembers;
var clanLeaderCall = "Everyone ready?";
var clanReady = " Ya!";

// console.log leader info	
console.log ("Our clan leader is " + leaderName + " . He has been the leader for " + yearsAsLeader);

// procedure
console.log ("Let's check if any of the members are online.");

var playOnline = function(clanOnline) {
	if (clanOnline === true) {
		console.log( "Yes, they are.");
		console.log("Hey guys, lets play Black Ops 2");	
	} else {
		console.log("Shucks, nobody is online.  I guess I'll play Resident Evil 6.");	
	}		
};
playOnline(clanOnline);










/*
Project 2 code 
var clanOnline = true;
var	clanMembers = [ "Patrick", "Connie", "Chris", "Andre", "Michael", "Stephan" ];
var	numberOfMembers;
var positions = [ "sniper", "defender", "rusher", "rusher", "defender", "floater" ];
var	clanLeaderReady = "Everyone ready?";
var	clanReady = " Ya!";
numberOfMembers = clanMembers.length;

// Procedure

var playOnline = function(clanOnline) {
	if (clanOnline === true) {
		console.log("Hey guys, lets play Black Ops 2.");	
	} else {
		console.log("Shucks, nobody is online.  I guess I'll play Resident Evil 6.");	
	}		
};
playOnline(clanOnline);

// Boolean Function

var getGameMode = function(numberOfMembers) {
	if (numberOfMembers > 4) {
		return console.log("Since we have " + numberOfMembers + " clan members today, let's play \"Capture the Flag\".");
	} else {
		return console.log("Since we have only " + numberOfMembers + " clan members today, let's play \"Kill Confirmed\".");
	}
};

// Number Function

var getNumberOfPositions = function(numberOfMembers) {
	console.log("Does everyone have their classes set?");
	var player = 1;
	while (player < 6) {
		console.log(player + " players have their classes set.");
		player++;
	};
	return console.log("All " + player + " players are set and ready to go.");
};

// Array Function

var getPositions = function(clanMembers,positions) {
	for (var i=0, j=clanMembers.length; i < j; i++) {
		console.log( clanMembers[i]	+ " is a " + positions[i] + ".");
	};
	return console.log( "All members know their positions." );
};

//String Function

var getStatus = function(clanLeaderReady, clanReady) {
	if (clanReady === " Ya!") {
		return console.log(clanLeaderReady + clanReady + " Start already!");	
	} else {
		return console.log(clanLeaderReady + " Not yet. Wait to start please.");
	};
};

// Output

getGameMode(numberOfMembers);
getNumberOfPositions(numberOfMembers);
getPositions(clanMembers,positions);
getStatus(clanLeaderReady, clanReady);
*/