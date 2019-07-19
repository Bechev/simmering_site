module Api
    module V1
        class DaysController < ApplicationController
            
            def index
                if params[:user_id] 
                    user = User.find(params[:user_id])
                    @days = user.days.last(10).reverse
                    render json: @days.to_json(include: {meals: {include: {recipes: {include: :ingredients}}}})
                elsif params[:mealplan_id]
                    mealplan = Mealplan.find(params[:mealplan_id])
                    @days = mealplan.day
                    render json: @days
                else
                    @days = Day.all.last(10).reverse
                    render json: @days
                end
            end
        
        end
    end
end

