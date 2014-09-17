function QuestionView(questionModel, $appView) {
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

	$appView.append($view);
}
