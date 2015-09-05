class CreateProgresses < ActiveRecord::Migration
  def change
    create_table :progresses do |t|
      t.references :drill, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.integer :answer_count, null: false, default: 0
      t.integer :clear_count, null: false, default: 0
      t.boolean :current_result, null: false, default: false

      t.timestamps null: false
    end
  end
end
