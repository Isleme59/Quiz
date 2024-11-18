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
const questionText = document.querySelector(".quiz_question");
const options = document.querySelectorAll("button");

const startQuiz = () => {
  options.forEach((option, index) => {
    console.log("option n°", index, " sélectionnée.");
    /*
    
    */
  });
};

startQuiz();
