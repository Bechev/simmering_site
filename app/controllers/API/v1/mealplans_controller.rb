module Api
    module V1
        class MealplansController < ApplicationController
            before_action :authenticate_api_v1_user!
            skip_before_action :authenticate_api_v1_user!
            
            def index
                # debugger
                if request.headers["uid"] 
                    user = User.find_by(email: request.headers["uid"])
                    # @mealplans = user.mealplans.last(10).reverse
                    @mealplans = user.mealplans
                    render json: @mealplans
                end
            end

            def show
                # debugger
                if params[:id]
                    @mealplan = Mealplan.find(params[:id])
                    render json: @mealplan, include: "**"
                end
            end
        
        end
    end
end

