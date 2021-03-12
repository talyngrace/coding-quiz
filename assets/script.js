const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

// WHEN I click the start button
// THEN a timer starts and I am presented with a question 
// (not worried about timer yet)


function countdown() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerCount.textContent = secondsLeft;
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // sendMessage();
        }
    }, 1000);
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion();
  countdown();
})

//

function startGame() {
    console.log("You clicked");
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
};



function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  };

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
};

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
      setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove("hide");
    } else {
      startButton.innerText = "Restart";
      startButton.classList.remove("hide");
    }
  }

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
};

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
};


//questions appear
// activity 8
//arrays and objects?

const questions = [

    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: 'alerts', correct: true },
            { text: 'string', correct: false },
            { text: 'booleans', correct: false },
            { text: 'numbers', correct: false }

        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'parentheses', correct: true },
            { text: 'numbers', correct: false }

        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: false },
            { text: 'all of the above', correct: true }

        ]
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        answers: [
            { text: 'commas', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'quotes', correct: true },
            { text: 'parentheses', correct: false }

        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: 'JavaScript', correct: false },
            { text: 'Terminal/bash', correct: false },
            { text: 'for loops', correct: false },
            { text: 'console.log', correct: true }

        ]
    }

];

// WHEN I answer a question
// THEN I am presented with another question -      for loop 



// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// // THEN I can save my initials and my score