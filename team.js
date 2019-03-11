//inquirer npm package

var inquirer = require("inquirer")

//constructor function

function Player(name, position, offense, defense) {
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;

this.goodGame = function() {
	if (Math.floor(Math.random() * 2) === 0) {
		this.offense++;
		console.log(this.name + "'s offense has gone up!\n---------");
}
else {
	this.defense++;
	console.log(this.name + "'s defense has gone up!\n-----------");
}
};

this.badGame = function() {
	if(Math.floor(Math.random() * 2) === 0) {
	this.offense--;
	console.log(this.name + "'s offense has gone down!\n--------");
}
	else {
	this.defense--;
	console.log(this.name + "'s defense has gone down!\n---------");
}
};

	this.printStats = function() {
	console.log("Name: " + this.ame + "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense + "|n---------------");

};
}

var starters = [];
var subs = [];
var team = [];

//recursive function to create 5 players and print stats

var createPlayer = function() {
	if (starters.length + subs.length < 5) {
		console.log("\nNEW PLAYER\n");
	inquirer.prompt([
	{
	name: "name",
	message: "Player's Name: "
	},{
	name: "position",
	message: "Player's position: "
	}, {
	name: "offense",
	message: "Player's Offensife Ability: ",
	validate: function(value) {
	if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
	return true;
	}
	return false;
	}
	},{
	name: "defense",
	mesage: "Player's Defensive Ability: ",
	validate: function(value) {
	if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {


 return true;
          }
          return false;
        }
      }
    ]).then(function(answers) {
      // runs the constructor and places new player info in variable
      // convert offense and defense to integers
      var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
      if (starters.length < 3) {
        starters.push(player);
        team.push(player);
        console.log(player.name + " added to the starters");
      }
      else {
        subs.push(player);
        team.push(player);
        console.log(player.name + " added to the subs");
      }
      // run function 
      createPlayer();
        });
        }
        else {
    // loops through array to print stats to console
        for (var i = 0; i < team.length; i++) {
         team[i].printStats();
        }
    }
    };

// call function to start code
    createPlayer();


	
