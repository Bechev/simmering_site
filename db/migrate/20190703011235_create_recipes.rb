class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :recipe_process
      t.integer :preparation_time
      t.integer :cooking_time
      t.integer :total_recipe_time
      t.integer :calories
      t.integer :user_id

      t.timestamps
    end
  end
end
