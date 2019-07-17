module API
    module V1
        class MealsController < ApplicationController
            
            def index
                if params[:user_id] 
                    user = User.find(params[:user_id])
                    @meals = user.meals.last(10).reverse
                else
                    @meals = Meal.all.last(10).reverse
                end
                render json: @meals
            end
        
        end
    end
end

