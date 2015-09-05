class RemoveCurrentSectionFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :current_section, :integer
  end
end
