var Quizzy = (function() {

	var $quizContainer;
	var questionModels;
	var currentIndex = 0;
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var totalQuestions;

	var QuizController = {
		checkAnswer: function(clickedButton, input, questionModel) {
			if (input == questionModel.answer) {
				currentIndex ++
				correctAnswers ++
				$(clickedButton).html('<i class="fa fa-check"></i>');
				setTimeout(this.nextQuestion, 500);
			}
			else {
				currentIndex ++
				incorrectAnswers ++
				$(clickedButton).html('<i class="fa fa-times"></i>');
				setTimeout(this.nextQuestion, 500);
			}
		},
		nextQuestion: function() {
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

		$view.find('button').one('click', function(){
			var $clickedButton = this;
			QuizController.checkAnswer(
				$clickedButton,
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

		var args = arguments;
		var $view = $(compiledHtml);

		$view.find('#post-score').on('click', function(){
			$view.hide();
			highScoreView($("#name-field").val(), args);
		});

		$quizContainer.append($view);
	}

	function highScoreView(name, args) {
		if (!localStorage['players']) {
			var jPlayer = {"players":[
						{"name": name, "score": args[0]}
						]};
			var player = JSON.stringify(jPlayer);
			localStorage['players'] = player;
		}
		else {
			var jPlayer = JSON.parse(localStorage['players']);
			jPlayer.players.push({"name": name, "score": args[0]});
			var player = JSON.stringify(jPlayer);
			localStorage['players'] = player;
		}

		this.template = $('#template-highscores').html();
		var preppedTemplate = _.template(this.template);
		var compiledHtml = preppedTemplate({
			name: name,
			score: args,
			jPlayer: jPlayer
		});

		var $view = $(compiledHtml);

		$view.find('#retake-quiz').on('click', function(){
			restartApplication();
		});

		$quizContainer.append($view);
	}

	function restartApplication() {
		$('#quiz-app').empty();
		questionModels = [];
		currentIndex = 0;
		correctAnswers = 0;
		incorrectAnswers = 0;
		totalQuestions = 0;
		startApplication('#quiz-app', quizData);
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

