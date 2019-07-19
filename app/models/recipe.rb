class Recipe < ApplicationRecord
    has_and_belongs_to_many :meals
    has_and_belongs_to_many :ingredients
    accepts_nested_attributes_for :ingredients
    belongs_to :user
end
