var QuizController = {
	checkAnswer: function(clickedButton, input, questionModel) {
		if (input == questionModel.answer) {
			currentIndex ++
			correctAnswers ++
			var result = 'correct';
			var html = '<i class="fa fa-check"></i>';
		}
		else {
			currentIndex ++
			incorrectAnswers ++
			var result = 'incorrect';
			var html = '<i class="fa fa-times"></i>';
		}
		QuestionResultView(result, html, clickedButton);
	},
	nextQuestion: function() {
		$('.percent-correct').html('');
		if (correctAnswers + incorrectAnswers == 8) {
			var total = correctAnswers + incorrectAnswers;
			QuizController.showResults(correctAnswers, incorrectAnswers); //set timeout changed 'this' to window
		}
		else {
			questionModels[currentIndex - 1].view.hide();
			questionModels[currentIndex].view.show();
		}
	},
	showResults: function(correctAnswers, incorrectAnswers) {
		questionModels[currentIndex - 1].view.hide();
		totalQuestions = correctAnswers + incorrectAnswers;
		ResultView(correctAnswers, totalQuestions);
	}
};