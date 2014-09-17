var Quizzy = (function() {

	// var $quizContainer;
	// var questionModels;
	// var currentIndex = 0;
	// var correctAnswers = 0;
	// var incorrectAnswers = 0;
	// var totalQuestions;
	QuizController.quiz = new QuizModel();

	// var jQuestions = {"questions":[
	//   {"question": 1, "correct": 0, "incorrect": 0},
	//   {"question": 2, "correct": 0, "incorrect": 0},
	//   {"question": 3, "correct": 0, "incorrect": 0},
	//   {"question": 4, "correct": 0, "incorrect": 0},
	//   {"question": 5, "correct": 0, "incorrect": 0},
	//   {"question": 6, "correct": 0, "incorrect": 0},
	//   {"question": 7, "correct": 0, "incorrect": 0},
	//   {"question": 8, "correct": 0, "incorrect": 0}
	//   ]};

	function restartApplication() {
		$('#quiz-app').empty();
		// questionModels = [];
		// currentIndex = 0;
		// correctAnswers = 0;
		// incorrectAnswers = 0;
		// totalQuestions = 0;
		QuizController.quiz = new QuizModel();
		startApplication('#quiz-app', quizData);
	}

	function startApplication(selector, quizData) {
		var $appView = $(selector);
		$appView.append('<h1>' + quizData.quizTitle + '</h1>')
		QuizController.view = $appView;

		questionModels = [];

		for (var i in quizData.questions) {
			var model = new QuestionModel(quizData.questions[i]);
			model.view = new QuestionView(model, $appView);
			questionModels.push(model);
		}

		questionModels[0].view.show();
	}

	return {
		start: startApplication,
		restart: restartApplication
	}

})();
