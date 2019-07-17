module Api
    module V1
        class PostsController < ApplicationController

            def index
                @posts = Post.all.last(10).reverse
                render json: @posts
            end

        end
    end

end
