class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.integer :rating
      t.text :ingredients
      t.string :country
      t.integer :people_served


      t.timestamps
    end
  end
end
