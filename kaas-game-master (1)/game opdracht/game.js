var age = prompt("Before we start the Game i need to know if u are 7 years or older.");
if (age >= 7) { alert ("You have confirmed that you're over the age of 7. Have fun!");
alert ("OAK: hello, there!\n Glad to meet you!");
alert ("OAk: Welcome to the world of Pokemon.");
alert ("OAK: My name is OAK.");
alert ("OAK: People affectionately refer to me as the Pokemon Professor.");
alert ("OAK: This world...");
alert ("OAk: ...Is inhabited far and wide by creatures called Pokemon.");
alert ("OAK: For some people, Pokemon are pets.\n Others use them for battling.");
alert ("OAK: As for myself...");
var name = prompt("OAK: I study Pokemon as profession well, enough about me.\n tell me something about yourself what is your name?");
alert ("OAK: Nice to meet you" + " " + name + " " + "now your adventure begins in the world of pokemon!")
var firstmove = prompt("you're adventure begins on the doorstep of your new home, you're heading towards the Pokemon lab.\n you have 4 options to go to the left,right,up or down");
firstmove = firstmove.toLowerCase();
	if (firstmove == "down") {
	alert("u made it safely to prof. oak's lab")
				alert ("OAK: Start your new adventure by chosing your starter Pokemon.");
 				var starter = prompt("Choose ur starter Pokemon!\n  - Bulbasaur \n  - Squirtle \n  - Charmander");
 				starter = starter.toUpperCase();
					if (starter == "bulbasaur") {
					alert("you chose the grass-type Pokemon: Bulbasaur!")
					alert ("u received the" + " " + starter + " " + "from PROF. OAK")
					alert("*Gary your rival runs in*\n GARY:" + " " + name + " " + " now that we both have pokemon i challenge u for a Pokemon battle!\n Charmander I choose you!");
					alert("Bulbasaur has 2 moves at LVL.5, Tackle and Growl. Tackle inflicts damage on your opponent and Growl lowers your opponents attack stats");
					var movea = prompt ("your Bulbasaur has 20hp, choose your move\n - Tackle\n40pp\n - Growl\n40pp");
					movea = movea.toLowerCase();
						if (movea == "growl") {
						alert("Bulbasaur used Growl! \n Foe Charmander's attack fell!");
						alert("Charmander used Scratch!\n your Bulbasaur's HP went down by 7 (13/20)");
						var moveb = prompt("What will Bulbasaur do? ")
						moveb = moveb.toLowerCase();
							if (moveb == "tackle") {
						alert("Bulbasaur used Tackle! Critikal Hit!!\n Charmander's HP went down by 13 (06/19)");
						alert("Charmander used Scratch! \n Your Bulbasaur's HP went down by 4 (11/20) ");
					}
					else if (starter == "SQUIRTLE") 
					alert("you chose the water-type Pokemon: Squirtle!");
					}
					else if (starter == "CHARMANDER") {
					alert("you chose the fire-type Pokemon: Charmander!")
					}
	else if (firstmove == "up") {
	alert("u headed upwards. u walked through some tall grass and encountered a wild Pokemon. but u have no pokemon to defend yourself! game over")
	}
	else if (firstmove == "right") {
	alert("hej hej")
			}
		}
	}
}
alert ("you're too young to play this game"){

}
