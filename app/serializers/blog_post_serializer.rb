class BlogPostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :slug
  has_many :blog_comments
end
