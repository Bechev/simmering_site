class Recipe < ApplicationRecord
    has_and_belongs_to_many :meals
    has_and_belongs_to_many :ingredients
    has_and_belongs_to_many :categories
    
    accepts_nested_attributes_for :ingredients
    belongs_to :user

end
