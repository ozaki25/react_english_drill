class AddColumnToProgresses < ActiveRecord::Migration
  def change
    add_column :progresses, :current_section_result, :boolean, null: false, default: false
  end
end
