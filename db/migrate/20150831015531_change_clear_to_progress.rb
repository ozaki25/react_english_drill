class ChangeClearToProgress < ActiveRecord::Migration
  def change
    rename_column :progresses, :count, :answer_count
    rename_column :progresses, :clear, :clear_count
    change_column :progresses, :clear_count, :integer, null: false, default: 0
  end
end
