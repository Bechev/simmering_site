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
            
            def like_post
                @post = Post.find(params[:id])
                if @post
                    @post.likes += 1
                    # debugger
                    @post.save
                    render json: @post, status: 201
                else
                    render json: {errors: @post.errors.full_messages}, status: 422
                end
            end


        end
    end

end
