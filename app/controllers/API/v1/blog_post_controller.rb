module Api
    module V1
        class BlogPostController < ApplicationController
            def show
                @post = BlogPost.find_by(slug: params[:slug])
                render json: @blog
            end

            def edit
                @post = BlogPost.find_by(slug: params[:slug])
                # Do stuff
                @post.create_slug
                @post.save
            end
        end
    end
end

