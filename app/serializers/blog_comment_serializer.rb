class BlogCommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :blog_post_id
end
