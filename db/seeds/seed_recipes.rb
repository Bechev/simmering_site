require 'pry'

path_recipes = '/mnt/c/Users/bertr/Dev/Projects/simmering_site/db/seeds/recipes_seed.csv'

puts 'seeding recipes'

File.readlines(path_recipes).each do |line|
    # binding.pry
    rowArray = line.delete('\"').strip.split("@@")
    recipe_name = rowArray[1]
    # recipe_prep_time = rowArray[2]
    # recipe_cook_time = rowArray[3]
    # recipe_total_time = rowArray[4]
    # recipe_calories = rowArray[7]
    recipe_prep_time = 0
    recipe_cook_time = 0
    recipe_total_time = 0
    recipe_calories = 0
    default_servings = rowArray[5]
    recipe_process = rowArray[6].delete("['").delete("']")
    # binding.pry
    # recipe_categories = rowArray[7].split(";")
    @recipe = Recipe.create(name: recipe_name,
                            instructions: recipe_process, 
                            preparation_time: recipe_prep_time, 
                            cooking_time: recipe_cook_time, 
                            total_recipe_time: recipe_total_time, 
                            calories: recipe_calories)
                            # binding.pry
    # recipe_categories.each do |category|
    #     @category = Category.find_or_create_by(name: category)
    #     @category.recipes << @recipe
    #     @recipe.categories << @category
    #     @category.save
    # end
                            
    # @recipe.save

    
end