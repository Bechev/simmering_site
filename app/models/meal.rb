class Meal < ApplicationRecord
    has_and_belongs_to_many :days
    has_and_belongs_to_many :recipes
    accepts_nested_attributes_for :recipes
    belongs_to :user
end
