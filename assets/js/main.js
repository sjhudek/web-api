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
// (5) WHEN the game is over
// -- (5a)THEN I can save my initials and my score

// **************************
/* eslint-env es6 */

/* begin trivia Q&A object */
const triviaQuestion = [
  {
    questionText:
      "Which of the following countries is NOT a member of the European Union?",
    answerChoices: {
      A: "Iceland",
      B: "Switzerland",
      C: "Finland",
      D: "Cyprus",
    },
    correctAnswer: "B: Switzerland",
  },
  {
    questionText: "Which planet in our solar system has the most moons?",
    answerChoices: {
      A: "Jupiter",
      B: "Saturn",
      C: "Neptune",
      D: "Uranus",
    },
    correctAnswer: "A: Jupiter",
  },
  {
    questionText: "Which famous musician was known as the 'King of Pop'?",
    answerChoices: {
      A: "Prince",
      B: "Michael Jackson",
      C: "Elvis Presley",
      D: "John Lennon",
    },
    correctAnswer: "B: Michael Jackson",
  },
  {
    questionText: "What is the capital city of Australia?",
    answerChoices: {
      A: "Sydney",
      B: "Melbourne",
      C: "Brisbane",
      D: "Canberra",
    },
    correctAnswer: "D: Canberra",
  },
  {
    questionText: "Who was the first person to walk on the moon?",
    answerChoices: {
      A: "Neil Armstrong",
      B: "Buzz Aldrin",
      C: "Yuri Gagarin",
      D: "Alan Shepard",
    },
    correctAnswer: "A: Neil Armstrong",
  },
];
/* end trivia Q&A object */

/* begin countdown timer */
const timerCount = document.querySelector(".timer-count");
const startButton = document.querySelector("#start-button");
let timeLeft = 15;
let timerId;

function startTimer() {
  timerId = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerId);
      // Do something when the timer reaches 0
      gameOver();
    } else {
      timeLeft--;
      timerCount.textContent = timeLeft;
    }
  }, 1000);
}

/* end countdown timer */

/* start button */
startButton.addEventListener("click", () => {
  startTimer();
  showQuestion();
});

/* begin questions */
let currentQuestionIndex = 0;

function showQuestion() {
  const currentQuestion = triviaQuestion[currentQuestionIndex];
  const questionText = document.querySelector("#question");
  const answerChoices = document.querySelector("#answer-choices");

  questionText.textContent = currentQuestion.questionText;
  answerChoices.innerHTML = "";

  // loop through the answer choices and add them to the answerChoices element
  for (const choice in currentQuestion.answerChoices) {
    const li = document.createElement("li");
    li.textContent = `${choice}: ${currentQuestion.answerChoices[choice]}`;
    li.addEventListener("click", () => {
      // check if the selected answer is correct
      if (li.textContent === currentQuestion.correctAnswer) {
        // increment the correct answer count
        const correctCount = document.querySelector("#correct");
        correctCount.textContent = parseInt(correctCount.textContent) + 1;
      } else {
        // increment the incorrect answer count
        const incorrectCount = document.querySelector("#incorrect");
        incorrectCount.textContent = parseInt(incorrectCount.textContent) + 1;
        timeLeft = timeLeft - 5;
      }

      // move on to the next question
      currentQuestionIndex++;
      if (currentQuestionIndex < triviaQuestion.length) {
        showQuestion();
      } else {
        // quiz is over
        clearInterval(timerId);
        // Do something when the quiz is over
        gameOver();
      }
    });
    answerChoices.appendChild(li);
  }
}

function gameOver() {
  const endPageEl = document.querySelector(".endPage");
  endPageEl.style.display = "block";
  const questionSection = document.querySelector("#question-section");
  questionSection.style.display = "none";
}

const initalsBtn = document.querySelector("#save");
const saveInitials = document.querySelector("#save-initials");
initalsBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(saveInitials.value);
});
/* end questions */

/* begin show correct / incorrect score */
let correctAnswers = 0;
let incorrectAnswers = 0;

function updateScore() {
  document.getElementById("correct").textContent = `Correct: ${correctAnswers}`;
  document.getElementById(
    "incorrect"
  ).textContent = `Incorrect: ${incorrectAnswers}`;
}

function checkAnswer(answerElem) {
  if (!currentQuestion) {
    return;
  }

  var selectedAnswer = answerElem.dataset.value;
  var correctAnswer = currentQuestion.correctAnswer;
  var feedback = answerElem.querySelector(".answer-feedback");

  if (selectedAnswer === correctAnswer) {
    feedback.textContent = "Correct!";
    feedback.classList.add("correct");
    correctAnswers++;
  } else {
    feedback.textContent = "Incorrect";
    feedback.classList.add("incorrect");
    incorrectAnswers++;
  }

  updateScore();

  answerElems.forEach(function (elem) {
    elem.classList.add("disabled");
  });

  nextButton.classList.remove("disabled");
}
