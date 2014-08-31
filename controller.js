var QuizzyController = (function(){
	var QuizController = {
		checkAnswer: function(input, questionModel) {
			if (input == questionModel.answer) {
				currentIndex ++
				correctAnswers ++
				this.nextQuestion();
			}
			else {
				currentIndex ++
				incorrectAnswers ++
				this.nextQuestion();
			}
		},
		nextQuestion: function() {
			if (correctAnswers + incorrectAnswers == 5) {
				var total = correctAnswers + incorrectAnswers;
				this.showResults(correctAnswers, incorrectAnswers);
			}
			else {
				questionModels[currentIndex - 1].view.hide();
				questionModels[currentIndex].view.show();
			}
		},
		showResults: function(correctAnswers, incorrectAnswers) {
			questionModels[currentIndex - 1].view.hide();
			totalQuestions = correctAnswers + incorrectAnswers;
			resultView(correctAnswers, totalQuestions);
		}
	};
})();