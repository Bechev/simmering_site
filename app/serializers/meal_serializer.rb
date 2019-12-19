class MealSerializer < ActiveModel::Serializer
    attributes :id, :name, :order
    has_many :recipes
    # has_many :days
end
