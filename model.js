var QuizzyModel = (function() {
	var quizData = {
		quizTitle: "My Quiz",
		questions: [
			{
				question: "Question 1",
				answer: "Correct Answer",
				choices: [
					"Correct Answer",
					"Wrong Answer 1",
					"Wrong Answer 2",
					"Wrong Answer 3"
				]
			},
			{
				question: "Question 2",
				answer: "Correct Answer",
				choices: [
					"Wrong Answer 1",
					"Wrong Answer 2",
					"Correct Answer",
					"Wrong Answer 3"
				]
			},
			{
				question: "Question 3",
				answer: "Correct Answer",
				choices: [
					"Wrong Answer 1",
					"Wrong Answer 2",
					"Wrong Answer 3",
					"Correct Answer"
				]
			},
			{
				question: "Question 4",
				answer: "Correct Answer",
				choices: [
					"Wrong Answer 1",
					"Wrong Answer 2",
					"Correct Answer",
					"Wrong Answer 3"
				]
			},
			{
				question: "Question 5",
				answer: "Correct Answer",
				choices: [
					"Wrong Answer 1",
					"Correct Answer",
					"Wrong Answer 2",
					"Wrong Answer 3"
				]
			}
		]
	};

	function QuestionModel(questionData) {
		this.question = questionData.question;
		this.answer = questionData.answer;
		this.choices = questionData.choices;
		this.view = new QuestionView(this);
	}

})();






