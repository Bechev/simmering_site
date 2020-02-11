class BlogPost < ApplicationRecord
    after_initialize :create_slug
    has_many :blog_comments

    def create_slug
        slug = title.split(" " ).join("-")
        self.slug = slug
    end 

end
