require 'test_helper'

class IngredientTest < ActiveSupport::TestCase
  test "ingredients_count" do
    assert_equal 3, Ingredient.count
  end
end
