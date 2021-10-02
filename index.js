var rollResult1;
function roll1() {
  rollResult1 = Math.floor(Math.random()* 6) + 1;// generates random number from 1-6
  document.getElementById("Result1").innerHTML = rollResult1;
  if(rollResult1==1) {
    document.getElementById("Dice1").src="https://webstockreview.net/images/dice-clipart-one-9.png";
  }
  else if (rollResult1==2) {
    document.getElementById("Dice1").src="https://jooinn.com/images/2-dice-2.png";
  }
  else if (rollResult1 ==3){
    document.getElementById("Dice1").src="https://clipground.com/images/number-3-dice-clipart-black-and-white-1.png";
  }
  else if (rollResult1 ==4){
    document.getElementById("Dice1").src="http://www.clipartsuggest.com/images/160/original-file-svg-file-nominally-557-557-pixels-file-size-0LGtPe-clipart.png";
  }
  else if (rollResult1 ==5){
    document.getElementById("Dice1").src="http://cliparts.co/cliparts/kT8/kkK/kT8kkKgGc.png";
  }
  else {
    document.getElementById("Dice1").src="https://www.tynker.com/projects/images/5a6397185ae02937258b47ac/dice-6---dice-6.png";
  }
}
var rollResult2;
function roll2() {
  rollResult2 = Math.floor(Math.random()* 6) + 1;// generates random number from 1-6
  document.getElementById("Result2").innerHTML = rollResult2;
  if(rollResult2==1) {
    document.getElementById("Dice2").src="https://webstockreview.net/images/dice-clipart-one-9.png";
  }
  else if (rollResult2==2) {
    document.getElementById("Dice2").src="https://jooinn.com/images/2-dice-2.png";
  }
  else if (rollResult2 ==3){
    document.getElementById("Dice2").src="https://clipground.com/images/number-3-dice-clipart-black-and-white-1.png";
  }
  else if (rollResult2 ==4){
    document.getElementById("Dice2").src="http://www.clipartsuggest.com/images/160/original-file-svg-file-nominally-557-557-pixels-file-size-0LGtPe-clipart.png";
  }
  else if (rollResult2 ==5){
    document.getElementById("Dice2").src="http://cliparts.co/cliparts/kT8/kkK/kT8kkKgGc.png";
  }
  else {
    document.getElementById("Dice2").src="https://www.tynker.com/projects/images/5a6397185ae02937258b47ac/dice-6---dice-6.png";
  }
}

function winner() {
  if (rollResult1 == rollResult2){
    document.getElementById("Calculate").innerHTML="Drawl"
  } else if (rollResult1 > rollResult2){
    document.getElementById("Calculate").innerHTML="Player 1 wins!"
  } else{
  document.getElementById("Calculate").innerHTML="Player 2 wins!"
}



}
