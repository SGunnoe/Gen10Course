/*
Name: Shantazia Gunnoe
Date Created: October 5, 2018
Most recent revision: 1
*/

function luckySevens() {
  var bet = document.getElementById("bet").value;
  var tally = 0
  var counter = 0
  var money = bet
  var betsArray = [bet];
  var maxHeld = 0;

  if (bet <= 0) {
    alert("Starting bet must be greater than 0!");
    document.forms["game"]["bet"].parentElement.className = "group has-error"
      
    return false;
  }

  while (money > 0) {
    tally++;

    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var dice = d1 + d2;

    if (dice == 7) {
      money = money + 4;
      var last = betsArray[betsArray.length - 1];
      var New = last + 4;
      betsArray.push(New);
    }

    else {
      money--;
      counter++;
      var last = betsArray[betsArray.length - 1];
      var New = last - 1;
      betsArray.push(New);
    }
    tally = tally++
  }

  total = Math.max(...betsArray);
    
  rolls = betsArray.indexOf(total) + 1;
  if (rolls < 1) {
    rolls = 0;
  }

  document.getElementById("results").style.display = "block";
  document.getElementById("starting").innerText = bet;
  document.getElementById("totalRolls").innerText = tally;
  document.getElementById("max").innerText = total;
  document.getElementById("rollCount").innerText = rolls;
    
  return false;
}