const quiz = [
  {
    question: "Quelle est la capitale des Etats-Unis ?",
    options: ["Los Angeles", "San Francisco", "New York", "Washington"],
    reponse: "Washington",
  },
  {
    question: "Quel est le plus grand océan de la Terre ?",
    options: [
      "Océan Atlantique",
      "Océan Pacifique",
      "Océan Indien",
      "Océan Arctique",
    ],
    reponse: "Océan Atlantique",
  },
  {
    question:
      "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
    options: ["1965", "1969", "1972", "1980"],
    reponse: "1965",
  },
  {
    question: "Q4",
    options: ["1965", "1969", "1972", "1980"],
    reponse: "1965",
  },
  {
    question: "Q5",
    options: ["1965", "1969", "1972", "1980"],
    reponse: "1965",
  },
  {
    question: "Quiz terminé",
    options: ["1965", "1969", "1972", "1980"],
    reponse: "1965",
  },
];
const titleQuiz = document.querySelector(".quiz_title");
const questionText = document.querySelector(".quiz_question");
const options = document.querySelectorAll("button");
let score = 0;
let indexQuestion = 0;

const startQuiz = () => {
  questionText.innerHTML = quiz[indexQuestion].question;
  options.forEach((button, indexOption) => {
    button.innerHTML = quiz[indexQuestion].options[indexOption];
    button.addEventListener("click", (e) => {
      checkAnswer(e.target.textContent, indexQuestion);
      indexQuestion++;
      nextQuestion();
    });
  });
};

const checkAnswer = (optionSelected, indexQuestion) => {
  if (quiz[indexQuestion].question != "Quiz terminé") {
    if (optionSelected == quiz[indexQuestion].reponse) {
      titleQuiz.innerHTML = "Bonne réponse !";
      score++;
    } else {
      titleQuiz.innerHTML = "Mauvaise réponse !";
    }
  } else {
    titleQuiz.innerHTML = "Quiz terminé !";
  }
};

const nextQuestion = () => {
  questionText.innerHTML = quiz[indexQuestion].question;
  options.forEach((button, indexOption) => {
    button.innerHTML = quiz[indexQuestion].options[indexOption];
  });
};

startQuiz();
