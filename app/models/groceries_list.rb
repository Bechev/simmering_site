class GroceriesList < ApplicationRecord
    belongs_to :mealplan
    has_and_belongs_to_many :ingredients
    # has_many :ingredients

    def generate
        mealplan = self.mealplan
        for day in mealplan.days
            for meal in day.meals
                for recipe in meal.recipes
                    self.ingredients << recipe.ingredients
                end
            end
        end
        self.save

        return nil
    end

    # def list
    #     if self.ingredients.length === 0
    #         self.generate_list
    #     end

    #     return self.ingredients.uniq
    # end

end
