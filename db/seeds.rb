# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed users
USERS = [["user1","password1"],
         ["user2","password2"],
         ["user3","password3"]]

for x in USERS do
    User.create(username: x[0], password: x[1])
end

# Seed posts
POSTS = [["post 1",2,3,1],
         ["post 2",3,2,1],
         ["post 3",3,2,1],
         ["post 4",3,2,1],
         ["post 5",3,2,1],
         ["post 6",3,2,1],
         ["post 7",3,2,1],
         ["post 8",3,2,1],
         ["post 9",3,2,1],
         ["post 10",3,2,1],
         ["post 11",3,2,1],
]

for x in POSTS do
    Post.create(message: x[0], reshare: x[1], likes: x[2], user_id: x[3])
end

# Seed ingredients
INGREDIENTS =  [
    ["tomatoes"],
    ["dough"],
    ["salt"],
    ["pepper"],
    ["basil"],
    ["strawberries"],
    ["chicken"],
    ["salmon"],
    ["potatoes"],
    ["oats"],
    ["butter"],
    ["feta cheese"],
    ["mushrooms"],
    ["wine"],
    ["water"],
    ["brussel sprouts"],
    ["brocoli"],
    ["apples"],
    ["cookies"],
    ["flour"]
    ]
        
for ingredient in INGREDIENTS
    Ingredient.create(name: ingredient[0])
end

# Seed recipes
RECIPES = []
for recipe in (0..20)
    #Define number of ingredients
    ingredient_list =[]
    number_of_ingredients = rand(2..6)
    for ingredient in (0..number_of_ingredients)
        ingredient_list << Ingredient.find(rand(1..INGREDIENTS.length))
    end
    recipe_name = ingredient_list[0].name + " with " + ingredient_list[1].name
    recipe = Recipe.create(name: recipe_name, user_id: rand(1..3))
    for ingredient in (0..ingredient_list.length - 1)
        recipe.ingredients << ingredient_list[ingredient]
    end
    RECIPES << recipe
end

# Seed meal
MEALS = ["meal1",
         "meal2",
         "meal3",
         "meal4",
         "meal5",
         "meal6",
         "meal7",
         "meal8",
         "meal9",
         "meal10"]

for meal in MEALS
    meal = Meal.create(name: meal, user_id: rand(1..3))
    meal.recipes << Recipe.find(rand(1..20))
end

# Seed days
for day in (0..10)
    day = Day.create(date: Date.today+100, user_id: rand(1..3))
    number_of_meals_for_the_day = rand(0..5)
    for meal in (1..number_of_meals_for_the_day)
        day.meals << Meal.find(rand(1..10))
    end
end


# Seed Mealplans
MEALPLANS = ["mealplan1",
             "mealplan2",
             "mealplan3",
             "mealplan4",
             "mealplan5",
             "mealplan6",
             "mealplan7",
             "mealplan8",
             "mealplan9",
             "mealplan10"]

for x in MEALPLANS
    mealplan = Mealplan.create(name: x, user_id: rand(1..3))
    number_of_days_for_the_mealplans = rand(0..5)
    for day in (1..number_of_days_for_the_mealplans)
        mealplan.days << Day.find(rand(1..10))
    end
end