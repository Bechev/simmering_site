class DaySerializer < ActiveModel::Serializer
    attributes :id, :date
#   belongs_to :mealplan
    has_many :meals
    # has_many :mealplans
end
