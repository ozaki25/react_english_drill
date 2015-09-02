class Drill < ActiveRecord::Base
  has_many :progresses

  scope :current_section_drills, -> current_section { where(section_no: current_section) }
  scope :not_clear, -> { joins(:progresses).where('progresses.current_section_result = ?', false) }

  def check(answer)
    self.english == answer
  end

  def next
    Drill.current_section_drills(section_no).not_clear.find_by(exeid: exeid + 1).presence || Drill.current_section_drills(section_no).not_clear.first
  end
end
