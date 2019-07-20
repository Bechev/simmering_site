module Api
    module V1
        class MealsController < ApplicationController
            
            def index
                if params[:user_id] 
                    user = User.find(params[:user_id])
                    @meals = user.meals.last(10).reverse
                    render json: @meals, include: '**'
                elsif params[:day_id]
                    day = Day.find(params[:day_id])
                    @meal = day.meals
                    render json: @meals
                else
                    @meals = Meal.all.last(10).reverse
                    render json: @meals
                end
            end
        
        end
    end
end

