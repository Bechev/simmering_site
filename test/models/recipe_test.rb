require 'test_helper'

class RecipeTest < ActiveSupport::TestCase
  test "recipes have ingredients" do
    assert_equal 2, recipes(:egg_bacon).ingredients.length
    assert_equal 1, recipes(:fried_apple).ingredients.length
  end
end
