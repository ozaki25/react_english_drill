class RenameColumnToProgresses < ActiveRecord::Migration
  def change
    rename_column :progresses, :current_section_result, :current_result
  end
end
