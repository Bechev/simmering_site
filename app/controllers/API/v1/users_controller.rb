module Api
    module V1
        class UsersController < ApplicationController
            before_action :authenticate_api_v1_user!
            
            def ingredients
                @user = User.find(params[:id])
                render json: @user.ingredients
            end
        
        end
    end
end

