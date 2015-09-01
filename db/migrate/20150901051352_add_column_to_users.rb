class AddColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :current_section, :integer, default: 0
  end
end
