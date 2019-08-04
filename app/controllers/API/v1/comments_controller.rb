module Api
    module V1
        class CommentsController < ApplicationController

            def index
                @post=Post.find(params[:post_id])
                @comments = @post.comments
                render json: @comments, status: 201
            end

            def create
                @post=Post.find(params[:post_id])
                @comment = Comment.create(comment_params)
                render json: @comment, status: 201
            end


            private
            def comment_params
                params.require(:comment).permit(:message, :post_id)
            end


        end
    end

end
