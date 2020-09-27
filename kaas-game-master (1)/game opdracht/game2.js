//levi hoevers
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
		var firstmove = prompt ("You're at the doorstep of your new house and, you were heading towards the Pokemon lab \n choose the direction u woulkd like to head to Left,Right,Up,Down");
	if (firstmove == "down") {
		alert ("You made it safely to PROF.OAK's lab!");
		alert ("OAK: Start your new adventure by chosing your starter Pokemon.");
		var starter = prompt ("Choose ur starter Pokemon!\n  - Bulbasaur \n  - Squirtle \n  - Charmander");
		starter = starter.toLowerCase();
		if (starter == "bulbasaur") {
			alert ("You chose the grass-type Pokemon: Bulbasaur!")
			alert ("You received the" + " " + starter + " " + "from PROF. OAK");
			alert("*Gary your rival runs in*\n GARY:" + " " + name + " " + " now that we both have pokemon i challenge u for a Pokemon battle!\n Charmander I choose you!")
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
					var movec = prompt("What will Bulbasaur do? ")
					movec = movec.toLowerCase();
					if (movec == "tackle") {
						alert("Bulbasaur used Tackle!\n Charmander's HP went down by 6 (0/19)")
						alert("You defeated your Rival GARY!")
						alert("OAK: Wow what an amazing battle congratulations" + " " + name + " " + "\n as reward I'll give u 5 pokeballs.")
						alert(name + " obtained 5 pokeballs from PROF.OAK")
						var outside = prompt
					}
				}
			}
		}
		else if (starter == "squirtle"){
			alert ("You chose the water-type Pokemon: Squirtle!")
			alert ("You received the" + " " + starter + " " + "from PROF. OAK");
			alert("*Gary your rival runs in*\n GARY:" + " " + name + " " + " now that we both have pokemon i challenge u for a Pokemon battle!\n Bulbasaur I choose you!");
			alert("Squirtle has 2 moves at LVL.5, Tackle and Growl. Tackle inflicts damage on your opponent and Growl lowers your opponents attack stats");
			var movea = prompt ("your Bulbasaur has 20hp, choose your move\n - Tackle\n40pp\n - Growl\n40pp");
			movea = movea.toLowerCase();
			if (movea == "growl") {
				alert("Squirtle used Growl! \n Foe Bulbasaur's attack fell!");
				alert("Bulbasaur used Tackle!\n your Squirtle's HP went down by 7 (13/20)");
				var moveb = prompt("What will Squirtle do? ")
				moveb = moveb.toLowerCase();
				if (moveb == "tackle") {
					alert("Squirtle used Tackle! Critikal Hit!!\n Bulbasaurr's HP went down by 13 (06/19)");
					alert("Bulbasaur used Tackle! \n Your Squirtle's HP went down by 4 (11/20) ");
					var movec = prompt("What will Squirtle do? ")
					movec = movec.toLowerCase();
					if (movec == "tackle") {
						alert("Squirtle used Tackle!\n Charmander's HP went down by 6 (0/19)")
						alert("You defeated your Rival GARY!")
						alert("OAK: Wow what an amazing battle congratulations" + " " + name + " " + "\n as reward I'll give u 5 pokeballs.")
						alert(name + " obtained 5 pokeballs from PROF.OAK")
					}
				}
			}
		}
		else if (starter == "charmander") {
			alert ("You chose the fire-type Pokemon: Charmander!")
			alert ("You received the" + " " + starter + " " + "from PROF. OAK");
			alert("*Gary your rival runs in*\n GARY:" + " " + name + " " + " now that we both have pokemon i challenge u for a Pokemon battle!\n Squirtle I choose you!");
			alert("Charmander has 2 moves at LVL.5, Scratch and Growl. Scratch inflicts damage on your opponent and Growl lowers your opponents attack stats");
			var movea = prompt ("your Charmander has 20hp, choose your move\n - Tackle\n40pp\n - Growl\n40pp");
			movea = movea.toLowerCase();
			if (movea == "growl") {
				alert("Charmander used Growl! \n Foe Squirtle's attack fell!");
				alert("Squirtle used Tackle!\n your Charmander's HP went down by 7 (13/20)");
				var moveb = prompt("What will Charmander do? ")
				moveb = moveb.toLowerCase();
				if (moveb == "scratch") {
					alert("Charmander used Scratch! Critikal Hit!!\n Squirtle's HP went down by 13 (06/19)");
					alert("Squirtle used Tackle! \n Your Charmander's HP went down by 4 (11/20) ");
					var movec = prompt("What will Charmander do?\n -Scratch -growl ")
					movec = movec.toLowerCase();
					if (movec == "scratch") {
						alert("Charmander used Scratch!\n Squirtle's HP went down by 6 (0/19)")
						alert("You defeated your Rival GARY!")
						alert("OAK: Wow what an amazing battle congratulations" + " " + name + " " + "\n as reward I'll give u 5 pokeballs.")
						alert(name + " obtained 5 pokeballs from PROF.OAK")
					}
				}
			}
		}
	}
	else if (firstmove == "up") {
		alert ("You walked into the tall grass and encounter a wild pokemon! but u cant defend yourself. \n Game over..");
	}
	else if (firstmove == "left") {
		alert ("you reached a lake and got attacked by a Gyarados!\n Game over..");
	}
	else if (firstmove == "right") {
		alert ("you walked towards the forest but you got lost \n Game over..");
	}