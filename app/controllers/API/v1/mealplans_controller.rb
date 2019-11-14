module Api
    module V1
        class MealplansController < ApplicationController
            before_action :authenticate_api_v1_user!
            skip_before_action :authenticate_api_v1_user!, only: [:index]
            
            def index
                # debugger
                if request.headers["uid"] 
                    user = User.find_by(email: request.headers["uid"])
                    # @mealplans = user.mealplans.last(10).reverse
                    @mealplans = user.mealplans
                    render json: @mealplans, include: '**'
                else
                    @mealplans = Mealplan.all.last(10).reverse
                    @mealplans = Mealplan.all
                    render json: @mealplans
                end
            end
        
        end
    end
end

