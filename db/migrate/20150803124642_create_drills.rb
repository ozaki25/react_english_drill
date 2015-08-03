class CreateDrills < ActiveRecord::Migration
  def change
    create_table :drills do |t|
      t.string :japanese
      t.string :english

      t.timestamps null: false
    end
  end
end
