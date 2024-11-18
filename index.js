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
];
const titleQuiz = document.querySelector(".quiz_title");
const questionText = document.querySelector(".quiz_question");
const options = document.querySelectorAll("button");
let score = 0;

const startQuiz = () => {
  let indexQuestion = 0;

  questionText.innerHTML = quiz[indexQuestion].question;
  options.forEach((button, indexOption) => {
    button.innerHTML = quiz[indexQuestion].options[indexOption];
    button.addEventListener("click", (e) => {
      console.log(
        `Option n°${indexOption + 1} sélectionnée :`,
        e.target.textContent
      );
      if (checkAnswer(e.target.textContent, indexQuestion)) {
        score++;
      }
    });
  });
};

const checkAnswer = (optionSelected, indexQuestion) => {
  if (optionSelected == quiz[indexQuestion].reponse) {
    titleQuiz.innerHTML = "Bonne réponse !";
    return true;
  } else {
    titleQuiz.innerHTML = "Mauvaise réponse !";
    return false;
  }
};

startQuiz();
