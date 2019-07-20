class MealplanSerializer < ActiveModel::Serializer
    attributes :id, :name
    # has_and_belongs_to_many :days
    has_many :days

    # def days
    #     self.object.days.map do |day|{
    #         id: day.id, 
    #         date: day.date,
    #         # day.meals.map do |meal| {
    #         #     id: meal.id,
    #         #     name: meal.name,
    #         # }
    #         # end
    #     }
    #     end 
    # end

end
