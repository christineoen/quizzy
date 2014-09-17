function ResultView(correctAnswers, totalQuestions, $appView) {
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
		HighScoreView($("#name-field").val(), args, $appView);
	});

	$appView.append($view);
}
