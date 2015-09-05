class Progress < ActiveRecord::Base
  belongs_to :drill
  belongs_to :user
  validates :drill, presence: true
  validates :user, presence: true

  scope :clear, -> { where(current_result: true) }
  scope :not_clear, -> { where(current_result: false) }
  scope :with_section, -> section {
    joins(:drill).where('drills.section_no = ?', section)
  }
  scope :refresh, -> { update_all(current_result: false) }
  
  def drill_clear
    self.clear_count += 1
    self.current_result = true
  end
end
