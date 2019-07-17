class User < ApplicationRecord
    has_many :posts
    has_many :mealplans
    has_many :days
    has_many :meals
    has_many :recipes
    has_secure_password
end
