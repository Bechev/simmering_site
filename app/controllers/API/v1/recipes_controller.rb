module Api
    module V1
        class RecipesController < ApplicationController
            
            def index
                if params[:user_id] 
                    user = User.find(params[:user_id])
                    @recipes = user.recipes.last(10).reverse
                elsif params[:meal_id]
                    meal = Meal.find(params[:meal_id])
                    @recipes = meal.recipes
                else
                    @recipes = Recipe.all.last(10).reverse
                end
                render json: @recipes
            end
        
        end
    end
end

