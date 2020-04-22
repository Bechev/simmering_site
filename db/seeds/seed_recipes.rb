require 'pry'

path_recipes = File.join(File.dirname(__FILE__),'/recipes_seed.csv')

puts 'seeding recipes'

# File.readlines(path_recipes).each do |line|
#     sleep(0.05)
#     rowArray = line.delete('\"').strip.split("","")
#     recipe_name = rowArray[1]
#     # recipe_prep_time = rowArray[2]
#     # recipe_cook_time = rowArray[3]
#     # recipe_total_time = rowArray[4]
#     # recipe_calories = rowArray[7]
#     recipe_prep_time = rowArray[2]
#     recipe_cook_time = rowArray[3]
#     recipe_total_time = rowArray[4]
#     recipe_default_servings = rowArray[5]
#     recipe_process = rowArray[6]
#     recipe_calories = rowArray[7]

#     # binding.pry
#     # recipe_categories = rowArray[7].split(";")
#     @recipe = Recipe.create(name: recipe_name,
#     instructions: recipe_process, 
#     preparation_time: recipe_prep_time, 
#     cooking_time: recipe_cook_time, 
#     total_recipe_time: recipe_total_time, 
#     calories: recipe_calories,
#     default_servings: recipe_default_servings)
#     # binding.pry
#     # binding.pry
#     # recipe_categories.each do |category|
#     #     @category = Category.find_or_create_by(name: category)
#     #     @category.recipes << @recipe
#     #     @recipe.categories << @category
#     #     @category.save
#     # end
                            
#     # @recipe.save

    
# end

File.readlines(path_recipes).each do |line|
    sleep(0.05)
    rowArray = line.delete('\"').strip.split("@@")
    recipe_name = rowArray[1]
    # recipe_prep_time = rowArray[2]
    # recipe_cook_time = rowArray[3]
    # recipe_total_time = rowArray[4]
    # recipe_calories = rowArray[7]
    recipe_prep_time = rowArray[2]
    recipe_cook_time = rowArray[3]
    recipe_total_time = rowArray[4]
    recipe_default_servings = rowArray[5]
    recipe_process = rowArray[6]
    recipe_calories = rowArray[7]

    # binding.pry
    # recipe_categories = rowArray[7].split(";")
    @recipe = Recipe.create(name: recipe_name,
    instructions: recipe_process, 
    preparation_time: recipe_prep_time, 
    cooking_time: recipe_cook_time, 
    total_recipe_time: recipe_total_time, 
    calories: recipe_calories,
    default_servings: recipe_default_servings)
    # binding.pry
    # binding.pry
    # recipe_categories.each do |category|
    #     @category = Category.find_or_create_by(name: category)
    #     @category.recipes << @recipe
    #     @recipe.categories << @category
    #     @category.save
    # end
                            
    # @recipe.save

    
end