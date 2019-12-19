class RecipeSerializer < ActiveModel::Serializer
    attributes :id, :name,:calories, :total_recipe_time
    has_many :ingredients
end
