require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "a user has_many posts" do
    assert_equal 2, users(:user1).posts.count
  end
end
