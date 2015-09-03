class Drill < ActiveRecord::Base
  has_many :progresses

  scope :current_section_drills, -> current_section { where(section_no: current_section) }
  scope :not_clear, -> current_user {
    joins(:progresses).where('progresses.current_section_result = ?', false).where('progresses.user_id = ?', current_user.id)
  }

  def check(answer)
    self.english == answer
  end

  def next(current_user)
    Drill.current_section_drills(section_no).not_clear(current_user).find_by('exeid > ?', exeid).presence || Drill.current_section_drills(section_no).not_clear(current_user).first
  end
end
