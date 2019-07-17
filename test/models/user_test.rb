require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "a user has_many posts" do
    assert_equal 2, users(:user1).posts.count
  end

  test "a user has_many mealplans" do
    assert_equal 2, users(:user1).mealplans.count
  end

  test "a user has_many meals" do
    assert_equal 3, users(:user1).meals.count
  end

  test "a user has_many recipes" do
    assert_equal 2, users(:user1).recipes.count
  end
end
