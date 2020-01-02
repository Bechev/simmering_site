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

        # sample_arr.inject { |acc, next_obj| acc.merge(next_obj) { |key,arg1,arg2| arg1+agr2 } }
        # return self.quantities.inject { |quantity_sum, next_quantity| 
        #     if next_quantity.id
        #     quantity_sum.merge(next_obj) { |key,arg1,arg2| arg1+agr2 } }
        # quantities = self.quantities
        summed_quantities = []
        for quantity in self.quantities
            
            if index = summed_quantities.index{|sum_quantity| sum_quantity[:ingredient_id] == quantity.ingredient_id} 
                summed_quantities[index] = {measure: (summed_quantities[index][:measure] + quantity.measure), unit: summed_quantities[index][:unit], ingredient_id: summed_quantities[index][:ingredient_id], recipe_id: summed_quantities[index][:recipe_id]}
            else
                summed_quantities << {measure: quantity[:measure], unit: quantity[:unit], ingredient_id: quantity[:ingredient_id], recipe_id: quantity[:recipe_id]}
            end
        end
        return summed_quantities
        # eople.select{|x| x[:job_title] == "developer"}.map{|y| y[:salary].to_i}.reduce(:+)
        # self.quantities.map{|quantity| quantity.select{|quantity_id| }}
        # self.quantities.select{|quantity| self.quantities.map{|quanti}}


    end

    # def generate
    #     mealplan = self.mealplan
    #     self.ingredients = []
    #     for day in mealplan.days
    #         for meal in day.meals
    #             for recipe in meal.recipes
    #                 self.ingredients << recipe.ingredients
    #             end
    #         end
    #     end
    #     self.save

    #     return nil
    # end

    # def generate2
    #     return self.mealplan.joins(:days).joins(:meals).joins(:recipes)
    # end

    # def list
    #     if self.ingredients.length === 0
    #         self.generate_list
    #     end

    #     return self.ingredients.uniq
    # end

end
