module Api
    module V1
        class GroceriesListController < ApplicationController
            before_action :authenticate_api_v1_user!

            def create
                # Need to fix getting the correct MealPlan - for now, looking for the last meal plan of the user - same in the client (Plan Component)
                if !params[:mealplan_id]
                    user = User.find_by(uid: request.headers["uid"])
                    @mealplan = Mealplan.where(user_id: user.id).last
                else
                    @mealplan = Mealplan.find(params[:mealplan_id])
                end

                if !@mealplan.groceries_list
                    @groceries_list = GroceriesList.create(mealplan_id: @meaplan.id)
                else
                    @groceries_list = @mealplan.groceries_list 
                end

                @groceries_list.generate
                render json: @groceries_list.ingredients.uniq
            end

        end
    end
end
