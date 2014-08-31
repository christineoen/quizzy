var QuizzyView = (function(){
	function QuestionView(questionModel) {
		var me = this;
		this.model = questionModel;
		this.template = $('#template-question').html();

		var preppedTemplate = _.template(this.template);
		var compiledHtml = preppedTemplate({
			question: this.model.question,
			choices: this.model.choices
		});
		var $view = $(compiledHtml);

		$view.find('button').on('click', function(){
			QuizController.checkAnswer(
				$(this).val(),
				me.model
			);
		});
		$view.hide();

		this.hide = function() {
			$view.hide();
		}

		this.show = function() {
			$view.show();
		};

		$quizContainer.append($view);
	}

	function resultView(correctAnswers, totalQuestions) {
		this.template = $('#template-results').html();
		var preppedTemplate = _.template(this.template);
		var compiledHtml = preppedTemplate({
			correctAnswers: correctAnswers,
			totalQuestions: totalQuestions
		});
		$quizContainer.append(compiledHtml);

	}

})();