var smallAlphabets =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
var capitalAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

pwdlength = 8; //Take it as input

function generator(pwdlength) {
	var Password = '';
	for(i=0; i <= pwdlength; i++) {
		var temp = smallAlphabets[Math.floor(Math.random() * smallAlphabets.length)];
		Password = Password + temp;
	}
	return Password
