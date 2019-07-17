require 'test_helper'

class MealplanTest < ActiveSupport::TestCase
  test "mealplans belongs_to user" do
    assert_equal users(:user1).id, mealplans(:diet).user_id
  end
end
