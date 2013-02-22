// Connie Sivadon
// SDI 1302
// Project 2
// 21 February 2013

// main code variables
var jsonClanInfo = {
	"clanName":		"Enthusiastic Daddlers Online",
	"clanTag": 		"edo",
	"numberOfActiveMemb": 	9,
	"clanOnline":		true,
	"clanMemberInfo" : 	[
		{
			"name" 		 : "Patrick",
			"clanPosition"   : "Leader",
			"memberForYears" : 7
		},{
			"name" 		 : "Connie",
			"clanPosition" 	 : "Member",
			"memberForYears" : 6
		},{
			"name" 		 : "Michael",
			"clanPosition" 	 : "Member",
			"memberForYears" : 6
		},{
			"name"		 : "Chris",
			"clanPosition" 	 : "Member",
			"memberForYears" : 3

		},{
			"name" 		 : "Andre",
			"clanPosition" 	 : "Member",
			"memberForYears" : 3
		},{
			"name" 		 : "Stephan",
			"clanPosition" 	 : "Member",
			"memberForYears" : 3
		},{
			"name" 		 : "Danny",
			"clanPosition"	 : "Member",
			"memberForYears" : 1
		},{
			"name"		 : "Jessy",
			"clanPosition" 	 : "Member",
			"memberForYears" : 1
		},{
			"name" 		 : "Carsten",
			"clanPosition" 	 : "Member",
			"memberForYears" : 2
		},
	] // clanMemberInfo
}; //jsonClanInfo
console.log ("Our clan's name is " + jsonClanInfo.clanName + ".");

// Global variables
var leaderName = jsonClanInfo.clanMemberInfo[0][name];
var yearsAsLeader = jsonClanInfo.clanMemberInfo[0]["memberForYears"] + " years.";
var clanOnline = jsonClanInfo.clanOnline;
var headshotsGoal = 3000;

console.log ("Our clan leader is " + leaderName + " . He has been the leader for " + yearsAsLeader);

console.log ("Let's check if any of the members are online.");

// Procedure Function
var playOnline = function(clanOnline) {
	if (clanOnline === true) {
		console.log( "Yes, they are.");
		console.log("Hey guys, lets play Black Ops 2");	
	} else {
		console.log("Shucks, nobody is online.  I guess I'll play Resident Evil 6.");	
	}		
};
playOnline(clanOnline);

// player objects
var player1 = {
	name: 		"Patrick",
	favPosition: 	"rusher",
	favPrimeWeapon: "MSMC SMG",
	favGameMode: 	"Kill Confirmed",
	totalHeadshots:	4256,
	askReady: function (){
		return "\"Is everyone ready to start?\""
	}
};
var player2 = {
	name: 		"Chris",
	favPosition: 	"rusher",
	favPrimeWeapon: "Patriot SMG",
	favGameMode: 	"Capture the Flag",
	totalHeadshots:	2976,
	getAnswer: function () {
		return "\"Yeah!\""
	},
	needHeadshots: function (headshots) {
		var headshotsNeeded = headshots - this.totalHeadshots;
		return headshotsNeeded;
	} // return number
};
var player3 = {
	name: 		"Andre",
	favPosition: 	"defender",
	favPrimeWeapon: ["FAL AR", "MSMC SMG", "SCAR AR"],
	favSecWeapon:	["pistol", "cross bow", "balistic knife"],
	favGameMode: 	"Domination",
	totalHeadshots:	2769,
	favWeapons:	function (array1, array2) { // Method Function
		for (var p = 0, l = this.favPrimeWeapon.length; p < l; p++) { // For Loop
			//console.log("I like the " + this.favPrimeWeapon[p] + ".");
			for (var p = 0, t = this.favSecWeapon.length; p < t; p++) {
				console.log("I like the " + this.favPrimeWeapon[p] + " and " + this.favSecWeapon[p] + ".");
			} // Nested Loop
		} {
			console.log("Which combo do I choose?");
			return [this.favPrimeWeapon[1], this.favSecWeapon[1]]; // Return Array
		}
	}
};
var player4 = {
	name: 		"Connie",
	favPosition: 	"defender",
	favPrimeWeapon: "50 Cal SR",
	favGameMode: 	["Capture the Flag"],
	totalHeadshots:	1024,
	ready:		false,
	classReady:	true,
	getAnswer: function (ready,classReady) {
		if (ready === false) { // Boolean property
			if (classReady === false) { // Nested conditional
				return false; 
			}
		} else {
			return player4.ready = true; // Mutator
		}
		return "\"Hurry, I have to get up early tomorrow!\"" // Return string
		}
};
var player5 = {
	name: 		"Carsten",
	favPosition: 	"switcher",
	favPrimeWeapon: "SWAT AR",
	favGameMode: 	"Capture the Flag",
	totalHeadshots:	943,
	getAnswer: function () {
		return "\"Can we start already!\""
		}
	
};
var array1 = player3.favPrimeWeapon;
var array2 = player3.favSecWeapon;
var ready = player4.ready;
var classReady = player4.classReady;


// Return values
var question = player1.askReady();
var headshotsNeeded = player2.needHeadshots(headshotsGoal); // Returned number value
var favWeapon = player3.favWeapons(array1, array2);
var isReady = player4.getAnswer(ready, classReady);

// outputs
console.log("Andre says \"My vaforite prime weapon is " + favWeapon[0] +
	    ", and my favorite secondary side weapon is " + favWeapon[1] +
	    ". I'll use these today.\"");

console.log("Chris says \"My goal today is to reach "+ headshotsGoal + " headshots.  I have " + headshotsNeeded + " left to make.\"");

console.log("Our clan leader asks " + question);

console.log(isReady);

	

 // getGameMode













// Boolean Function
/*
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