var Quizzy = (function() {

	var $quizContainer;
	var questionModels;
	var currentIndex = 0;
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var totalQuestions;

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

	function QuestionModel(questionData) {
		this.question = questionData.question;
		this.answer = questionData.answer;
		this.choices = questionData.choices;
		this.view = new QuestionView(this);
	}


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

	function startApplication(selector, quizData) {
		$quizContainer = $(selector);
		$quizContainer.append('<h1>' + quizData.quizTitle + '</h1>')

		questionModels = [];

		for (var i in quizData.questions) {
			questionModels.push(new QuestionModel(quizData.questions[i]));
		}

		questionModels[0].view.show();
	}

	return {
		start: startApplication
	}
})();


