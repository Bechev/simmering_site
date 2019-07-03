class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :calories
      t.string :unit
      # List of allergies
      t.boolean :contains_gluten
      t.boolean :contains_nuts
      t.boolean :contains_dairy
      t.boolean :shellfish
      t.timestamps
    end
  end
end
