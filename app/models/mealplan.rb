class Mealplan < ApplicationRecord
    has_and_belongs_to_many :days
    accepts_nested_attributes_for :days
    belongs_to :user
end
