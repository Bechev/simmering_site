class Day < ApplicationRecord
    has_and_belongs_to_many :mealplans
    has_and_belongs_to_many :meals
    belongs_to :user
end
