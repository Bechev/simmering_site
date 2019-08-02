module Api
    module V1
        class CommentsController < ApplicationController

            def index
                @post=Post.find(params[:post_id])
                @comments = @post.comments
                render json: @comments, status: 201

            end


            private
            def post_params
                params.require(:comment).permit(:message, :likes, :reshare)
            end


        end
    end

end
