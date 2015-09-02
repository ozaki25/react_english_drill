class Progress < ActiveRecord::Base
  belongs_to :drill
  belongs_to :user

  def refresh
    Progress.update_all(current_section_result: false)
  end
end
