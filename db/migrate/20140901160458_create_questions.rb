class CreateQuestions < ActiveRecord::Migration
  def change
    # TODO
    create_table :questions do |t|
      t.string :question
      t.string :answer
      t.string :correct_answers
      t.string :incorrect_answers
    end
  end
end
