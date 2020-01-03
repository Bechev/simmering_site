# frozen_string_literal: true
 
class User < ActiveRecord::Base 
extend Devise::Models
    after_save :create_user_mealplan
    has_many :posts
    has_many :comments
    has_many :mealplans
    has_many :days
    has_many :meals
    has_many :recipes
    has_and_belongs_to_many :ingredients
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
    devise :database_authenticatable, :registerable,
            :recoverable, :rememberable, :trackable, :validatable
    
    include DeviseTokenAuth::Concerns::User

    def create_user_mealplan
        if self.mealplans.length === 0
            puts '//////////////////////////////////////////////'
            Mealplan.create(name: "My first mealplan", description:"This is my first mealplan", user_id: self.id)
        end
    end

  
end
