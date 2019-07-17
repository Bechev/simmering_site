module Api
    module V1
        class PostsController < ApplicationController

            def index
                if params[:user_id] 
                    user = User.find(params[:user_id])
                    @posts = user.posts.last(10).reverse
                else
                    @posts = Post.all.last(10).reverse
                end
                render json: @posts
            end
            


        end
    end

end
