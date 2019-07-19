module Api
    module V1
        class DaysController < ApplicationController
            
            def index
                if params[:user_id] 
                    user = User.find(params[:user_id])
                    @days = user.days.last(10).reverse
                elsif params[:mealplan_id]
                    mealplan = Mealplan.find(params[:mealplan_id])
                    @days = mealplan.day
                else
                    @days = Day.all.last(10).reverse
                end
                render json: @days
            end
        
        end
    end
end

