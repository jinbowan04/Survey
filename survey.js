var userAnswer;
var userChoise = 0;

function btn1Active() {
  window.userAnswer = "Kyllä";
  window.userChoise = 1;

  document.getElementById("button1").style.backgroundColor = '#dedede';
  document.getElementById("button2").style.backgroundColor = '#FFFFFF';
  document.getElementById("button3").style.backgroundColor = '#FFFFFF';
}

function btn2Active() {
  window.userAnswer = "Ei";
  window.userChoise = 1;

  document.getElementById("button1").style.backgroundColor = '#FFFFFF';
  document.getElementById("button2").style.backgroundColor = '#dedede';
  document.getElementById("button3").style.backgroundColor = '#FFFFFF';
}

function btn3Active() {
  window.userAnswer = "En tiedä";
  window.userChoise = 1;

  document.getElementById("button1").style.backgroundColor = '#FFFFFF';
  document.getElementById("button2").style.backgroundColor = '#FFFFFF';
  document.getElementById("button3").style.backgroundColor = '#dedede';
}

function send() {
  var nameInput = document.getElementById("username");

  if (nameInput !== null && nameInput.value === "") {
    alert("Muista laittaa myös nimesi!");
  }

  else {
    if (userChoise == 0) {
      alert("Muista valita myös vastauksesi!");
    }

    // Else {////Lähetä sähköpostilla käyttäjän valitsema vastaus}
  }
}
