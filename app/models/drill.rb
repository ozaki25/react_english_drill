class Drill < ActiveRecord::Base
  scope :next, lambda{ |id|
    where("id > ?", id).order("id").first
  }

  def check(answer)
    self.english == answer
  end
end
