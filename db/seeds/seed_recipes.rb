require 'pry'

path_recipes = File.join(File.dirname(__FILE__),'/recipes_seed.csv')

RECIPES = [
    [1,"Mock Champagne",900,1455,2355,40,"To make Ice ring: Fill a ring-shaped cake pan to 1/2 with ginger ale. Freeze until partially frozen. At this stage you can place edible flowers or pieces of fruit around the ring. Fill pan with ginger ale and freeze until solid. Place in punch bowl just before serving.' 'In a large punch bowl combine 1 bottle ginger ale pineapple juice and white grape juice.",83],
    [2,"Perfect Potato Salad",900,40,940,12,"Place whole potatoes in a pot with 1/4 cup kosher salt. Cover with cold water. Bring to a boil over high heat. Reduce heat to medium-low. Simmer until tender about 40 minutes (depending on size). Transfer cooked potatoes to a plate. Allow them to cool to room temperature.' 'When potatoes are completely cooled peel off the skin. Cut into larger than bite-size pieces as the pieces will break down slightly when you toss with the dressing. Transfer potato pieces to a mixing bowl. Add celery onions parsley chopped hard-boiled eggs. Combine ingredients breaking up larger pieces of potato.' 'Place mayonnaise in mixing bowl. Add cider vinegar mustard salt black pepper and cayenne pepper. Whisk until well combined.' 'Pour mayonnaise mixture onto potatoes; stir until well combined. Cover and refrigerate until completely chilled 2 to 3 hours. Taste for seasonings and texture. Salad may need a bit more salt and another spoonful of mayonnaise.",279],
    [3,"Sweet Vidalia Onion Relish",720,10,730,200,"Roast red green and yellow bell peppers over an open flame or in broiler turning frequently until skins are charred and blistered. Place in a bowl and cover with plastic; let sit 5 to 10 minutes. Remove skins. Cut peppers in half lengthwise. Remove seeds and stem and chop into small pieces. Set aside.' 'Place grated onions in a colander to drain liquid. Place them in a large bowl and sprinkle with 1/4 cup kosher salt. Mix by hand. Mix in cabbage and 3 tablespoons salt by hand. Let sit 1 hour.' 'Place onions and cabbage into colander and squeeze out as much liquid as possible. Place in cheese cloth or towel and squeeze out additional water.' 'Place cabbage and onions into a large pot over medium-high heat. Add roasted bell peppers. Stir in sugar apple cider vinegar turmeric mustard seed and celery seed. Bring to a low boil stirring constantly to prevent onions from sticking to the bottom. Reduce heat to medium and simmer for 45 minutes stirring often.' 'To prepare jars you first need to wash jars then place them into the canning pot with rack and boil them in water to sterilize them. Fill a small pot half way with water and bring to simmer; place the lids into water. Taking one jar out of the water at a time put on canning funnel and fill with hot relish about 1/2 inch from the top. Then take a kitchen knife a stick down to the bottom of jar and work the knife around to remove all air bubbles. Wipe off top of jar very well and clean then place a hot lid on jar the screw ring on top. Repeat until all relish is gone. Jars and relish must stay hot throughout this canning process.' 'Place in a bath of simmering water covering the jars by one inch. Process for 10 minutes or according to your local extension's guidelines. When jars start to seal and vacuum the lids will make a pop sound and your canning was a success. Once jars have been opened store in the refrigerator and use within two weeks.']",56],
    [4,"Grandma's Peach French Toast",540,0,540,8,"In a saucepan stir together the brown sugar butter and water. Bring to a boil then reduce heat to low and simmer for 10 minutes stirring frequently.' 'Pour the brown sugar mixture into a 9x13 inch baking dish and tilt the dish to cover the entire bottom. Place peaches in a layer over the sugar coating then top with slices of French bread. In a medium bowl whisk together the eggs and vanilla. Slowly pour over the bread slices to coat evenly. Sprinkle cinnamon over the top. Cover and refrigerate for 8 hours or overnight.' 'Remove the dish from the refrigerator about 30 minutes before baking to come to room temperature. Preheat the oven to 350 degrees F (175 degrees C).' 'Bake for 25 to 30 minutes in the preheated oven or until the bread is golden brown. Spoon out portions to serve.",362],
    [5,"Black Bean Soup with Rice and Sherry",480,0,480,6,"Place beans in a large bowl and cover with several inches of water. Let soak 8 hours or overnight.' 'Drain and rinse beans and place in a large pot over medium heat with beef broth chicken broth ham hock onion carrot parsley garlic and thyme. Bring to a boil then reduce heat cover and simmer 6 to 8 hours.' 'Strain soup into a large saucepan reserving bean mixture. Remove ham hock and discard. Puree bean mixture in a blender or food processor until smooth. Stir into reserved broth. Cook over low heat 2 hours. Season with salt and pepper.' 'In the last 20 minutes of cooking bring 2 1/2 cups of water to a boil in a medium saucepan. Stir in rice. Reduce heat cover and cook 20 minutes.' 'Ladle soup into six bowls. Top with cooked rice a spoonful of sherry and a sprinkling of red onion.",436],
    [6,"Spicy Peach Chutney",480,0,480,96,"In a large heavy pot stir together the peaches raisins garlic onion preserved ginger chili powder mustard seed curry powder brown sugar and cider vinegar. Wrap the pickling spice in a cheesecloth bag and place in the pot.' 'Bring to a boil and cook over medium heat uncovered until the mixture reaches your desired consistency. It will take about 1 1/2 hours to get a good thick sauce. Stir frequently to prevent scorching on the bottom.' 'Remove the spice bag and ladle into hot sterilized jars. Wipe the rims with a clean moist cloth. Seal with lids and rings and process in a barely simmering water bath for 10 minutes or the time recommended by your local extension for your area. The water should cover the jars completely.",51],
    [7,"Sago Plum Pudding I",315,240,555,8,"In a small bowl combine sago and milk; cover and refrigerate 8 hours or overnight.' 'Grease a 6 cup pudding basin.' 'In a large bowl stir together sago mixture and baking soda until soda is dissolved. Stir in brown sugar bread crumbs raisins currants dates eggs and butter until well combined. Spoon into prepared basin. Place a piece of waxed or parchment paper over the top of the basin and secure the lid.' 'Place the basin on a trivet or dish in a large pot and fill the pot with boiling water to come halfway up the sides of the basin. Bring the water to a boil again then reduce the heat cover and simmer 3 1/2 to 4 hours topping off water as necessary until pudding is firm.",290],
    [8,"Make-Ahead Turkey Gravy with Porcini Mushrooms and Marsala Wine",300,0,300,16,"Heat vegetable oil in a large stockpot over medium-high heat. Brown turkey necks in hot oil about 6 minutes per side. Add the onion celery and carrots; cook until the vegetables begin to soften and brown 5 to 10 minutes. Pour in the Marsala wine and scrape and dissolve any browned meat and vegetable bits off the bottom of the pan. Raise heat to high; cook until liquid is reduced by half.' 'Stir in 2 quarts of cold water bay leaf garlic cloves and 1/4 ounce dried porcini mushrooms. Bring to a simmer and turn heat to low. As stock simmers skim and discard any foam that comes to the top. Cover partially and simmer on very low heat for 4-5 hours. Strain out solids and set broth aside to cool.' 'In a bowl cover 1/4 ounce dried porcini with 1 cup hot water; allow to rehydrate for 10 minutes. Remove mushrooms from water and chop fine. Heat 1/4 cup butter in a large saucepan over medium heat and brown mushrooms about 10 minutes. Stir flour into mushrooms and butter and cook over medium heat stirring constantly for 3 minutes. Whisk in broth about 1/2 cup at a time and raise heat to medium high; bring gravy to a boil.' 'Reduce heat to a simmer and cook gravy until reduced and thickened about 30 minutes. Stir often. Just before serving stir in cream and season with salt and black pepper.",140],
    [9,"Garlic Lemon Black-Eyed Pea Salad",250,0,250,10,"Pat black-eyed peas with a paper towel to remove excess water.' 'Mix peas onion peppers and garlic in a bowl with salt marjoram dried parsley black pepper and cayenne pepper. Pour in enough olive oil and lemon juice to reach below the top layer of black-eyed peas. Adjust seasonings to taste. Cover and refrigerate 8 hours to overnight.' 'Squeeze lemon juice over the top of the salad just before serving and garnish with fresh parsley.",237],
    [10,"Marinated Pork Roast with Currant Sauce",240,0,240,6,"Place roast in re-sealable plastic bag. In a medium mixing bowl combine 1/2 cup soy sauce 1/2 cup sherry garlic mustard ginger and thyme. Pour marinade in bag and seal. Place the bag in a large bowl and refrigerate for at least 3 hours.' 'Preheat oven to 325 degrees F (165 degrees C).' 'Place roast in a medium roasting pan. Roast the pork with marinade uncovered at in preheated oven for 2 1/2 to 3 hours or until internal temperature reaches 170 degrees F on a meat thermometer . Baste hourly during cooking. Serve with currant sauce.' 'To make currant sauce: In a small saucepan over medium-low heat slowly melt the currant jelly. Stir in the 2 tablespoons sherry and 1 tablespoon soy sauce.",669],
    [11,"Pickled Squash",240,0,240,4,"In a large non-aluminum pot combine the squash bell pepper and onions. Cover with salt and let stand for 2 hours to release the liquids. Stir occasionally.' 'Just before the 2 hours are up combine the sugar vinegar mustard seed turmeric and celery seed in a saucepan. Bring to a boil. Drain the salty liquid from the vegetables. Pour the spice brine over the vegetables and let stand for 2 more hours.' 'Bring to a boil once again and simmer for about 5 minutes. Ladle into 1 pint sterile jars filling with the liquid to within 1/4 inch of the top. Wipe rims with a clean towel and run a thin spatula around the inside of the jar to remove air bubbles. Seal with lids and rings. Process for 10 minutes in a simmering water bath to seal completely.",524],
    [12,"Vanilla Cherry Ice Cream",195,0,195,8,"['Combine the cream milk and sugar in a bowl. Stir until the sugar is completely dissolved. Stir in the vanilla and almond extract. Add the cherries. Pour the mixture into an ice cream maker and churn according to the manufacturer's instructions. Transfer to a freezer-safe container and freeze for at least 2 hours before serving.']",325],
    [13,"Rosemary Steak",180,0,180,4,"Combine the red wine salt and rosemary in a small bowl. Let stand at room temperature for 2 to 3 hours.' 'Heat a large griddle or cast-iron skillet over high heat. Place the steaks on the hot pan and cook for about 8 minutes per side or to desired degree of doneness. The internal temperature should be at least 145 degrees F (62 degrees C) for medium rare. Pour in the wine mixture and allow it to boil for a minute. Serve steaks with sauce on a deep platter.",506],
    [14,"John's Mango Steak",180,0,180,10,"In a small saucepan over low heat combine the oil apple honeydew mango garlic salt Worcestershire sauce kosher salt hot pepper sauce to taste and ground black pepper.' 'Heat for about 5 minutes to get warm. Place the steak in a shallow nonporous dish. Cover with the marinade and refrigerate covered for at least 3 hours. Flip steak over halfway through marinating.' 'Preheat an outdoor grill for high heat and lightly oil grate.' 'Grill steak for 10 minutes per side dousing with remaining marinade if desired. Steak is done when internal temperature reaches at least 145 degrees F (63 degrees C).",449],
    [15,"Soft Onion Sandwich Rolls",180,0,180,8,"Place the milk water butter salt sugar onion powder 3 tablespoons of dried onion potato flakes flour and yeast into the pan of a bread machine in the order recommended by the manufacturer. Select the Dough cycle and press Start.' 'When the cycle has completed remove the dough from the machine and knead on a lightly floured surface. Cut into 8 equal pieces and form into balls. Gently flatten the balls until they are 4 inches in diameter. If they keep shrinking back just let them relax for a minute before flattening. Place on a baking sheet and cover loosely with a towel. Set in a draft-free place to rise until doubled in size about 40 minutes.' 'Preheat the oven to 350 degrees F (175 degrees C). Whisk together the egg white and water in a cup. Brush over the tops of the risen rolls and sprinkle with remaining minced onion.' 'Bake for 15 to 20 minutes in the preheated oven until golden brown. Cool completely then slice in half horizontally before using.",260],
    [16,"Gramma Good's Fennel Bread",180,0,180,24,"In a small bowl dissolve the yeast in 1 cup of lukewarm water. Let stand until foamy about 10 minutes.' 'In a large bowl stir together the quart of warm water salt ginger sugar fennel molasses and melted butter. Mix in the yeast slurry and rye flour breaking up any lumps of flour with a whisk. Stir in raisins. Work in the bread flour 1/2 cup at a time until the dough becomes stiff.' 'Then turn it out onto a floured surface and knead in as much of the remaining flour as necessary to make a stiff but workable dough. Knead for an additional 10 minutes to develop the gluten. Place dough into a greased bowl and turn to coat. Cover and let rise until double about 1 hour. Punch down the dough and let it rise again until double.' 'Remove dough from bowl and divide into 4 equal pieces. press out air bubbles and roll dough into loaves. Place the loaves into four 8x4 inch well greased loaf pans. Let rise in a warm place until doubled in size.' 'Preheat the oven to 350 degrees F (175 degrees C). Bake the loaves for 40 to 45 minutes or until the tops are nicely browned and the loaves sound hollow when tapped on the bottom.",91],
    [17,"Blue Ribbon Horseradish Pickles",180,0,180,50,"Soak the cucumbers in ice cold water for 2 to 3 hours.' 'Sterilize 5 (1 quart) jars with lids and rings and keep hot.' 'In a large pot combine the water vinegar sugar and pickling spices. Stir to dissolve sugar and bring to a boil.' 'While the mixture is heating up place the following things into each jar: 1 tablespoon of salt 2 cloves of garlic 2 strips of horseradish and a few sprigs of dill. Trim the ends from the cucumbers and make a slit in the skin of each one so the brine can soak in and any air can get out. Pack the cucumbers into the jars. Pour the boiling brine into the jars to within 1/2 inch of the rims. Seal with lids and rings.' 'Bring the water to a boil in the pot where you sterilized the jars. Place the jars into the water and turn off the heat. Let them sit in there until the water is cool. Test the jars for a good seal by pressing on the center of the lid. Refrigerate any unsealed jars.",35],
    [18,"Fried Polenta Squares with Creamy Mushroom Ragu",150,61,211,4,"Bring 4 cups of water to a boil. Whisk in the polenta. Once it begins to thicken reduce heat to a simmer and cook for 45 minutes until creamy and thick stirring occasionally to prevent sticking. Stir in the Parmesan and a 1/4 teaspoon of salt. Stir until melted and cheese is no longer visible. Remove from heat.' 'Line an 8x11 inch baking dish with Reynolds Wrap(R) Aluminum Foil and carefully pour the polenta into the baking dish using a spatula to smooth it to an even thickness about 3/4 inch. Cover and refrigerate for at least two hours and up to two days until firm.' 'While the polenta chills make your ragu. In a large heavy skillet heat the olive oil over medium heat until shimmering. Add the onion and garlic and saute until fragrant and translucent about 5 minutes. Stir often to prevent browning. Add mushrooms and thyme and cook over medium-high heat until the mushrooms start to release their liquid. Add 1/2 teaspoon of salt and continue to cook another 5 minutes until they begin to soften more.' 'Add flour stirring until it is no longer visible about 1 minute. Add in the wine cream and sugar and bring the mixture to a simmer. Taste and adjust salt if desired. Simmer until thick and creamy and the mushrooms are nicely coated about 15 minutes. Finish with a squeeze of fresh lemon juice and 1/2 cup minced parsley. Set aside and cover to keep warm.' 'Slice your polenta into squares -- whatever size you desire. Wipe down your skillet coat it with nonstick cooking spray and heat it over medium-high. Fry the squares in the pan until golden brown and warmed through. To serve top the squares with warm mushroom ragu.",448],
    [19,"Perfect Flourless Orange Cake",150,60,210,16,"Place the oranges in a large saucepan and add enough water to cover. Bring to a boil and boil for 2 hours over medium heat. Check occasionally to make sure they do not boil dry. Allow the oranges to cool then cut them open and remove the seeds. Process in a blender or food processor to a coarse pulp.' 'Preheat the oven to 375 degrees F (190 degrees C). Thoroughly grease a 10-inch round cake pan and line it with parchment paper.' 'In a large bowl beat the eggs and sugar together using an electric mixer until thick and pale about 10 minutes. Mix in baking powder and saffron (optional). Stir in the pureed oranges. Gently fold in almond meal and candied orange peel (optional); pour batter into the prepared pan.' 'Bake until a small knife inserted into the center comes out clean about 1 hour. Allow the cake to cool in the pan. Tap out onto a serving plate when cool.",174],
    [20,"Salted Caramel Pecan Sticky Buns",150,30,180,18,"Combine yeast sugar water and milk in a large bowl. Let sit until foamy 5 to 10 minutes.' 'Mix in butter egg and vanilla. Stir in flour and Diamond Crystal(R) Kosher Salt and mix until dough comes together; you may need additional flour. Knead until smooth and elastic 8 to 10 minutes. Place dough in an oiled bowl; cover with a cloth and set in a warm place to rise until doubled 1 1/2 to 2 hours.' 'Spray two 9-inch cake pans liberally with cooking spray.' 'For the caramel sauce combine 1/2 cup butter and 1 cup dark brown sugar in a small saucepan over medium heat. Cook until sugar dissolves in the butter. Stir in the heavy cream and Diamond Crystal(R) Kosher Salt; mix well but do not bring to a boil. Sauce will be thick. Divide sauce equally into cake pans. Sprinkle equal amounts of pecans on top of caramel sauce.' 'Divide dough into two equal portions and roll out each section into a rectangle approximately 14x6 inches.' 'For the filling mix brown sugar and cinnamon together. Brush melted butter evenly on each rectangle and sprinkle with brown sugar cinnamon mix. Starting with the longer side roll up each rectangle. Cut each roll into 9 equal portions. Place rolls into prepared cake pans and let rise until doubled about 30 minutes.' 'Preheat oven to 350 degrees F (175 degrees C).' 'Bake until browned and baked through 25 to 30 minutes.' 'Immediately (and carefully as sauce will be very hot) invert onto a plate. Serve warm.",386]
]

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
    rowArray = line.delete('\"').strip.split("","")
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