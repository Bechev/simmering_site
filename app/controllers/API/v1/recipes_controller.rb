module Api
    module V1
        class RecipesController < ApplicationController
            
            def index
                if params[:user_id] 
                    user = current_api_v1_user()
                    @recipes = user.recipes.last(10).reverse
                    render json: @recipes, include: '**'
                elsif params[:meal_id]
                    meal = Meal.find(params[:meal_id])
                    @recipes = meal.recipes
                    render json: @recipes, include: '**'
                else
                    @recipes = Recipe.all.last(10).reverse
                    render json: @recipes, include: '**'
                end
            end

            def search
                letter = params[:char]
                @recipes = Recipe.where("name like ?", "%" + letter + "%").limit(10)
                render json: @recipes, status: 201
            end
        

            def show
                @recipe = Recipe.find(params[:id])
                render json: @recipe, status: 201
            end
        end
    end
end

