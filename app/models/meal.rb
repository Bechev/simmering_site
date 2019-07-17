class Meal < ApplicationRecord
    has_and_belongs_to_many :days
    has_and_belongs_to_many :recipes
    belongs_to :user
end
