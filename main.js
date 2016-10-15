var weak = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var medium = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var strong = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var strongest = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*"];

pwdlength = 8; //Take it as input

function simpleGenerator(pwdlength) {
    var Password = '';
    for (i = 0; i < pwdlength; i++) {
        var temp = weak[Math.floor(Math.random() * weak.length)];
        Password = Password + temp;
    }
    document.getElementById("password").value = Password;
}

function mediumGenerator(pwdlength) {
    var Password = '';
    for (i = 0; i < pwdlength; i++) {
        var temp = medium[Math.floor(Math.random() * medium.length)];
        Password = Password + temp;
    }
    document.getElementById("password").value = Password;
}

function strongGenerator(pwdlength) {
    var Password = '';
    for (i = 0; i < pwdlength; i++) {
        var temp = strong[Math.floor(Math.random() * strong.length)];
        Password = Password + temp;
    }
    document.getElementById("password").value = Password;
}

function strongestGenerator(pwdlength) {
    var Password = '';
    for (i = 0; i < pwdlength; i++) {
        var temp = strongest[Math.floor(Math.random() * strongest.length)];
        Password = Password + temp;
    }
    document.getElementById("password").value = Password;
}

function value() {
    var buttons = document.getElementsByName("strength");
    var x = 0;
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            x = buttons[i].value;
        }
    }

    if (x == "weak") {
        var length = document.getElementById('length').value;
        simpleGenerator(length);
    } else if (x == "medium") {
        var length = document.getElementById('length').value;
        mediumGenerator(length);
    } else if (x == "strong") {
        var length = document.getElementById('length').value;
        strongGenerator(length);
    } else if (x == "strongest") {
        var length = document.getElementById('length').value;
        strongestGenerator(length);
    }
}

window.onload = function() {
    document.getElementById("submit").addEventListener('click', value);
}