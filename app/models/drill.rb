class Drill < ActiveRecord::Base
  scope :next, lambda{ |drill|
    where("exeid > ?", drill.exeid).order("exeid").first
  }

  def check(answer)
    self.english == answer
  end
end
