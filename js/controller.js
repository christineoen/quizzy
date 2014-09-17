var QuizController = {
	checkAnswer: function(clickedButton, input, questionModel) {
		if (input == questionModel.answer) {
			this.quiz.currentIndex ++
			this.quiz.correctAnswers ++
			var result = 'correct';
			var html = '<i class="fa fa-check"></i>';
		}
		else {
			this.quiz.currentIndex ++
			this.quiz.incorrectAnswers ++
			var result = 'incorrect';
			var html = '<i class="fa fa-times"></i>';
		}
		$(clickedButton).html(html);
		renderQuestionResultView(result, this.quiz, this.view);
	},
	nextQuestion: function() {
		$('.percent-correct').html('');
		if (QuizController.quiz.correctAnswers + QuizController.quiz.incorrectAnswers == 8) {
			var total = QuizController.quiz.correctAnswers + QuizController.quiz.incorrectAnswers;
			QuizController.showResults(QuizController.quiz.correctAnswers, QuizController.quiz.incorrectAnswers); //set timeout changed 'this' to window
		}
		else {
			questionModels[QuizController.quiz.currentIndex - 1].view.hide();
			questionModels[QuizController.quiz.currentIndex].view.show();
		}
	},
	showResults: function(correctAnswers, incorrectAnswers) {
		questionModels[QuizController.quiz.currentIndex - 1].view.hide();
		totalQuestions = correctAnswers + incorrectAnswers;
		ResultView(correctAnswers, totalQuestions, QuizController.view);
	}
};
