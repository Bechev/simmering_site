module Api
    module V1
        class CategoriesController < ApplicationController
            def index
                @categories = Category.all
                # @mealplans = user.mealplans.last(10).reverse
                render json: @categories
            end
        end
    end
end

