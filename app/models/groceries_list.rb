class GroceriesList < ApplicationRecord
    belongs_to :mealplan
    # has_and_belongs_to_many :ingredients
    has_many :days, through: :mealplan
    has_many :meals, through: :days
    has_many :recipes, through: :meals
    has_many :ingredients, through: :recipes
    has_many :quantities, through: :recipes

    # has_many :ingredients

    def sum_quantities


        summed_quantities = []
        for quantity in self.quantities
            
            if index = summed_quantities.index{|sum_quantity| sum_quantity[:ingredient_id] == quantity.ingredient_id} 
                summed_quantities[index] = {measure: (summed_quantities[index][:measure] + quantity.measure), unit: summed_quantities[index][:unit], ingredient_id: summed_quantities[index][:ingredient_id], recipe_id: summed_quantities[index][:recipe_id]}
            else
                summed_quantities << {measure: quantity[:measure], unit: quantity[:unit], ingredient_id: quantity[:ingredient_id], recipe_id: quantity[:recipe_id]}
            end
        end
        return summed_quantities
    end
end
