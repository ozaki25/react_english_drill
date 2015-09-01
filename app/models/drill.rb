class Drill < ActiveRecord::Base
  has_many :progresses
  scope :next, -> drill {
    find_by(exeid: drill.exeid + 1)
  }
  scope :current_section_drills, -> current_section { where(section_no: current_section) }
  scope :not_clear, -> { joins(:progresses).where('progresses.current_section_result = ?', false) }

  def check(answer)
    self.english == answer
  end
end
