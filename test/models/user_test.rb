require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "posts belongs to a user" do
    assert_equal 2, users(:user1).posts.count
  end
end
