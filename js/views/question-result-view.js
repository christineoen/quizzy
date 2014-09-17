function renderQuestionResultView(result, quiz, $appView) {
	if (!localStorage['questions']) {
		quiz.jQuestions.questions[quiz.currentIndex-1][result] = 1;
		var questions = JSON.stringify(quiz.jQuestions);
		localStorage['questions'] = questions;
	}
	else {
		var questions = localStorage['questions'];
		quiz.jQuestions = JSON.parse(questions);
		quiz.jQuestions.questions[quiz.currentIndex-1][result] += 1;
		var questions = JSON.stringify(quiz.jQuestions);
		localStorage['questions'] = questions;
	};
	correct = quiz.jQuestions.questions[quiz.currentIndex-1]['correct'];
	incorrect = quiz.jQuestions.questions[quiz.currentIndex-1]['incorrect'];
	var percent_correct = Math.round((correct / (correct + incorrect)) * 100);

	setTimeout(QuizController.nextQuestion, 2000);

	var template = $('#template-question-result').html();
	var preppedTemplate = _.template(template);
	var compiledHtml = preppedTemplate({
		percent_correct: percent_correct
	});
	var $view = $(compiledHtml);

	$appView.append($view);
}
