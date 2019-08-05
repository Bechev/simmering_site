# frozen_string_literal: true
 
class User < ActiveRecord::Base 
extend Devise::Models
    has_many :posts
    has_many :comments
    has_many :mealplans
    has_many :days
    has_many :meals
    has_many :recipes
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
    devise :database_authenticatable, :registerable,
            :recoverable, :rememberable, :trackable, :validatable
    include DeviseTokenAuth::Concerns::User

  
end
