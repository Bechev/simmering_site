class CreateJoinTableMealsQuantitiesMultiplicators < ActiveRecord::Migration[5.2]
  def change
    create_join_table :meals, :quantities_multiplicators do |t|
      t.index [:meal_id, :quantities_multiplicator_id], name: 'idx_meals_quantities_multl_on_quantities_mult_and_meals'
      # t.index [:quantities_multiplicator_id, :meal_id]
    end
  end
end
