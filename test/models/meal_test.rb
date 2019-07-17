require 'test_helper'

class MealTest < ActiveSupport::TestCase
  test "meals belongs_to user" do
    assert_equal users(:user1).id, meals(:breakfast).user_id
  end
end
