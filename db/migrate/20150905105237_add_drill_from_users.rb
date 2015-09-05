class AddDrillFromUsers < ActiveRecord::Migration
  def change
    add_reference :users, :drill, index: true, foreign_key: true
  end
end
