/* 

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score

*/

// (1) Click the start button
// -- (1a) a timer starts
// -- (1b) I am presented with a question
// (2) I answer a question
// -- (2a) I am presented with another question
// (3) WHEN I answer a question incorrectly
// -- (3a) THEN time is subtracted from the clock
// (4) WHEN all questions are answered or the timer reaches 0
// -- THEN the game is over
// (5) WHEN the game is over
// -- (5a)THEN I can save my initials and my score


// **************************

/****** begin button ******/
// WHEN I click the start button
const btnDiv = document.getElementById("btn");
const btn = document.createElement("BUTTON");
btn.innerHTML = "I am a button";
btnDiv.appendChild(btn);
/****** end button *******/

/***** begin countdown timer ******/
// 'timeStart' is assigned a value using new Date().getTime()
let timeStart // used to calculate elapsed time

// -- (1a) a timer starts
const timeLeft = 31;
const elem = document.getElementById('timer'); // retrieves ID 'timer' from the HTML document and updates the remaining time via 'elem.innerHTML'in 'countdown()'

let timerId; // variable to store the interval ID

const btnClick = btn.addEventListener("click", function() {
    timeStart = new Date().getTime();
    timerId = setInterval(countdown, 1000);
    btn.disabled = true; // disable the button after it's clicked to prevent multiple timers from running
  });

// countdown() calculates the time elapsed since the timer started
// then subtracts it from the initial time (timeLeft)
// then displays the remaining time in the elem element
function countdown() {
  const now = new Date().getTime(); // used to count remaining time
  const timeElapsed = now - timeStart; //elapsed time
  const timeRemaining = timeLeft - Math.floor(timeElapsed / 1000); // remaining time
  if (timeRemaining <= -1) {
    clearInterval(timerId); // clears the interval set in line 45
    doSomething(); // calls the 'doSomething()' function
  } else {
    elem.innerHTML = timeRemaining + ' seconds remaining';
  }
}

// doSomething() displays an alert when the timer ends
function doSomething() {
  alert("Time's up!");
}
/***** end countdown timer ******/

/* begin question when timer starts */

// btnClick.

/* end question when timer starts */