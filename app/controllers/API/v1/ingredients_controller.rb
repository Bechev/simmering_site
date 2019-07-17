
module API
    module V1
        class IngredientsController < ApplicationController
            
            def index
                if params[:recipe_id]
                    recipe = Recipe.find(params[:recipe_id])
                    @ingredients = recipe.ingredients
                else
                    @ingredients = Ingredient.all.last(10).reverse
                end
                render json: @ingredients
            end

        end
    end
end
