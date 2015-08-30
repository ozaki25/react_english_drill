class CreateProgresses < ActiveRecord::Migration
  def change
    create_table :progresses do |t|
      t.references :drill, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.integer :count, default: 0
      t.boolean :clear, default: false, null: false

      t.timestamps null: false
    end
  end
end
