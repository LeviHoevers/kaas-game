// Levi Hoevers
// 99065078
// softwaredeveloper

var yellow = prompt ("is de kaas geel?")
if (yellow == "ja") {
	var holes = prompt ("heeft de kaas gaten?")
	if (holes == "ja") {
		var expensive = prompt ("is de kaas belachelijk duur?")
		if (expensive == "ja") {
			alert("Emmenthaler")
		}
		else {
			alert("Leerdammer")
		}
	}
	else {
		var stone = prompt ("is de kaas zo hard als steen?")
		if (stone == "ja") {
			alert("Pamigianno Reggiano")
		}
		else {
			alert("Goudse kaas")
		}
	}
}
else {
	var blue = prompt ("heeft de kaas blauwe schimmels?")
	if (blue == "ja") {
		var korst = prompt ("heeft de kaas korst?")
		if (korst == "ja") {
			alert("bleu de rochebaron")
		}
		else {
			alert("Foume d'ambert")
		}
	}
	else {
		var korst = prompt ("heeft de kaas korst?")
		if (korst == "ja") {
			alert("Camembert")
		}
		else {
			alert("Mozzarella")
		}
	}
}
