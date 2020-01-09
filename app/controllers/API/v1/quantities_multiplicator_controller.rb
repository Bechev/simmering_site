
module Api
    module V1
        class QuantitiesMultiplicatorController < ApplicationController
            def update
                @quantities_multiplicator = QuantitiesMultiplicator.find(params[:id])
                @quantities_multiplicator.multiplicator +=1
                @quantities_multiplicator.save
                render json: {quantities_multiplicator: @quantities_multiplicator, day: @quantities_multiplicator.meal.day}
            end
        end
    end
end
