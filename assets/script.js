const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffleQuestions, currentQuestionIndex

// WHEN I click the start button
// THEN a timer starts and I am presented with a question 
// (not worried about timer yet)

startButton.addEventListener("click", startGame)


function startGame() {
    console.log("You clicked");
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
};

function setNextQuestion() {
    resetState()
    showQuestions(shuffleQuestions[currentQuestionIndex])
};

function showQuestions(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    });
};

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
};

function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })  //converting to an Array
};

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
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: 'alerts', correct: true },
            { text: 'string', correct: false },
            { text: 'booleans', correct: false },
            { text: 'numbers', correct: false }

        ]
    },
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
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: 'alerts', correct: true },
            { text: 'string', correct: false },
            { text: 'booleans', correct: false },
            { text: 'numbers', correct: false }

        ]
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: 'alerts', correct: true },
            { text: 'string', correct: false },
            { text: 'booleans', correct: false },
            { text: 'numbers', correct: false }

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