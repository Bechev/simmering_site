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
    recipe_cooking_time = rand (5..120)
    recipe_preparation_time = rand (5..120)
    recipe_total_recipe_time = recipe_cooking_time + recipe_preparation_time
    recipe_instructions = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel. Nisl tincidunt eget nullam non nisi est sit amet. Molestie nunc non blandit massa enim nec dui nunc. Lobortis feugiat vivamus at augue eget. Sed viverra tellus in hac habitasse platea dictumst. Purus viverra accumsan in nisl nisi. Iaculis at erat pellentesque adipiscing commodo. Laoreet id donec ultrices tincidunt arcu non sodales. Amet tellus cras adipiscing enim eu turpis egestas. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Lorem donec massa sapien faucibus et molestie ac feugiat. Massa id neque aliquam vestibulum morbi blandit. Risus commodo viverra maecenas accumsan lacus. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Arcu vitae elementum curabitur vitae. Euismod lacinia at quis risus sed vulputate odio. Eu turpis egestas pretium aenean pharetra. Sapien faucibus et molestie ac feugiat sed lectus vestibulum.

        Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. In massa tempor nec feugiat. Risus quis varius quam quisque. Orci eu lobortis elementum nibh tellus molestie nunc non. Aliquet porttitor lacus luctus accumsan. In massa tempor nec feugiat. Erat velit scelerisque in dictum non consectetur a. Semper feugiat nibh sed pulvinar. Vitae auctor eu augue ut lectus arcu bibendum at. Sollicitudin nibh sit amet commodo nulla. Mattis vulputate enim nulla aliquet porttitor. Pulvinar pellentesque habitant morbi tristique senectus. Nulla aliquet enim tortor at auctor urna nunc id. Ac tortor vitae purus faucibus ornare. Platea dictumst quisque sagittis purus sit. Nunc sed augue lacus viverra vitae congue eu. Mattis aliquam faucibus purus in massa tempor. Rhoncus est pellentesque elit ullamcorper.
        
        Tincidunt ornare massa eget egestas purus viverra accumsan. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Accumsan in nisl nisi scelerisque eu ultrices vitae. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Et magnis dis parturient montes nascetur ridiculus. Ipsum a arcu cursus vitae congue mauris rhoncus. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Et malesuada fames ac turpis egestas integer eget aliquet. Rhoncus aenean vel elit scelerisque mauris. Sed odio morbi quis commodo odio aenean sed adipiscing diam.
        
        Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Interdum velit laoreet id donec ultrices tincidunt arcu non. Tincidunt nunc pulvinar sapien et ligula. Amet volutpat consequat mauris nunc congue nisi. Viverra aliquet eget sit amet tellus cras. Tellus mauris a diam maecenas sed enim ut sem viverra. Tellus orci ac auctor augue mauris augue. Ac tortor dignissim convallis aenean. Ac felis donec et odio pellentesque diam volutpat commodo. Ut diam quam nulla porttitor massa id. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Tempus imperdiet nulla malesuada pellentesque. Gravida dictum fusce ut placerat. Senectus et netus et malesuada fames ac turpis. Arcu non odio euismod lacinia at. Leo a diam sollicitudin tempor id.

        Accumsan sit amet nulla facilisi morbi tempus. Est lorem ipsum dolor sit amet. Ac auctor augue mauris augue neque. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Et netus et malesuada fames ac turpis egestas. Sit amet justo donec enim diam vulputate ut pharetra sit. Penatibus et magnis dis parturient. Urna et pharetra pharetra massa massa ultricies. Porttitor eget dolor morbi non arcu risus quis. Iaculis urna id volutpat lacus laoreet non curabitur gravida. A diam sollicitudin tempor id. Ornare lectus sit amet est placerat in egestas. Sed nisi lacus sed viverra tellus in hac. At elementum eu facilisis sed. Etiam dignissim diam quis enim. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Sapien faucibus et molestie ac feugiat. Tortor id aliquet lectus proin nibh nisl condimentum id. Feugiat scelerisque varius morbi enim nunc faucibus."
    recipe = Recipe.create(name: recipe_name, instructions: recipe_instructions, calories: recipe_calories,cooking_time: recipe_cooking_time, preparation_time: recipe_preparation_time, total_recipe_time: recipe_total_recipe_time, user_id: rand(1..3))
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
         "meal10",
         "meal11",
         "meal12",
         "meal13",
         "meal14",
         "meal15",
         "meal16",
         "meal17",
         "meal18",
         "meal19",
         "meal20"]

ord = 20
for meal in MEALS
    meal = Meal.create(name: meal, order: ord, user_id: rand(1..3))
    num_recipes_per_meal = rand(5..8)
    for recipe in (1..num_recipes_per_meal)
        meal.order = ord
        meal.recipes << Recipe.find(rand(1..20))
    end
    ord = ord - 1
end

# Seed days
for n in (0..9)
    date = Date.today.to_time(:utc) + ((n+1)*100)*60*60*2
    day = Day.create(date: date, user_id: rand(1..3))
end

Day.all.each_with_index do |day, index|
    meal1 = Meal.find_by(name: MEALS[index*2])
    meal2 = Meal.find_by(name: MEALS[index*2 + 1])
    day.meals << meal1
    day.meals << meal2

    # day.meals << Meal.find_by(name: MEALS[index*2 + 1])
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
    user= User.find(rand(1..3))
    mealplan = Mealplan.create(name: x, user_id: user.id)
    mealplan.days << user.days
    # number_of_days_for_the_mealplans = rand(2..7)
    # for day in Day.all
    #     if day.user === mealplan.user
    #         mealplan.days << Day.find(rand(1..10))
    #     end
    # end
end

CATEGORIES = [ "Category 1",
               "Category 2",
               "Category 3",
               "Category 4",
               "Category 5",
               "Category 6",
               "Category 7",
               "Category 8",
               "Category 9",
               "Category 10"]

num_of_recipes = Recipe.all.length
for category in CATEGORIES
    c = Category.create(name: category)
    num_of_recipes_per_cat = rand(2..5)
    for x in (1..num_of_recipes_per_cat)
        recipe =  Recipe.find(rand(1..num_of_recipes))
        c.recipes << recipe
    end
end

num_of_cat = Category.all.length
for x in (1..num_of_recipes)
    r = Recipe.find(x)
    category = Category.find(rand(1..num_of_cat))
    r.categories << category
end