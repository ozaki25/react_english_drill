class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :recoverable, :registerable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :rememberable, :trackable, :validatable
  has_many :progresses
  belongs_to :drill

  def set_default_drill
    self.drill = Drill.first
  end

  def section_clear?
    progresses.with_section(drill.section_no).clear.count == Drill.with_section(drill.section_no).count
  end

  def next_drill
    if section_clear?
      Drill.find_by(section_no: drill.section_no + 1)
    else
      next_drills = Drill.with_section(drill.section_no).where('exeid > ?', drill.exeid)
      clear_drills = progresses.with_section(drill.section_no).clear.map(&:drill)
      next_drill = (next_drills - clear_drills).first.presence || progresses.with_section(drill.section_no).not_clear.map(&:drill).first
    end
  end
end
