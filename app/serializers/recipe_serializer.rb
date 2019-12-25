class RecipeSerializer < ActiveModel::Serializer
    attributes :id, :name,:instructions, :calories, :cooking_time, :preparation_time ,:total_recipe_time
    has_many :ingredients
end
