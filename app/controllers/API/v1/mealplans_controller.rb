module API
    module V1
        class MealplansController < ApplicationController
            
            def index
                if params[:user_id] 
                    user = User.find(params[:user_id])
                    @mealplans = user.mealplans.last(10).reverse
                else
                    @mealplans = Mealplan.all.last(10).reverse
                end
                render json: @mealplans
            end
        
        end
    end
end

