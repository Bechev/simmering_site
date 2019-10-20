module Api
    module V1
        class CommentsController < ApplicationController
            before_action :authenticate_api_v1_user!
            skip_before_action :authenticate_api_v1_user!, only: [:index]

            def index
                @post=Post.find(params[:post_id])
                @comments = @post.comments
                render json: @comments, status: 201
            end

            def create
                @post=Post.find(params[:post_id])
                @comment = Comment.new(comment_params)
                @user = User.find_by(email: request.headers["uid"])
                if @comment.save
                    @user.comments << @comment
                    render json: @comment, status: 201
                else
                    render json: {errors: @comment.errors.full_messages}, status: 422
                end
            end

            private
            def comment_params
                params.require(:comment).permit(:message, :post_id)
            end


        end
    end

end
