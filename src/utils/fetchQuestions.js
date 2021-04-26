export { getAllQuestions, processFetchedQuestions , getCategories}

let QUESTION_URL = "https://opentdb.com/api.php?"

const getAllQuestions = (numberOfQuestions, category,difficulty) => {
	const URL = buildUrl(numberOfQuestions, category,difficulty)
	return fetch(URL)
		.then((response) => response.json())
		.then((response) => response.results)
}

const getCategories = () => {
	return fetch('https://opentdb.com/api_category.php')
		.then((response) => response.json())
		.then((response) => response.trivia_categories)
}

function buildUrl(numberOfQuestions, category,difficulty) {
	let URL = QUESTION_URL
	const requestCategory = `&category=${category}`
	const requestNumberOfQuestions = `amount=${numberOfQuestions}`
	const requestDifficulty=`&difficulty=${difficulty}`

	URL = URL.concat(requestNumberOfQuestions)

	if (category != 0) {
		URL = URL.concat(requestCategory)
	}
	else if(difficulty != 0)
	{
		URL = URL.concat(requestDifficulty)
	}

	return URL
}

function processFetchedQuestions(fetchedQuestions) {
	const processedQuestions = []

	fetchedQuestions.forEach((fetchedQuestion) => {
		const optionsArray = []
		optionsArray.push(fetchedQuestion.correct_answer)
		fetchedQuestion.incorrect_answers.forEach((answer) => {
			optionsArray.push(answer)
		})

		const processedQuestion = {
			mainQuestion: fetchedQuestion.question,
			options: shuffle(optionsArray),
			correctAnswer: fetchedQuestion.correct_answer,
			selectedOption: "",
		}
		processedQuestions.push(processedQuestion)
	})

	return processedQuestions
}

function shuffle(array) {
	const copy = []
	let n = array.length
	let i

	
	while (n) {
		i = Math.floor(Math.random() * n--)
		copy.push(array.splice(i, 1)[0])
	}

	return copy
}
