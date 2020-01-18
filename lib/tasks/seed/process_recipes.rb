require 'pry'

path= '/mnt/c/Users/bertr/Dev/Projects/simmering_site/lib/tasks/seed/recipes.csv'


File.readlines(path).each do |line|
    rowArray = line.split(";")
    
    
    recipe_name = rowArray[2]
    recipe_prep_time = rowArray[3]
    recipe_cook_time = rowArray[4]
    recipe_total_time = rowArray[5]
    recipe_process = rowArray[6]
    recipe_process["['"] = ""
    recipe_process["']"] = ""
    recipe_process.gsub("', '", "\n")
    recipe_calories = rowArray[8]
    @recipe = Recipe.create(name: recipe_name, 
                            instructions: recipe_process, 
                            preparation_time: recipe_prep_time, 
                            cooking_time: recipe_cook_time, 
                            total_recipe_time: recipe_total_time, 
                            calories: recipe_calories)

    
    recipe_ingredients = rowArray[7]
    recipe_ingredients["['"] = ""
    recipe_ingredients["']"] = ""
    recipe_ingredients = recipe_ingredients.split("', ")
    recipe_ingredients.each do |ingredient|
        ingredient_data_array = ingredient.split(" ")
        if ingredient_data_array.length === 2
            @ingredient = Ingredient.create(
                name: ingredient_data_array[ingredient_data_array.length -1], calories: 0)
            )
            measure = ingredient_data_array[0].to_f
            if measure === 0.0
                measure = ingredient_data_array[0].to_frac
            end
            @quantity = Quantity.create(measure: measure ,unit: "")
        elsif ingredient_data_array.length === 3
                @ingredient = Ingredient.create(
                    name:ingredient_data_array[ingredient_data_array.length -1], calories: 0)
                )
                measure = ingredient_data_array[0].to_f
                if measure === 0.0
                    measure = ingredient_data_array[0].to_frac
                end
                @quantity = Quantity.create(measure: measure, unit: ingredient_data_array[1])
        elsif ingredient_data_array.length === 4
                @ingredient = Ingredient.create(
                    name: [ingredient_data_array[ingredient_data_array.length -1], ingredient_data_array[ingredient_data_array.length -2]].join(" "), 
                    calories: 0)
                )
                measure = ingredient_data_array[0].to_f
                if measure === 0.0
                    measure = ingredient_data_array[0].to_frac
                end
                @quantity = Quantity.create(measure: measure, unit: ingredient_data_array[1])
        elsif ingredient_data_array.length === 5
                measure1 = ingredient_data_array[0].to_f
                if measure1 === 0.0
                    measure1 = ingredient_data_array[0].to_frac
                end
                if ingredient_data_array[1].to_f > 0.0
                    measure2 = ingredient_data_array[1].to_f
                    if measure2 === 0.0
                        measure2 = ingredient_data_array[1].to_frac
                    end
                    measure = measure1 + measure2
                    unit = ingredient_data_array[2]
                    ingredient_name = [ingredient_data_array[ingredient_data_array.length -1], ingredient_data_array[ingredient_data_array.length - 2]].join(" ")
                else
                    measure = measure1
                    unit = ingredient_data_array[1]
                    ingredient_name = [ingredient_data_array[ingredient_data_array.length -1], ingredient_data_array[ingredient_data_array.length - 2],ingredient_data_array[ingredient_data_array.length -3]].join(" ")
                end
                @ingredient = Ingredient.create(
                    name: ingredient_name, calories: 0)
                )
                @quantity = Quantity.create(measure: measure , unit:unit)
        else
            @ingredient.create(name: ["to be checked", ingredient_data_array].join(','))
        end
    end

    def to_frac
        numerator, denominator = split('/').map(&:to_f)
        denominator ||= 1
        numerator/denominator
      end
    end
    
    # if rowArray.length === 15
    #     puts rowArray[1]
        
        
        
        
    #     @recipe = Recipe.create(name: recipe_name, instructions: recipe_process, preparation_time: recipe_prep_time, cooking_time: recipe_cook_time, total_recipe_time: recipe_total_time, calories: recipe_calories)
    #     recipe_ingredients.each do |ingredient|
    #         ingr = ingredient.split(' ')
            
    #         # binding.pry
    #         if ingr.length === 4
    #             @ingredient= Ingredient.create(name: [ingr[2], ingr[3]].join(" "), calories: 0)
    #             quantity_measure = ingr[0]
    #             quantity_unit = ingr[1]
    #             @quantity = Quantity.create(measure: quantity_measure, unit: quantity_unit, recipe_id: @recipe.id, ingredient_id: @ingredient.id)
    #             @recipe.ingredients << @ingredient
    #         elsif ingr.length === 3
    #             @ingredient= Ingredient.create(name: ingr[2], calories: 0)
    #             quantity_measure = ingr[0]
    #             quantity_unit = ingr[1]
    #             @quantity = Quantity.create(measure: quantity_measure, unit: quantity_unit, recipe_id: @recipe.id, ingredient_id: @ingredient.id)
    #             @recipe.ingredients << @ingredient 
    #         elsif ingr.length === 2
    #             @ingredient= Ingredient.create(name: ingr[1], calories: 0)
    #             quantity_measure = ingr[0]
    #             quantity_unit = ""
    #             @quantity = Quantity.create(measure: quantity_measure, unit: quantity_unit, recipe_id: @recipe.id, ingredient_id: @ingredient.id)
    #             @recipe.ingredients << @ingredient 
    #         else 
    #             @ingredient= Ingredient.create(name: "tobeconfirmed", calories: 0)
    #             quantity_measure = ingr[0]
    #             quantity_unit = ingr[1]
    #             @quantity = Quantity.create(measure: quantity_measure, unit: quantity_unit, recipe_id: @recipe.id, ingredient_id: @ingredient.id)
    #             @recipe.ingredients << @ingredient
    #         end
    #     end
    #     @recipe.save
    #     # print(recipe_process)
    # end
end