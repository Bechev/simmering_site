module Api
    module V1
        class PostsController < ApplicationController
            before_action :authenticate_user!
            skip_before_action :authenticate_user!, only: [:index]

            def index
                if params[:user_id] 
                    user = User.find(params[:user_id])
                    @posts = user.posts.last(10).reverse
                else
                    @posts = Post.all.last(10).reverse
                end
                render json: @posts
            end

            def create
                @post = Post.new(message: params[:post_message], likes: 0, reshare: 0)
                if @post.save
                    render json: @post, status: 201
                else
                    render json: {errors: @post.errors.full_messages}, status: 422
                end
            end

            def update 
                @post = Post.find(params[:id])
                @post.update_attributes(post_params)
                if @post.save
                    render json: @post, status: 201
                else
                    render json: {errors: @post.errors.full_messages}, status: 422
                end
            end


            private
            def post_params
                params.require(:post).permit(:message, :likes, :reshare)
            end


        end
    end

end
