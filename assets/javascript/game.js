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
var firstPlayer = new Player("Obi-Wan Kenobi", 110, 15, 10),  // name, hp, power, counter
	var secondPlayer = new Player("Luke SKy Walker", 100, 10, 9); // name, hp, power, counter
	var thirdPlayer = new Player("Darth Sidius", 120, 17, 5), // name, hp, power, counter
	 var fourthPlayer = new Player("Darth Maul", 150, 9, 2); // name, hp, power, counter



var clickedOperator = false,
	players = [firstPlayer, secondPlayer, thirdPlayer, fourthPlayer]; // Storing all the players together.


console.log(players);


// Output their hp and name to the DOM
function output() {

	// Grabbing the elements from the DOM
	var lives = $(".hp");
	var names = $(".name");
	var counter = $(".counter");
	var attack = $(".attackPower")



	// Putting elements to the DOM
	players.map(function(e, index){
		$(lives[index]).html(e.hp);
		$(names[index]).html(e.name);
		$(counter[index]).html(e.counter);
		$(attack[index]).html(e.power);
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

	// function for attack button
     $(".attack").on("click", function() {

         if ($(".myPlayerZone").html().trim() !== '' && $(".enemyZone").html().trim() !== '') {


             // players attack value
             players.map(function(element, index) {
                 var attack = $(".attackPower");
                 $(attack[index]).html(element.attackPower());

             });


             // grabs player's attack
             var myPlayer = ($(".myPlayerZone .character .attackPower").html());
             // grabs enemy's HP
             var enemyHp = ($(".enemyZone .character .hp").html());
             console.log("Player Attack: " + myPlayer);
             console.log("Enemy HP: " + enemyHp);
             // result of player's attack vs enemy's HP
             var myAttack = enemyHp -= myPlayer;
             console.log("Enemy's Result HP: " + myAttack);

						 //grab enemy Attack
						 var enemy = ($('.enemyZone .character .attackPower').html());
						 var myHp = ($('.myPlayerZone .character .hp').html());
						 var enemyAttack = myHp -= enemy;

						 var playerUpdate = $('.myPlayerZone .character .hp').html(enemyAttack);
             var enemyUpdate = $('.enemyZone .character .hp').html(myAttack);
             console.log(enemyUpdate)

         }
				 if (enemyHp <= 0){
					 console.log("Player Wins!!");
					 $('.enemyZone').empty();
				 }
				 else if(myHp <= 0 ){
					 $('.myPlayerZone').html("<h1>Player Loses</h1>");
				 }
     });


// end of the attack click event
})();



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
