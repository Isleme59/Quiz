const quiz = [
  {
    question: "Quelle est la capitale de la France ?",
    options: ["Londres", "Berlin", "Paris", "Madrid"],
    reponse: "Paris",
  },
  {
    question: "Qui a peint la 'Joconde' ?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Léonard de Vinci"],
    reponse: "Léonard de Vinci",
  },
  {
    question: "Dans quel pays se trouve la Grande Muraille ?",
    options: ["Japon", "Inde", "Chine", "Corée du Sud"],
    reponse: "Chine",
  },
  {
    question: "Quel est l'océan le plus petit du monde ?",
    options: ["Océan Arctique", "Océan Pacifique", "Océan Indien", "Océan Atlantique"],
    reponse: "Océan Arctique",
  },
  {
    question: "Quelle est la monnaie officielle du Japon ?",
    options: ["Yuan", "Yen", "Won", "Roupie"],
    reponse: "Yen",
  },
  {
    question: "Quel est le plus haut sommet du monde ?",
    options: ["Mont Blanc", "Mont Everest", "K2", "Kangchenjunga"],
    reponse: "Mont Everest",
  },
  {
    question: "Quel pays a remporté la Coupe du Monde de football en 2018 ?",
    options: ["Allemagne", "Brésil", "France", "Espagne"],
    reponse: "France",
  },
  {
    question: "Quel est le symbole chimique de l'eau ?",
    options: ["H2O", "O2", "H2", "CO2"],
    reponse: "H2O",
  },
  {
    question: "Combien de planètes composent le système solaire ?",
    options: ["7", "8", "9", "10"],
    reponse: "8",
  },
  {
    question: "Quel est l'animal le plus rapide sur terre ?",
    options: ["Guepard", "Aigle", "Gazelle", "Lion"],
    reponse: "Guepard",
  },
  {
    question: "Quel est le pays d'origine des pizzas ?",
    options: ["France", "Espagne", "Italie", "Grèce"],
    reponse: "Italie",
  },
  {
    question: "Quelle est la langue la plus parlée au monde ?",
    options: ["Anglais", "Chinois (Mandarin)", "Espagnol", "Hindou"],
    reponse: "Chinois (Mandarin)",
  },
  {
    question: "Quel scientifique est connu pour sa théorie de la relativité ?",
    options: ["Isaac Newton", "Albert Einstein", "Galilée", "Marie Curie"],
    reponse: "Albert Einstein",
  },
  {
    question: "Qui est l'auteur de la pièce 'Roméo et Juliette' ?",
    options: ["Molière", "Victor Hugo", "William Shakespeare", "Dante Alighieri"],
    reponse: "William Shakespeare",
  },
  {
    question: "Quelle est la planète surnommée la 'Planète rouge' ?",
    options: ["Venus", "Mars", "Jupiter", "Saturne"],
    reponse: "Mars",
  },
  {
    question: "Quel est le nombre de jours dans une année bissextile ?",
    options: ["364", "365", "366", "367"],
    reponse: "366",
  },
  {
    question: "Quel est l'inventeur de l'ampoule électrique ?",
    options: ["Nikola Tesla", "Thomas Edison", "Benjamin Franklin", "Alexander Bell"],
    reponse: "Thomas Edison",
  },
  {
    question: "Quelle est la capitale de l'Allemagne ?",
    options: ["Munich", "Berlin", "Francfort", "Hambourg"],
    reponse: "Berlin",
  },
  {
    question: "Quel est le plus long fleuve du monde ?",
    options: ["Nil", "Amazon", "Yangtsé", "Mississippi"],
    reponse: "Amazon",
  },
  {
    question: "Quel est l'auteur de 'Les Misérables' ?",
    options: ["Victor Hugo", "Émile Zola", "Honoré de Balzac", "Jules Verne"],
    reponse: "Victor Hugo",
  },
  {
    question: "Dans quelle ville se trouve la Tour Eiffel ?",
    options: ["Londres", "Paris", "Berlin", "Rome"],
    reponse: "Paris",
  },
  {
    question: "Qui a écrit la série 'Le Seigneur des Anneaux' ?",
    options: ["George R.R. Martin", "J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis"],
    reponse: "J.R.R. Tolkien",
  },
  {
    question: "Quelle est la capitale du Canada ?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montréal"],
    reponse: "Ottawa",
  },
  {
    question: "Combien de côtés possède un hexagone ?",
    options: ["5", "6", "7", "8"],
    reponse: "6",
  },
  {
    question: "Quel est l'organe principal du système nerveux humain ?",
    options: ["Cœur", "Poumons", "Cerveau", "Foie"],
    reponse: "Cerveau",
  },
  {
    question: "Dans quel pays se trouve la célèbre statue du Christ Rédempteur ?",
    options: ["Mexique", "Argentine", "Brésil", "Chili"],
    reponse: "Brésil",
  },
  {
    question: "Qui a écrit le conte 'Cendrillon' ?",
    options: ["Hans Christian Andersen", "Charles Perrault", "Frères Grimm", "Oscar Wilde"],
    reponse: "Charles Perrault",
  },
  {
    question: "Quel métal est utilisé pour fabriquer des fils électriques ?",
    options: ["Fer", "Cuivre", "Or", "Aluminium"],
    reponse: "Cuivre",
  },
  {
    question: "Quelle est la capitale de la Russie ?",
    options: ["Saint-Pétersbourg", "Moscou", "Kiev", "Novgorod"],
    reponse: "Moscou",
  },

];
const titleQuiz = document.querySelector(".quiz_title");
const questionText = document.querySelector(".quiz_question");
const options = document.querySelectorAll("button");
let score = 0;
let indexQuestion = 0;
let randomQuestions = [];


const shuffleQuestions = () => {
  randomQuestions = [...quiz].sort(() => Math.random() - 0.5);
};
const startQuiz = () => {
  shuffleQuestions();
  loadQuestion();
};
const loadQuestion = () => {
  if (indexQuestion < 20 && indexQuestion < randomQuestions.length) {
    const currentQuestion = randomQuestions[indexQuestion];
    questionText.innerHTML = currentQuestion.question;

    options.forEach((button, indexOption) => {
      button.innerHTML = currentQuestion.options[indexOption] || "";
      button.style.display = currentQuestion.options[indexOption] ? "block" : "none";
      button.onclick = () => checkAnswer(button.textContent);
    });
  } else {
    endQuiz();
  }
};
const checkAnswer = (selectedOption) => {
  const correctAnswer = randomQuestions[indexQuestion].reponse;

  if (selectedOption === correctAnswer) {
    score++;
    titleQuiz.innerHTML = "Bonne réponse ! 🎉";
  } else {
    titleQuiz.innerHTML = `Mauvaise réponse ! 😢 La bonne réponse était : ${correctAnswer}`;
  }

  indexQuestion++;
  setTimeout(loadQuestion, 1000);
};

const endQuiz = () => {
  titleQuiz.innerHTML = `Quiz terminé ! 🎉 Votre score : ${score}/20`;
};


startQuiz();
