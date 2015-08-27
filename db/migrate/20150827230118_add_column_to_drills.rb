class AddColumnToDrills < ActiveRecord::Migration
  def change
    add_column :drills, :exeid, :integer
    add_column :drills, :section_no, :integer
  end
end
