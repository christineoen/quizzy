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
	};

	this.show = function() {
		$view.show();
	};

	$quizContainer.append($view);
}

function QuestionResultView(result, html, clickedButton) {
	$(clickedButton).html(html);
	if (!localStorage['questions']) {
		jQuestions.questions[currentIndex-1][result] = 1;
		console.log(jQuestions);
		var questions = JSON.stringify(jQuestions);
		localStorage['questions'] = questions;
	}
	else {
		var questions = localStorage['questions'];
		jQuestions = JSON.parse(questions);
		jQuestions.questions[currentIndex-1][result] += 1;
		var questions = JSON.stringify(jQuestions);
		localStorage['questions'] = questions;
	};
	correct = jQuestions.questions[currentIndex-1]['correct'];
	incorrect = jQuestions.questions[currentIndex-1]['incorrect'];
	var percent_correct = Math.round((correct / (correct + incorrect)) * 100);

	setTimeout(QuizController.nextQuestion, 2000);

	this.template = $('#template-question-result').html();
	var preppedTemplate = _.template(this.template);
	var compiledHtml = preppedTemplate({
		percent_correct: percent_correct
	});
	var $view = $(compiledHtml);

	$quizContainer.append($view);
}

function ResultView(correctAnswers, totalQuestions) {
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
		HighScoreView($("#name-field").val(), args);
	});

	$quizContainer.append($view);
}

function HighScoreView(name, args) {
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