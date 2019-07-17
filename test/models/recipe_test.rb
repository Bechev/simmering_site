require 'test_helper'

class RecipeTest < ActiveSupport::TestCase
  test "recipes have ingredients" do
    assert_equal 2, recipes(:egg_bacon).ingredients.length
    assert_equal 1, recipes(:fried_apple).ingredients.length
  end

  test "recipes belongs_to user" do
    assert_equal users(:user1).id, recipes(:egg_bacon).user_id
  end
end
