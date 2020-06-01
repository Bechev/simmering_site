
module Api
    module V1
        class BlogCommentsController < ApplicationController
            before_action :authenticate_api_v1_user!
            def create
                # debugger
                @post_comment = BlogComment.create(content: params[:content], user_id: params[:user_id], blog_post_id: params[:post_id])
                render json: @post_comment
            end

        end
    end
end