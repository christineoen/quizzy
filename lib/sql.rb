module Quizzy
  class SQL




  end

  def self.db
    @__db_instance ||= SQL.new
  end
end