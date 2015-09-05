class Progress < ActiveRecord::Base
  belongs_to :drill
  belongs_to :user
  validates :drill, presence: true
  validates :user, presence: true
end
