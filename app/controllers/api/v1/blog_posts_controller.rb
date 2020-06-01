module Api
    module V1
        class BlogPostsController < ApplicationController
            def index
                @posts = BlogPost.all.last(10)
                render json: @posts
            end
            
            def show
                @post = BlogPost.find_by(slug: params[:slug])
                render json: @post
            end

            # def edit
            #     @post = BlogPost.find_by(slug: params[:slug])
            #     # Do stuff
            #     @post.create_slug
            #     @post.save
            # end
        end
    end
end

