function QuestionModel(questionData) {
	this.question = questionData.question;
	this.answer = questionData.answer;
	this.choices = questionData.choices;
	this.view = new QuestionView(this);
}