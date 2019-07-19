class DaySerializer < ActiveModel::Serializer
    attributes :id, :date
#   belongs_to :mealplan
    has_and_belongs_to_many :meals
end
