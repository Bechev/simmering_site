    
require 'test_helper'

class PostTest < ActiveSupport::TestCase
  test "posts belongs to a user" do
    assert_equal users(:user1).id, Post.all.first.user_id
  end
end