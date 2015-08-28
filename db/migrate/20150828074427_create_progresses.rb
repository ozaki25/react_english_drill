class CreateProgresses < ActiveRecord::Migration
  def change
    create_table :progresses do |t|
      t.references :drill, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.boolean :clear, nill: false
      t.integer :count

      t.timestamps null: false
    end
  end
end
