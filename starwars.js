(function(){


// Main constructor for all the players
function Player(name, life, power, counter){
	this.name = name,
	this.hp = life,
	this.attackPower = function(){
		return power += this.basePower;
	}, // attack function
	this.counter = counter, // counter for the enemy
	this.basePower = power
}

// Creating the players from the constructor
var firstPlayer = new Player("Obi-Wan Kenobi", 111, 5, 10),  // name, hp, power, counter
	secondPlayer = new Player("Luke SKy Walker", 100, 10, 9); // name, hp, power, counter
	thirdPlayer = new Player("Darth Sidius", 120, 17, 5), // name, hp, power, counter
	fourthPlayer = new Player("Darth Maul", 150, 9, 2); // name, hp, power, counter



var clickedOperator = false,
	players = [firstPlayer, secondPlayer, thirdPlayer, fourthPlayer]; // Storing all the players together.


console.log(players);


// Output their hp and name to the DOM
function output() {

	// Grabbing the elements from the DOM
	var lives = $(".hp");
	var names = $(".name");
	var counter = $(".counter");



	// Putting elements to the DOM
	players.map(function(e, index){
		$(lives[index]).html(e.hp);
		$(names[index]).html(e.name);
		$(counter[index]).html(e.counter);

	});
} // end of the ouput function

output();



// Choosing enemies
$('.character').on('click', function() {
	  if (clickedOperator === false){
	  		$('.myPlayerZone').html(this);
	  		clickedOperator = true;
	  	 }

	  	 else {
	  	 	$('.enemyZone').html(this);
	  	}
	}); // end of the character on click event.





	$('.attack').on('click', function(){




		// Checking if Player Zone and Enemy Zone is empty
		if($(".myPlayerZone").html().trim() !== '' && $(".enemyZone").html().trim() !== '' ){

			players.map(function (e, index) {
				var attack = $(".attackPower");

				$(attack[index]).html(e.attackPower());

			});



			//var myHp = parseInt($(".myPlayerZone .character .hp").html());


			//var enemyFight = parseInt($(".enemyZone .character .counter").html());


			//console.log(myHp -= enemyFight);
			//debugger




			var myPlayer = $(".myPlayerZone .character .attackPower").html();  // Good!

			//console.log(myPlayer);

			var enemyHp = $(".enemyZone  .character  .hp").html(); // Good!






			// Result from the fight!

			//var enemyAttack = myHp -= enemyFight;


			//console.log(enemyAttack)




			var myAttack =  enemyHp -= myPlayer;

			console.log(myAttack);

			// Updating their current Health Points
			var enemyUpdate = $('.enemyZone .character .hp').html(myAttack);
			// var myUpdate = $('.enemyZone .character .hp').html(enemyAttack);





			if(firstPlayer.hp <= 0){
				console.log("I lost");
			}

			else if(secondPlayer.hp <= 0){
				console.log("We win!!!");
				$(".enemyZone").empty();
			}
	}



	}); // end of the attack click event
})();



// Whenever the player clicks on the attack button, their character damages the defender.
	// The opponent will lose HP(health points)
	// These points are displayed in the bottom of the defended picture.


//The opponent character will instantly counter the attack. When that happens
	// the player's character will lose some of their HP (Health Points)
	// These points are shown at the bottom of the player's character's picture.


// When the defender's HP is reduced to zero or below
	// remove the enemy from the defender area.
	// The player character can now choose a new opponent.


// The player wins the game by defeating all enemy characters

// The player loses the game if their's HP falls to zero or below.

// Each time the player attacks,
	// Their character attack power increases by its base Attack Power


// Check and see if there is any enemy in the defender zone
	// If not, output a message to the DOM
	// When enemy has been defeated, ouput a message to the DOM.

//  The enemy character only has Counter Attack Power
	// Unlike the player's Attack Points, Counter Attack Power never changes.

// The health Point, Attack Power, and Counter Attack Power of each character must differ.











//Done!

// Each character in the game has 3 attributes
	// Health Points
	// Attack Power
	// Counter Attack
