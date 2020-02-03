

path_recipes_ingredients = '/mnt/c/Users/bertr/Dev/Projects/simmering_site/db/seeds/recipes_ingredients_seed.csv'
puts 'seeding recipe ingredients'
File.readlines(path_recipes_ingredients).each do |line|
    rowArray = line.delete('\"').strip.split(",,")
    recipe_id = rowArray[0].to_i
    
    if recipe_id === 0 
        recipe_id = rowArray[0][1..-1].to_i
    end
    # binding.pry
    ingredient_name = rowArray[1]
    quantity_measure = rowArray[2].to_f
    quantity_unit = rowArray[3]
    # binding.pry
    recipe = Recipe.find(recipe_id)
    @ingredient = Ingredient.find_or_create_by(name: ingredient_name)
    @quantity = Quantity.create(measure: quantity_measure, unit: quantity_unit, recipe_id: recipe.id, ingredient_id: @ingredient.id)
    recipe.ingredients << @ingredient
    recipe.save
end