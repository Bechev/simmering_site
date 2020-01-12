require 'pry'
class GroceriesList < ApplicationRecord
    belongs_to :mealplan
    has_many :days, through: :mealplan
    has_many :meals, through: :days
    has_many :recipes, through: :meals
    has_many :quantities_multiplicators, through: :meals
    has_many :ingredients, through: :recipes
    has_many :quantities, through: :recipes

    # def sum_quantities
    #     summed_quantities = []
    #     quantities_multiplicators = []
    #     for meal in self.meals
    #         quantities_multiplicators = quantities_multiplicators + meal.quantities_multiplicators
    #     end

    #     # Iterate for the quantities and associate a random quantities_multiplcator for which the recipe matches, regardless of the meal (not clean)
    #     binding.pry
    #     for quantity in self.quantities
    #         # multiplicator = 1

    #         # if quantities_multiplicators.length === 1
    #         #     multiplicator = quantities_multiplicators
    #         # end

    #         # for quantities_multiplicator in quantities_multiplicator
    #         #     if quantities_multiplicator.recipe_id === quantity.recipe
    #         #         multiplicator = quantities_multiplicator.multiplicator
    #         #         quantities_multiplicators.slice!(quantities_multiplicators.index(quantities_multiplicator))
    #         #     end
    #         # end

    #         if index = summed_quantities.index{|sum_quantity| sum_quantity[:ingredient_id] == quantity.ingredient_id} 
    #             summed_quantities[index] = {measure: (summed_quantities[index][:measure] * multiplicator + quantity.measure), unit: summed_quantities[index][:unit], ingredient_id: summed_quantities[index][:ingredient_id], recipe_id: summed_quantities[index][:recipe_id]}
    #         else
    #             summed_quantities << {measure: quantity[:measure] * multiplicator, unit: quantity[:unit], ingredient_id: quantity[:ingredient_id], recipe_id: quantity[:recipe_id]}
    #         end
    #     end
    #     return nil
    
    # end

    # def test
    #     quantities_multiplicators = self.quantities_multiplicators
    #     quantities = []
    #     for meal in self.meals
    #         meal_quantities_multiplicators = quantities_multiplicators.select{|quantities_multiplicator| quantities_multiplicator.meal_id === meal.id }
    #         quantities = calculate_quantities(meal.quantities, meal_quantities_multiplicators) + quantities
    #     end
    #     return quantities
    # end

    # def calculate_quantities(meal_quantities, meal_quantities_multiplicators)
    #     summed_quantities = []
    #     for quantity in meal_quantities
    #         quantities_multiplicator = meal_quantities_multiplicators.select{|multiplicator| multiplicator.recipe_id === quantity.recipe_id}
    #         multiplicator = quantities_multiplicator.first.multiplicator
    #         if index = summed_quantities.index{|sum_quantity| sum_quantity[:ingredient_id] == quantity.ingredient_id} 
    #             summed_quantities[index] = {measure: (summed_quantities[index][:measure] + quantity.measure * multiplicator), unit: summed_quantities[index][:unit], ingredient_id: summed_quantities[index][:ingredient_id], recipe_id: summed_quantities[index][:recipe_id]}
    #         else
    #             summed_quantities << {measure: quantity[:measure]*multiplicator, unit: quantity[:unit], ingredient_id: quantity[:ingredient_id], recipe_id: quantity[:recipe_id]}
    #         end
    #     end
    #     return summed_quantities
    # end


    def test
        quantities_multiplicators = self.quantities_multiplicators
        quantities = []
        summed_quantities = []
        for meal in self.meals
            meal_quantities_multiplicators = quantities_multiplicators.select{|quantities_multiplicator| quantities_multiplicator.meal_id === meal.id }
            for quantity in meal.quantities
                quantities_multiplicator = meal_quantities_multiplicators.select{|multiplicator| multiplicator.recipe_id === quantity.recipe_id}
                multiplicator = quantities_multiplicator.first.multiplicator
                if index = summed_quantities.index{|sum_quantity| sum_quantity[:ingredient_id] == quantity.ingredient_id} 
                    summed_quantities[index] = {measure: (summed_quantities[index][:measure] + quantity.measure * multiplicator), unit: summed_quantities[index][:unit], ingredient_id: summed_quantities[index][:ingredient_id], recipe_id: summed_quantities[index][:recipe_id]}
                else
                    summed_quantities << {measure: quantity[:measure]*multiplicator, unit: quantity[:unit], ingredient_id: quantity[:ingredient_id], recipe_id: quantity[:recipe_id]}
                end
            end
        end
        return summed_quantities

    end

    # def calculate_quantities(meal_quantities, meal_quantities_multiplicators)
        
    # end

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
