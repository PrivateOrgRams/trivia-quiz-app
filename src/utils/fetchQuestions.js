export { getAllQuestions, processFetchedQuestions, getCategories };

const getAllQuestions = (numberOfQuestions, category, difficulty, type) => {
  return fetch(
    `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`
  )
    .then((response) => response.json())
    .then((response) => response.results);
};

const getCategories = () => {
  return fetch("https://opentdb.com/api_category.php")
    .then((response) => response.json())
    .then((response) => response.trivia_categories);
};

function processFetchedQuestions(fetchedQuestions) {
  const processedQuestions = [];

  fetchedQuestions.forEach((fetchedQuestion) => {
    const optionsArray = [];
    optionsArray.push(fetchedQuestion.correct_answer);
    fetchedQuestion.incorrect_answers.forEach((answer) => {
      optionsArray.push(answer);
    });

    const processedQuestion = {
      mainQuestion: fetchedQuestion.question,
      options: shuffle(optionsArray),
      correctAnswer: fetchedQuestion.correct_answer,
      selectedOption: "",
    };
    processedQuestions.push(processedQuestion);
  });

  return processedQuestions;
}

function shuffle(array) {
  const copy = [];
  let n = array.length;
  let i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}
