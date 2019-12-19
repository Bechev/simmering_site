# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed users
USERS = [["user1","password1", "user1@email.com", "uid-user1"],
         ["user2","password2", "user2@email.com", "uid-user2"],
         ["user3","password3", "user3@email.com", "uid-user3"]]

for x in USERS do
    User.create(username: x[0], password: x[1], email: x[2], uid: x[3])
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

COMMENTS = [["comment1",1],
            ["comment 2",1],
            ["comment 3",2],
            ["comment 4",3],
            ["comment 5",3],
            ["comment 6",5],
            ["comment 7",5],
            ["comment 8",5],
            ["comment 9",5],
            ["comment 10",6],
            ["comment 11",7],
            ["comment 12",8],
            ["comment 13",8],
            ["comment 14",10],
            ["comment 15",11],
            ["comment 16",11],
            ["comment 17",11]]

for x in COMMENTS do
    Comment.create(message: x[0], post_id: x[1])
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
for recipe in (0..25)
    #Define number of ingredients
    ingredient_list =[]
    number_of_ingredients = rand(2..6)
    for ingredient in (0..number_of_ingredients)
        ingredient_list << Ingredient.find(rand(1..INGREDIENTS.length))
    end
    recipe_name = ingredient_list[0].name + " with " + ingredient_list[1].name
    recipe_calories = rand(200..1000)
    recipe_total_recipe_time = rand (5..120)
    recipe = Recipe.create(name: recipe_name, calories: recipe_calories, total_recipe_time: recipe_total_recipe_time, user_id: rand(1..3))
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

ord = 20
for meal in MEALS
    meal = Meal.create(name: meal, order: ord, user_id: rand(1..3))
    num_recipes_per_meal = rand(1..3)
    for recipe in (1..num_recipes_per_meal)
        meal.order = ord
        meal.recipes << Recipe.find(rand(1..20))
    end
    ord = ord - 1
end

# Seed days
for n in (0..10)
    day = Day.create(date: Date.today+100+n, user_id: rand(1..3))
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