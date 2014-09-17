function QuestionModel(questionData) {
	this.question = questionData.question;
	this.answer = questionData.answer;
	this.choices = questionData.choices;
}

function QuizModel() {
	this.questionModels = [];
	this.currentIndex = 0;
	this.correctAnswers = 0;
	this.incorrectAnswers = 0;
	this.totalQuestions = 0;
	this.jQuestions = {"questions":[
	  {"question": 1, "correct": 0, "incorrect": 0},
	  {"question": 2, "correct": 0, "incorrect": 0},
	  {"question": 3, "correct": 0, "incorrect": 0},
	  {"question": 4, "correct": 0, "incorrect": 0},
	  {"question": 5, "correct": 0, "incorrect": 0},
	  {"question": 6, "correct": 0, "incorrect": 0},
	  {"question": 7, "correct": 0, "incorrect": 0},
	  {"question": 8, "correct": 0, "incorrect": 0}
	  ]};
}
