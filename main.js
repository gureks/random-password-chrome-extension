allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
passwordString = {};
passwordString['weak'] = allChars.slice(0, 26).split('');
passwordString['medium'] = allChars.slice(0, 52).split('');
passwordString['strong'] = allChars.slice(0, 62).split('');
passwordString['strongest'] = allChars.split('');


function passwordGenerator(strength, pwdlength){
  pwdlength = (pwdlength < 4) ? 4: pwdlength;
  var Password = '';
  for(var _ = 0; _ < pwdlength; ++_){
    Password += passwordString[strength][Math.floor(Math.random() * passwordString[strength].length)];
  }
  document.getElementById("password").value = Password;
}

function value() {
  var buttons = document.getElementsByName("strength");
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].checked) {
      // as soon as checked radio button encountered, call functions and break
      var length = document.getElementById('length').value;
      passwordGenerator(buttons[i].value, length);
      break;
    }
  }
}

window.onload = function() {
  document.getElementById("submit").addEventListener('click', value);
}
