const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyper Text Machine Language",
      "Hyper Tabular Markup Language",
      "None of these"
    ],
    answer: 0
  },
  {
    question: "What year was JavaScript created?",
    options: ["1995", "2000", "2005", "2010"],
    answer: 0
  },
  {
    question: "Which is the correct syntax to log in JS?",
    options: [
      "console.log('Hello')",
      "log.console('Hello')",
      "print('Hello')",
      "console.print('Hello')"
    ],
    answer: 0
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Netscape", "Microsoft", "IBM"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const buttons = document.querySelectorAll(".option");
  buttons.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.style.backgroundColor = "#007bff";
    btn.disabled = false;
  });
}

function chooseAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".option");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) {
      btn.style.backgroundColor = "green";
    } else if (idx === selectedIndex) {
      btn.style.backgroundColor = "red";
    }
  });

  if (selectedIndex === q.answer) {
    score++;
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").innerHTML = `
    <h2>Your Score: ${score} / ${questions.length}</h2>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}


loadQuestion();
