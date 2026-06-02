// ===============================
// QUIZ QUESTIONS
// ===============================

const quizData = [

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language is used for styling web pages?",
        options: [
            "Python",
            "HTML",
            "CSS",
            "C++"
        ],
        correct: 2
    },

    {
        question: "Which JavaScript method is used to select an element?",
        options: [
            "querySelector()",
            "getData()",
            "fetchData()",
            "selectElement()"
        ],
        correct: 0
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "<!-- -->",
            "//",
            "**",
            "##"
        ],
        correct: 1
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correct: 1
    },

    {
        question: "Which CSS property changes text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        correct: 2
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "string",
            "define"
        ],
        correct: 0
    },

    {
        question: "Which company developed JavaScript?",
        options: [
            "Google",
            "Microsoft",
            "Netscape",
            "Apple"
        ],
        correct: 2
    },

    {
        question: "Which CSS layout system is one-dimensional?",
        options: [
            "Grid",
            "Flexbox",
            "Bootstrap",
            "Float"
        ],
        correct: 1
    },

    {
        question: "Which method converts JSON data into a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.object()"
        ],
        correct: 0
    }
];


// ===============================
// VARIABLES
// ===============================

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");

const optionButtons =
    document.querySelectorAll(".option-btn");

const nextBtn =
    document.getElementById("nextBtn");

const scoreElement =
    document.getElementById("score");


// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion() {

    nextBtn.style.display = "none";

    let currentQuiz = quizData[currentQuestion];

    questionElement.innerText =
        currentQuiz.question;

    optionButtons.forEach((button, index) => {

        button.disabled = false;

        button.style.backgroundColor = "#333";

        button.innerText =
            currentQuiz.options[index];

        button.onclick = () =>
            checkAnswer(index);
    });
}


// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(selected) {

    let correctAnswer =
        quizData[currentQuestion].correct;

    optionButtons.forEach((button, index) => {

        button.disabled = true;

        // Correct Answer = Green
        if (index === correctAnswer) {

            button.style.backgroundColor =
                "green";
        }

        // Wrong Selected Answer = Red
        else if (index === selected) {

            button.style.backgroundColor =
                "red";
        }
    });

    // Increase Score
    if (selected === correctAnswer) {

        score++;
    }

    // Show Next Button
    nextBtn.style.display = "block";
}


// ===============================
// NEXT QUESTION
// ===============================

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < quizData.length) {

        loadQuestion();

    } else {

        // Quiz Completed

        questionElement.innerText =
            "Quiz Completed Successfully!";

        document.querySelector(".options")
            .style.display = "none";

        nextBtn.style.display = "none";

        scoreElement.innerText =
            `Your Score: ${score}/${quizData.length}`;
    }
});


// ===============================
// START QUIZ
// ===============================

loadQuestion();


// ===============================
// FETCH RANDOM JOKE API
// ===============================

async function fetchJoke() {

    try {

        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        const data = await response.json();

        document.getElementById("joke").innerText =
            `${data.setup} - ${data.punchline}`;

    } catch (error) {

        document.getElementById("joke").innerText =
            "Failed to fetch joke!";
    }
}