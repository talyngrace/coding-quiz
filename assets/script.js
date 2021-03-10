
console.log("hello world");


// //declare buttons
// var button1 = document.getElementById('ques_box1');
// var button2 = document.getElementById('ques_box2');
// var button3 = document.getElementById('ques_box3');
// var button4 = document.getElementById('ques_box4');

var start_btn = document.getElementById('start_btn');
var startScreen = document.getElementById('start-screen');

// WHEN I click the start button
// THEN a timer starts and I am presented with a question 
// (not worried about timer yet)

function startQuestions() {

}

start_btn.addEventListener("click", function () {
    console.log("You clicked");
    startScreen.setAttribute("style","display: none;")
    startQuestions()
})

// activity 8
//arrays and objects?

var questions = [

    {
        question: "Commonly used data types DO NOT include:",
        choices: ["string", "booleans", "alerts", "numbers"],
        correctanswer: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square bracket"],
        correctanswer: ["parentheses"]
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctanswer: "all of the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        correctanswer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctanswer: "console.log"
    }

]

// WHEN I answer a question
// THEN I am presented with another question 


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// // THEN I can save my initials and my score