module API
    module V1
        class DaysController < ApplicationController
            
            def index
                if params[:user_id] 
                    user = User.find(params[:user_id])
                    @days = user.days.last(10).reverse
                else
                    @days = Day.all.last(10).reverse
                end
                render json: @days
            end
        
        end
    end
end

