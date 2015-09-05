class Drill < ActiveRecord::Base
  has_many :progresses
  has_many :users

  scope :with_section, -> section { where(section_no: section) }

  def check(answer)
    self.english == answer
  end
end
