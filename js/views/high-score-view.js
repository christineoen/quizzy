
function HighScoreView(name, args, $appView) {
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
		Quizzy.restart();
	});

	$appView.append($view);
}
