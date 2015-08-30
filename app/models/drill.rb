class Drill < ActiveRecord::Base
  has_many :progresses
  scope :next, lambda{ |drill|
    where("exeid > ?", drill.exeid).order("exeid").first
  }

  def check(answer)
    self.english == answer
  end
end
