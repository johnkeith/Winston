'use strict';

var data = angular.module('WOYData', []);

data.factory('RecipeData', [function(){
	return {
		getAll: function(){
			return [
			  {
			    "sourceHref": "http://pinchofyum.com/caramelized-pork-tacos-with-pineapple-salsa",
			    "recipeTitle": "Caramelized Pork Tacos with Pineapple Salsa",
			    "ingredients": [
			      "1 tablespoon oil",
			      "1 shallot",
			      "1 clove garlic",
			      "1 jalapeno, ribs and seeds removed",
			      "2 teaspoons fish sauce",
			      "18 ounces boneless pork loin, sliced into thin strips",
			      "2 tablespoons sugar",
			      "2 tablespoons water",
			      "1 cup chopped pineapple",
			      "1 cup chopped cucumber",
			      "½ cup chopped cilantro",
			      "½ cup chopped red onion or shallot",
			      "a squeeze of lime juice",
			      "a pinch of salt",
			      "tortillas for serving",
			      "cilantro and lime for serving",
			      "chili sauce for topping - see notes"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/five-minute-cashew-sauce",
			    "recipeTitle": "Five Minute Cashew Sauce",
			    "ingredients": [
			      "2 cups cashews",
			      "1¼ cup water or broth",
			      "1-2 cloves garlic",
			      "1 teaspoon salt"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-tomatoes-with-goat-cheese-polenta",
			    "recipeTitle": "Roasted Tomatoes with Goat Cheese Polenta",
			    "ingredients": [
			      "3 cups cherry tomatoes (or small tomatoes - tricolor or heirloom are super pretty!)",
			      "3 tablespoons olive oil, divided",
			      "3 cloves garlic",
			      "3 cups spinach",
			      "3 cups water",
			      "1 cup corn grits or polenta (I used Bob's Red Mill - you can buy it on Amazon here)",
			      "4 ounces goat cheese",
			      "½ teaspoon salt"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/sun-dried-tomato-chicken-florentine-pasta",
			    "recipeTitle": "Sun Dried Tomato Chicken Florentine Pasta",
			    "ingredients": [
			      "8 ounces ziti or other pasta",
			      "1 tablespoon butter",
			      "1 lb. chicken, cut into bite sized pieces",
			      "1 tablespoon all purpose seasoning mix for the chicken",
			      "¼ teaspoon cayenne",
			      "1 7-ounce jar DeLallo sun dried tomatoes, drained",
			      "3 cloves garlic",
			      "½ cup half and half",
			      "1½ cups whole milk",
			      "½ cup chicken broth",
			      "1½ cups Mozzarella cheese",
			      "½ teaspoon salt",
			      "2 cups spinach"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "pasta",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-cauliflower-sauce-video",
			    "recipeTitle": "Creamy Cauliflower Sauce: Video",
			    "ingredients": [

			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/5-minute-honey-mustard-sauce",
			    "recipeTitle": "5 Minute Honey Mustard Sauce",
			    "ingredients": [
			      "¼ cup Wholesome! organic honey",
			      "¼ cup mayonnaise",
			      "¼ cup Dijon mustard",
			      "1 tablespoon white distilled vinegar",
			      "¼ teaspoon cayenne pepper"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "salads"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spanish-shrimp-with-garlic-bread-sauce",
			    "recipeTitle": "Spanish Shrimp with Garlic Bread Sauce",
			    "ingredients": [
			      "½ cup olive oil",
			      "3 cloves garlic",
			      "1 slice crusty white bread, about 1 inch thick, crust removed",
			      "¼ cup fresh parsley",
			      "1 cup almonds",
			      "2 cups vegetable or chicken broth (or ideally fish stock - but I couldn't find any)",
			      "1 bay leaf",
			      "2 lbs. large shrimp (16-20)",
			      "additional bread for serving"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/arugula-salad-with-grapes-and-black-pepper-vinaigrette",
			    "recipeTitle": "Arugula Salad with Grapes and Black Pepper Vinaigrette",
			    "ingredients": [
			      "¾ cup red wine vinegar",
			      "⅓ cup champagne vinegar",
			      "⅓ cup water",
			      "⅓ cup sugar",
			      "1 teaspoon salt",
			      "2 red onions, very thinly sliced",
			      "⅓ cup red wine vinegar",
			      "⅔ cup olive oil",
			      "1 tablespoon sugar",
			      "½ teaspoon freshly ground black pepper",
			      "½ teaspoon salt",
			      "1 clove garlic",
			      "2½ cups red California grapes, halved",
			      "2 cups cooked farro or a gluten free alternative like quinoa (I found pre-cooked farro in the rice section of the grocery store and it worked great)",
			      "3 cups arugula",
			      "¼ cup fresh basil leaves, cut into ribbons",
			      "½ cup chopped cashews"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-spinach-sweet-potato-noodles-with-cashew-sauce",
			    "recipeTitle": "Creamy Spinach Sweet Potato Noodles with Cashew Sauce",
			    "ingredients": [
			      "1 cup cashews",
			      "¾ cup water (more for soaking)",
			      "½ teaspoon salt",
			      "1 clove garlic",
			      "1 tablespoon oil",
			      "4 large sweet potatoes, spiralized",
			      "2 cups baby spinach",
			      "a handful of fresh basil leaves, chives, or other herbs",
			      "salt and pepper to taste",
			      "olive oil for drizzling"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/bangkok-coconut-curry-noodle-bowls",
			    "recipeTitle": "Bangkok Coconut Curry Noodle Bowls",
			    "ingredients": [
			      "1 tablespoon oil",
			      "2 shallots",
			      "1 tablespoon fresh ginger, minced (or a paste - I like this stuff)",
			      "2 tablespoons red curry paste",
			      "1 14-ounce can regular coconut milk",
			      "½ cup reduced sodium chicken or veggie broth (optional - see notes)",
			      "3 tablespoons sugar",
			      "1 tablespoon hot chili paste (sambal oelek)",
			      "2 tablespoons fish sauce",
			      "2 tablespoons soy sauce",
			      "4 ounces rice noodles - I use brown rice noodles but they can be hard to find - so I buy these ones",
			      "1 tablespoon oil",
			      "half an onion, chopped",
			      "1 cup chopped broccoli florets",
			      "1 cup shredded carrots",
			      "1 cup chopped asparagus",
			      "1 cup shredded purple cabbage",
			      "sesame seeds for topping",
			      "limes for serving",
			      "a handful of fresh basil for serving"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-southwestern-salad-avocado-dressing",
			    "recipeTitle": "Spicy Southwestern Salad with Avocado Dressing",
			    "ingredients": [
			      "2 sweet potatoes",
			      "1 tablespoon oil",
			      "1 heaping teaspoon each cumin and chili powder (plus a sprinkle of cayenne if you like it hot)",
			      "salt and pepper to taste",
			      "1 14-ounce can black beans, rinsed and drained",
			      "1 14-ounce can sweet corn, rinsed and drained",
			      "1 romaine heart, chopped",
			      "half an avocado",
			      "¼ cup Greek yogurt",
			      "½ cup water",
			      "1 cup cilantro leaves and stems",
			      "1 small clove of garlic",
			      "½ teaspoon salt",
			      "a squeeze of lime juice"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/homemade-brown-sugar-baked-beans",
			    "recipeTitle": "Homemade Brown Sugar Baked Beans",
			    "ingredients": [
			      "12 ounces bacon, cut into pieces",
			      "1 onion, diced",
			      "4 15-ounce cans navy beans, drained and rinsed",
			      "⅓ cup molasses",
			      "1 tablespoon stone ground mustard",
			      "a generous pinch of black pepper",
			      "1 cup hot water (more as needed)",
			      "¼ cup brown sugar",
			      "salt to taste"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "life",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-brazilian-burrito-bowls",
			    "recipeTitle": "Spicy Brazilian Burrito Bowls",
			    "ingredients": [
			      "1½ cups white long grain rice, uncooked",
			      "2½ cups water",
			      "1½ cups salsa (mild, medium, or hot! you decide)",
			      "3 tablespoons tomato paste",
			      "2 tablespoons oil or butter",
			      "2 14 ounce can black beans, rinsed and drained",
			      "2 teaspoons EACH chili powder and cumin",
			      "¼ cup EACH oil and water",
			      "½ cup chopped green onions",
			      "½ cup cilantro leaves",
			      "2-3 cloves garlic (less if you're sensitive to garlicky things)",
			      "½ teaspoon salt",
			      "juice of 2 limes",
			      "½ cup light sour cream or plain Greek yogurt",
			      "4 cups shredded cabbage (I just used a bagged slaw mix)",
			      "vegetable oil for frying",
			      "4 green plantains"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/triple-berry-refrigerator-jam",
			    "recipeTitle": "Triple Berry Refrigerator Jam",
			    "ingredients": [
			      "1 cup frozen fruit (mixed berries works best - raspberries, blueberries, strawberries)",
			      "½ cup Bai5 Brasilia Blueberry",
			      "2 tablespoons honey (more to taste)",
			      "a squeeze of lemon juice, if you want",
			      "¼ cup chia seeds"
			    ],
			    "cuisineType": [
			      "breakfast",
			      "everyday",
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "sweet things"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/rainbow-vegetarian-pad-thai-with-peanuts-and-basil",
			    "recipeTitle": "Rainbow Vegetarian Pad Thai with Peanuts and Basil",
			    "ingredients": [
			      "4 ounces brown rice noodles (you can get stir-fry type noodles or Pad Thai noodles - and usually that's half a box)",
			      "1 zucchini",
			      "1 red pepper",
			      "half a yellow onion",
			      "2 carrots",
			      "2 tablespoons oil",
			      "1 egg, beaten",
			      "½ cup peanuts, chopped",
			      "½ cup fresh herbs like cilantro, green onions, and basil, chopped",
			      "3 tablespoons fish sauce or vegan fish sauce substitute",
			      "3 tablespoons brown sugar (or sub another sweetener)",
			      "3 tablespoons chicken or vegetable broth",
			      "2 tablespoons white vinegar",
			      "1 tablespoon soy sauce",
			      "1 teaspoon chili paste (sambal oelek)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/4-ingredient-creamy-vodka-steak-pasta",
			    "recipeTitle": "4 Ingredient Creamy Vodka Steak Pasta",
			    "ingredients": [
			      "2 tablespoons butter",
			      "1 pound sirloin steak",
			      "35-40 ounces DeLallo Vodka Sauce (it's about 1½ jars)",
			      "2-3 large zucchini (or you could use regular pasta, but zucchini is so good!)"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-sausage-rigatoni",
			    "recipeTitle": "Spicy Sausage Rigatoni",
			    "ingredients": [
			      "1 tablespoon oil or butter",
			      "half of a yellow onion, minced",
			      "4 carrots, minced",
			      "12 ounces spicy Italian sausage (casings removed - just the ground meat)",
			      "1 teaspoon dried oregano",
			      "½ teaspoon red pepper flakes",
			      "1½ teaspoons salt",
			      "½ teaspoon black pepper",
			      "½ cup Barefoot Rich Red Blend",
			      "1 28 ounce can San Marzano tomatoes, including their juice",
			      "¼ cup balsamic or Italian dressing (optional)",
			      "1 lb. whole wheat rigatoni",
			      "½ cup reserved pasta water",
			      "Parmesan and parsley or basil for topping"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "pasta"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/10-minute-white-bean-artichoke-basil-toasts",
			    "recipeTitle": "10 Minute White Bean Artichoke Basil Toasts",
			    "ingredients": [
			      "1 clove garlic",
			      "1 14-ounce can chickpeas or white beans, rinsed and drained",
			      "a handful of fresh basil",
			      "juice of one lemon (or two, if you love tangy like me!)",
			      "a generous drizzle of good quality olive oil",
			      "salt and pepper to taste",
			      "1 heaping cup canned or jarred artichoke hearts, drained",
			      "about 2 cups fresh baby spinach or other greens",
			      "10 small pieces of whole wheat bread, toasted"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "healthy",
			      "quick and easy",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/lemon-herb-salmon-burgers",
			    "recipeTitle": "Lemon Herb Salmon Burgers",
			    "ingredients": [
			      "1 shallot",
			      "½ cup fresh herbs (basil and parsley are great)",
			      "16 ounces wild caught raw salmon, skin removed",
			      "1 cup cooked quinoa",
			      "1 egg + 1 egg white",
			      "½ teaspoon seasoning mix (I used a seafood seasoning that had marjoram, chives, and onion)",
			      "a big squeeze of lemon juice - about a tablespoon",
			      "salt and pepper to taste",
			      "2 tablespoons minced herbs and shallot (reserved from burgers)",
			      "¼ cup oil",
			      "2 tablespoons water",
			      "1-2 tablespoons lemon",
			      "¼ teaspoon salt",
			      "1 teaspoon honey",
			      "Bold DeLallo SaladSavors®",
			      "2-3 cups baby spinach"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "gluten free",
			      "healthy",
			      "lunch",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/5-ingredient-lemon-chicken-asparagus",
			    "recipeTitle": "5 Ingredient Lemon Chicken with Asparagus",
			    "ingredients": [
			      "1 lb. boneless skinless chicken breasts",
			      "¼ cup flour",
			      "½ teaspoon salt, pepper to taste",
			      "2 tablespoons butter",
			      "1 teaspoon lemon pepper seasoning",
			      "1-2 cups chopped asparagus",
			      "2 lemons, sliced",
			      "2 tablespoons honey + 2 tablespoons butter (optional)",
			      "parsley for topping (optional)"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "healthy",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/steak-mac-and-cheese",
			    "recipeTitle": "Steak and Cheddar Mac and Cheese",
			    "ingredients": [
			      "14 ounces whole wheat elbow macaroni (or other pasta)",
			      "6 tablespoons butter, divided",
			      "16 ounces sirloin steak, cut into small pieces",
			      "3 cloves garlic, minced",
			      "2 tablespoons fresh parsley, minced",
			      "4 tablespoons flour (can use whole wheat)",
			      "1 teaspoon salt",
			      "2 cups milk",
			      "2 cups shredded cheddar cheese",
			      "¾ cup water or broth (only if needed)",
			      "a bottle or two of Barefoot Malbec for serving"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "pasta"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/easy-mexican-chicken-quinoa-casserole",
			    "recipeTitle": "Easy Mexican Chicken Quinoa Casserole",
			    "ingredients": [
			      "1½ cups uncooked quinoa",
			      "1 14 ounce can cooked black beans, rinsed and drained",
			      "1½ cups salsa",
			      "1½ cups chicken broth (plus ½ cup more if needed)",
			      "½ teaspoon salt",
			      "1-2 cloves minced garlic (optional)",
			      "1½ cups shredded cheese, divided",
			      "1 tablespoon oil",
			      "1 jalapeño, minced",
			      "1 onion, sliced",
			      "4 bell peppers, sliced",
			      "1¼ lb. boneless skinless chicken breasts, cut into small pieces",
			      "1 tablespoon taco seasoning (I just use a mix of chili powder, onion powder, cumin, salt)"
			    ],
			    "cuisineType": [
			      "healthy",
			      "meat and chicken",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/15-minute-spicy-shrimp-with-pesto-noodles",
			    "recipeTitle": "15 Minute Spicy Shrimp with Pesto Noodles",
			    "ingredients": [
			      "1 cup kale",
			      "1 cup spinach",
			      "1 cup mixed basil and/or parsley (more basil is better, but sub parsley if you don't have enough)",
			      "¾ cup almonds",
			      "½ cup olive oil",
			      "¼ cup water",
			      "½ teaspoon salt",
			      "2 cloves garlic",
			      "juice of one lemon (or 2 if your lemon isn't very juicy)",
			      "1 tablespoon butter or oil",
			      "1 lb. shrimp",
			      "1-2 teaspoons each chili powder and cumin, plus any other spices you like",
			      "salt and pepper",
			      "4 medium zucchini"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/twelve-magical-ways-to-use-a-food-processor",
			    "recipeTitle": "12 Magical Ways To Use A Food Processor",
			    "ingredients": [

			    ],
			    "cuisineType": [
			      "breakfast",
			      "dessert",
			      "healthy",
			      "recipes"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-garlic-herb-mushroom-spaghetti",
			    "recipeTitle": "Creamy Garlic Herb Mushroom Spaghetti",
			    "ingredients": [
			      "8 ounces whole wheat pasta (spaghetti, linguine, etc.) - I like DeLallo brand",
			      "4 tablespoons butter, divided",
			      "3 cloves garlic, minced, divided",
			      "16 ounces fresh mushrooms, sliced",
			      "2 tablespoons flour (or whole wheat flour)",
			      "1 teaspoon herbes de provence",
			      "1½ cups milk",
			      "salt and pepper to taste",
			      "3 tablespoons olive oil",
			      "additional ¼ cup water, broth, milk or cream (optional)",
			      "¼ cup fresh parsley (more to taste)"
			    ],
			    "cuisineType": [
			      "pasta",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/5-minute-homemade-peanut-butter",
			    "recipeTitle": "5 Minute Homemade Peanut Butter",
			    "ingredients": [
			      "2 cups dry roasted peanuts",
			      "1-2 tablespoons honey or sugar",
			      "additional salt to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "snacks",
			      "sweet things",
			      "vegan"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/thai-yellow-chicken-curry-with-potatoes",
			    "recipeTitle": "Thai Yellow Chicken Curry with Potatoes",
			    "ingredients": [
			      "1 tablespoon oil",
			      "half a yellow onion, sliced thinly",
			      "1 pound boneless skinless chicken breasts, cut into bite-sized pieces",
			      "⅓ cup yellow curry paste",
			      "10 baby golden yukon potatoes, cut into bite-sized pieces",
			      "1 14-ounce can coconut cream (it's like coconut milk, but even more luscious)",
			      "½ - 1 cup water",
			      "2 teaspoons fish sauce (optional)",
			      "1-2 tablespoons brown sugar (optional)",
			      "cilantro and rice for serving"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/easy-homemade-yellow-curry-paste",
			    "recipeTitle": "Easy Thai Yellow Curry Paste",
			    "ingredients": [
			      "4 large shallots",
			      "4 large heads of garlic (not individual cloves - FULL HEADS of garlic)",
			      "1 6-inch piece of fresh ginger",
			      "5-20 whole dried Thai chili peppers** (they're very small and usually found in the spice section)",
			      "1½ tablespoons salt",
			      "2-3 tablespoons turmeric",
			      "2-3 tablespoons mild curry powder",
			      "2 teaspoons roasted ground coriander",
			      "3 tablespoons lemongrass paste (I use Gourmet Garden which they sell at my regular grocery store)",
			      "¼ cup packed cilantro leaves and stems"
			    ],
			    "cuisineType": [
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/20-minute-healthy-chicken-parmesan",
			    "recipeTitle": "20 Minute Healthy Chicken Parmesan",
			    "ingredients": [
			      "¼ cup whole wheat breadcrumbs",
			      "¼ cup panko bread crumbs",
			      "¼ cup Parmesan cheese",
			      "1 teaspoon dried Italian herbs",
			      "salt and pepper",
			      "2 tablespoons oil",
			      "4 chicken breasts (about 1 pound)",
			      "1½ cups DeLallo Creamy Vodka tomato sauce (or any tomato sauce - but that vodka sauce is YUMMY)",
			      "4 slices fresh mozzarella cheese",
			      "2 zucchinis"
			    ],
			    "cuisineType": [
			      "healthy",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/queso-stuffed-poblanos",
			    "recipeTitle": "Queso Stuffed Poblanos",
			    "ingredients": [
			      "1 28-ounce can diced tomatoes",
			      "half of a red onion, chopped (reserve a small amount for the mushrooms later)",
			      "a big handful of cilantro",
			      "1 jalapeño pepper (remove the seeds and ribs if you want it mild)",
			      "1 cup water",
			      "1½ teaspoons salt",
			      "2 tablespoons butter",
			      "8 ounces fresh mushrooms",
			      "8 ounces fresh spinach",
			      "5 poblano peppers",
			      "1 cup uncooked white rice",
			      "1½ cups shredded queso melt cheese (just about any kind of cheese will work)",
			      "2-3 tablespoons flaxmeal (optional)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/the-best-3-ingredient-grilled-chicken",
			    "recipeTitle": "The Best 3 Ingredient Grilled Chicken",
			    "ingredients": [
			      "1 lb. boneless skinless chicken breasts",
			      "¾ cup soy sauce",
			      "¾ cup honey",
			      "¾ cup water",
			      "4 cloves garlic, smashed",
			      "cilantro and lime for serving",
			      "5 Minute Magic Green Sauce for serving"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "healthy",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/thai-summer-rolls-with-peanut-sauce",
			    "recipeTitle": "Thai Summer Rolls with Peanut Sauce",
			    "ingredients": [
			      "8 rice paper wrappers",
			      "a few torn leafy greens like rainbow chard",
			      "1 medium cucumber",
			      "1 medium bell pepper",
			      "2 medium carrots",
			      "a handful of fresh mint",
			      "a handful of fresh cilantro",
			      "1 avocado",
			      "crushed peanuts for topping",
			      "3 tablespoons canola oil",
			      "2 cloves garlic, peeled",
			      "2 tablespoons low sodium soy sauce (sub a gluten free tamari if you need to make the recipe GF)",
			      "1-2 tablespoons peanut butter",
			      "1 tablespoons water",
			      "1 tablespoons white distilled vinegar",
			      "1 tablespoons honey",
			      "a big squeeze of lime juice",
			      "a dash of fish sauce"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/super-easy-one-pot-lasagna",
			    "recipeTitle": "Super Easy One Pot Lasagna",
			    "ingredients": [
			      "6-8 slices bacon, cut into small pieces",
			      "3 shallots, minced",
			      "3 carrots, minced",
			      "1 lb. ground beef",
			      "a good sprinkling of salt and pepper",
			      "1 25 ounce jar DeLallo Pomodoro Fresco Tomato Basil sauce",
			      "½ cup dry red wine (optional - can replace with broth or water)",
			      "4 ounces cream cheese",
			      "4 ounces DeLallo whole wheat no-boil lasagna noodles",
			      "6-8 ounces fresh mozzarella",
			      "fresh basil and Parmesan cheese for topping"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "meat and chicken",
			      "pasta",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/bacon-wrapped-dates-with-goat-cheese",
			    "recipeTitle": "Bacon Wrapped Dates with Goat Cheese",
			    "ingredients": [
			      "8 slices bacon (I find that thin bacon works better)",
			      "16 dates",
			      "4 ounces goat cheese",
			      "toothpicks"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "snacks",
			      "sweet things"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-sweet-potato-skins",
			    "recipeTitle": "Healthy Sweet Potato Skins",
			    "ingredients": [
			      "2 medium or large sweet potatoes",
			      "1½ tablespoons butter",
			      "1 shallot, minced",
			      "1 bag fresh baby spinach",
			      "¼ cup light sour cream",
			      "2 ounces light cream cheese",
			      "1 cup chickpeas",
			      "¼ cup shredded Mozzarella cheese",
			      "salt and pepper to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "popular",
			      "quick and easy",
			      "recipes",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/quick-and-easy-lentil-quesadillas",
			    "recipeTitle": "Quick and Easy Lentil Quesadillas",
			    "ingredients": [
			      "1 28 ounce can diced tomatoes",
			      "half a yellow onion",
			      "2 cloves garlic",
			      "1½ teaspoons cumin",
			      "2 teaspoons chili powder",
			      "1 teaspoon salt",
			      "1 tablespoon oil",
			      "1 cup uncooked brown or green lentils, rinsed",
			      "1 cup uncooked brown rice, rinsed",
			      "2½ cups vegetable broth",
			      "16 flour tortillas",
			      "3-4 cups shredded Pepperjack cheese",
			      "a few tablespoons butter (optional)"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/rainbow-power-salad-with-roasted-chickpeas",
			    "recipeTitle": "Rainbow Power Salad with Roasted Chickpeas",
			    "ingredients": [
			      "5 Minute Magic Green Sauce for dressing",
			      "3 large tri-color carrots (I used one orange, one red, and one yellow)",
			      "1 medium zucchini",
			      "¼ cup fresh basil, cut into ribbons",
			      "1 can chickpeas, rinsed and drained",
			      "1 tablespoon olive oil",
			      "1 teaspoon chili powder",
			      "½ teaspoon cumin",
			      "generous sprinkling of salt and pepper"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "salads",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/5-minute-magic-green-sauce",
			    "recipeTitle": "5 Minute Magic Green Sauce",
			    "ingredients": [
			      "1 avocado",
			      "1 cup packed parsley and cilantro leaves (combined)",
			      "1 jalapeño, ribs and seeds removed",
			      "2 cloves garlic",
			      "juice of one lime (or two - get lots of limey goodness in there!)",
			      "½ cup water",
			      "½ cup olive oil",
			      "1 teaspoon salt",
			      "½ cup pistachios (you can sub other nuts - see notes)"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "snacks",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/lightened-up-whole-wheat-fettuccine-alfredo",
			    "recipeTitle": "Lightened Up Whole Wheat Fettuccine Alfredo",
			    "ingredients": [
			      "6 cups cauliflower florets",
			      "1½ cups chicken or vegetable broth",
			      "2 cloves garlic",
			      "2 tablespoons butter",
			      "1½ teaspoons salt",
			      "6-8 slices bacon",
			      "1 lb. DeLallo whole wheat fettuccine (reserve cooking water)",
			      "½ cup Parmesan cheese (optional)",
			      "1½ cups frozen or fresh peas",
			      "parsley, salt, pepper, lemon juice, and/or a dash of nutmeg for topping"
			    ],
			    "cuisineType": [
			      "lightened up",
			      "pasta"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/quinoa-black-bean-crockpot-stuffed-peppers",
			    "recipeTitle": "Quinoa Black Bean Crockpot Stuffed Peppers",
			    "ingredients": [
			      "6 bell peppers",
			      "1 cup uncooked quinoa, rinsed",
			      "1 14 ounce can black beans, rinsed and drained",
			      "1 14 ounce can refried beans",
			      "1½ cups red enchilada sauce",
			      "1 teaspoon cumin",
			      "1 teaspoon chili powder",
			      "1 teaspoon onion powder",
			      "½ teaspoon garlic salt",
			      "1½ cups shredded Pepperjack cheese",
			      "toppings! cilantro, avocado, sour cream, etc."
			    ],
			    "cuisineType": [
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-shrimp-tacos-with-garlic-cilantro-lime-slaw",
			    "recipeTitle": "Spicy Shrimp Tacos with Garlic Cilantro Lime Slaw",
			    "ingredients": [
			      "¼ cup oil",
			      "¼ cup water",
			      "½ cup chopped green onions",
			      "½ cup cilantro leaves",
			      "2-3 cloves garlic (less if you're sensitive to garlicky things)",
			      "½ teaspoon salt",
			      "juice of 2 limes",
			      "½ cup sour cream",
			      "1 lb. shrimp, peeled and deveined, tails removed",
			      "1 teaspoon each chili powder, cumin, and southwestern seasoning (see notes)",
			      "¼ teaspoon cayenne pepper (more or less to taste)",
			      "2-3 cups shredded green cabbage",
			      "8 small corn tortillas",
			      "1-2 avocados",
			      "Cotija cheese and additional cilantro for topping",
			      "lime wedges for serving"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "lunch",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/30-minute-sesame-mango-chicken-teriyaki",
			    "recipeTitle": "30-Minute Sesame Mango Chicken Teriyaki",
			    "ingredients": [
			      "15 medjool dates, pitted and soaked in ½ cup hot water (see notes - you can use sugar instead if you want)",
			      "¾ cup soy sauce, reduced sodium",
			      "¼ cup rice vinegar",
			      "3 cloves garlic",
			      "1 tablespoon fresh ginger, minced, smashed, or in paste form",
			      "½ cup chicken broth",
			      "1 yellow onion",
			      "1-2 lbs. boneless skinless chicken breasts (see notes)",
			      "¼ cup flour",
			      "a generous pinch of salt and pepper",
			      "a generous pinch of chili powder",
			      "1 tablespoon oil",
			      "2-3 cups frozen mango chunks (fresh could also work)",
			      "sesame seeds, green onions, sesame oil, fish sauce, or limes for topping",
			      "cooked rice for serving"
			    ],
			    "cuisineType": [
			      "healthy",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/30-minute-sesame-roasted-sweet-potatoes",
			    "recipeTitle": "30-Minute Sesame Roasted Sweet Potatoes",
			    "ingredients": [
			      "2 sweet potatoes, peeled and cut into wedges",
			      "1 tablespoon vegetable oil",
			      "½ teaspoon chili powder",
			      "a pinch of cayenne pepper for spiciness",
			      "salt and pepper",
			      "2 tablespoons roasted sesame oil",
			      "2 tablespoons tahini",
			      "2 tablespoons sesame seeds",
			      "fresh cilantro"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "quick and easy",
			      "snacks",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/crockpot-quinoa-chicken-primavera",
			    "recipeTitle": "Crockpot Quinoa Chicken Primavera",
			    "ingredients": [
			      "1½ cups quinoa, uncooked",
			      "1 lb. boneless skinless chicken breasts",
			      "4 cups + 3 cups chicken broth (SEE NOTES)",
			      "4-6 cloves garlic",
			      "salt and pepper, other dried herbs you like (I tossed in ½ teaspoon each dried parsley, thyme, and basil)",
			      "1 tablespoon olive oil",
			      "1 bunch asparagus, cut into bite sized pieces",
			      "6 ounces pesto (SEE NOTES)",
			      "2½ cups frozen peas",
			      "squeeze of lemon juice",
			      "watercress, fresh parsley, chives, or any other herbs for topping",
			      "Parmesan or Asiago cheese for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/simple-coconut-green-smoothie",
			    "recipeTitle": "Simple Coconut Green Smoothie",
			    "ingredients": [
			      "1 cup Bai5 Antioxidant Infusions Molokai Coconut",
			      "1 heaping cup frozen peaches",
			      "1 cup spinach",
			      "2 tablespoons flaxmeal"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "breakfast",
			      "everyday",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "sweet things",
			      "vegan"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/one-pot-creamy-spinach-lentils",
			    "recipeTitle": "One-Pot Creamy Spinach Lentils",
			    "ingredients": [
			      "2 tablespoons butter, oil, or (wait for it) bacon grease",
			      "half a yellow onion, diced",
			      "2 carrots, peeled and chopped",
			      "2 sticks celery, chopped",
			      "½ cup dry white wine",
			      "2 cups uncooked lentils, rinsed",
			      "2 medium Yukon potatoes, chopped (about 1 cup total)",
			      "4 cups chicken broth (plan to add a few more cups as needed while cooking)",
			      "1 bay leaf",
			      "a few sprigs fresh parsley",
			      "a few springs fresh thyme",
			      "½ cup half and half",
			      "3-4 cups packed fresh baby spinach",
			      "salt and pepper to taste (be generous with the salt!)",
			      "olive oil and red wine vinegar for topping"
			    ],
			    "cuisineType": [
			      "healthy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chopped-thai-shrimp-salad-with-garlic-lime-dressing",
			    "recipeTitle": "Chopped Thai Shrimp Salad with Garlic Lime Dressing",
			    "ingredients": [
			      "½ cup olive oil (or other oil)",
			      "¼ cup white wine vinegar",
			      "juice of two limes (lemons also work)",
			      "2 tablespoons water",
			      "1 tablespoon honey",
			      "2 cloves garlic",
			      "1 serrano pepper, keeping the ribs and seeds if you like spicy",
			      "1 cup packed fresh herbs (mint, cilantro, green onions, parsley)",
			      "½ teaspoon salt",
			      "oil for the pan",
			      "3 cloves garlic, minced",
			      "1 serrano pepper, minced",
			      "1 lb. shrimp",
			      "4 cups spinach or other greens",
			      "4 large carrots, peeled",
			      "2 cups edamame, shelled and cooked",
			      "¾ cup cashews",
			      "fresh wonton wrappers + oil for frying if you want to REALLY take it over the top"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "lightened up",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/20-minute-ancho-chicken-tacos",
			    "recipeTitle": "20-Minute Ancho Chicken Tacos",
			    "ingredients": [
			      "½ cup white whole wheat flour (all purpose also works)",
			      "2 teaspoons ancho chili powder",
			      "1 teaspoon southwestern or taco seasoning",
			      "a generous pinch of salt and pepper",
			      "2 tablespoons oil",
			      "1½ lb. boneless skinless chicken breasts",
			      "12 small corn tortillas",
			      "a few green cabbage leaves, shredded",
			      "one bunch cilantro, chopped",
			      "toppings: lime wedges, sour cream, jalapeño slices, avocado slices, minced green or red onions"
			    ],
			    "cuisineType": [
			      "healthy",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/simple-homemade-tomato-soup",
			    "recipeTitle": "Simple Homemade Tomato Soup",
			    "ingredients": [
			      "4 slices bacon, cut into small pieces",
			      "2 carrots, chopped",
			      "half of a yellow onion, chopped",
			      "4 cloves garlic, minced",
			      "1½ tablespoons tomato paste",
			      "1 tablespoon flour",
			      "4 cups chicken broth (more to thin out the soup at the end as needed)",
			      "½ teaspoon dried thyme",
			      "1 bay leaf",
			      "1 28-ounce can whole San Marzano tomatoes",
			      "cream (optional - to add at the end as desired)"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "soup"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-tomatillo-chicken-and-rice-bowls",
			    "recipeTitle": "Roasted Tomatillo Chicken and Rice Bowls",
			    "ingredients": [
			      "20 tomatillos",
			      "3 poblanos",
			      "2 jalapeños",
			      "2 shallots",
			      "olive oil",
			      "5 cloves garlic",
			      "1½ cups chicken broth",
			      "½ teaspoon salt",
			      "1 bunch cilantro",
			      "½ cup half and half",
			      "½ cup water",
			      "1¼ lbs. boneless skinless chicken breasts",
			      "1 cup white rice",
			      "10 corn tortillas",
			      "oil for frying",
			      "salt to taste",
			      "additional cilantro, sour cream, and limes for topping"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "recipes"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-veggie-pitas-with-avocado-dip",
			    "recipeTitle": "Roasted Veggie Pitas with Avocado Dip",
			    "ingredients": [
			      "2 ripe avocados",
			      "1-2 cloves garlic (go for one clove or less if you're sensitive to strong garlic tastes)",
			      "2 tablespoons olive oil",
			      "2 tablespoons water (more as needed)",
			      "a handful of cilantro",
			      "½ teaspoon salt",
			      "1 teaspoon cumin",
			      "half of a Serrano pepper (more or less depending on how much heat you want)",
			      "juice of one lime",
			      "2 heads cauliflower, cut into small florets",
			      "2 14-ounce cans chickpeas, rinsed and drained",
			      "1-2 teaspoons chili powder",
			      "1-2 teaspoons garam masala",
			      "½ teaspoon cayenne pepper if you want spicy",
			      "oil oil for drizzling",
			      "salt and pepper to taste",
			      "8 small whole wheat pitas",
			      "Greek yogurt for topping"
			    ],
			    "cuisineType": [
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/peanut-chicken-lettuce-wraps-ginger-garlic-sauce",
			    "recipeTitle": "Peanut Chicken Lettuce Wraps with Ginger Garlic Sauce",
			    "ingredients": [
			      "4 tablespoons soy sauce",
			      "3 tablespoons oyster sauce",
			      "3 tablespoons water",
			      "1 tablespoon sambal oelek (chili paste)",
			      "1 tablespoon honey",
			      "1 tablespoon fresh ginger (I use a paste)",
			      "juice of 2 limes",
			      "2 garlic cloves, minced",
			      "4 green onions, minced",
			      "1 tablespoon rice vinegar (optional - makes it more tangy)",
			      "1 teaspoon cornstarch (optional - helps the sauce thicken)",
			      "2 tablespoons sesame oil",
			      "1 lb. ground chicken or turkey",
			      "½ cup lightly salted peanuts, chopped",
			      "6 ounces rice noodles",
			      "12 leaves of lettuce (I used Boston lettuce)",
			      "chopped cilantro, green onions, and peanuts for topping"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/toasted-bread-and-parmesan-kale-salad",
			    "recipeTitle": "Toasted Bread and Parmesan Kale Salad",
			    "ingredients": [
			      "⅓ cup olive oil",
			      "¼ cup white wine vinegar",
			      "juice of one lemon",
			      "juice of one orange",
			      "1 shallot, minced",
			      "½ teaspoon salt",
			      "6-8 slices French bread or baguette",
			      "4 tablespoons butter, melted",
			      "½ cup grated Parmesan cheese",
			      "5-6 cups fresh kale, very finely chopped"
			    ],
			    "cuisineType": [
			      "salads",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/skillet-chicken-bacon-white-wine-sauce",
			    "recipeTitle": "Skillet Chicken with Bacon and White Wine Sauce",
			    "ingredients": [
			      "3 slices bacon",
			      "½ cup flour (I used white whole wheat)",
			      "salt and pepper",
			      "2 teaspoon herbes de provence",
			      "1½ - 2 lbs. chicken thighs with skin**",
			      "1-2 tablespoons olive oil",
			      "2 shallots, thinly sliced",
			      "½ cup dry white wine",
			      "1 cup chicken stock",
			      "dried or fresh parsley for topping"
			    ],
			    "cuisineType": [
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/grapefruit-mojitos-two",
			    "recipeTitle": "Grapefruit Mojitos for Two",
			    "ingredients": [
			      "2 large pink grapefruits",
			      "2-3 limes",
			      "2 tablespoons honey",
			      "3-4 ounces white rum",
			      "a handful of mint leave",
			      "sparking water"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "quick and easy",
			      "sweet things"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/thai-yellow-curry-with-beef-and-potatoes",
			    "recipeTitle": "Thai Yellow Curry with Beef and Potatoes",
			    "ingredients": [
			      "2 shallots",
			      "1 head garlic",
			      "1 3-inch piece galangal, peeled and thinly sliced*",
			      "1 3-inch piece ginger, peeled and thinly sliced",
			      "1 teaspoon roasted ground coriander",
			      "20 dried red Thai chiles softened in hot water",
			      "2 tablespoons turmeric",
			      "2 tablespoons curry powder",
			      "2 tablespoons fresh cilantro",
			      "1 tablespoon shrimp paste*",
			      "1½ tablespoons salt",
			      "1 tablespoon lemongrass paste",
			      "2 lbs. beef chuck, trimmed and cut into cubes",
			      "3-4 cups light coconut milk",
			      "4 cups water, divided",
			      "2 cups coconut cream (canned)*",
			      "24 ounces Yukon gold potatoes, cut into bite-sized pieces",
			      "1 shallot, thinly sliced",
			      "2 tablespoons brown sugar",
			      "1 tablespoon fish sauce",
			      "½ cup minced cilantro"
			    ],
			    "cuisineType": [
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chopped-chicken-sesame-noodle-bowls",
			    "recipeTitle": "Chopped Chicken Sesame Noodle Bowls",
			    "ingredients": [
			      "3 tablespoons sesame oil",
			      "2 tablespoons rice vinegar",
			      "2 cloves garlic",
			      "1 tablespoon fresh ginger (I use a fresh paste)",
			      "½ teaspoon salt",
			      "¼ cup peanut butter",
			      "3-4 tablespoons water",
			      "2-3 tablespoons sesame seeds",
			      "½ teaspoon red pepper flakes",
			      "1 lb. boneless skinless chicken breasts",
			      "4 ounces soba noodles",
			      "1 cucumber (can swap for other veggies, too)",
			      "3 large carrots",
			      "1 handful cilantro"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/date-night-mushroom-pasta-with-goat-cheese",
			    "recipeTitle": "Date Night Mushroom Pasta with Goat Cheese",
			    "ingredients": [
			      "16 ounces uncooked whole wheat farfalle pasta",
			      "2 tablespoons butter",
			      "2 tablespoons oil",
			      "24 ounces fresh mushrooms, sliced (I used cremini and shiitake)",
			      "¼ cup minced garlic or shallots, or a combination of both",
			      "a splash of white wine (about ⅓ cup)",
			      "½ cup heavy whipping cream",
			      "1 teaspoon salt",
			      "1 cup chicken or vegetable broth (as needed)",
			      "¼ cup Parmesan cheese",
			      "2 cups spinach, chopped",
			      "6 ounces goat cheese"
			    ],
			    "cuisineType": [
			      "pasta",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/one-pot-spicy-eggs-and-potatoes",
			    "recipeTitle": "One-Pot Spicy Eggs and Potatoes",
			    "ingredients": [
			      "2 tablespoons olive oil, divided",
			      "½ white onion, roughly chopped",
			      "3 cloves garlic, minced",
			      "3 teaspoons ancho chili powder, divided",
			      "1 teaspoon salt",
			      "½ cup chicken or vegetable broth",
			      "1 28 ounce can tomatoes (can be diced or whole)",
			      "5-6 eggs",
			      "1 cup diced potatoes (like those little Klondike golden baby potatoes)",
			      "2 cups kale, chopped finely",
			      "4 ounces goat cheese"
			    ],
			    "cuisineType": [
			      "breakfast",
			      "eggs",
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/mushroom-poblano-posole-verde",
			    "recipeTitle": "Mushroom Poblano Posole Verde",
			    "ingredients": [
			      "2 tablespoons olive oil",
			      "half a yellow onion, minced",
			      "2 poblano peppers, seeds removed, minced",
			      "1 jalapeño pepper, seeds removed, minced (optional)",
			      "16 ounces fresh sliced baby bella mushrooms",
			      "1 teaspoon southwest seasoning",
			      "24 ounces salsa verde (I used medium)",
			      "1 cup water",
			      "4-5 cups chicken or vegetable broth",
			      "¾ cup uncooked bulgur",
			      "2 14 ounce cans white hominy",
			      "1½ teaspoons salt",
			      "cilantro, lime juice, cheese, and chips for serving"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "soup",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/skillet-chicken-tortilla-pie",
			    "recipeTitle": "Skillet Chicken Tortilla Pie",
			    "ingredients": [
			      "2 tablespoons oil",
			      "1 yellow onion, roughly chopped",
			      "3 teaspoons chili powder",
			      "2 teaspoons cumin",
			      "1 teaspoon oregano",
			      "1½ teaspoons salt",
			      "4 cloves garlic, roughly chopped",
			      "1½ cups chicken broth",
			      "2 28-ounce cans diced tomatoes",
			      "2 lbs. boneless skinless chicken breasts",
			      "2 tablespoons southwestern or taco seasoning - this is my favorite blend!",
			      "30 small corn tortillas",
			      "4 cups shredded Mozzarella cheese (Mozz melts the best!)",
			      "cilantro and Cotija cheese for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/crockpot-braised-beef-ragu-polenta",
			    "recipeTitle": "Crockpot Braised Beef Ragu with Polenta",
			    "ingredients": [
			      "2 tablespoons olive oil",
			      "3 lbs. beef rump roast or round roast",
			      "half a yellow or white onion, minced",
			      "3 cloves garlic, minced",
			      "2 28-ounce cans San Marzano whole tomatoes (see notes)",
			      "½ cup red wine",
			      "3 tablespoons tomato paste",
			      "1 teaspoon basil",
			      "1 teaspoon oregano",
			      "2 bay leaves",
			      "2 teaspoons salt",
			      "black pepper to taste",
			      "6 cups water",
			      "1-2 teaspoons salt",
			      "1¾ cup yellow cornmeal",
			      "3 tablespoons butter"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/vietnamese-chicken-salad-with-rice-noodles",
			    "recipeTitle": "Vietnamese Chicken Salad with Rice Noodles",
			    "ingredients": [
			      "3 serrano peppers",
			      "4 cloves garlic",
			      "2 tablespoons rice vinegar",
			      "2 tablespoons brown sugar",
			      "4 tablespoons fish sauce",
			      "6 tablespoons lime juice",
			      "6 tablespoons vegetable oil",
			      "1 lb. boneless skinless chicken breasts",
			      "6 ounces rice noodles",
			      "4 large carrots, peeled",
			      "8-10 full leaves of green cabbage",
			      "one large handful of each -- cilantro leaves, mint leaves, and green onions"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lunch",
			      "meat and chicken",
			      "salads"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/10-cozy-casseroles-winter",
			    "recipeTitle": "10 Cozy Casseroles for Winter",
			    "ingredients": [

			    ],
			    "cuisineType": [
			      "popular"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/lentil-curry-bowls-with-cilantro-cashew-sauce",
			    "recipeTitle": "Lentil Curry Bowls with Cilantro Cashew Sauce",
			    "ingredients": [
			      "½ cup fresh cilantro",
			      "¾ cup cashews (mine were salted)",
			      "⅓ cup water",
			      "¼ teaspoon salt",
			      "juice of 2 limes",
			      "1 clove garlic (optional)",
			      "1-2 teaspoons honey",
			      "8-10 carrots, peeled and chopped into chunks",
			      "1 tablespoon olive oil",
			      "1 teaspoon garam masala",
			      "½ teaspoon chili powder",
			      "salt to taste",
			      "1 cup basmati rice",
			      "1 tablespoon oil",
			      "½ cup chopped onion",
			      "2 cloves garlic",
			      "2 tablespoons red Thai curry paste",
			      "1 teaspoon garam masala",
			      "½ teaspoon cumin seed (or ground cumin)",
			      "1 cup brown lentils, rinsed",
			      "14 ounces tomato puree",
			      "2 cups chicken or vegetable broth",
			      "pinch of salt",
			      "avocado and cilantro for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/winter-rainbow-quinoa-salad",
			    "recipeTitle": "Winter Rainbow Quinoa Salad",
			    "ingredients": [
			      "2 cups cooked red quinoa",
			      "2 cups chopped pickled or regular cooked beets",
			      "1 cup pomegranate arils",
			      "4 ounces goat cheese",
			      "½ cup crushed or chopped pistachios",
			      "2 cups chopped Opal apples",
			      "2 cups chopped fresh baby spinach",
			      "4 ounces goat cheese",
			      "a handful of green onions or fresh herbs if you want",
			      "dressing of choice (see notes)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "salads",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/drunken-chicken-marsala-with-tomatoes",
			    "recipeTitle": "Drunken Chicken Marsala with Tomatoes",
			    "ingredients": [
			      "16 ounces fresh crimini mushrooms, sliced",
			      "3 tablespoons butter, divided",
			      "2 cloves garlic, minced",
			      "1 cup dry Marsala wine",
			      "1 teaspoon cornstarch dissolved in 1 tablespoon cold water",
			      "2 tablespoons heavy cream",
			      "½ teaspoon salt (more to taste)",
			      "1½ - 2 lbs. boneless skinless chicken breasts",
			      "1 tablespoon olive oil",
			      "⅓ cup flour",
			      "1 teaspoon all purpose seasoning + a pinch of salt and pepper",
			      "1-2 cups cherry tomatoes",
			      "fresh parsley"
			    ],
			    "cuisineType": [
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-wild-rice-casserole",
			    "recipeTitle": "Chicken Wild Rice Casserole",
			    "ingredients": [
			      "1 onion",
			      "5 carrots",
			      "5 stalks celery",
			      "1 cup wild rice",
			      "3 cups chicken broth",
			      "1 lb. chicken breasts, cut into small pieces",
			      "10 tablespoons butter (divided)",
			      "1 teaspoon salt",
			      "½ teaspoon poultry seasoning",
			      "4 tablespoons flour",
			      "2 cups milk",
			      "3-4 cups cubed bread (dry, sturdy, or day old bread works best)"
			    ],
			    "cuisineType": [
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-sofritas-veggie-bowls",
			    "recipeTitle": "Spicy Sofritas Veggie Bowls",
			    "ingredients": [
			      "1½ cups uncooked white long grain rice",
			      "4-5 limes",
			      "2 huge handfuls of fresh cilantro",
			      "16 ounces extra firm tofu",
			      "1 14 ounce can pinto beans, rinsed and drained",
			      "2-3 avocados",
			      "½ cup minced red onion",
			      "1 roasted poblano pepper (see notes)",
			      "4 individual chipotle peppers canned in adobo sauce",
			      "2 tablespoons of the adobo sauce",
			      "2-3 cloves garlic",
			      "½ cup fresh tomato salsa",
			      "2 tablespoons canola oil",
			      "½ teaspoon salt",
			      "a pinch of sugar (cuts the spicyness a bit)"
			    ],
			    "cuisineType": [
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/the-best-garlic-herb-cheesy-potatoes",
			    "recipeTitle": "The Best Garlic Herb Cheesy Potatoes",
			    "ingredients": [
			      "1 tablespoon butter",
			      "3 cloves garlic, minced",
			      "¼ cup minced fresh herbs - I used sage and thyme",
			      "2-3 sweet potatoes (about 3 cups thinly sliced)",
			      "2-3 Russet potatoes (about 3 cups thinly sliced)",
			      "1 cup heavy whipping cream",
			      "1½ teaspoons salt",
			      "2 cups shredded Gruyère cheese",
			      "½ cup reduced sodium chicken broth",
			      "3 cups Kettle Brand chips (any flavor), crushed"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/six-ingredient-sausage-potato-pie",
			    "recipeTitle": "Six Ingredient Sausage Potato Pie",
			    "ingredients": [
			      "12 ounces ground sausage",
			      "6-8 eggs",
			      "½ cup milk",
			      "1½ teaspoons Herbes de Provence",
			      "salt and pepper to taste",
			      "1 pound raw shredded potatoes (shred your own potatoes or just buy refrigerated uncooked hashbrowns)",
			      "1 cup shredded cheese (I used Gruyère and highly recommend it)",
			      "2 cups shredded kale (you can sub other veggies or just omit it for an equally delicious combo)"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "breakfast",
			      "eggs",
			      "gluten free",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/10-last-minute-thanksgiving-side-dishes",
			    "recipeTitle": "10 Last Minute Thanksgiving Side Dishes",
			    "ingredients": [

			    ],
			    "cuisineType": [
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/loaded-turkey-panini-thanksgiving-leftovers",
			    "recipeTitle": "Loaded Turkey Panini (For Thanksgiving Leftovers)",
			    "ingredients": [
			      "2 slices of thick, sturdy white or wheat bread",
			      "1 tablespoon butter",
			      "a few slices of turkey",
			      "a few sage leaves",
			      "a few spoonfuls of cranberry sauce (or raspberry jam!)",
			      "1 ounce goat cheese",
			      "2 slices cooked bacon",
			      "1 slice Muenster cheese"
			    ],
			    "cuisineType": [
			      "bjork's faves",
			      "quick and easy",
			      "sandwiches"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/slow-cooker-pear-sausage-stuffing",
			    "recipeTitle": "Slow Cooker Pear and Sausage Stuffing",
			    "ingredients": [

			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "sponsored post"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-quinoa-chicken-curry-bowls",
			    "recipeTitle": "Healthy Quinoa Chicken Curry Bowls",
			    "ingredients": [
			      "1 tablespoons olive oil",
			      "1 cup diced onions",
			      "1 lbs. boneless skinless chicken thighs (breasts are also good)",
			      "2 tablespoons curry paste",
			      "2 teaspoons garam masala (cumin or roasted coriander are also good)",
			      "1 tablespoon ginger paste",
			      "3 cloves garlic",
			      "2 cups tomato puree",
			      "2 cups chicken broth",
			      "3 cups diced eggplant (peel removed)",
			      "3 cups diced fresh tomatoes",
			      "1 cup uncooked quinoa",
			      "toppings: crushed almonds, rice, noodles, cilantro, green onions, almond butter"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-sweet-potato-salad-candied-walnuts",
			    "recipeTitle": "Roasted Sweet Potato Salad with Candied Walnuts",
			    "ingredients": [
			      "2 sweet potatoes, diced",
			      "½ tablespoon olive oil",
			      "½ tablespoon gravy herbs (rosemary, sage, thyme, nutmeg, salt, pepper)",
			      "salt to taste",
			      "4 cups chopped kale",
			      "1 cup walnuts",
			      "1 tablespoon butter (replace with coconut oil if vegan)",
			      "3 tablespoons white sugar",
			      "3 tablespoons almond butter",
			      "1 tablespoon olive oil",
			      "2 tablespoons freshly squeezed orange juice",
			      "3 tablespoons water",
			      "1 tablespoon stoneground mustard",
			      "½ tablespoon raw honey or maple syrup",
			      "¼ teaspoon salt, more to taste",
			      "½ teaspoon minced garlic"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/easiest-garlic-mashed-potatoes",
			    "recipeTitle": "Easiest Garlic Mashed Potatoes",
			    "ingredients": [
			      "5 pounds Russet potatoes, chopped into 1 or 2 inch pieces",
			      "2 cups milk",
			      "2 cups chicken or vegetable broth",
			      "3-5 large cloves fresh garlic (depends on how much you can handle! I did 3 for this batch)",
			      "½ cup sour cream",
			      "½ cup butter",
			      "2 teaspoons salt"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/bacon-brussels-sprout-salad",
			    "recipeTitle": "Bacon and Brussels Sprout Salad",
			    "ingredients": [
			      "juice of one lemon",
			      "juice of one orange",
			      "2-3 tablespoons apple cider (not vinegar, just regular apple cider! for sweetness!)",
			      "1 shallot, minced",
			      "½ cup olive oil",
			      "½ teaspoon salt and pepper to taste",
			      "4 dozen brussels sprouts",
			      "1 cup almonds",
			      "6 slices cooked bacon, crumbled or chopped",
			      "1 cup grated Parmesan cheese (Asiago or Gruyere are also good)"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "salads"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/holiday-detox-green-apple-smoothie",
			    "recipeTitle": "Holiday Detox Green Apple Smoothie",
			    "ingredients": [
			      "1 banana (or half is plenty if you're watching sugar)",
			      "1-2 cups kale, stems removed",
			      "1 cup apple cider (no sugar added - just the real stuff)",
			      "1 cup water or ice",
			      "optional extras: flaxmeal, nuts (I used pecans), nut butter",
			      "dash of cinnamon",
			      "pomegranate seeds for topping"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "breakfast",
			      "everyday",
			      "gluten free",
			      "healthy",
			      "sweet things",
			      "vegan"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-mushroom-alfredo-pasta-bake",
			    "recipeTitle": "Healthy Mushroom Alfredo Pasta Bake",
			    "ingredients": [
			      "1 lb. whole wheat penne pasta",
			      "1 head cauliflower (about 6-7 cups of florets)",
			      "3 cups reduced sodium chicken broth, divided",
			      "¾ cups milk",
			      "¼ cup olive oil",
			      "1 teaspoon salt",
			      "2 cloves garlic",
			      "24 ounces fresh sliced mushrooms",
			      "4 tablespoons butter, divided",
			      "1 cup shredded Gruyere cheese",
			      "fresh sage, sliced into thin ribbons",
			      "extras: caramelized onions, bacon, sausage"
			    ],
			    "cuisineType": [
			      "pasta",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/garlic-butter-white-wine-shrimp-linguine",
			    "recipeTitle": "Garlic Butter White Wine Shrimp Linguine",
			    "ingredients": [
			      "4 tablespoons butter, divided",
			      "4 cloves garlic, minced, divided",
			      "4 cups chicken or vegetable broth",
			      "2 cups water",
			      "1 lb. whole wheat linguine",
			      "1½ lb. jumbo raw shrimp",
			      "¾ cup Barefoot Pinot Grigio",
			      "¼ cup minced fresh sage",
			      "1 cup heavy whipping cream",
			      "½ cup grated Parmesan cheese",
			      "½ cup chopped fresh parsley",
			      "1 lemon",
			      "salt and pepper to taste"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "pasta",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-bacon-pumpkin-pasta-bake",
			    "recipeTitle": "Chicken Bacon Pumpkin Pasta Bake",
			    "ingredients": [
			      "1 tablespoon butter",
			      "1 yellow onion",
			      "a splash of white wine (optional)",
			      "1 clove garlic",
			      "18 ounces pumpkin puree (about 2 cups)",
			      "1 cup chicken broth",
			      "1 cup milk",
			      "¼ cup olive oil",
			      "1 teaspoon salt",
			      "1½ teaspoons rubbed sage",
			      "a pinch of freshly grated nutmeg (or just ground)",
			      "freshly cracked black pepper to taste",
			      "1 lb. uncooked pasta",
			      "1 lb. boneless skinless chicken breasts",
			      "1 cup Mozzarella or other white melty cheese",
			      "¼ cup Parmesan cheese",
			      "crumbled, cooked bacon (as much or little as you want)",
			      "parsley for topping"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "pasta"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/one-pot-spanish-chicken-potatoes",
			    "recipeTitle": "One Pot Spanish Chicken and Potatoes",
			    "ingredients": [
			      "½ cup olive oil",
			      "1 large yellow onion, sliced (about 1 cup)",
			      "3 cloves garlic",
			      "5 ripe tomatoes, cut in half",
			      "½ of a large eggplant, skin removed and diced (2-3 cups)",
			      "1½ teaspoon salt",
			      "1½ lbs. chicken breast meat",
			      "1 large Russet potato, sliced",
			      "salt and pepper to taste",
			      "1 teaspoon all purpose seasoning (I used poultry seasoning)",
			      "½ cup fresh parsley leaves",
			      "crusty bread or rice for serving"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/goat-cheese-scrambled-eggs-pesto-veggies",
			    "recipeTitle": "Goat Cheese Scrambled Eggs with Pesto Veggies",
			    "ingredients": [
			      "2 cups chopped kale",
			      "¼ cup julienne sun dried tomatoes",
			      "1 tablespoon pesto",
			      "1 tablespoon pumpkin seeds",
			      "2 eggs and 1 egg white",
			      "1 ounce goat cheese"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "breakfast",
			      "eggs",
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-tomatillo-chicken-enchilada-casserole",
			    "recipeTitle": "Roasted Tomatillo Chicken Enchilada Casserole",
			    "ingredients": [
			      "15 tomatillos, paper removed",
			      "3 jalapeño peppers",
			      "4 cloves garlic",
			      "½ cup loosely packed cilantro leaves",
			      "¼ cup loosely packed green onions (green parts)",
			      "up to 1½ cups chicken or vegetable broth (SEE NOTES)",
			      "½ cup sour cream",
			      "2 tablespoons olive oil",
			      "6 8-inch flour tortillas",
			      "1 lb. boneless, skinless chicken breasts",
			      "1½ cups shredded cheese"
			    ],
			    "cuisineType": [
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/garlic-spaghetti-squash-with-herbs",
			    "recipeTitle": "Garlic Spaghetti Squash with Herbs",
			    "ingredients": [
			      "1 medium spaghetti squash, halved and seeded",
			      "olive oil",
			      "kosher salt",
			      "2 cloves garlic, minced",
			      "2 teaspoons white wine vinegar",
			      "¼ cup minced fresh parsley",
			      "2 tablespoons minced fresh basil (sage is also yummy)",
			      "¾ cup shredded Gruyère cheese",
			      "½ cup pine nuts, toasted",
			      "black pepper"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/smoked-salmon-chowder",
			    "recipeTitle": "Smoked Salmon Chowder",
			    "ingredients": [
			      "3-4 tablespoons butter",
			      "1 onion, chopped (about 2 cups)",
			      "5 carrots, peeled and diced (about 2 cups)",
			      "3 celery stalks, sliced into small pieces (about 2 cups)",
			      "½ cup white wine",
			      "6-7 new potatoes, washed and diced",
			      "1½ teaspoons dried thyme",
			      "4 cups broth (I used chicken broth but veg would work)",
			      "2 cups milk",
			      "1 tablespoon flour",
			      "1 cup cream",
			      "12-16 ounces smoked salmon (mine was hot smoked salmon which has a jerky-like texture and is already fully cooked)"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "soup"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/asiago-white-beans-with-farro-kale-tomatoes",
			    "recipeTitle": "Asiago White Beans with Farro, Kale, and Tomatoes",
			    "ingredients": [
			      "½ cup uncooked farro (usually found in the health foods or dry rice and beans section of the grocery store)",
			      "1½ cups vegetable or chicken broth",
			      "1 cup canned white beans, rinsed and drained",
			      "1 cup halved grape tomatoes",
			      "2 cups baby kale or spinach",
			      "½ cup Asiago or Parmesan cheese",
			      "1 cup tomato sauce (I am loving DeLallo Tomato Basil - no added sugar!)",
			      "salt and pepper to taste"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/jalapeno-quinoa-corn-dip",
			    "recipeTitle": "Jalapeño Quinoa Corn Dip",
			    "ingredients": [
			      "1 cup quinoa, rinsed",
			      "2 cups chicken or vegetable broth",
			      "2 ears sweet corn, kernels cut off the cob (almost 2 cups)",
			      "½ red onion, minced (about ½ cup)",
			      "1 tablespoon butter",
			      "1 tablespoon taco seasoning",
			      "2 cups chopped fresh baby spinach",
			      "½ cup nonfat plain Greek yogurt",
			      "¼ cup 2% milk",
			      "1 teaspoons white vinegar",
			      "1 tablespoons olive oil",
			      "1 clove garlic",
			      "½ teaspoon salt",
			      "¼ cup fresh herbs of choice - I like parsley, basil, cilantro, or chives",
			      "1 jalapeño pepper (the ribs and seeds are the HOT part, so remove those if you want a milder dressing)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/sticky-garlic-chicken-broccoli",
			    "recipeTitle": "Sticky Garlic Chicken and Broccoli",
			    "ingredients": [
			      "1½ pounds boneless, skinless chicken breast tenders",
			      "1 cup buttermilk (just use milk with a spoonful of vinegar if you don't have buttermilk)",
			      "1 cup panko breadcrumbs",
			      "¼ cup cornmeal",
			      "1 tablespoon olive oil",
			      "salt and pepper",
			      "3-4 cups broccoli florets",
			      "3 cloves garlic",
			      "1 1-inch piece fresh ginger",
			      "¾ cup light soy sauce",
			      "½ cup water",
			      "½ cup hoisin sauce",
			      "2 tablespoons honey",
			      "1 tablespoon white vinegar",
			      "2 teaspoons sambal oelek"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-tomato-lasagna-florentine",
			    "recipeTitle": "Creamy Tomato Lasagna Florentine",
			    "ingredients": [
			      "1 tablespoon olive oil",
			      "2-3 cloves garlic, minced",
			      "4-5 cups fresh spinach",
			      "2 cups 4% cottage cheese",
			      "2 eggs",
			      "¼ cup ground flaxmeal (see notes)",
			      "1 teaspoon oregano",
			      "1 teaspoon Italian seasoning (mine was salty - if you're using a non-salted variety, add an additional ¼-1/2 teaspoon salt)",
			      "a very tiny dusting of nutmeg",
			      "a squeeze of lemon juice",
			      "½ cup Parmesan cheese",
			      "4 cups tomato sauce (DeLallo Tomato Basil. DO IT.)",
			      "12 no-boil or oven ready lasagna noodles (see notes)",
			      "2½ cups shredded Mozzarella cheese"
			    ],
			    "cuisineType": [
			      "pasta",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/30-minute-spicy-ancho-turkey-chili",
			    "recipeTitle": "30 Minute Spicy Ancho Turkey Chili",
			    "ingredients": [
			      "1 cup farro (another grain like brown rice or quinoa would work)",
			      "2 cups chicken broth",
			      "3 cups water, divided",
			      "1 tablespoon olive oil",
			      "½ red onion, minced",
			      "2-3 cloves garlic, minced",
			      "2-3 jalapeños, minced (remove ribs and seeds if you don't want it to be spicy)",
			      "1 lb. ground turkey",
			      "1 14-ounce can black beans, rinsed and drained",
			      "2 teaspoons ancho chili powder",
			      "2 teaspoons chili powder",
			      "1 teaspoon cumin",
			      "1 teaspoon salt",
			      "1 cup salsa (works best with a \"fresh\" salsa brand like Salsa Lisa)",
			      "2 14-ounce cans crushed fire roasted tomatoes",
			      "toppings (sour cream, cheese, green onions, tortilla chips)"
			    ],
			    "cuisineType": [
			      "healthy",
			      "meat and chicken",
			      "quick and easy",
			      "soup"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/homemade-cheesy-chili-dip",
			    "recipeTitle": "Homemade Cheesy Chili Dip",
			    "ingredients": [
			      "1 lb. ground pork sausage",
			      "1 heaping tablespoon taco seasoning*",
			      "¼ teaspoon cayenne",
			      "1 14-ounce can black beans, rinsed",
			      "1½ cups salsa",
			      "½ cup water",
			      "2 tablespoons butter",
			      "3 tablespoons flour",
			      "1¾ cups milk",
			      "1 cup shredded cheese",
			      "fresh cilantro and/or green onions"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy",
			      "snacks"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/cheesy-bacon-kale-potato-skins",
			    "recipeTitle": "Cheesy Bacon & Kale Potato Skins",
			    "ingredients": [
			      "5 slices bacon",
			      "5 medium russet potatoes",
			      "2 tablespoons oil, divided",
			      "1 tablespoon butter",
			      "5 ounces kale",
			      "¾ cup almonds or pine nuts",
			      "1 handful basil leaves or other herbs (optional - see notes)",
			      "1 cup cooked chickpeas (optional - see notes)",
			      "¼ cup olive oil",
			      "¼ cup shredded Parmesan cheese",
			      "2-3 cloves garlic",
			      "½ teaspoon salt",
			      "1 cup any kind of shredded cheese - I used Chihuahua cheese"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lunch",
			      "snacks"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/garlic-butter-mushroom-risotto",
			    "recipeTitle": "Garlic Butter Mushroom Risotto",
			    "ingredients": [
			      "4 tablespoons butter, divided",
			      "4 cloves garlic, minced and divided",
			      "12 ounces uncooked arborio rice",
			      "3½ or 4 cups chicken or vegetable broth",
			      "a splash of dry white wine (optional)",
			      "12 ounces sliced baby portabella mushrooms",
			      "2-3 cups spinach or other veggies if you want",
			      "½ cup shaved Parmesan cheese",
			      "sea salt and freshly cracked black pepper",
			      "a squeeze of lemon (that was Bjork's idea! nice work, boo)"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/sweet-chili-garlic-chicken-pizza",
			    "recipeTitle": "Sweet Chili Garlic Chicken Pizza",
			    "ingredients": [
			      "1 tablespoon sugar",
			      "1½ teaspoons yeast",
			      "1 cup warm water",
			      "1 cup whole wheat flour",
			      "1½ cups white flour",
			      "¼ teaspoon salt",
			      "⅔ cup brown rice syrup (or corn syrup)",
			      "6 chiles (I used Fresno peppers)",
			      "1-2 cloves garlic",
			      "2 tablespoons rice vinegar",
			      "1 pineapple, cored (about 2-3 cups diced)",
			      "1 red bell pepper, diced",
			      "1 red onion, diced",
			      "½ cup fresh cilantro",
			      "lime juice, salt, and honey to taste",
			      "2 cups shredded cheese (I used Queso Chihuahua)",
			      "1 lb. grilled chicken breast, thinly sliced (JERK CHICKEN RECIPE HERE)"
			    ],
			    "cuisineType": [
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/super-simple-jerk-chicken",
			    "recipeTitle": "Super Simple Jerk Chicken",
			    "ingredients": [
			      "2 teaspoons allspice",
			      "2 tablespoons brown sugar",
			      "½ teaspoon cumin",
			      "¼ teaspoon cloves",
			      "¼ teaspoon cinnamon",
			      "1 teaspoon salt",
			      "½ teaspoon freshly ground black pepper",
			      "⅛ teaspoon cayenne pepper",
			      "1 tablespoon canola oil",
			      "1½ lbs. boneless skinless chicken breasts"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/rainbow-veggie-bowls-with-jalapeno-ranch",
			    "recipeTitle": "Rainbow Veggie Bowls with Jalapeño Ranch",
			    "ingredients": [
			      "1¼ cup nonfat plain Greek yogurt",
			      "½ cup 2% milk",
			      "2 teaspoons white vinegar",
			      "2 tablespoons olive oil",
			      "1 clove garlic",
			      "1 teaspoon salt",
			      "1 teaspoon dill (see notes)",
			      "1 handful fresh parsley leaves (about ¼ cup)",
			      "1 handful chives (about ¼ cup)",
			      "1 jalapeño pepper (see notes)",
			      "1 cup uncooked farro",
			      "3 cups vegetable broth",
			      "1 cup uncooked sprouted lentils (see notes)",
			      "½ tablespoon butter or oil",
			      "1½ cups corn kernels cut off the cob",
			      "1½ cups sliced cherry tomatoes",
			      "1½ cups sliced cucumbers",
			      "1½ cups snap peas",
			      "1-2 avocados",
			      "fresh herbs (I used basil)",
			      "nuts or seeds (I used crushed almonds)",
			      "salt and pepper to taste"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "quick and easy",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/best-10-minute-veggie-fried-rice",
			    "recipeTitle": "The Best 10 Minute Veggie Fried Rice",
			    "ingredients": [
			      "2 tablespoons sesame oil, divided",
			      "2 cloves garlic, minced",
			      "1 1-inch piece fresh ginger, grated*",
			      "3 eggs",
			      "4 cups brown rice (cooked, cooled, and separated)**",
			      "1 cup frozen corn",
			      "1-2 cups frozen peas",
			      "½ tablespoon rice vinegar",
			      "2-3 tablespoons soy sauce",
			      "fresh chives, fresh basil, baby spinach, any other add ins you want!"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/sweet-corn-zucchini-pie",
			    "recipeTitle": "Sweet Corn and Zucchini Pie",
			    "ingredients": [
			      "4 tablespoons butter",
			      "1 yellow onion, diced",
			      "2 ears sweet corn",
			      "2 large zucchini, sliced thin (about 4 cups)",
			      "8 ounces sliced mushrooms",
			      "1 tablespoon dried basil",
			      "1 teaspoon dried oregano",
			      "½ teaspoon salt",
			      "12 ounces shredded cheese (I used both Mozzarella and Swiss)",
			      "3 eggs, beaten"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/hot-ham-and-cheese-sandwiches-bacon-caramelized-onions",
			    "recipeTitle": "Hot Ham and Cheese Sandwiches with Bacon and Caramelized Onions",
			    "ingredients": [
			      "6 slices bacon",
			      "1 yellow onion",
			      "8 tablespoons salted butter, divided",
			      "2 teaspoons Dijon mustard",
			      "1 teaspoon Worcestershire sauce",
			      "1 package King's Hawaiian Hamburger Buns",
			      "2 pounds sliced deli ham",
			      "1 pound sliced Swiss (or any white melty) cheese"
			    ],
			    "cuisineType": [
			      "lunch",
			      "quick and easy",
			      "sandwiches"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/simple-hoisin-glazed-salmon",
			    "recipeTitle": "Simple Hoisin Glazed Salmon",
			    "ingredients": [
			      "½ cup low sodium soy sauce",
			      "½ cup water",
			      "¼ cup hoisin sauce",
			      "2-3 cloves garlic",
			      "1 1-inch piece fresh ginger",
			      "2 tablespoons honey",
			      "2 limes",
			      "1 lb. salmon - wild caught if you have access to it",
			      "1 tablespoon sesame oil",
			      "sesame seeds for topping"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "fish and seafood",
			      "healthy",
			      "lightened up",
			      "quick and easy",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/big-cluster-peanut-butter-granola",
			    "recipeTitle": "Big Cluster Peanut Butter Granola ",
			    "ingredients": [
			      "3½ cups rolled oats",
			      "1 cup salted or honey roasted peanuts (chopped if you want but not necessary)",
			      "¾ cup + 2 tablespoons whole wheat flour",
			      "1½ teaspoons baking powder",
			      "½ teaspoon salt",
			      "¾ cup natural peanut butter (doesn't have to be exact - messy mess)",
			      "¼ cup canola oil",
			      "⅔ cup real maple syrup",
			      "2 teaspoons vanilla",
			      "¼ cup milk (I used vanilla almond milk)"
			    ],
			    "cuisineType": [
			      "breakfast",
			      "everyday",
			      "quick and easy",
			      "snacks",
			      "sweet things"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/five-ingredient-simple-green-pasta-salad",
			    "recipeTitle": "Five Ingredient Simple Green Pasta Salad",
			    "ingredients": [
			      "2 cups cooked small tubular pasta",
			      "2 cups chopped green beans",
			      "2 cups shredded spinach",
			      "1 jar Oliviers and Co. basilic - basil and olive oil spread",
			      "½ cup Parmesan cheese",
			      "salt to taste",
			      "fresh lemon juice to taste",
			      "3 cloves garlic, minced",
			      "¼ cup Oliviers and Co. olive & basil oil",
			      "¼ cup Oliviers and Co. organic balsamic vinegar"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "healthy",
			      "pasta",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/sausage-sweet-potato-zucchini-lasagna",
			    "recipeTitle": "Sausage and Sweet Potato Zucchini Lasagna",
			    "ingredients": [
			      "3 large zucchini",
			      "1 lb. ground pork",
			      "2 large sweet potatoes (4-5 cups when cooked and cut)",
			      "1 cup milk",
			      "½ cup chicken broth",
			      "2 tablespoons olive oil",
			      "5 cloves garlic",
			      "2 teaspoons ancho chili powder (in the spice aisle)",
			      "2 teaspoons ground cumin",
			      "1½ teaspoons salt",
			      "½ cup chopped cilantro",
			      "½ cup chopped green onions",
			      "2 cups shredded Mozzarella or Provolone cheese"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "meat and chicken",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/beef-biryani",
			    "recipeTitle": "Beef Biryani ",
			    "ingredients": [
			      "1 white onion (half used here, half used below)",
			      "2 cloves garlic",
			      "½ cup cilantro leaves",
			      "1 1-inch piece ginger",
			      "¾ cup thick plain Greek yogurt",
			      "½ cup water",
			      "1 tablespoon butter",
			      "1 tablespoon oil",
			      "¼ cup slivered almonds",
			      "¼ cup golden raisins",
			      "1 lb. beef (I used a pack of pre-cubed meat that was labeled \"stew beef\")",
			      "1 tablespoon cumin (a little less is okay, just see how you feel about it)",
			      "1 teaspoon ground roasted coriander",
			      "½ teaspoon turmeric",
			      "½ teaspoon fenugreek seeds",
			      "½ teaspoon salt",
			      "1½ cups basmati rice",
			      "3 cups beef broth"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spaghetti-pie",
			    "recipeTitle": "Spaghetti Pie",
			    "ingredients": [
			      "1 lb. uncooked spaghetti",
			      "1 tablespoon olive oi",
			      "1 yellow onion",
			      "2 cloves of garlic (optional)",
			      "3 stalks of celery",
			      "3 carrots",
			      "1 handful of spinach",
			      "½ teaspoon dried basil",
			      "½ teaspoon dried oregano",
			      "tiny tiny sprinkle of nutmeg",
			      "½ teaspoon salt",
			      "15 ounces part skim ricotta cheese",
			      "2 eggs, beaten (see notes)",
			      "3-4 cups of your favorite tomato sauce (see notes)",
			      "1 cup shredded cheese, like Mozzarella",
			      "parsley and Parmesan for topping"
			    ],
			    "cuisineType": [
			      "pasta",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/balsamic-watermelon-chicken-salad",
			    "recipeTitle": "Balsamic Watermelon Chicken Salad",
			    "ingredients": [
			      "1 cup balsamic vinegar",
			      "1 lb. boneless skinless chicken breasts",
			      "3 teaspoons all purpose seasoning (I used a spice mix I got at a specialty food store)",
			      "1 tablespoons olive oil",
			      "4 cups baby spinach or greens",
			      "2 cups cubed watermelon",
			      "½ cup blue cheese crumbles",
			      "¼ cup sliced or crushed almonds"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "meat and chicken",
			      "quick and easy",
			      "salads"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/smoked-gouda-mushroom-quesadillas",
			    "recipeTitle": "Smoked Gouda Mushroom Quesadillas",
			    "ingredients": [
			      "1 yellow onion",
			      "2 bell peppers (I used red and yellow)",
			      "1 tablespoon olive oil",
			      "4 tablespoons butter, divided",
			      "16 ounces fresh sliced white mushrooms",
			      "1¼ cup shredded cheese (obvi, smoked gouda is my fave)",
			      "10 flour tortillas",
			      "sour cream and cilantro and anything else for topping"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "quick and easy",
			      "snacks",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/black-pepper-stir-fried-noodles",
			    "recipeTitle": "Black Pepper Stir Fried Noodles",
			    "ingredients": [
			      "½ tablespoon freshly ground black peppercorns",
			      "5-6 tablespoons soy sauce",
			      "3 tablespoons mirin (sweet rice wine)",
			      "2 tablespoons honey or sugar",
			      "1 1-inch piece ginger",
			      "3 cloves garlic",
			      "2 tablespoons cornstarch dissolved in 6 tablespoons water",
			      "2 tablespoons sesame oil",
			      "8 ounces udon noodles (rice noodles would also work)",
			      "2 cups spinach leaves",
			      "10 ounces extra firm tofu",
			      "sesame seeds for topping"
			    ],
			    "cuisineType": [
			      "healthy",
			      "quick and easy",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-shahi-korma",
			    "recipeTitle": "Chicken Shahi Korma",
			    "ingredients": [
			      "2 lbs. chicken breasts",
			      "1 2-inch piece ginger",
			      "8 cloves garlic",
			      "2 tablespoons lemon juice",
			      "3 tablespoons oil, divided",
			      "1 onion, minced",
			      "3 tablespoons tomato paste",
			      "1 cup half and half",
			      "1½ cups Greek yogurt",
			      "16 oz paneer, cubed",
			      "¾ cup golden raisins",
			      "½ cup cashews",
			      "½ cup chopped cilantro",
			      "1 teaspoon salt",
			      "½ cup cashews pieces",
			      "1 cup chicken broth (more to thin the sauce later)",
			      "¼ cup oil",
			      "1 tablespoon honey",
			      "2 teaspoons garam masala",
			      "1 teaspoon cinnamon",
			      "1 teaspoon turmeric",
			      "1 teaspoon ground coriander",
			      "1 teaspoon hot pepper flakes",
			      "1 teaspoon black peppercorns",
			      "½ teaspoon fenugreek seeds (if you can't find them, just skip em)",
			      "½ teaspoon cumin"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/simple-poached-egg-avocado-toast",
			    "recipeTitle": "Simple Poached Egg and Avocado Toast",
			    "ingredients": [
			      "2 eggs",
			      "2 slices whole grain bread",
			      "⅓ avocado (usually I cut it in half but don't use all of it. okay fine maybe I do.)",
			      "2 tablespoons shaved Parmesan cheese",
			      "salt and pepper for topping",
			      "fresh herbs (parsley, thyme, or basil) for topping",
			      "quartered heirloom tomatoes for serving"
			    ],
			    "cuisineType": [
			      "breakfast",
			      "eggs",
			      "everyday",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-grilled-sweet-potato-nachos",
			    "recipeTitle": "Healthy Grilled Sweet Potato Nachos",
			    "ingredients": [
			      "2 large sweet potatoes",
			      "1 tablespoon olive oil",
			      "1 teaspoon each chili powder and cumin",
			      "1 14-ounce can refried black beans (I like Amy's Organic brand)",
			      "1 cup frozen sweet corn",
			      "3 oz. multigrain tortilla chips (enough for a single layer)",
			      "chopped cilantro for topping",
			      "crumbled Cotija cheese for topping",
			      "½ teaspoon butter",
			      "1 large clove garlic, minced",
			      "1½ cups milk",
			      "2 tablespoons flour",
			      "¼ teaspoon salt - more to taste",
			      "½ cup shredded cheese of choice (I used Monterrey Jack)"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "snacks",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/herbed-quinoa-garden-veggie-salad",
			    "recipeTitle": "Herbed Quinoa Garden Veggie Salad",
			    "ingredients": [
			      "⅓ cup olive oil",
			      "3 tablespoons warm water",
			      "1 or 2 large cloves garlic, chopped",
			      "1 teaspoon agave nectar",
			      "juice of one lemon",
			      "salt and pepper to taste (I started with ¼ teaspoon salt)",
			      "a handful of parsley leaves",
			      "1 cup quinoa, rinsed",
			      "8 leaves romaine lettuce",
			      "3 large carrots, peeled",
			      "1 cup cherry or grape tomatoes, halved",
			      "¾ cup chopped herbs of choice (see notes)",
			      "Parmesan cheese for serving (optional)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-baked-pesto-rigatoni",
			    "recipeTitle": "Healthy Baked Pesto Rigatoni",
			    "ingredients": [
			      "1 lb. whole wheat rigatoni",
			      "2-3 cups chopped heirloom tomatoes",
			      "½ cup water",
			      "½ cup shredded cheese of choice (I used Asiago)",
			      "pesto (recipe follows)",
			      "2 cups spinach",
			      "1 cup kale",
			      "1 cup basil",
			      "¾ cup almonds or pine nuts",
			      "½ cup olive oil",
			      "¼ cup Parmesan or Asiago cheese",
			      "½ teaspoon salt",
			      "3 large cloves garlic",
			      "juice of 1 lemon (optional)"
			    ],
			    "cuisineType": [
			      "healthy",
			      "pasta",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/crispy-fish-tacos-jalapeno-sauce",
			    "recipeTitle": "Crispy Fish Tacos with Jalapeño Sauce",
			    "ingredients": [
			      "1 large jalapeño (if you like spicy, leave the ribs and seeds in there)",
			      "1 cup cilantro leaves",
			      "¼ cup green onions",
			      "¼ cup oil",
			      "¼ cup Greek yogurt",
			      "¼ cup water",
			      "½ avocado",
			      "½ teaspoon salt",
			      "2 lbs. firm white fish like cod",
			      "1 cup flour (see notes)",
			      "¼ cup + 2 tablespoons cornmeal",
			      "¼ cup cornstarch",
			      "1 teaspoon chili powder or spicy seasoning",
			      "1 teaspoon baking powder",
			      "½ teaspoon salt",
			      "1 cup light beer, such as Corona",
			      "1 egg, beaten",
			      "vegetable oil for frying",
			      "12 flour or corn tortillas",
			      "cilantro for topping",
			      "Cotija cheese for topping"
			    ],
			    "cuisineType": [
			      "fish and seafood"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chopped-thai-salad-sesame-garlic-dressing",
			    "recipeTitle": "Chopped Thai Salad with Sesame Garlic Dressing",
			    "ingredients": [
			      "⅓ cup canola oil",
			      "3 cloves garlic, peeled",
			      "3 tablespoons low sodium soy sauce",
			      "2 tablespoons water",
			      "2 tablespoons white distilled vinegar",
			      "2 tablespoons honey",
			      "1 tablespoon sesame oil",
			      "1 tablespoon lemongrass paste (ginger would also work)",
			      "a squeeze of lime juice",
			      "16 ounces frozen shelled edamame",
			      "5-6 cups baby kale",
			      "3 large carrots",
			      "2 bell peppers (1 red, 1 yellow)",
			      "1 cup cilantro leaves",
			      "3 green onions",
			      "¾ cup cashews (if you can find them, Trader Joe's Thai Lime and Chili Cashews are the bomb)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "salads",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/grilled-pineapple-pork-sandwiches",
			    "recipeTitle": "Grilled Pineapple Pork Sandwiches",
			    "ingredients": [
			      "2½ lbs. pork shoulder or pork butt",
			      "2 cloves minced garlic",
			      "1 red onion, diced",
			      "2 red bell peppers, diced",
			      "1-2 jalapenos, diced (keep the seeds for a little heat)",
			      "1 cup pineapple juice",
			      "½ cup soy sauce",
			      "8 King's Hawaiian sandwich buns",
			      "1 pineapple, peeled and cored",
			      "¼ cup fresh cilantro or parsley for topping"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "sandwiches"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-chipotle-shredded-chicken",
			    "recipeTitle": "Spicy Chipotle Shredded Chicken",
			    "ingredients": [
			      "3 individual chipotle peppers in adobo sauce + 1 teaspoon of their sauce",
			      "4 cloves garlic",
			      "1 tablespoon oil",
			      "1 cup freshly squeezed orange juice (store bought is fine - I just use my own so there's no added sugar)",
			      "1½ cups reduced sodium chicken broth",
			      "½ cup light beer (or replace with ½ cup broth)",
			      "½ cup fresh cilantro, chopped",
			      "1 pound boneless skinless chicken breasts",
			      "2 teaspoons yellow mustard"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/peanut-butter-banana-ice-cream",
			    "recipeTitle": "Peanut Butter Banana Ice Cream",
			    "ingredients": [
			      "3 large, ripe bananas",
			      "3 tablespoons natural peanut butter",
			      "¼ teaspoon vanilla extract",
			      "a super teeny-tiny dash of cinnamon",
			      "sea salt to taste",
			      "roasted peanuts for topping"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "breakfast",
			      "dessert",
			      "sweet things"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/honey-ginger-tofu-veggie-stir-fry",
			    "recipeTitle": "Honey Ginger Tofu and Veggie Stir Fry",
			    "ingredients": [
			      "1½ cup uncooked brown rice or farro",
			      "2 tablespoons canola oil",
			      "14 ounces extra firm tofu",
			      "2 cups chopped asparagus",
			      "2 cups shredded carrots",
			      "3 green onions, minced",
			      "3 cloves garlic",
			      "2 tablespoons fresh ginger",
			      "2 tablespoons honey (more to taste)",
			      "½ cup low sodium soy sauce",
			      "¼ cup water",
			      "¼ cup rice wine vinegar",
			      "¼ cup canola oil"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/12-fresh-recipes-for-your-summer-vacation",
			    "recipeTitle": "12 Fresh Recipes for your Summer Vacation",
			    "ingredients": [

			    ],
			    "cuisineType": [
			      "breakfast",
			      "lunch",
			      "quick and easy",
			      "recipes"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-bacon-avocado-salad-with-roasted-asparagus",
			    "recipeTitle": "Chicken Bacon Avocado Salad with Roasted Asparagus",
			    "ingredients": [
			      "8 slices good quality thick bacon (smoked is yummy)",
			      "1 tablespoon butter",
			      "2 cups chopped asparagus",
			      "1 teaspoon lemon pepper seasoning (more to taste)",
			      "4 cups spinach, cut or torn into bite-sized pieces",
			      "8 ounces chicken breast slices (I get it from the deli counter)",
			      "1 large ripe avocado",
			      "¼ cup good quality olive oil (I got mine from a Hampton's Lane package)",
			      "¼ cup good quality balsamic vinegar",
			      "fresh basil for topping"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "healthy",
			      "meat and chicken",
			      "quick and easy",
			      "salads"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-potato-kale-soup",
			    "recipeTitle": "Creamy Potato Kale Soup",
			    "ingredients": [
			      "5 tablespoons butter",
			      "1 large yellow onion, roughly chopped",
			      "3 large potatoes, peeled and roughly chopped",
			      "8 cups chicken or vegetable broth",
			      "2-3 cups chopped kale, stems removed",
			      "2 cups milk",
			      "salt and pepper to taste"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "soup",
			      "superfoods",
			      "uncategorized",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spaghetti-marinara-poached-eggs",
			    "recipeTitle": "Spaghetti Marinara with Poached Eggs",
			    "ingredients": [
			      "2 tablespoons olive oil",
			      "3 garlic cloves, minced",
			      "2 (14 ounce) cans fire roasted diced tomatoes, undrained",
			      "2 cups chicken broth*",
			      "½ cup red wine",
			      "1 teaspoon salt",
			      "1 teaspoon dried basil",
			      "1 teaspoon dried oregano",
			      "8 ounces uncooked whole wheat spaghetti",
			      "4 eggs",
			      "fresh basil for topping",
			      "cracked pepper to taste"
			    ],
			    "cuisineType": [
			      "pasta",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/green-mexican-rice-with-corn",
			    "recipeTitle": "Green Mexican Rice with Corn",
			    "ingredients": [
			      "2 cups spinach",
			      "½ cup or more cilantro leaves",
			      "1 jalapeno or serrano pepper",
			      "2 cloves garlic",
			      "¼ cup canola oil",
			      "2 cups long grain white rice",
			      "3 cups water",
			      "½ teaspoon salt (more to taste)",
			      "1 cup corn"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spring-quinoa-salad-honey-lemon-vinaigrette",
			    "recipeTitle": "Spring Quinoa Salad with Honey Lemon Vinaigrette",
			    "ingredients": [
			      "1 cup uncooked quinoa",
			      "2-3 cups frozen peas",
			      "½ cup feta cheese",
			      "6 slices bacon, cooked and crumbled",
			      "½ cup freshly chopped basil and cilantro",
			      "½ cup almonds, pulsed in a food processor until crushed",
			      "⅓ cup freshly squeezed lemon juice (1-2 large juicy lemons)",
			      "⅓ cup olive oil",
			      "¼ teaspoon salt (more to taste)",
			      "a few tablespoons honey (I did 3, but adjust to taste)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-poblano-mushrooms-polenta",
			    "recipeTitle": "Creamy Poblano Mushrooms with Polenta",
			    "ingredients": [
			      "2 poblano peppers",
			      "¾ cup light sour cream",
			      "¼ cup water",
			      "2 tablespoons oil",
			      "1 teaspoon minced garlic",
			      "½ teaspoon salt",
			      "½ cup sliced green onions",
			      "1 cup cornmeal",
			      "½ teaspoon salt",
			      "2 tablespoons salted butter, divided",
			      "16 ounces sliced mushrooms (I used baby bella and white button mushrooms)",
			      "1 teaspoon minced garlic",
			      "1 scant tablespoon cornstarch dissolved in 2 tablespoons cold water (optional)"
			    ],
			    "cuisineType": [
			      "healthy",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/garlic-parmesan-chicken-lasagna-bake",
			    "recipeTitle": "Garlic Parmesan Chicken Lasagna Bake",
			    "ingredients": [
			      "10-15 no-boil lasagna noodles",
			      "3 cups cooked, shredded chicken (use rotisserie chicken for lots of yummy flavor)",
			      "12 ounces frozen peas",
			      "½ cup Parmesan cheese",
			      "½ cup Swiss cheese",
			      "1 cup water",
			      "¼ cup seasoned breadcrumbs",
			      "fresh herbs for topping",
			      "6 tablespoons butter",
			      "1½ tablespoons minced garlic",
			      "6 tablespoons flour",
			      "½ teaspoon poultry seasoning",
			      "¾ teaspoon salt",
			      "5 cups milk"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-peanut-chicken-soba-noodle-salad",
			    "recipeTitle": "Spicy Peanut Chicken Soba Noodle Salad",
			    "ingredients": [
			      "1 lb. boneless skinless chicken breasts",
			      "1 each red, green, and yellow bell pepper",
			      "8.8 (250 grams) soba noodles",
			      "fresh cilantro or basil to taste",
			      "5 tablespoons peanut butter",
			      "5 tablespoons water",
			      "5 tablespoons low sodium soy sauce",
			      "2 tablespoons sesame oil",
			      "2 tablespoons honey",
			      "1 tablespoon white vinegar",
			      "1 teaspoon minced garlic",
			      "half of a jalapeño pepper",
			      "½ cup peanuts"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "meat and chicken",
			      "pasta",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/30-minute-healthy-broccoli-cheese-rice",
			    "recipeTitle": "30 Minute Healthy Broccoli Cheese Rice ",
			    "ingredients": [
			      "1 cup uncooked brown rice (I used a brown rice blend from Costco - love it)",
			      "1 head broccoli, cut into florets",
			      "3 tablespoons butter",
			      "2 teaspoons minced garlic",
			      "½ teaspoon salt",
			      "6 tablespoons almond meal",
			      "1 cup milk",
			      "½ cup shredded cheddar cheese",
			      "½ cup broth as needed",
			      "1 14-ounce can white beans, rinsed and drained",
			      "crushed almonds for topping",
			      "sliced green onions for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/ham-sausage-hash-brown-egg-bake",
			    "recipeTitle": "Ham and Sausage Hash Brown Egg Bake",
			    "ingredients": [
			      "4 ounces ground spicy Italian sausage",
			      "2 cups chopped Smithfield ham",
			      "4 eggs",
			      "¼ cup milk",
			      "½ teaspoon seasoning of your choice - I used Emeril's Original Essence",
			      "¼ teaspoon garlic powder",
			      "1 lb. shredded potatoes (I used a package of refrigerated hashbrowns)",
			      "½ cup shredded cheese",
			      "green onions for topping"
			    ],
			    "cuisineType": [
			      "breakfast",
			      "eggs",
			      "gluten free",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/sweet-potato-kale-sausage-bake-white-cheese-sauce",
			    "recipeTitle": "Sweet Potato, Kale, and Sausage Bake with White Cheese Sauce",
			    "ingredients": [
			      "2 teaspoons olive oil",
			      "2 medium sweet potatoes, peeled and cubed (3-4 cups)",
			      "16 ounces Italian pork or chicken sausage, cut into small rounds",
			      "2 cups low sodium chicken broth",
			      "¾ cup milk",
			      "¼ cup flour",
			      "¾ cup shredded Gruyere cheese",
			      "2 cups finely chopped kale"
			    ],
			    "cuisineType": [
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/10-meals-you-should-make-for-your-friends-with-new-babies",
			    "recipeTitle": "10 Meals You Should Make for Your Friends with New Babies",
			    "ingredients": [

			    ],
			    "cuisineType": [
			      "life"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/orange-brown-butter-shrimp",
			    "recipeTitle": "Spicy Shrimp with Orange Brown Butter Sauce + Vacation Pics ",
			    "ingredients": [
			      "½ cup butter",
			      "1 teaspoon fresh thyme",
			      "zest of one orange",
			      "2 teaspoons minced garlic",
			      "2 lbs. raw shrimp",
			      "½ teaspoon chili powder",
			      "salt and pepper to taste"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "fish and seafood",
			      "gluten free",
			      "life",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/20-minute-lemon-pesto-penne",
			    "recipeTitle": "20-Minute Lemon Pesto Penne",
			    "ingredients": [
			      "8 ounces whole wheat penne",
			      "2 cups baby broccoli",
			      "1 cup oven roasted tomatoes (I used Kirkland brand and rinsed excess oil)",
			      "1 teaspoon minced garlic (optional)",
			      "¼ cup pesto",
			      "¼ cup feta cheese",
			      "juice of ½ lemon",
			      "fresh basil, cut into ribbons"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/green-goddess-detox-salad",
			    "recipeTitle": "Green Goddess Detox Salad + Vacation Pictures",
			    "ingredients": [
			      "4 cups spinach",
			      "1-2 cups pea shoots",
			      "½ cup feta cheese",
			      "½ cup almonds, crushed or chopped",
			      "1 avocado, cut into chunks",
			      "½ jalapeño pepper (I left the ribs and seeds - it was spicy and delicious)",
			      "⅔ cup Greek yogurt",
			      "Juice from 1 lime",
			      "¼ cup olive oil",
			      "½ teaspoon salt",
			      "1 tablespoon agave nectar",
			      "½ teaspoon minced garlic",
			      "½ cup packed cilantro",
			      "2 scallions"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lunch",
			      "salads",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/slow-cooker-creole-chicken-sausage",
			    "recipeTitle": "Slow Cooker Creole Chicken and Sausage",
			    "ingredients": [
			      "1 pound boneless skinless chicken breasts",
			      "12 ounces smoked Andouille sausage, cut into small rounds",
			      "1 cup chopped onions",
			      "2 cloves minced garlic",
			      "1¼ cup low sodium chicken broth",
			      "1 can (14.5 ounces) diced tomatoes",
			      "3 tablespoons tomato paste",
			      "½ cup tomato sauce",
			      "2 teaspoons Creole seasoning",
			      "¼ teaspoon cayenne",
			      "1 tablespoon brown sugar",
			      "1 14 ounce can black beans, rinsed and drained",
			      "2 green bell peppers, chopped",
			      "½ cup sliced green onions for topping",
			      "2 tablespoons almond butter (randomly delicious)",
			      "salt to taste",
			      "brown rice for serving"
			    ],
			    "cuisineType": [
			      "lightened up",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/skinny-spinach-lasagna",
			    "recipeTitle": "Skinny Spinach Lasagna",
			    "ingredients": [
			      "2 tablespoons butter",
			      "1 tablespoon minced garlic",
			      "2 teaspoons minced fresh thyme",
			      "6 ounces fresh spinach",
			      "2 lbs. ricotta cheese (I used 1 lb. whole milk and 1 lb. nonfat)",
			      "1 egg",
			      "½ teaspoon salt",
			      "¼ teaspoon nutmeg",
			      "a squeeze of lemon juice (optional, to taste)",
			      "12 no-boil lasagna noodles",
			      "1 24 ounce jar of spaghetti or marinara sauce (I used Trader Joe's tomato basil)",
			      "2 cups shredded mozzarella cheese"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "pasta",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-sweet-potato-wild-rice-arugula-salad",
			    "recipeTitle": "Roasted Sweet Potato, Wild Rice, and Arugula Salad",
			    "ingredients": [
			      "2 cups cooked wild rice (about ½ cup raw)",
			      "2 large sweet potatoes, peeled and diced (about 3-4 cups)",
			      "1 tablespoon olive oil",
			      "1 teaspoon chili powder",
			      "salt and pepper to taste",
			      "3 cups arugula",
			      "½ cup cashew pieces",
			      "¼ cup freshly squeezed lemon juice (about 2 lemons - more to taste)",
			      "zest of the lemons",
			      "⅓ cup good quality olive oil",
			      "2 teaspoons agave nectar",
			      "2 cloves garlic",
			      "¼ teaspoon salt"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/sticky-bourbon-chicken-rice",
			    "recipeTitle": "Sticky Bourbon Chicken with Rice",
			    "ingredients": [
			      "1½ lbs. chicken thighs (I used boneless skinless - delish!)",
			      "½ cup low sodium soy sauce",
			      "¼ cup oil",
			      "¼ cup vinegar",
			      "¼ cup bourbon",
			      "¼ cup brown sugar",
			      "1 tablespoon crushed or sliced ginger (fresh, not dried)",
			      "4 cloves crushed garlic",
			      "4-5 green onions, cut into thirds or sliced",
			      "1 cup uncooked basmati rice"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-shrimp-avocado-salad-miso-dressing",
			    "recipeTitle": "Shrimp and Avocado Salad with Miso Dressing",
			    "ingredients": [
			      "1 teaspoon minced garlic",
			      "½ pound raw shrimp, tails removed",
			      "½ tablespoon butter",
			      "½ teaspoon chili powder",
			      "¼ teaspoon cayenne",
			      "1½ cups sliced avocados (2 small)",
			      "1 cucumber",
			      "4 cups chopped spinach or baby kale",
			      "fresh chopped cilantro for topping",
			      "peanuts for topping",
			      "1 1-inch piece of fresh peeled ginger",
			      "3 tablespoons oil",
			      "3 tablespoons lime juice (more to taste)",
			      "2 tablespoons agave nectar",
			      "1½ tablespoons white miso (it's like a paste - you can buy it at many regular grocery stores)",
			      "½ teaspoon minced garlic",
			      "¼ teaspoon salt"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/quick-homemade-ramen",
			    "recipeTitle": "Quick Homemade Ramen",
			    "ingredients": [
			      "1 tablespoon sesame oil",
			      "3 teaspoons grated ginger",
			      "4 teaspoons grated garlic",
			      "4 cups broth (I used chicken, but vegetable would also work)",
			      "4 cups water",
			      "1 ounce dried shiitake mushrooms",
			      "2 packages instant ramen (noodles only!)",
			      "½ cup chopped scallions or chives",
			      "2 cup chopped kale",
			      "1 cups shredded carrots",
			      "Sriracha to taste",
			      "crunchy golden panko crumbs for topping (see notes)"
			    ],
			    "cuisineType": [
			      "lightened up",
			      "pasta",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-mexican-casserole-roasted-corn-peppers",
			    "recipeTitle": "Healthy Mexican Casserole with Roasted Corn and Peppers",
			    "ingredients": [
			      "2 red bell peppers",
			      "2 green bell peppers",
			      "1 jalapeno or 2 chipotle peppers (optional - just for more kick)",
			      "½ red onion",
			      "2 cups frozen corn",
			      "2 teaspoons chili powder",
			      "2 teaspoon cumin",
			      "salt to taste (about 1 teaspoon is a good ballpark measure)",
			      "2 cups Mexican cheese (mine was a Sargento blend)",
			      "18-20 corn tortillas",
			      "1 can refried beans",
			      "2 cups red enchilada sauce",
			      "cilantro, guacamole, or sour cream for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-mac-and-cheese",
			    "recipeTitle": "Healthy Mac and Cheese",
			    "ingredients": [
			      "2 cups uncooked elbow macaroni - whole wheat, low glycemic, gluten free... any will work!",
			      "1 tablespoon butter",
			      "1 small yellow onion",
			      "1 small butternut squash (4-5 cups cubed)",
			      "5 cups chicken or vegetable broth",
			      "¾ cup milk",
			      "1 teaspoon salt",
			      "⅔ cup shredded cheese - I like Gruyère but any kind will work",
			      "parsley for topping",
			      "salt and pepper to taste"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "pasta",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/caramelized-brussels-sprouts-maple-orange-glaze",
			    "recipeTitle": "Caramelized Brussels Sprouts with Maple Orange Glaze",
			    "ingredients": [
			      "6 slices bacon",
			      "20 brussels sprouts",
			      "juice of one navel orange (I got about ¼ cup)",
			      "1 shallot, peeled and quartered",
			      "¼ cup olive oil",
			      "2 teaspoons stone ground mustard",
			      "2 teaspoons cane vinegar (any kind would work)",
			      "2 teaspoons real maple syrup",
			      "½ teaspoon salt",
			      "Parmesan for topping"
			    ],
			    "cuisineType": [
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-chicken-quinoa-broccoli-casserole",
			    "recipeTitle": "Creamy Chicken Quinoa and Broccoli Casserole",
			    "ingredients": [
			      "2 cups reduced sodium chicken broth",
			      "1 cup milk (I used 2%)",
			      "1 teaspoon poultry seasoning",
			      "½ cup flour",
			      "2 cups water, divided",
			      "1 cup uncooked quinoa, rinsed",
			      "¼ cup cooked, crumbled bacon (optional... sort of)",
			      "1 pound boneless skinless chicken breasts",
			      "2 teaspoons seasoning (like Emeril's Essence or any basic blend you like)",
			      "¼ cup shredded Gruyere cheese (any kind will work)",
			      "3 cups fresh broccoli florets"
			    ],
			    "cuisineType": [
			      "lightened up",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/super-easy-slow-cooker-pork",
			    "recipeTitle": "Super Easy Slow Cooker Pork",
			    "ingredients": [
			      "3 lbs. pork shoulder",
			      "1 cup soda (I used Sprite)",
			      "2 teaspoons minced garlic",
			      "2 teaspoons chili powder",
			      "1 teaspoon ground oregano",
			      "2 tablespoons Worcestershire sauce",
			      "1 cup Marzetti Simply Dressed Balsamic dressing"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/skinny-crab-artichoke-dip",
			    "recipeTitle": "Skinny Crab and Artichoke Dip with Jalapeño",
			    "ingredients": [
			      "1 jalapeno",
			      "1 red bell pepper",
			      "14 ounces canned or jarred artichoke hearts",
			      "8 ounces canned jumbo lump crab meat",
			      "2 tablespoons salted butter",
			      "2 tablespoons flour",
			      "1 1/4 cups 2% milk",
			      "1/2 teaspoon salt",
			      "1/4 cup shredded cheese (I used a combination of Parmesan and Gruyere)",
			      "3 scallions, sliced",
			      "1 tablespoon fresh lemon juice",
			      "chips for dipping, extra cheese for topping"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "lightened up",
			      "quick and easy",
			      "snacks"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/red-thai-curry-sauce",
			    "recipeTitle": "Red Thai Curry Sauce",
			    "ingredients": [
			      "1 can light coconut milk",
			      "2 tablespoons peanut butter",
			      "2 tablespoons red curry paste",
			      "1 ½ tablespoons fish sauce (see notes)",
			      "2 tablespoons lime juice",
			      "3 tablespoons brown sugar",
			      "1 teaspoon minced garlic",
			      "⅓ cup crushed peanuts",
			      "up to ½ cup water or broth",
			      "extra crushed peanuts and scallions for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "quick and easy",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/garlic-butter-shrimp-quinoa",
			    "recipeTitle": "Garlic Butter Shrimp and Quinoa",
			    "ingredients": [
			      "1 tablespoon olive oil",
			      "½ cup finely chopped onion",
			      "5 teaspoons minced garlic, divided",
			      "2 cups uncooked quinoa",
			      "1 teaspoon chili powder, divided",
			      "4 cups vegetable or chicken broth",
			      "6 tablespoons salted butter, divided",
			      "1 pound raw tail-on shrimp",
			      "salt and pepper to taste",
			      "fresh parsley for serving",
			      "fresh lemon juice for serving"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "gluten free",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/rainbow-chicken-salad-almond-honey-mustard-dressing",
			    "recipeTitle": "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
			    "ingredients": [
			      "2 teaspoons olive oil",
			      "8 ounces boneless, skinless chicken breasts (mine were cut into smaller, thinner pieces which made the sauteing a bit easier)",
			      "½ teaspoon salt",
			      "½ teaspoon pepper",
			      "1 teaspoon chili powder",
			      "2 cups grapes, halved",
			      "1 cup fresh blueberries",
			      "3 cups curly lettuce, chopped",
			      "½ cup feta cheese",
			      "½ cup almonds, chopped or crushed",
			      "3 tablespoons almond butter",
			      "1 tablespoon olive oil",
			      "2 tablespoons freshly squeezed orange juice",
			      "3 tablespoons water",
			      "1 tablespoon stoneground mustard",
			      "½ tablespoon raw honey",
			      "¼ teaspoon salt, more to taste",
			      "½ teaspoon garlic"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "meat and chicken",
			      "quick and easy",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/simple-garlic-butter-mushroom-provolone-melts",
			    "recipeTitle": "Simple Garlic Butter Mushroom & Provolone Melts",
			    "ingredients": [
			      "2 tablespoons butter",
			      "8 ounces fresh baby bella mushrooms",
			      "2 teaspoons minced garlic",
			      "3 tablespoons white wine",
			      "2 tablespoons minced parsley",
			      "2 slices Provolone cheese",
			      "4 slices wheat bread"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "quick and easy",
			      "sandwiches",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/stir-fried-singapore-noodles-with-garlic-ginger-sauce",
			    "recipeTitle": "Stir Fried Singapore Noodles with Garlic Ginger Sauce",
			    "ingredients": [
			      "4 ounces thin rice noodles",
			      "1 tablespoon oil",
			      "2 bell peppers, thinly sliced",
			      "2 shallots, thinly sliced",
			      "1 cup bean sprouts",
			      "1 teaspoon curry powder",
			      "1 cup sliced shiitake mushrooms",
			      "1 cup frozen peas",
			      "sliced scallions for topping",
			      "1 cup low sodium chicken broth (vegetable broth for vegan/vegetarian)",
			      "¼ cup low sodium soy sauce",
			      "3 tablespoons mirin",
			      "2 teaspoons minced garlic",
			      "1 teaspoon minced ginger (I used a ginger paste)",
			      "½ teaspoon sambal oelek (adds spiciness - more to taste)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "pasta",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/jalapeno-lime-chicken-soup",
			    "recipeTitle": "Jalapeño Lime Chicken Soup",
			    "ingredients": [
			      "4 cups chicken broth",
			      "4 cups water",
			      "2 pounds chicken breasts",
			      "5 jalapeños, ribs and seeds removed",
			      "½ large red onion",
			      "4 14 ounce cans white beans (canellini or great northern)",
			      "2 16 ounce jars salsa verde (I like Guy Fieri’s)",
			      "4 limes",
			      "½ teaspoon salt",
			      "fresh cilantro for serving",
			      "sour cream for serving",
			      "shredded cheese for serving"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken",
			      "quick and easy",
			      "soup"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/super-easy-skinny-veggie-crockpot-lasagna",
			    "recipeTitle": "Super Easy Skinny Veggie Crockpot Lasagna",
			    "ingredients": [
			      "(2) 24 ounce jars or cans of Italian tomato sauce (see notes)",
			      "9 thick lasagna noodles with wavy edges (mine were called bronze cut)",
			      "24 ounces part-skim ricotta cheese OR cottage cheese",
			      "3-4 cups chopped vegetables of choice (I used kale)",
			      "2 cups shredded Mozzarella or Provolone cheese",
			      "Parmesan cheese for topping",
			      "fresh parsley for topping"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "lightened up",
			      "pasta",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/garlic-tostones-puerto-rican-fried-plantains",
			    "recipeTitle": "Garlic Tostones: Puerto Rican Fried Plantains with Rice and Beans",
			    "ingredients": [
			      "2 plantains",
			      "1-2 cups oil for frying",
			      "1 tablespoon minced garlic",
			      "1 cup water",
			      "sea salt"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "lindsay's faves",
			      "quick and easy",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/queso-crockpot-chicken-chili-with-roasted-corn-and-jalapeno",
			    "recipeTitle": "Queso Crockpot Chicken Chili with Roasted Corn and Jalapeño",
			    "ingredients": [
			      "1 pound boneless, skinless chicken breasts",
			      "3 cups salsa, divided",
			      "1½ cups water",
			      "1 teaspoon cumin",
			      "2 teaspoons chili powder",
			      "½ teaspoon salt",
			      "3 bell peppers, minced",
			      "1 14 ounce can corn, rinsed and drained",
			      "1 jalapeno pepper, minced (without ribs and seeds)",
			      "1 14 ounce can black beans, rinsed and drained",
			      "4 ounces light cream cheese",
			      "6 ounces Pepper Jack cheese",
			      "cilantro for topping",
			      "blue corn tortilla chips for yummy dippin'"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken",
			      "quick and easy",
			      "soup",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/moroccan-salad-cilantro-orange-dressing",
			    "recipeTitle": "Moroccan Salad with Cilantro Orange Dressing",
			    "ingredients": [
			      "½ cup bulgur, uncooked",
			      "½ cup pitted dates, chopped",
			      "½ teaspoon salt",
			      "¼ cup pistachios",
			      "1 orange, peeled and cut into sections",
			      "2 cups baby spinach leaves",
			      "1 orange, peeled",
			      "1 tablespoon olive oil",
			      "1 tablespoon apple cider vinegar",
			      "½ teaspoon salt",
			      "½ cup fresh cilantro leaves, packed",
			      "2 tablespoons water to adjust consistency"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "salads",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/crockpot-chicken-wild-rice-soup",
			    "recipeTitle": "Crockpot Chicken Wild Rice Soup",
			    "ingredients": [
			      "1 cup uncooked wild rice",
			      "1 pound chicken breasts",
			      "2 cups mirepoix (chopped celery, carrots, and onions)",
			      "6 cups chicken broth",
			      "1 teaspoon poultry seasoning",
			      "½ cup butter",
			      "¾ cup flour",
			      "2 cups whole milk",
			      "a few tablespoons white wine (optional)",
			      "up to 2 cups additional milk or water"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy",
			      "soup"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/simple-san-marzano-pasta-e-fagioli",
			    "recipeTitle": "Simple San Marzano Pasta e Fagioli ",
			    "ingredients": [
			      "1 lb. chicken sausages in casing. GO SPICY if u dare.",
			      "1½ cups mirepoix - chopped celery, carrot, and onion*",
			      "3 cloves garlic, minced",
			      "1½ teaspoons ground oregano",
			      "½ teaspoon salt",
			      "1 bay leaf",
			      "1 28-ounce can San Marzano tomatoes",
			      "1 14-ounce can cannellini beans",
			      "28 ounces chicken broth",
			      "1 lb. small pasta - I used orchiette",
			      "8 ounces fresh baby spinach",
			      "shaved Parmigiano Reggiano cheese for topping"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "meat and chicken",
			      "pasta",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chopped-brussels-sprout-salad-creamy-shallot-dressing",
			    "recipeTitle": "Chopped Brussels Sprouts Salad with Creamy Shallot Dressing",
			    "ingredients": [
			      "30-40 brussels sprouts (makes about 4 cups shredded)",
			      "6 slices bacon",
			      "1 cup pomegranate arils",
			      "⅓ cup almonds",
			      "½ cup freshly grated Pecorino Romano cheese",
			      "1 shallot, chopped",
			      "juice of one orange",
			      "juice of one lemon",
			      "½ teaspoon salt",
			      "1 tablespoon honey",
			      "2 tablespoons Greek yogurt",
			      "⅓ cup oil",
			      "up to 2 tablespoons water"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/butternut-squash-mushroom-enchiladas-with-tomatillo-sauce",
			    "recipeTitle": "Butternut Squash & Mushroom Enchiladas with Tomatillo Sauce",
			    "ingredients": [
			      "1 small onion, chopped",
			      "1 large jalapeño, chopped, seeds and ribs removed",
			      "1 cup chopped bell pepper (2 peppers)",
			      "2 tablespoons butter",
			      "2-3 cups butternut squash, peeled and cubed",
			      "½ teaspoon chili powder",
			      "½ teaspoon cumin",
			      "½ teaspoon salt",
			      "16 ounces fresh chopped mushrooms",
			      "12-15 corn tortillas",
			      "2 cups shredded cheese",
			      "Mexican toppings: cilantro, avocado, queso fresco",
			      "2 lbs. tomatillos",
			      "4 cloves garlic",
			      "½ cup cilantro",
			      "2 cups broth",
			      "½ cup half and half or cream",
			      "salt to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-chicken-caesar-lasagna",
			    "recipeTitle": "Creamy Chicken Caesar Lasagna",
			    "ingredients": [
			      "2 tablespoons butter",
			      "3 tablespoons flour",
			      "1½ cups milk",
			      "4 ounces light cream cheese",
			      "½ teaspoon salt",
			      "ground black pepper to taste",
			      "½ cup  Marzetti Simply Dressed Caesar Dressing",
			      "½ cup Parmesan cheese",
			      "9 lasagna noodles",
			      "3 cups cooked, shredded chicken",
			      "3 cups Mozzarella cheese",
			      "3 cups chopped spinach or kale",
			      "½ cup sun dried tomatoes packed in oil"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "pasta"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-corn-pudding-with-crispy-onions-herbs",
			    "recipeTitle": "Creamy Corn Pudding with Crispy Onions and Herbs",
			    "ingredients": [
			      "⅔ cup yellow cornmeal",
			      "⅔ cup flour",
			      "3 tablespoons sugar",
			      "1 tablespoon baking powder",
			      "1 teaspoon salt",
			      "2 tablespoons oil",
			      "1 cup light sour cream or Greek yogurt (I used a half cup of each)",
			      "½ cup salted butter, melted",
			      "1 egg",
			      "1 15-ounce can regular corn, drained",
			      "1 15-ounce can cream style corn",
			      "½ teaspoon salt",
			      "1½ cups crispy onions (I buy the ones in the salad section)",
			      "½ cup fresh chopped parsley or other herb of choice"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/quick-easy-pizza-bread",
			    "recipeTitle": "Quick and Easy Pizza Bread",
			    "ingredients": [
			      "1 teaspoon olive oil",
			      "3 cups chopped bell peppers (I used green, yellow, and red)",
			      "2 cups chopped mushrooms",
			      "salt to taste",
			      "1 lb. ground beef",
			      "1½ cups pizza sauce",
			      "½ cup shredded cheddar cheese",
			      "8 small ciabatta loaves"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/pomegranate-kale-wild-rice-salad-with-walnuts-feta",
			    "recipeTitle": "Pomegranate, Kale, and Wild Rice Salad with Walnuts and Feta",
			    "ingredients": [
			      "1 cup pomegranate seeds",
			      "2 cups chopped baby kale",
			      "2 cups cooked wild rice (you can use leftover rice or buy precooked)",
			      "¼ cup toasted walnuts",
			      "¼ cup feta cheese",
			      "½ cup minced onion or shallot",
			      "2 tablespoons olive oil",
			      "2 tablespoons water",
			      "2 tablespoons honey",
			      "½ tablespoon apple cider vinegar",
			      "½ teaspoon salt",
			      "1 squeeze lemon or orange juice"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "salads",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/mexican-roasted-corn-quinoa-stuffed-squash",
			    "recipeTitle": "Mexican Roasted Corn and Quinoa Stuffed Squash",
			    "ingredients": [
			      "3 small acorn squash",
			      "¾ cup uncooked red quinoa",
			      "1½ cups rinsed black beans",
			      "¾ cup corn",
			      "1 teaspoon chili powder",
			      "½ teaspoon cumin",
			      "½ teaspoon salt",
			      "½ cup cheddar cheese",
			      "sliced green onions for topping",
			      "Queso fresco and crema Mexicana for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/shrimp-garlic-rice-stuffed-peppers-ecookbook-sale",
			    "recipeTitle": "Shrimp and Garlic Rice Stuffed Peppers + eCookbook Sale",
			    "ingredients": [

			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "quick and easy",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/harvest-wild-rice-skillet",
			    "recipeTitle": "Harvest Wild Rice Skillet",
			    "ingredients": [
			      "1 small onion, minced",
			      "1 tablespoon butter",
			      "2 cups peeled, cubed butternut squash",
			      "¼ teaspoon dried thyme (more to taste)",
			      "2 cups cooked wild rice",
			      "2 cups baby kale",
			      "2 cups chopped (crispy juicy unpeeled) apples",
			      "2 tablespoons cream, milk, or butter",
			      "½ cup shredded Provolone cheese",
			      "salt to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/skinny-spaghetti-and-meatballs",
			    "recipeTitle": "Skinny Spaghetti and Meatballs",
			    "ingredients": [
			      "1⅓ lbs. lean ground turkey",
			      "2 cups minced bell peppers (about 15 mini peppers)",
			      "2 large eggs",
			      "¼ cup freshly grated Parmesan cheese",
			      "¾ cup Italian seasoned whole wheat breadcrumbs",
			      "½ teaspoon salt, plus extra salt and pepper",
			      "35 ounces super smooth spaghetti sauce (my preference)",
			      "16 ounces uncooked spaghetti",
			      "fresh minced parsley and additional cheese for topping"
			    ],
			    "cuisineType": [
			      "bjork's faves",
			      "healthy",
			      "lightened up",
			      "meat and chicken",
			      "pasta",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/honey-glazed-crockpot-chicken-adobo",
			    "recipeTitle": "Honey Glazed Crockpot Chicken Adobo",
			    "ingredients": [
			      "3 lbs. or more boneless skinless chicken thighs",
			      "1 cup soy sauce (Silver Swan is the Filipino brand I use)",
			      "½ cup white cane vinegar",
			      "8-10 cloves garlic, peeled and smashed",
			      "3 bay leaves",
			      "½ teaspoon whole black peppercorns",
			      "¼ cup + 2 tablespoons honey",
			      "2 tablespoons cornstarch",
			      "lime or calamansi for topping",
			      "rice for serving"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-garlic-rosemary-pumpkin-hummus",
			    "recipeTitle": "Roasted Garlic & Rosemary Pumpkin Hummus",
			    "ingredients": [
			      "1-2 cloves roasted garlic (see #1)",
			      "2 tablespoons olive oil",
			      "2 tablespoons water",
			      "1 can chickpeas, drained and rinsed",
			      "⅔ cup pumpkin puree",
			      "1 tablespoon maple syrup or honey",
			      "½ teaspoon finely minced fresh rosemary (more to taste)",
			      "salt to taste"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "healthy",
			      "lunch",
			      "quick and easy",
			      "snacks",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/crockpot-sweet-potato-lentils",
			    "recipeTitle": "Crockpot Sweet Potato Lentils",
			    "ingredients": [
			      "3 large sweet potatoes, diced (about 6 cups)",
			      "3 cups vegetable broth",
			      "1 onion, minced",
			      "4 cloves garlic, minced",
			      "2 teaspoon each ground coriander, garam masala, and chili powder",
			      "½ teaspoon salt",
			      "1½ cups uncooked red lentils (masoor dal)",
			      "1 can coconut milk",
			      "1 cup water"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "soup",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/filipino-humba",
			    "recipeTitle": "Filipino Humba",
			    "ingredients": [
			      "2 lb. bone-in pork belly (the cut of pork should be part lean meat, part fat; it can also be boneless)",
			      "1-2 cups oil for frying",
			      "1 tablespoon azucena (substitute onion)",
			      "1-2 bay leaves",
			      "1 onion, chopped",
			      "1 tablespoons oyster sauce",
			      "2 tablespoons soy sauce (more to taste)",
			      "¼ cup pineapple tidbits",
			      "¼ cup black beans",
			      "¼ cup brown sugar",
			      "¼ cup vinegar",
			      "5 cloves garlic, peeled and smashed",
			      "1 ¼ cup water",
			      "½ cup green onions"
			    ],
			    "cuisineType": [
			      "living abroad",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-jalapeno-sweet-potato-chicken-chili",
			    "recipeTitle": "Healthy Jalapeño Sweet Potato Chicken Chili",
			    "ingredients": [
			      "1½ lbs. chicken breasts",
			      "5 cups chicken broth",
			      "1 onion, minced",
			      "2 cloves garlic, minced",
			      "1 jalapeno, minced",
			      "2 tablespoons butter or olive oil",
			      "2 teaspoons chili powder",
			      "½ teaspoon salt",
			      "2 large sweet potatoes, peeled and diced (about 4 cups)",
			      "2 14 ounce cans fire roasted tomatoes with garlic, undrained",
			      "1 14 ounce can black beans, drained",
			      "3 tablespoons ground flaxmeal",
			      "cilantro and Cotija cheese for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lunch",
			      "meat and chicken",
			      "soup",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/homemade-healthy-palak-paneer",
			    "recipeTitle": "Homemade Healthy Palak Paneer",
			    "ingredients": [
			      "2 tablespoons oil",
			      "1 large onion, minced",
			      "1 chili pepper, minced (I used a serrano pepper and left the ribs and seeds in for medium spicy)",
			      "1 teaspoon cumin seeds",
			      "2 teaspoons garam masala",
			      "1 teaspoon ground coriander",
			      "1-2 bay leaves",
			      "1 teaspoon fresh ginger (I had a ginger paste)",
			      "3 teaspoons minced garlic",
			      "1 14 ounce can fire roasted tomatoes with garlic, drained",
			      "1 17 ounce bag frozen spinach",
			      "1 small bunch cilantro (optional, to taste)",
			      "½ cup Greek yogurt",
			      "½ cup water",
			      "1 teaspoon salt",
			      "8 ounces cubed paneer"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lindsay's faves",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-pizzaiola",
			    "recipeTitle": "Chicken Pizzaiola {only six ingredients!}",
			    "ingredients": [
			      "3 cups of your favorite spaghetti sauce",
			      "1 cup shredded Parmesan cheese",
			      "4 boneless skinless chicken breasts (about 6 ounces each)",
			      "1 cup shredded Mozzarella",
			      "2 ounces sliced pepperoni",
			      "8 ounces spaghetti"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "meat and chicken",
			      "pasta",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/avocado-veggie-panini",
			    "recipeTitle": "Avocado Veggie Panini ",
			    "ingredients": [
			      "1½ tablespoons butter or olive oil",
			      "1 minced shallot (onion or garlic works too)",
			      "8 ounces sliced baby portobello mushrooms",
			      "1 cup cherry or grape tomatoes",
			      "2 cups chopped kale, stems removed",
			      "salt to taste",
			      "2 avocados",
			      "8 pieces thick, sturdy wheat bread",
			      "melty white cheese like Provolone or Mozzarella, if you want"
			    ],
			    "cuisineType": [
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/filipino-fried-chicken",
			    "recipeTitle": "Filipino Fried Chicken",
			    "ingredients": [
			      "2 lb. chicken drumsticks",
			      "1-2 teaspoon minced garlic",
			      "1-2 teaspoon minced onion",
			      "1 tablespoon oyster sauce",
			      "1 teaspoon black pepper",
			      "1 teaspoon salt",
			      "1 tablespoon seasoning mix (Magic Sarap)",
			      "1 egg",
			      "1 tablespoon cornstarch",
			      "1-2 cups oil for frying"
			    ],
			    "cuisineType": [
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/filipino-chicken-barbecue",
			    "recipeTitle": "Filipino Chicken Barbecue",
			    "ingredients": [
			      "6 cloves garlic, crushed",
			      "1 teaspoon black pepper",
			      "2 tablespoons lime juice",
			      "2 tablespoons oyster sauce",
			      "1 tablespoon soy sauce",
			      "2 teaspoons salt",
			      "1 bouillon cube",
			      "2 tablespoons brown sugar",
			      "2 lbs. chicken thighs, cut into small pieces (at the shelter they keep the bone in)"
			    ],
			    "cuisineType": [
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chopped-brussels-sprout-salad-with-chicken-and-walnuts",
			    "recipeTitle": "Chopped Brussels Sprout Salad with Chicken and Walnuts",
			    "ingredients": [
			      "1 cup cooked chicken, cubed or shredded",
			      "4 cups sliced Brussels sprouts (for me it was about 20)",
			      "½ cup walnuts",
			      "¼ cup Parmesan cheese",
			      "½ cup chopped onion",
			      "1 tablespoon butter",
			      "juice of 1 orange",
			      "1 tablespoon honey",
			      "2 tablespoons olive oil",
			      "salt and pepper to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lunch",
			      "meat and chicken",
			      "quick and easy",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/skinny-baked-zucchini-parmesan",
			    "recipeTitle": "Baked Zucchini Parmesan ",
			    "ingredients": [
			      "10-20 slices zucchini (enough to cover the top of a 9x13 pan)",
			      "¾ cup seasoned whole wheat breadcrumbs",
			      "5 egg whites",
			      "1 lb. penne pasta",
			      "3 cups tomato sauce (see notes for how I made mine)",
			      "¾ cup shredded Asiago cheese",
			      "parsley for topping"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "pasta",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/filipino-spaghetti",
			    "recipeTitle": "Filipino Spaghetti",
			    "ingredients": [
			      "1 lb. spaghetti noodles",
			      "1 lb. Italian tomato sauce (the kind they used was called \"Italian\" but tasted sweet and was very smooth in texture)",
			      "8 ounces tomato paste",
			      "2 tablespoons minced onion",
			      "2 tablespoons minced garlic",
			      "2 tablespoons oil",
			      "1 lb. ground pork",
			      "½ cup minced carrots and red peppers",
			      "2 cups diced or thinly sliced hot dogs",
			      "1 cup water",
			      "1 tablespoon salt",
			      "1 teaspoon seasoning mix",
			      "7 ounces evaporated milk",
			      "grated cheese for topping (they use a processed cheese similar to Velveeta)"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "pasta",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/filipino-pancit",
			    "recipeTitle": "Filipino Pancit Recipe",
			    "ingredients": [
			      "2 lbs. uncooked noodles – this version used a combination of pancit and vermicelli",
			      "4 cups sliced mixed veggies: cabbage, carrots, bell peppers, and green onions",
			      "1 lb. lean pork, cut into very small pieces",
			      "½ cup oil",
			      "1 onion, minced",
			      "1 tablespoon soy sauce",
			      "6 cloves garlic, crushed",
			      "1 pork bouillon cube",
			      "6 cups water"
			    ],
			    "cuisineType": [
			      "lindsay's faves",
			      "meat and chicken",
			      "pasta",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/warm-balsamic-kale-salad",
			    "recipeTitle": "Warm Balsamic Kale Salad",
			    "ingredients": [
			      "2 tablespoons butter",
			      "¼ cup diced onion",
			      "1 red pepper, diced",
			      "1 yellow pepper, diced",
			      "8 oz. baby portobello mushrooms, sliced",
			      "4 cups kale",
			      "1 teaspoon garlic, minced",
			      "1 tablespoon balsamic vinegar",
			      "¼ cup Asiago cheese",
			      "salt and pepper to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-chipotle-sweet-corn-fettuccine",
			    "recipeTitle": "Healthy Chipotle Sweet Corn Fettuccine",
			    "ingredients": [
			      "4-6 ears of fresh sweet corn",
			      "1 lb. uncooked fettuccine noodles",
			      "3 tablespoons salted butter",
			      "1 teaspoon garlic",
			      "¼ cup flour",
			      "1 cup milk",
			      "½ cup half and half",
			      "½ teaspoon salt",
			      "¾ cup water (the stuff that you boiled the corn in is best)",
			      "½ cup Greek yogurt - I used Chobani plain low fat",
			      "1 single chipotle pepper in adobo sauce, minced",
			      "cilantro for serving"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "pasta",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/caramelized-salmon",
			    "recipeTitle": "Caramelized Salmon",
			    "ingredients": [
			      "½ cup sugar",
			      "2½ tablespoons coarse sea salt, pulsed gently in a food processor",
			      "a few dashes of freshly crushed black pepper",
			      "16 ounces salmon, cut into 4 filets, with skin",
			      "olive oil"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "bjork's faves",
			      "fish and seafood",
			      "gluten free",
			      "healthy",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/coconut-lime-chicken",
			    "recipeTitle": "Coconut Lime Chicken",
			    "ingredients": [
			      "¼ cup lime juice",
			      "2 tablespoons lime zest",
			      "2 tablespoons brown sugar",
			      "5 cloves garlic, minced",
			      "1 tablespoon minced ginger",
			      "1 can light coconut milk",
			      "salt to taste",
			      "3 lbs. chicken pieces with bones and skin (for example, 1½ lbs. drumsticks and 1½ lbs. thighs)",
			      "rice noodles, cilantro, carrots, lime wedges, peanuts, onions or shallots for serving"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/15-minute-shrimp-scampi",
			    "recipeTitle": "15 Minute Shrimp Scampi",
			    "ingredients": [
			      "1 tablespoon olive oil",
			      "1 lb. raw shrimp, shells and tails removed (see notes)",
			      "4 large cloves garlic, minced",
			      "1 tablespoon butter (can add more to taste)",
			      "2 tablespoons white wine",
			      "¼ cup minced lemon pieces*",
			      "8 ounces uncooked capellini noodles (I used Jovial gluten free)",
			      "a handful of fresh chopped parsley",
			      "salt and pepper to taste",
			      "Parmesan cheese for topping"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/blender-lemonade",
			    "recipeTitle": "Blender Lemonade",
			    "ingredients": [
			      "3 lemons",
			      "1 lime (optional)",
			      "4-5 cups water",
			      "⅓ cup sugar",
			      "2 tablespoons sweetened condensed milk"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "quick and easy",
			      "sweet things"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/peanut-butter-cookie-dough-balls",
			    "recipeTitle": "Peanut Butter Cookie Dough Balls",
			    "ingredients": [
			      "½ cup peanuts (I like honey roasted)",
			      "½ cup dates",
			      "¼ cup peanut butter (I used chunky natural)",
			      "1 teaspoon vanilla",
			      "1 tablespoon water",
			      "4 ounces chocolate"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "dessert",
			      "gluten free",
			      "healthy",
			      "lindsay's faves",
			      "sweet things",
			      "vegan"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/baked-mozzarella-chicken-rolls",
			    "recipeTitle": "Baked Mozzarella Chicken Rolls",
			    "ingredients": [
			      "2 lbs. boneless skinless chicken breasts (8 4-ounce pieces)",
			      "1 cup whole wheat Italian style bread crumbs",
			      "6 tablespoons grated Parmesan cheese, divided",
			      "5 ounces fresh baby spinach",
			      "1 clove minced garlic and olive oil for sauteeing",
			      "½ cup part-skim ricotta cheese",
			      "⅓ cup beaten egg whites (I used something similar to Egg Beaters)",
			      "3 ounces fresh mozzarella cheese, thinly sliced",
			      "1 cup marinara sauce",
			      "fresh basil for topping"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-and-nectarine-poppy-seed-salad",
			    "recipeTitle": "Chicken and Nectarine Poppy Seed Salad",
			    "ingredients": [
			      "2 large chicken breasts (plus salt, pepper, olive oil for seasoning)",
			      "1 cup blueberries",
			      "2 ripe nectarines",
			      "6-8 cups baby spinach",
			      "¼ cup chopped toasted almonds",
			      "homemade poppy seed dressing (or store-bought)"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "lunch",
			      "meat and chicken",
			      "quick and easy",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/crockpot-red-lentil-curry",
			    "recipeTitle": "Crockpot Red Lentil Curry",
			    "ingredients": [
			      "4 cups regular brown lentils (I used maasor lentils this time)",
			      "2 onions, diced",
			      "4 cloves garlic, minced",
			      "1 tablespoon minced ginger",
			      "4 tablespoons butter (optional)",
			      "5 tablespoons red curry paste",
			      "1 tablespoon garam masala",
			      "1½ teaspoon turmeric",
			      "2 teaspoon sugar",
			      "a few good shakes of cayenne pepper",
			      "2 cans tomato puree (29 ounces each)",
			      "1 teaspoon salt plus more to taste",
			      "½ cup coconut milk or cream",
			      "cilantro for garnishing",
			      "rice for serving"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/parmesan-pesto-tilapia",
			    "recipeTitle": "Parmesan Pesto Tilapia",
			    "ingredients": [
			      "4 6-ounce tilapia filets",
			      "¼ cup basil pesto",
			      "½ cup freshly grated Parmesan cheese",
			      "1 cup fresh chopped tomatoes",
			      "salt, pepper, lemon juice, melted butter"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "fish and seafood",
			      "gluten free",
			      "lightened up",
			      "quick and easy",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/veggie-alfredo-lasagna",
			    "recipeTitle": "Veggie Alfredo Lasagna",
			    "ingredients": [
			      "5 large cloves garlic, minced",
			      "1 tablespoons butter",
			      "5 cups cauliflower florets",
			      "6-7 cups vegetable broth or water",
			      "1 teaspoon salt (more to taste)",
			      "½ teaspoon pepper (more to taste)",
			      "½ cup milk (more to taste)",
			      "Parmesan cheese to taste",
			      "10 lasagna noodles",
			      "4 cups cauliflower Alfredo sauce",
			      "5 cups veggies (I used chopped fresh greens, grated carrots, fresh and canned tomatoes)",
			      "3 cups mixed shredded cheese like Mozzarella, Provolone, Parmesan, etc.",
			      "salt and pepper to taste"
			    ],
			    "cuisineType": [
			      "lightened up",
			      "pasta",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chopped-apple-quinoa-salad",
			    "recipeTitle": "Chopped Apple Quinoa Salad",
			    "ingredients": [
			      "2 apple, grated or chopped (2 heaping cups)",
			      "2-3 large carrot, grated or chopped (2 heaping cups)",
			      "2 cups cooked quinoa",
			      "½ cup chopped almonds or walnuts",
			      "¼ cup minced fresh parsley",
			      "⅓ cup apple chutney - my favorite was an apple walnut variety",
			      "chopped or whole mixed salad greens, like spinach or arugula (optional)",
			      "salt to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/southwestern-quinoa-and-black-bean-casserole",
			    "recipeTitle": "Southwestern Quinoa and Black Bean Casserole",
			    "ingredients": [
			      "3 large cloves garlic, minced",
			      "1 onion, minced",
			      "2 jalapenos, seeds and ribs removed, minced",
			      "1 tablespoon oil",
			      "4½ cups cooked black beans, rinsed",
			      "1¼ cup vegetable broth",
			      "2 cups cooked quinoa",
			      "½ teaspoon cayenne pepper",
			      "1 teaspoon chili powder",
			      "1 teaspoon cumin",
			      "4 bell peppers, diced (mine were red and yellow)",
			      "1¼ cup shredded Mexican cheese",
			      "sliced green onions"
			    ],
			    "cuisineType": [
			      "bjork's faves",
			      "gluten free",
			      "lightened up",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/light-thai-chicken-lettuce-wraps",
			    "recipeTitle": "Light Thai Chicken Lettuce Wraps",
			    "ingredients": [
			      "1 lb. boneless skinless chicken breasts",
			      "1 small head green cabbage (at least 12 large leaves)",
			      "2 yellow bell peppers, cut into thin strips",
			      "2 red bell peppers, cut into thin strips",
			      "2 large carrots, shredded (about 2 cups)",
			      "green onions, finely chopped (about 1 cup)",
			      "cilantro for topping (optional)",
			      "¼ cup fresh lime juice",
			      "4 teaspoons fish sauce",
			      "4 teaspoons low sodium soy sauce",
			      "4 teaspoons canola oil",
			      "3 teaspoons sugar",
			      "2 teaspoons honey",
			      "2 teaspoons water",
			      "scant 1 cup peanuts",
			      "8 small cloves garlic, minced",
			      "1½ tablespoons lemongrass paste (I used fresh lemongrass ground into a paste)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "meat and chicken",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-squash-curry-quinoa",
			    "recipeTitle": "Creamy Squash Curry Quinoa",
			    "ingredients": [
			      "1½ cups dry quinoa, rinsed",
			      "8 cups vegetable broth",
			      "1 medium butternut or Kabocha squash (7-8 cups chopped)",
			      "3 cloves garlic",
			      "1 small onion",
			      "2 teaspoons yellow curry paste (can also use red curry paste)",
			      "1 teaspoon salt",
			      "½ cup coconut milk",
			      "½ cup good quality cheese to taste (I used Gouda and Maasdam)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/avocado-cucumber-grapefruit-salad",
			    "recipeTitle": "Avocado Cucumber Grapefruit Salad",
			    "ingredients": [
			      "2 cucumbers, diced, seeds removed (about 2 cups)",
			      "3-4 grapefruit or oranges, peeled and chopped (about 2 cups)",
			      "2-3 avocados, diced (about 1½ cups)",
			      "⅓ cup almonds, chopped (I used smoked almonds)",
			      "2 tablespoons fresh mint, chopped",
			      "3-4 tablespoons fresh chives, chopped",
			      "1 tablespoon vinegar (can also use lime or lemon juice)",
			      "1½ tablespoon honey",
			      "1½ tablespoons olive oil",
			      "salt to taste",
			      "grapefruit or orange zest to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "quick and easy",
			      "salads",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/monggo-beans-mung-bean-soup",
			    "recipeTitle": "Monggo Beans (or Mung Bean Soup)",
			    "ingredients": [
			      "2 cups dry monggo beans, mung beans, or green lentils",
			      "6 cups vegetable broth",
			      "1 tablespoon oil",
			      "1 onion, minced",
			      "2 cloves garlic, minced",
			      "1 tablespoons freshly grated ginger",
			      "1 cup coconut milk (I used the canned kind)",
			      "1 bunch chopped or pulled malunggay leaves (or spinach)",
			      "salt to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/crockpot-pork-adobo-with-black-beans",
			    "recipeTitle": "Crockpot Pork Adobo with Black Beans",
			    "ingredients": [
			      "2 cups dry black beans",
			      "2 lbs. pork shoulder (boneless semi-fatty pork that looks like a roast)",
			      "3¼ cups Filipino soy sauce, divided (the one we use is called Silver Swan)",
			      "¼ cup brown sugar, divided",
			      "10 cloves garlic, peeled, whole and smashed",
			      "3 bay leaves",
			      "1 tablespoon whole black peppercorns",
			      "1 cup vinegar (I used Silver Swan white cane vinegar)",
			      "3 cups water"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chopped-thai-chicken-salad",
			    "recipeTitle": "Chopped Thai Chicken Salad",
			    "ingredients": [
			      "2 boneless skinless chicken breasts",
			      "1 small head green or white cabbage (2 cups shredded)",
			      "1 large carrot (1½ cups shredded)",
			      "1 green papaya (1½ cups shredded)",
			      "½ cup fresh cilantro",
			      "½ cup green onions",
			      "½ cup chopped peanuts",
			      "2 cloves garlic",
			      "3 bird's eye chili peppers (sub ½ teaspoon minced hot pepper)",
			      "2 tablespoons soy sauce",
			      "2 tablespoons vinegar",
			      "2 tablespoons sugar",
			      "1 tablespoon fresh lime juice",
			      "1 tablespoon oil",
			      "½ teaspoon fish sauce",
			      "¼ cup peanut butter",
			      "¼ cup water"
			    ],
			    "cuisineType": [
			      "lightened up",
			      "meat and chicken",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/fudgy-chocolate-cake-bars",
			    "recipeTitle": "Fudgy Chocolate Cake Bars",
			    "ingredients": [
			      "8 ounces semisweet chocolate chips",
			      "1½ sticks salted butter, about 170 grams, softened",
			      "1 cup sugar",
			      "¼ cup all purpose flour",
			      "6 eggs, yolks and whites separated",
			      "8 ounces semisweet chocolate chips (for the frosting)",
			      "1 cup heavy cream (for the frosting)"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "bars",
			      "cake"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/favorite-mexican-crockpot-recipes",
			    "recipeTitle": "Favorite Mexican Crockpot Recipes",
			    "ingredients": [

			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/crockpot-mexican-chicken",
			    "recipeTitle": "Crockpot Mexican Chicken",
			    "ingredients": [
			      "1 jar of your favorite salsa (I like to use 1½ jars... just because)",
			      "3½ cups water",
			      "1 lb. chicken breasts",
			      "1 lb. dry pinto beans, rinsed",
			      "2-3 tablespoons taco seasoning (1 packet if using store bought)",
			      "2 ounces or more light cream cheese (totally optional - just adds creaminess)",
			      "salt to taste"
			    ],
			    "cuisineType": [
			      "bjork's faves",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/sauteed-garlic-and-tomato-lentil-salad",
			    "recipeTitle": "Sauteed Garlic and Tomato Lentil Salad",
			    "ingredients": [
			      "1 cup dry green (brown) lentils",
			      "½ cup dry light bulgur (light just refers to the coarseness of the grain)",
			      "3-4 cups fresh tomatoes, chopped",
			      "6-8 cloves garlic, minced",
			      "2 tablespoons olive oil",
			      "½ cup parsley, very finely chopped",
			      "¼ cup citrus/vinaigrette dressing (I used a lemon tarragon dressing)",
			      "salt and pepper to taste",
			      "fresh lemon juice to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-chicken-alfredo-pizza",
			    "recipeTitle": "Healthy Chicken Alfredo Pizza",
			    "ingredients": [
			      "1 batch whole wheat pizza dough ",
			      "4 cups creamy cauliflower sauce",
			      "2 large chicken breasts, cooked and shredded",
			      "1 cup shredded Mozzarella or other cheese",
			      "diced tomatoes",
			      "minced fresh parsley",
			      "Parmesan cheese",
			      "salt and pepper",
			      "olive oil"
			    ],
			    "cuisineType": [
			      "healthy",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/easy-whole-wheat-pizza-dough",
			    "recipeTitle": "Easy Whole Wheat Pizza Dough",
			    "ingredients": [
			      "1¼ cup white flour",
			      "2¼ teaspoon yeast",
			      "½ teaspoon salt",
			      "2 tablespoons oil",
			      "1 cup warm water (not boiling hot, but warm)",
			      "1⅓ cup whole wheat flour"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "healthy",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-cauliflower-sauce",
			    "recipeTitle": "Creamy Cauliflower Sauce",
			    "ingredients": [
			      "8 large cloves garlic, minced",
			      "2 tablespoons butter",
			      "5-6 cups cauliflower florets",
			      "6-7 cups vegetable broth or water",
			      "1 teaspoon salt (more to taste)",
			      "½ teaspoon pepper (more to taste)",
			      "½ cup milk (more to taste)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/30-minute-squash-coconut-curry",
			    "recipeTitle": "30-Minute Squash Coconut Curry",
			    "ingredients": [
			      "6 cloves garlic",
			      "2 tablespoons minced ginger",
			      "2 teaspoons olive oil",
			      "1 teaspoon each curry powder and chili powder",
			      "½ teaspoon each turmeric and cayenne pepper",
			      "5-6 cups peeled, chopped squash (I used kabocha - butternut would be good, too)",
			      "1 15-ounce can thick coconut milk",
			      "3 tablespoons red curry paste (I used Massaman curry paste)",
			      "3 tablespoons creamy peanut butter",
			      "½ tablespoon honey",
			      "2 15-ounce cans fire roasted diced tomatoes",
			      "1¼ cup light bulgur, uncooked",
			      "cilantro for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/cauliflower-yellow-lentil-curry",
			    "recipeTitle": "Cauliflower Yellow Lentil Curry",
			    "ingredients": [
			      "1 onion, finely chopped",
			      "8 cloves garlic, minced",
			      "1-2 tablespoons fresh grated ginger",
			      "2 tablespoons oil",
			      "¼ cup curry paste (I used a red Thai curry paste)",
			      "½ teaspoon turmeric",
			      "½ teaspoon curry powder",
			      "3 cups vegetable broth + 3 cups water",
			      "2 cups dry yellow lentils or yellow split peas",
			      "1 or more heads cauliflower, chopped into bite sized pieces",
			      "apricot or mango jam + cilantro for serving (be brave!)",
			      "salt to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthier-general-tsos-chicken-giveaway",
			    "recipeTitle": "Healthier General Tso's Chicken",
			    "ingredients": [
			      "Vegetable oil spray",
			      "1⁄4 cup all-purpose flour",
			      "3 large egg whites",
			      "5 cups (5 ounces) Kellogg’s Corn Flakes cereal, finely crushed",
			      "1 1⁄2 pounds boneless, skinless chicken breasts, trimmed of all visible fat, cut into 1-inch pieces",
			      "1 2⁄3 cups water",
			      "1⁄3 cup low-sodium soy sauce",
			      "1⁄4 cup apricot jam",
			      "3 tablespoons hoisin sauce",
			      "2 tablespoons cornstarch",
			      "1 tablespoon balsamic vinegar",
			      "2 teaspoons canola oil",
			      "4 garlic cloves, minced",
			      "1 tablespoon grated fresh ginger",
			      "1⁄4 teaspoon red pepper flakes"
			    ],
			    "cuisineType": [
			      "giveaway",
			      "healthy",
			      "lightened up",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/stovetop-broccoli-and-white-bean-lasagna",
			    "recipeTitle": "Stovetop Broccoli and White Bean Lasagna",
			    "ingredients": [
			      "1 package dried lasagna noodles - I used whole wheat with the wavy ridges",
			      "2 small heads broccoli - about 4-6 cups",
			      "1 yellow onion",
			      "5 cloves garlic",
			      "1 tablespoons olive oil",
			      "1 15-ounce can white beans, rinsed and drained",
			      "1 jar spaghetti sauce (if you like a lot of sauce, go for 1½ jars)",
			      "salt and pepper to taste",
			      "red pepper flakes to taste"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-cauliflower-garlic-rice",
			    "recipeTitle": "Creamy Cauliflower Garlic Rice",
			    "ingredients": [
			      "6-8 cups chopped cauliflower",
			      "4 cups vegetable broth + 2 cups water",
			      "½ cup milk",
			      "1½ cups brown rice (I used a brown rice blend)",
			      "1 teaspoon salt (plus more to taste!)",
			      "2 tablespoons butter",
			      "6-8 cloves minced garlic",
			      "½ cup Mozzarella cheese for topping (more to taste)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "lindsay's faves",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/mexican-polenta-pie",
			    "recipeTitle": "Mexican Polenta Pie",
			    "ingredients": [
			      "1 lb. pork butt or pork shoulder (a large semi-fatty cut of meat with no bones)",
			      "1 lb. dry pinto beans, soaked",
			      "12 oz. light beer + 12 oz. water (just refill the bottle)",
			      "1 14 oz. can diced tomatoes",
			      "1 16 oz. jar salsa",
			      "1 packet taco seasoning",
			      "6-8 cloves garlic, minced",
			      "1½ cups polenta",
			      "6 cups water",
			      "1 14 oz. can corn, drained and rinsed",
			      "salt and pepper to taste (be generous!)",
			      "shredded cheese, cilantro, and salsa for topping"
			    ],
			    "cuisineType": [
			      "main dishes",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/hoisin-pork-with-rice-noodles",
			    "recipeTitle": "Hoisin Pork with Rice Noodles",
			    "ingredients": [
			      "⅓ cup soy sauce",
			      "¼ cup water",
			      "3.5 tablespoons sesame oil or canola oil",
			      "2 tablespoons honey + 1 tablespoon sugar",
			      "1 dash fish sauce",
			      "3 tablespoons vinegar + a squeeze of lime if you have it",
			      "5 cloves finely minced garlic",
			      "1 piece fresh grated ginger (1-2 tablespoons)",
			      "1 minced hot pepper (i.e. jalapeno, chili pepper, etc)",
			      "3 tablespoons hoisin sauce",
			      "3 tablespoons peanut butter (optional)",
			      "1½ lbs. pork cut into thin strips (mine was called \"pork stroganoff\")",
			      "9 oz. rice noodles",
			      "grated carrots, chopped scallions, chopped peanuts, cilantro"
			    ],
			    "cuisineType": [
			      "main dishes",
			      "meat and chicken",
			      "pasta"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/garlic-butter-spaghetti-with-herbs",
			    "recipeTitle": "Garlic Butter Spaghetti with Herbs",
			    "ingredients": [
			      "1 lb. whole wheat spaghetti",
			      "6 tablespoons butter + more for serving",
			      "8 cloves garlic, minced",
			      "1 large bunch basil, chopped",
			      "1 large bunch baby spinach, chopped",
			      "2 teaspoons salt",
			      "1 teaspoon black pepper",
			      "Parmigiano Reggiano cheese for topping"
			    ],
			    "cuisineType": [
			      "healthy",
			      "pasta",
			      "popular",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-sweet-and-sour-fish",
			    "recipeTitle": "Healthy Sweet and Sour Fish",
			    "ingredients": [
			      "2 lbs. white fish filets such as tilapia",
			      "2 tablespoons olive oil, divided",
			      "1 teaspoon cumin",
			      "½ teaspoon cayenne pepper",
			      "salt and pepper",
			      "2 yellow onions",
			      "2 red, yellow, and green peppers (each)",
			      "2-3 cups fresh pineapple",
			      "½ cup vinegar",
			      "⅓ cup ketchup",
			      "⅓ cup sugar",
			      "½ teaspoon salt",
			      "½ cup pineapple juice",
			      "½ cup orange juice",
			      "¼ cup sweet chili garlic sauce (more to taste)",
			      "2 tablespoons + 1 teaspoon cornstarch",
			      "cooked brown rice",
			      "sesame seeds"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "healthy",
			      "lightened up",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/curried-veggie-burgers",
			    "recipeTitle": "Curried Veggie Burgers",
			    "ingredients": [
			      "1 (14 ounce) can chickpeas, rinsed and drained",
			      "1 (28 ounce) can lentils, rinsed and drained, or 3½ cups cooked lentils",
			      "1 heaping cup cashews",
			      "3 large carrots, peeled and shredded",
			      "2 yellow onions, minced",
			      "5 cloves garlic, minced",
			      "2 tablespoons olive oil",
			      "1 tablespoon curry powder",
			      "1 teaspoon salt",
			      "1 teaspoon turmeric",
			      "1 cup uncooked brown rice",
			      "up to ½ cup vegetable broth",
			      "2 cups panko bread crumbs"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lindsay's faves",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/favorite-lentil-recipes",
			    "recipeTitle": "Favorite Lentil Recipes",
			    "ingredients": [

			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "main dishes",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/baked-rigatoni-with-spinach-provolone-turkey",
			    "recipeTitle": "Baked Rigatoni with Spinach, Provolone, and Turkey",
			    "ingredients": [
			      "2 yellow onions",
			      "6 cloves garlic",
			      "1 medium kabocha or butternut squash, peeled and cubed, about 4-5 cups",
			      "4 cups vegetable broth",
			      "salt + pepper + dried oregano",
			      "½ cup cream or half and half",
			      "1 lb. ground turkey",
			      "2 cups packed fresh spinach",
			      "1 cup grated Provolone cheese",
			      "1 lb. whole wheat rigatoni"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "meat and chicken",
			      "pasta",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/whole-wheat-roasted-veggie-lasagna",
			    "recipeTitle": "Whole Wheat Roasted Veggie Lasagna",
			    "ingredients": [
			      "6 cups fresh sturdy vegetables, chopped (red or yellow peppers, cauliflower, broccoli, carrots, etc.)",
			      "1½ tablespoon olive oil",
			      "2 teaspoons salt (more to taste)",
			      "1 onion, minced",
			      "6 cloves garlic, minced",
			      "10 ounces whole wheat lasagna noodles",
			      "1 jar spaghetti or marinara sauce",
			      "1⅔ cups ricotta cheese",
			      "1 egg, beaten",
			      "¾ cup shredded mozzarella cheese"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "pasta",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/crockpot-chalupas",
			    "recipeTitle": "Crockpot Chalupas",
			    "ingredients": [
			      "1 lb. pork shoulder",
			      "1 lb. dry pinto beans (rinsed)",
			      "6 ounces light beer",
			      "1 15-ounce can fire roasted tomatoes",
			      "6 cloves garlic, minced",
			      "2 jalapeno peppers or other hot chili, minced (ribs and seeds removed to keep it mild)",
			      "2 teaspoons chili powder*",
			      "2 teaspoons cumin*",
			      "½ teaspoon cayenne pepper*",
			      "*AND/OR a tablespoon or two of taco seasoning (I used them all)",
			      "generous pinch or two of salt",
			      "1½ cups water",
			      "¾ cup shredded cheese (I used Mozzarella)",
			      "12+ flour tortillas"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-and-rice-casserole",
			    "recipeTitle": "Chicken and Rice Casserole",
			    "ingredients": [
			      "2½ cups chicken broth (I used 2 cans)",
			      "1½ cups milk",
			      "¾ cup flour",
			      "1 tablespoon seasoning mix (or ½ tsp. onion powder, ½ tsp. garlic powder, 1 tsp. salt, ½ tsp. pepper, ½ tsp. parsley)",
			      "1 ½ cups uncooked brown rice, rinsed",
			      "2 tablespoons seasoning mix of your choice for the flavor of the casserole – my favorite was a smoked hickory southwestern seasoning",
			      "1 cup water",
			      "1 lb. boneless skinless chicken breasts"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/easy-red-lentil-dhal",
			    "recipeTitle": "Easy Red Lentil Dhal",
			    "ingredients": [
			      "2 ½ cups red or pink lentils",
			      "5-6 cups of water (a large pot half full)",
			      "2 tablespoons curry paste",
			      "½ cup coconut milk",
			      "⅓ cup water",
			      "½ teaspoons salt",
			      "¼ teaspoon black pepper",
			      "¼ teaspoon cayenne",
			      "2 teaspoons curry powder",
			      "½ teaspoon turmeric",
			      "1 teaspoon chili powder",
			      "2 tablespoons sugar",
			      "lime juice",
			      "green herbs for garnish (I used malunggay leaves - you could use cilantro, green onions, etc.)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-fettucine-alfredo",
			    "recipeTitle": "Healthy Fettuccine Alfredo",
			    "ingredients": [
			      "1 lb. uncooked fettuccine noodles",
			      "3 small heads cauliflower",
			      "6 cups vegetable broth",
			      "6 cloves garlic, minced",
			      "1 tablespoon butter",
			      "1 teaspoon salt",
			      "pinch of nutmeg",
			      "pinch of black pepper",
			      "1 tablespoon olive oil",
			      "¼ cup heavy cream",
			      "1 cup starchy boiling water from pasta pot"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "pasta",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/an-edible-mosaic-cookbook-giveaway",
			    "recipeTitle": "An Edible Mosaic Cookbook Giveaway",
			    "ingredients": [
			      "½ batch Lemony Mint Salad Dressing (recipe below)",
			      "1 English cucumber (or 3 to 4 Persian or Japanese cucumbers), diced",
			      "1 onion, minced",
			      "1 lb (500 g) tomatoes, diced (about 4 medium tomatoes)",
			      "1 bunch fresh parsley, minced",
			      "4 sprigs fresh mint, minced",
			      "¼ teaspoon salt",
			      "1 clove garlic, crushed in a mortar and pestle with ¼ teaspoon salt",
			      "Juice of 1 lemon (about 3 tablespoons)",
			      "½ cup (125 ml) olive oil",
			      "1 tablespoon minced fresh mint leaves"
			    ],
			    "cuisineType": [
			      "giveaway",
			      "healthy",
			      "salads",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/kabocha-squash-lentil-curry",
			    "recipeTitle": "Kabocha Squash Lentil Curry",
			    "ingredients": [
			      "2 cups dry brown lentils",
			      "4-5 cups peeled, cubed kabocha or Japanese red squash (half of one large squash)",
			      "1 large yellow onion, roughly chopped",
			      "1 tablespoon butter",
			      "1 ½ cups vegetable broth",
			      "1½ tablespoon Massaman red curry paste",
			      "2 teaspoons curry powder",
			      "½ teaspoon turmeric",
			      "1 teaspoon salt",
			      "½ teaspoon cayenne pepper",
			      "dash of cinnamon (optional)",
			      "½ cup coconut milk",
			      "2 large tomatoes, diced (optional)",
			      "Greek yogurt and rice for serving"
			    ],
			    "cuisineType": [
			      "healthy",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/how-to-cut-and-peel-a-kabocha-squash",
			    "recipeTitle": "How to Cut and Peel a Kabocha Squash",
			    "ingredients": [

			    ],
			    "cuisineType": [
			      "healthy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-enchilada-casserole",
			    "recipeTitle": "Chicken Enchilada Casserole",
			    "ingredients": [
			      "1 lb boneless, skinless chicken breasts",
			      "19 ounces (about 2 ½ cups) enchilada sauce",
			      "2 cups shredded cheese (I used Mozzarella because I had it on hand)",
			      "6-8 small flour tortillas",
			      "1 can refried beans (I like Amy’s Organic Refried Black Beans – so yummy!)"
			    ],
			    "cuisineType": [
			      "bjork's faves",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/honey-chicken-salad-with-grapes-and-feta",
			    "recipeTitle": "Honey Chicken Salad with Grapes and Feta",
			    "ingredients": [
			      "1 lb chicken breast",
			      "1 bunch grapes (about 2-3 cups), cut in half",
			      "1 cup uncooked wheat berries",
			      "salt and pepper to taste",
			      "2 tablespoons olive oil",
			      "1 tablespoon honey (I use Ames Farm Honey)",
			      "¼ cup homemade or storebought lemon dressing (I used Brianna's brand)",
			      "½ tablespoon vinegar",
			      "2 tablespoons water",
			      "feta cheese and green onions for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "meat and chicken",
			      "quick and easy",
			      "salads",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/how-i-make-hummus",
			    "recipeTitle": "How I Make Hummus",
			    "ingredients": [
			      "2 cans chickpeas",
			      "1 clove garlic",
			      "2-3 tablespoons olive oil",
			      "up to ½ cup water",
			      "½ teaspoon salt"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "sandwiches",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/southwest-burgers-with-guacamole",
			    "recipeTitle": "Southwest Chipotle Burgers with Guacamole",
			    "ingredients": [
			      "1½ lb. ground beef",
			      "1 teaspoon cumin",
			      "1 teaspoon chili powder",
			      "½ teaspoon cayenne pepper",
			      "1 teaspoon salt",
			      "⅓ cup salsa",
			      "1 onion",
			      "1 chipotle pepper (canned in adobo sauce)",
			      "2 eggs, beaten",
			      "¾ cup finely crushed tortilla chips",
			      "6-8 slices cheddar cheese",
			      "6-8 burger buns",
			      "2 avocados",
			      "1 bunch cilantro",
			      "½ small red onion",
			      "2 teaspoons salt",
			      "1 teaspoon lime juice"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "sandwiches"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/stir-fried-noodles-with-shrimp-and-vegetables",
			    "recipeTitle": "Stir Fried Noodles with Shrimp and Vegetables {Filipino Pancit Canton}",
			    "ingredients": [
			      "1 lb. raw, tail-off shrimp",
			      "3 tablespoons oil",
			      "3 cloves garlic",
			      "1 onion",
			      "1 head green cabbage",
			      "2 large carrots",
			      "8 ounces dry pancit canton noodles",
			      "3 cups chicken stock",
			      "2 tablespoons soy sauce",
			      "1 tablespoon fish sauce",
			      "calamansi (or lime) juice to taste",
			      "sliced green onions for topping"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "healthy",
			      "lightened up",
			      "pasta"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/white-chicken-chili",
			    "recipeTitle": "White Chicken Chili",
			    "ingredients": [
			      "4 large boneless, skinless chicken breasts",
			      "2 green bell peppers",
			      "1 large yellow onion",
			      "1 jalapeno",
			      "1 can diced green chiles (optional)",
			      "1.5 tablespoons butter",
			      "2 14-ounce cans white beans, rinsed and drained",
			      "3.5 cups chicken or vegetable broth",
			      "1 teaspoon chili powder",
			      "¼ teaspoon cayenne pepper",
			      "salt to taste",
			      "¼ cup cornmeal",
			      "¼ cup milk"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "main dishes",
			      "meat and chicken",
			      "quick and easy",
			      "soup"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-tamale-pie-2",
			    "recipeTitle": "Chicken Tamale Pie, Version 2",
			    "ingredients": [
			      "⅔ cup all purpose flour",
			      "½ cup yellow cornmeal",
			      "3 tablespoons sugar",
			      "1 tablespoon baking powder",
			      "¼ teaspoon salt",
			      "2 tablespoons Smart Balance cooking oil",
			      "⅓ cup Smart Balance low fat milk",
			      "1 Smart Balance Omega-3 Grade A Natural Large egg",
			      "1½ tablespoon taco seasoning, divided",
			      "1 - 14 ounce can cream-style corn",
			      "1 - 4 ounce can chopped green chiles, drained",
			      "1 - 10 ounce can red enchilada sauce",
			      "2 cups cooked, shredded chicken breast",
			      "1 cup shredded white cheese such as Jack or Pepperjack",
			      "cilantro and crumbled Cotija cheese for topping"
			    ],
			    "cuisineType": [
			      "giveaway",
			      "main dishes",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chili-and-cornbread-waffle-stacks",
			    "recipeTitle": "Chili and Cornbread Waffle Stacks",
			    "ingredients": [
			      "¾ cup buttermilk",
			      "⅓ cup whole wheat flour",
			      "⅓ cup all purpose flour",
			      "⅓ cup cornmeal",
			      "¾ teaspoon baking powder",
			      "¼ teaspoon baking soda",
			      "2 tablespoons sugar",
			      "¼ teaspoon salt",
			      "1 egg, beaten",
			      "1 tablespoon oil",
			      "2-3 cups leftover chili (I used posole)",
			      "4 eggs"
			    ],
			    "cuisineType": [
			      "breakfast",
			      "eggs",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/carnitas-tamale-pie",
			    "recipeTitle": "Carnitas Tamale Pie",
			    "ingredients": [
			      "⅔ cup all-purpose flour",
			      "½ cup yellow corn meal",
			      "3 tablespoons granulated sugar",
			      "1 tablespoon baking powder",
			      "¼ teaspoon salt",
			      "2 tablespoons vegetable oil",
			      "1 can diced green chiles",
			      "⅓ cup milk",
			      "1 egg",
			      "1 can cream corn",
			      "2-3 cups leftover carnitas",
			      "1 cup enchilada sauce",
			      "1 cup shredded white cheese (Jack, White Cheddar, Pepperjack, etc.)"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/easy-crockpot-carnitas",
			    "recipeTitle": "Easy Crockpot Carnitas",
			    "ingredients": [
			      "4-5 lbs. pork shoulder",
			      "5 cloves garlic",
			      "1 tablespoon salt",
			      "1 teaspoon cumin",
			      "1 teaspoon chili powder",
			      "1 teaspoon black pepper",
			      "1 teaspoon oregano",
			      "¼ teaspoon cinnamon",
			      "½ teaspoon cayenne pepper",
			      "1 tablespoon chipotle hot sauce (optional)",
			      "juice of 2 limes",
			      "½ cup orange juice",
			      "12 ounces beer",
			      "½ cup salsa (I like to use a less chunky one)"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/asian-chicken-salad-with-sesame-chili-vinaigrette",
			    "recipeTitle": "Asian Chicken Salad with Sesame Chili Vinaigrette",
			    "ingredients": [
			      "1 rotisserie chicken, meat pulled off and shredded",
			      "2 small heads Chinese green cabbage, shredded",
			      "2 cups frozen peas",
			      "2 large carrots, shredded",
			      "2 cucumbers, diced",
			      "½ cup chopped green onion",
			      "½ cup sweet chili garlic sauce",
			      "6 tablespoons honey",
			      "5 tablespoons sesame oil",
			      "3 tablespoons vinegar",
			      "4 tablespoons lime juice (I used calamansi - yum)",
			      "2 teaspoons wasabi paste",
			      "crushed peanuts for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/simple-creamy-squash-soup",
			    "recipeTitle": "Simple & Creamy Squash Soup",
			    "ingredients": [
			      "1 medium kabocha squash",
			      "1 yellow onion, roughly chopped",
			      "2 cloves garlic, smashed (optional - I like it both ways)",
			      "2 tablespoons olive oil",
			      "1¼ cup milk",
			      "¼ teaspoon cayenne pepper",
			      "toasted walnuts",
			      "salt to taste",
			      "cream to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "soup",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-black-bean-tostadas-with-cilantro-sauce",
			    "recipeTitle": "Healthy Black Bean Tostadas with Cilantro Sauce",
			    "ingredients": [
			      "2 cans black beans, rinsed and drained",
			      "1 teaspoon chili powder",
			      "1 teaspoon cumin",
			      "¼ teaspoon cayenne pepper (more for spicy)",
			      "salt and olive oil",
			      "3-4 tomatoes, chopped",
			      "1 medium avocado, cubed",
			      "2 cups shredded lettuce",
			      "⅔ cup plain yogurt, Greek yogurt, or sour cream",
			      "½ cup packed cilantro leaves (more to taste)",
			      "3 cloves garlic",
			      "1 teaspoon salt",
			      "4-6 flour tortillas"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/thai-basil-coconut-lentils",
			    "recipeTitle": "Thai Basil Coconut Lentils",
			    "ingredients": [
			      "1 cup dried green or brown lentils, or monggo beans",
			      "3 cloves garlic, minced",
			      "1 tablespoon olive oil",
			      "½ head green cabbage, shredded",
			      "½ large kabocha squash (about 3-4 cups cubed)",
			      "1 can coconut milk",
			      "1½ tablespoons tom kha paste",
			      "cayenne pepper, chili powder and salt",
			      "fresh basil and chopped peanuts for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/parmesan-chicken-fingers-with-garlic-cheese-sauce",
			    "recipeTitle": "Parmesan Chicken Fingers with Garlic Cheese Sauce",
			    "ingredients": [
			      "4 skinless, boneless chicken breasts",
			      "1 cup flour",
			      "2 beaten eggs",
			      "2 cups breadcrumbs (I used panko breadcrumbs)",
			      "½ cup grated Parmesan cheese",
			      "Oil for frying + parsley for garnish",
			      "2 ounces light cream cheese",
			      "a splash of milk",
			      "1 teaspoon minced fresh garlic or garlic salt",
			      "1 teaspoon oil",
			      "1 ounce good quality shredded cheese of choice (I used a sharp white cheddar)"
			    ],
			    "cuisineType": [
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/white-cheddar-mac-n-cheese",
			    "recipeTitle": "White Cheddar Mac N' Cheese with Squash and Toasted Walnuts",
			    "ingredients": [
			      "1 large kabocha squash (butternut would be good too!)",
			      "salt and pepper",
			      "½ cup toasted walnuts + extra for topping",
			      "1 lb. whole wheat rotini (or elbow macaroni for more traditional mac n' cheese)",
			      "1 large yellow onion, diced",
			      "1-2 tablespoons butter",
			      "3 ounces light cream cheese",
			      "1-2 cups vegetable broth",
			      "1 cup shredded white cheddar cheese"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "pasta",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-fish-taco-bowls",
			    "recipeTitle": "Spicy Fish Taco Bowls",
			    "ingredients": [
			      "1 tablespoon chili powder",
			      "1 tablespoon cumin",
			      "½ teaspoon cayenne pepper",
			      "3-4 tilapia filets (or other fish filet of your choice)",
			      "1-2 cloves minced garlic",
			      "1 cup fresh sweet corn kernels (sliced off the cob is the best)",
			      "1 red onion, diced",
			      "1 red pepper, diced",
			      "1 can black beans",
			      "cooked brown rice (I used about 2 cups)",
			      "fresh cilantro, avocado, shredded cheese, sour cream, or pico de gallo for topping"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "quick and easy",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/5-ingredient-coconut-curry",
			    "recipeTitle": "5 Ingredient Coconut Curry",
			    "ingredients": [
			      "1 can coconut milk",
			      "2 tablespoons red curry paste",
			      "2 small heads broccoli (and/or other veggies of choice)",
			      "1 can chickpeas, rinsed and drained",
			      "½ tablespoon cornstarch dissolved in 2 tablespoons cold water",
			      "optional: minced garlic or onion"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-corn-and-basil-stuffed-tomatoes",
			    "recipeTitle": "Roasted Corn and Basil Stuffed Tomatoes",
			    "ingredients": [
			      "6-10 tomatoes (I used 6 medium/smallish ones)",
			      "½ cup cooked brown rice",
			      "½ cup fresh sweet corn (canned works, but fresh is better)",
			      "1 clove garlic, minced",
			      "a handful of fresh basil ribbons",
			      "salt and pepper to taste",
			      "grated cheese (I used Gouda)"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "quick and easy",
			      "salads",
			      "snacks",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/baked-caprese-rigatoni",
			    "recipeTitle": "Baked Caprese Rigatoni",
			    "ingredients": [
			      "1 lb. uncooked rigatoni",
			      "6 small fresh tomatoes, diced",
			      "1 12-ounce can crushed or diced tomatoes",
			      "2½ cups your favorite jarred tomato sauce",
			      "1 small onion, diced",
			      "3 cloves garlic, minced",
			      "½ cup fresh basil, torn or sliced into ribbons",
			      "½ block grated cheese",
			      "salt and pepper",
			      "1 tablespoon olive oil"
			    ],
			    "cuisineType": [
			      "pasta",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/skinny-garlicfried-rice",
			    "recipeTitle": "Skinny Garlic Fried Rice",
			    "ingredients": [
			      "2 cups cooked, cold brown rice",
			      "3 tablespoons oil, divided",
			      "½ head green cabbage, shredded",
			      "1 large carrot, shredded",
			      "(also any other vegetables that you want)",
			      "1 yellow onion, diced",
			      "4 cloves garlic, grated or minced",
			      "1 1-inch piece ginger, grated or minced"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "living abroad",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/mango-chicken-salad-sandwich",
			    "recipeTitle": "Mango Chicken Salad Sandwich",
			    "ingredients": [
			      "1 lb. cooked, shredded or diced chicken",
			      "½ cup mayo",
			      "1 mango, diced (could also be a green mango)",
			      "¼ cup diced green onion or white onion",
			      "2 tablespoons sugar",
			      "Salt and pepper to taste",
			      "3 tablespoons chopped fresh basil"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy",
			      "sandwiches"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/grilled-chicken-sausage-spinach-mozzarella-pizza",
			    "recipeTitle": "Grilled Chicken Sausage, Spinach, and Mozzarella Pizza",
			    "ingredients": [
			      "3 garlic naan flatbreads (or any other prepared crust)",
			      "3 chicken sausages, such as Gold n' Plump Parmesan Italian",
			      "1 cup pizza sauce",
			      "1 cup shredded Mozzarella",
			      "fresh spinach",
			      "fresh diced tomatoes",
			      "fresh basil",
			      "olive oil"
			    ],
			    "cuisineType": [
			      "healthy",
			      "meat and chicken",
			      "quick and easy",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/red-curry-lentils",
			    "recipeTitle": "Red Curry Lentils ",
			    "ingredients": [
			      "1½ cups lentils, rinsed and picked over",
			      "½ large onion, diced",
			      "2 tablespoons butter",
			      "2 tablespoons red curry paste",
			      "½ tablespoon garam masala",
			      "1 teaspoon curry powder",
			      "½ teaspoon turmeric",
			      "1 teaspoon sugar",
			      "1 teaspoon minced garlic",
			      "1 teaspoon minced ginger",
			      "a few good shakes of cayenne pepper",
			      "1 14 ounce can tomato puree",
			      "¼ cup coconut milk or cream",
			      "cilantro for garnishing",
			      "rice for serving"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "lindsay's faves",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/asian-chicken-salad",
			    "recipeTitle": "Asian Chicken Salad",
			    "ingredients": [
			      "¼ cup chopped green onions",
			      "2-3 cups shredded lettuce or slaw (I used raw grated brussel sprouts)",
			      "½ cup whole almonds, chopped",
			      "2 cups shredded carrots",
			      "¼ cup chopped cilantro",
			      "2 cups cooked, shelled edamame",
			      "toasted sesame seeds (optional)",
			      "2 chicken breasts",
			      "½ cup soy sauce",
			      "2 cloves garlic, minced",
			      "1 piece minced ginger (about 1 tbs. for me)",
			      "2 tablespoons sugar",
			      "2 tablespoons 5 spice seasoning (can also sub other seasoning - I used part Garam Masala and part Cajun seasoning)",
			      "2 cups chow mein noodles (dry crunchy kind)"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "quick and easy",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/rustic-garlic-butter-pasta",
			    "recipeTitle": "Rustic Garlic Butter Pasta with Roasted Broccoli ",
			    "ingredients": [
			      "1 head broccoli, washed and chopped",
			      "1 teaspoon oil",
			      "½ tablespoon dried Italian herbs or 2 tbs. fresh herbs (rosemary, thyme, etc)",
			      "8 ounces whole wheat penne pasta",
			      "8 ounces mushrooms, washed and sliced",
			      "3 tablespoons butter",
			      "1 tablespoon minced garlic (2 cloves)",
			      "½ tablespoon flour",
			      "sea salt",
			      "sharp, hard cheese for topping (like Parmesan)"
			    ],
			    "cuisineType": [
			      "pasta",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/honey-walnut-power-salad",
			    "recipeTitle": "Honey Walnut Power Salad",
			    "ingredients": [
			      "2 tablespoons butter",
			      "½ large yellow onion, thinly sliced",
			      "2 cups seedless red grapes, washed and cut in half",
			      "2 cups edamame (I did a quick steam-in-the-bag variety)",
			      "1 cup uncooked bulgur or other grain",
			      "¾ cup walnuts",
			      "¼ cup honey",
			      "¼ cup water",
			      "fresh baby spinach",
			      "crumbled blue cheese",
			      "salt to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "salads",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/caribbean-jerk-salmon-bowl-with-mango-salsa",
			    "recipeTitle": "Caribbean Jerk Salmon Bowl with Mango Salsa",
			    "ingredients": [
			      "1 lb. wild caught salmon filet with skin (in one or several pieces)",
			      "1 teaspoon oil",
			      "1½ teaspoon cumin",
			      "½ teaspoon curry",
			      "½ teaspoon chili powder",
			      "½ teaspoon allspice",
			      "¼ teaspoon cayenne pepper",
			      "¼ teaspoon cinnamon",
			      "pinch of sea salt",
			      "2 cups cooked white rice",
			      "1 12 ounce can black beans, rinsed and drained",
			      "2 mangoes, peeled and diced",
			      "½ large red onion, diced",
			      "1 bunch fresh cilantro, chopped",
			      "1 squeeze lime juice",
			      "1 avocado (optional)"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/baked-spicy-fries-with-garlic-cheese-sauce",
			    "recipeTitle": "Baked Spicy Fries with Garlic Cheese Sauce",
			    "ingredients": [
			      "7-8 medium Idaho baking potatoes",
			      "2 egg whites",
			      "1 tablespoon chili powder",
			      "1 tablespoon seasoning salt",
			      "1½ teaspoons smoked sweet paprika",
			      "½ teaspoon cayenne",
			      "coarse sea salt to taste",
			      "2 ounces light cream cheese",
			      "a splash of milk",
			      "1 teaspoon minced fresh garlic",
			      "½ teaspoon seasoning salt",
			      "1 teaspoon oil",
			      "1 ounce good quality shredded cheese of choice (I used a sharp white French cheese... honestly I can't remember the name! woops.)"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "healthy",
			      "lightened up",
			      "snacks",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/skinny-fajita-shrimp-pasta",
			    "recipeTitle": "Skinny Shrimp Fajita Pasta",
			    "ingredients": [
			      "2 cups whole wheat pasta",
			      "9 ounces raw shrimp",
			      "1 tablespoon butter",
			      "2 cloves garlic, minced",
			      "Mexican seasoning (I used about ¾ tablespoon)",
			      "2 bell peppers, sliced thinly",
			      "1 onion, sliced thinly",
			      "2 ounces light cream cheese",
			      "6 ounces enchilada sauce (almost ¾ cup)"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "healthy",
			      "lightened up",
			      "pasta",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/garlic-chicken-and-vegetable-pot-pie",
			    "recipeTitle": "Garlic Chicken and Vegetable Pot Pie",
			    "ingredients": [
			      "8 tablespoons salted butter, divided",
			      "1 leek, white and light green parts, sliced and rinsed in a bowl of water",
			      "2 cups sliced carrots",
			      "2 cups chopped asparagus",
			      "12 ounces frozen peas",
			      "1 garlic rotisserie chicken (or about 2 cups shredded chicken seasoned with garlic)",
			      "2-3 cloves garlic",
			      "¾ cup flour",
			      "2 cups chicken stock",
			      "salt and pepper to taste",
			      "1 sheet pie crust, 1 sheet puff pastry, or 1 croissant dough sheet"
			    ],
			    "cuisineType": [
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/light-bbq-chicken-pizza",
			    "recipeTitle": "Light BBQ Chicken Pizza",
			    "ingredients": [
			      "1 head cauliflower",
			      "2 tablespoons olive oil",
			      "salt and pepper",
			      "½ cup cornmeal",
			      "2 eggs",
			      "2 teaspoons Italian seasoning",
			      "½ cup barbecue sauce",
			      "1 cup cooked, shredded chicken",
			      "¾ cup shredded Mozzarella cheese",
			      "thinly sliced red onions",
			      "fresh cilantro"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "popular",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-mexican-sweet-potato-skins",
			    "recipeTitle": "Healthy Mexican Sweet Potato Skins",
			    "ingredients": [
			      "3 medium sweet potatoes",
			      "1 can corn, rinsed and patted dry",
			      "1 can black beans, rinsed and drained",
			      "1 tablespoon butter",
			      "½ yellow onion, chopped",
			      "2-4 INDIVIDUAL chipotle peppers in adobo sauce, minced or pureed (not the whole can!)",
			      "1 ounce light cream cheese",
			      "¼ cup light sour cream",
			      "1 teaspoon salt (+ more to taste)",
			      "½ cup cilantro, roughly chopped",
			      "6 tablespoons shredded cheese (Pepperjack, Cheddar, Colby Jack... anything will work)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/almond-crusted-tilapia",
			    "recipeTitle": "Almond Crusted Tilapia",
			    "ingredients": [
			      "½ cup salted almonds",
			      "¼ cup breadcrumbs, plain or seasoned",
			      "2-4 tilapia filets (I always have enough crumbs if I'm using 4 smaller filets)",
			      "¼ cup Dijon mustard",
			      "1-2 tablespoons oil",
			      "1 tablespoon butter",
			      "parmesan cheese, fresh lemon, or sea salt for topping"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "fish and seafood",
			      "lightened up",
			      "quick and easy",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/coconut-green-curry-lentils",
			    "recipeTitle": "Coconut Green Curry Lentils",
			    "ingredients": [
			      "1 cup uncooked lentils, rinsed",
			      "½ cup bulgur",
			      "2½ cups water or vegetable broth",
			      "¼ cup green curry paste",
			      "¾ teaspoon turmeric",
			      "1 tablespoons tomato paste",
			      "1½ tablespoons butter",
			      "2 cloves garlic, minced",
			      "2 teaspoons garam masala",
			      "1 teaspoon sea salt",
			      "½ cup coconut milk",
			      "1 teaspoon fresh ginger, peeled and minced",
			      "2 cups fresh spinach, stems removed",
			      "Greek yogurt for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-tamale-pie",
			    "recipeTitle": "Chicken Tamale Pie",
			    "ingredients": [
			      "⅓ cup fat free milk",
			      "¼ cup egg substitute",
			      "1½ tablespoon taco seasoning, divided",
			      "¼ teaspoon ground red pepper",
			      "1 (14¾ ounce) can cream-style corn",
			      "1 (8.5 ounce) box corn muffin mix (such as Jiffy)",
			      "1 (4 ounce) can chopped green chiles, drained",
			      "1 (10 ounce) can red enchilada sauce - I recommend going with an authentic Mexican brand",
			      "2 cups shredded cooked chicken breast",
			      "¾ cup shredded white cheese (I used Raclette - random, I know, but it's what I had on hand, and it ended up being delicious!)",
			      "cilantro and crumbled Cotija cheese for topping"
			    ],
			    "cuisineType": [
			      "lightened up",
			      "meat and chicken",
			      "popular",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-thai-sweet-potatoes-and-lentil",
			    "recipeTitle": "Creamy Thai Sweet Potatoes and Lentils",
			    "ingredients": [
			      "1 cup lentils, rinsed",
			      "4 cups vegetable broth",
			      "2 medium sweet potatoes, unpeeled and diced.",
			      "1 teaspoon turmeric",
			      "3 tablespoons oil",
			      "1 tablespoon butter",
			      "2 cloves garlic, minced",
			      "½ onion, thinly sliced",
			      "½ head green cabbage, thinly shredded",
			      "2 jalapenos, ribs and seeds removed, minced",
			      "2 teaspoons fresh minced ginger",
			      "14.5 ounce can fire roasted tomatoes",
			      "⅔ cup regular coconut milk",
			      "cilantro for topping",
			      "salt to taste"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/light-orange-beef-and-broccoli",
			    "recipeTitle": "{Light} Orange Beef and Broccoli",
			    "ingredients": [
			      "juice of 1 orange",
			      "1 tablespoon fresh orange zest",
			      "2 tablespoons low sodium soy sauce",
			      "¼ cup beef broth",
			      "⅓ cup orange marmalade",
			      "2 tablespoons cornstarch",
			      "1 teaspoon oil",
			      "1 lb. flank steak, very thinly sliced",
			      "2 cloves garlic, minced",
			      "1 head broccoli, washed and cut into bite-sized pieces"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "meat and chicken",
			      "quick and easy",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/fontina-cheddar-gruyere-grilled-cheese",
			    "recipeTitle": "Three Cheese Roasted Vegetable Grilled Cheese",
			    "ingredients": [
			      "1 medium yellow flesh potato",
			      "2 large carrots",
			      "1 sprig fresh rosemary",
			      "1 sprig fresh thyme",
			      "1 tbs. olive oil",
			      "sea salt and pepper to taste",
			      "3 types of white, soft cheese (Gruyère, Raclette, Swiss, Gouda, Provolone, Fontina, White Cheddar, etc.)",
			      "4 slices thick, sturdy wheat bread",
			      "2 tbs. butter"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-soup-noodles",
			    "recipeTitle": "Chicken Soup Noodles",
			    "ingredients": [
			      "1 tablespoon olive oil",
			      "3 large carrots, peeled and sliced thinly",
			      "3 celery stalks, sliced thinly",
			      "¾ cup chopped onion",
			      "49 ounces chicken broth (about 6 cups)",
			      "1 tablespoon cornstarch",
			      "⅓ cup cold water",
			      "1 lb. package egg noodles",
			      "2 tablespoons butter",
			      "2 teaspoon thyme",
			      "2 teaspoon parsley",
			      "2 cups cooked, shredded chicken",
			      "3-4 green onions, thinly sliced"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/lazy-chocolate-cherry-fudge-cake",
			    "recipeTitle": "{Lazy} Chocolate Cherry Fudge Cake ",
			    "ingredients": [
			      "1 chocolate fudge cake mix",
			      "1 can cherry pie filling",
			      "3 eggs, beaten",
			      "1 teaspoon almond or vanilla extract",
			      "1 cup sugar",
			      "⅓ cup milk",
			      "5 tablespoons butter",
			      "1 cup chocolate chips"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "cake",
			      "dessert"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/skinny-chicken-enchiladas",
			    "recipeTitle": "Skinny Chicken Enchiladas",
			    "ingredients": [
			      "1 lb. chicken breasts",
			      "1 can black beans, drained and rinsed",
			      "1 can corn, drained",
			      "16 oz. fresh salsa",
			      "3 tablespoons taco seasoning",
			      "¼ cup water (optional)",
			      "12 small corn tortillas",
			      "1 cup shredded cheddar cheese",
			      "1 avocado, diced",
			      "¼ cup crema (see notes)",
			      "fresh cilantro, Cotija cheese for topping"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/classic-dinner-pancakes",
			    "recipeTitle": "Classic Dinner Pancakes",
			    "ingredients": [
			      "3 eggs",
			      "1½ cups flour (I use whole wheat pastry flour)",
			      "1 teaspoon baking soda",
			      "¾ teaspoon salt",
			      "1 tablespoon sugar",
			      "1⅔ cup buttermilk",
			      "3 tablespoons butter, melted"
			    ],
			    "cuisineType": [
			      "breakfast",
			      "pancakes",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/crab-avocado-nachos",
			    "recipeTitle": "Crab & Avocado Nachos",
			    "ingredients": [
			      "1 teaspoon butter",
			      "1 teaspoon oil",
			      "1 can white and yellow sweet corn",
			      "1 teaspoon cumin",
			      "1 teaspoon chili powder",
			      "1 lb. jumbo lump crab meat",
			      "½ cup sour cream",
			      "¼ cup chopped chives",
			      "tortilla chips",
			      "½ cup shredded cheese (I used white cheddar)",
			      "1 avocado, sliced or cut into chunks",
			      "1 slice bacon, chopped or crumbled"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "snacks"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/parmesan-baked-eggs",
			    "recipeTitle": "Parmesan Baked Eggs",
			    "ingredients": [
			      "½ tablespoon butter",
			      "½ teaspoon oil",
			      "1 shallot, minced",
			      "1 tablespoon fresh rosemary, minced",
			      "½ tablespoon fresh thyme, minced",
			      "½ teaspoon sea salt",
			      "6 eggs",
			      "1 tablespoon heavy cream",
			      "freshly grated Parmesan cheese"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "breakfast",
			      "eggs",
			      "gluten free",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/easy-cheesy-chicken-noodles",
			    "recipeTitle": "Easy Cheesy Chicken Noodles",
			    "ingredients": [
			      "1 clove garlic, minced",
			      "2 cups chicken broth",
			      "½ lb. egg noodles (\"homestyle\", thick and doughy)",
			      "½ tablespoon cornstarch",
			      "3 tablespoons cold water",
			      "12 oz. cooked, shredded chicken breast",
			      "1 tablespoon butter",
			      "2 tablespoons milk",
			      "½ cup shredded cheese (I used Cheddar and Monterrey Jack)",
			      "crumbled bacon or breadcrumbs for topping"
			    ],
			    "cuisineType": [
			      "lightened up",
			      "meat and chicken",
			      "pasta",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/kickin-cashew-chicken",
			    "recipeTitle": "Kickin' Cashew Chicken",
			    "ingredients": [
			      "2 medium onions",
			      "2 tablespoons tomato paste",
			      "½ cup cashews",
			      "1 tablespoon garam masala",
			      "1 teaspoon minced garlic",
			      "1 teaspoon chili powder",
			      "1 tablespoon lemon juice",
			      "1 teaspoon salt",
			      "1 tablespoon plain yogurt",
			      "2 tablespoons oil",
			      "1 lb. cubed raw chicken breasts",
			      "¼ cup golden raisins",
			      "½ cup fresh chopped cilantro",
			      "1¼ cup water"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/tex-mex-taco-salad",
			    "recipeTitle": "Tex-Mex Taco Salad",
			    "ingredients": [
			      "1 lb. ground beef",
			      "1 yellow onion, diced",
			      "3-4 tablespoons taco seasoning",
			      "¼ cup water",
			      "1 16-ounce can black beans",
			      "2-3 ounces Pepperjack Velveeta",
			      "fresh spinach or lettuce",
			      "fresh salsa",
			      "Cotija cheese, crumbled",
			      "tortilla chips, crushed",
			      "sour cream"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken",
			      "quick and easy",
			      "salads"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/light-garlic-shrimp-baked-penn",
			    "recipeTitle": "Light Garlic Shrimp Baked Penne",
			    "ingredients": [
			      "1 lb. raw, deveined tail-off shrimp",
			      "4 large cloves garlic, minced",
			      "1½ tablespoons butter",
			      "6 ounces whole wheat penne pasta",
			      "1 can fire roasted tomatoes with garlic",
			      "1 tablespoon flour",
			      "6 ounces 2% evaporated milk (about half of a can)",
			      "1 ounce light cream cheese",
			      "⅓ cup chicken broth",
			      "salt to taste",
			      "¼ cup Parmesan cheese for topping"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "lightened up",
			      "pasta",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-bacon-wild-rice-soup",
			    "recipeTitle": "Chicken Bacon Wild Rice Soup",
			    "ingredients": [
			      "3 (10¾ oz) cans chicken broth",
			      "2 cups water",
			      "½ cup uncooked wild rice, rinsed",
			      "½ cup finely chopped green onions",
			      "½ cup margarine or butter",
			      "¾ cup all-purpose flour",
			      "½ teaspoon salt",
			      "¼ teaspoon poultry seasoning",
			      "⅛ teaspoon pepper",
			      "2 cups half and half",
			      "1½ cup cubed or shredded cooked chicken or turkey",
			      "8 slices bacon, crisply cooked and crumbled",
			      "1 tablespoon chopped pimiento",
			      "2-3 tablespoons dry sherry, if desired"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "soup"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chili-cheese-black-bean-dip",
			    "recipeTitle": "Chili Cheese Black Bean Dip",
			    "ingredients": [
			      "3 cups prepared chili, or 2 cans",
			      "1 block cream cheese (I used light)",
			      "3 oz. Velveeta cheese",
			      "1 can black beans",
			      "chili powder, cumin, or cayenne to taste",
			      "cilantro for topping",
			      "tortilla chips for dipping"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "snacks"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-baked-corn",
			    "recipeTitle": "Creamy Baked Corn",
			    "ingredients": [
			      "1 stick butter, melted",
			      "1 cup sour cream",
			      "1 box Jiffy corn bread mix",
			      "1 can regular corn, undrained",
			      "1 can creamed corn",
			      "1 beaten egg",
			      "toppings: bacon, scallions, and/or French fried onions"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "quick and easy",
			      "salads",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-sweet-squash-bowl",
			    "recipeTitle": "Spicy-Sweet Squash Bowl",
			    "ingredients": [
			      "1 cup quinoa (+ vegetable stock, optional)",
			      "1 tablespoon curry powder",
			      "½ tablespoon packed brown sugar",
			      "¼ teaspoon cayenne pepper (for mild spice)",
			      "2 cups peeled, cubed butternut squash",
			      "2 teaspoons olive oil",
			      "1 teaspoon white sugar",
			      "¼ teaspoon cinnamon",
			      "1 bunch fresh cilantro",
			      "1 cup fresh spinach",
			      "¼ cup toasted pecan pieces"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "main dishes",
			      "salads",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/bacon-pear-and-raspberry-grilled-cheese",
			    "recipeTitle": "Bacon, Pear, and Raspberry Grilled Cheese",
			    "ingredients": [
			      "4 slices sturdy, grainy wheat bread",
			      "3 tablespoons raspberry preserves",
			      "¼ cup thinly sliced red pear",
			      "8 slices cooked bacon",
			      "4 slices Muenster cheese",
			      "1-2 tablespoons butter"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "quick and easy",
			      "sandwiches"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/skinny-veggie-lasagna",
			    "recipeTitle": "Skinny Veggie Lasagna",
			    "ingredients": [
			      "3 cups chopped veggies of your choice",
			      "½ chopped onion",
			      "2 tablespoons minced garlic",
			      "1 tablespoon olive oil",
			      "1 cup low fat ricotta cheese",
			      "1 egg",
			      "2 cups fresh spinach",
			      "2 cups tomato sauce",
			      "12 uncooked oven-ready whole grain lasagna noodles",
			      "1 cup mozzarella cheese, shredded"
			    ],
			    "cuisineType": [
			      "lightened up",
			      "pasta",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/healthy-bacon-pumpkin-pasta",
			    "recipeTitle": "Healthy Bacon & Pumpkin Pasta",
			    "ingredients": [
			      "2 cups dry whole grain shells",
			      "½ cup pumpkin puree",
			      "1 ounce light cream cheese",
			      "¼ cup fat free evaporated milk",
			      "½ teaspoon minced garlic",
			      "½ teaspoon salt",
			      "freshly ground pepper to taste",
			      "¼ cup cooked, crumbled bacon",
			      "¼ cup sliced scallions or green onions"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "pasta",
			      "quick and easy",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-sausage-posole",
			    "recipeTitle": "Spicy Sausage Posole",
			    "ingredients": [
			      "1 lb. ground pork sausage",
			      "1 tablespoon taco seasoning",
			      "2 cans (14 oz) fire-roasted tomatoes with garlic",
			      "14 oz. water",
			      "2½ cups white hominy",
			      "½ cup packed fresh cilantro",
			      "sour cream and tortilla chips for topping"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "lightened up",
			      "quick and easy",
			      "soup",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/cheesy-baked-eggplant-pizza",
			    "recipeTitle": "Cheesy Baked Eggplant Pizza",
			    "ingredients": [
			      "1 large unpeeled eggplant, cut into 1 inch slices",
			      "1 cup seasoned bread crumbs",
			      "¾ cup egg whites",
			      "1 cup tomato sauce (pizza, marinara, whatever you like)",
			      "1 cup shredded or sliced mozzarella cheese (can sub provolone or other cheese)",
			      "toppings: fresh spinach, pepperoni, green pepper, Canadian bacon, etc."
			    ],
			    "cuisineType": [
			      "healthy",
			      "quick and easy",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/curry-roasted-red-pepper-and-eggplant-soup",
			    "recipeTitle": "Curry Roasted Red Pepper and Eggplant Soup",
			    "ingredients": [
			      "4 small/medium eggplant (or 2 large)",
			      "2 red bell peppers",
			      "1 red onion, chopped",
			      "3 cloves garlic, minced,",
			      "2 tablespoons olive oil",
			      "4 cups vegetable broth",
			      "¼ cup + 2 tablespoons tahini or natural peanut butter",
			      "1 teaspoon curry",
			      "1 teaspoon garam masala",
			      "1 teaspoon chili powder",
			      "optional: 2 tablespoons cream, 1 teaspoon lemon juice, cayenne for sprinkling"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "soup",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chicken-zucchini-pasta",
			    "recipeTitle": "Chicken Zucchini Pasta",
			    "ingredients": [
			      "2 cups cooked, chopped/shredded chicken",
			      "2-3 cups raw sliced zucchini",
			      "1 jar pasta sauce",
			      "1 box bowtie pasta",
			      "parmesan cheese"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "meat and chicken",
			      "pasta",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/marisas-spicy-chicken-tostadas",
			    "recipeTitle": "Marisa's Spicy Chicken Tostadas",
			    "ingredients": [
			      "1 whole chicken (could sub pulled rotisserie chicken)",
			      "1 bottle chipotle peppers in adobo sauce",
			      "8 medium tomatoes, very ripe",
			      "2 onions",
			      "2 cloves garlic",
			      "lettuce, queso, crema, and tostadas"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/cheesy-meatless-meatballs-with-marinara",
			    "recipeTitle": "Cheesy Meatless Meatballs with Marinara",
			    "ingredients": [
			      "1 bag prepared brown and wild rice, such as Uncle Ben's (about 2 cups cooked)",
			      "1 cup cooked lentils",
			      "1 garlic clove, minced",
			      "½ teaspoon cumin",
			      "⅓ cup flour",
			      "3 tablespoons seasoned breadcrumbs",
			      "olive oil",
			      "marinara or tomato sauce",
			      "cheese"
			    ],
			    "cuisineType": [
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/butternut-squash-mac-n-cheese-with-caramelized-onions-apples-and-bacon",
			    "recipeTitle": "Butternut Squash Mac and Cheese with Caramelized Onions, Bacon, and Apple",
			    "ingredients": [
			      "½ box whole grain elbow macaroni (about 2.5 cups dry)",
			      "1 cup canned butternut squash puree",
			      "¼ cup + 2 tablespoons evaporated milk",
			      "¼ cup chicken or vegetable broth",
			      "1 oz low fat cream cheese",
			      "1 teaspoon salt",
			      "½ cup shredded cheddar cheese",
			      "1 tablespoon butter",
			      "½ cup onions, sliced thinly",
			      "1 large crispy apple, chopped or grated",
			      "4 tablespoons crumbled bacon"
			    ],
			    "cuisineType": [
			      "lightened up",
			      "pasta",
			      "quick and easy",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/mozzarella-basil-and-corn-quesadilla",
			    "recipeTitle": "Mozzarella, Basil and Corn Quesadilla",
			    "ingredients": [
			      "1 whole tomato, chopped",
			      "⅓ cup corn",
			      "4 leaves fresh basil, cut into ribbons",
			      "2 tortillas",
			      "⅓ cup shredded mozzarella cheese",
			      "hummus, optional",
			      "salt and pepper"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "lightened up",
			      "quick and easy",
			      "sandwiches",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/southwest-black-bean-casserole",
			    "recipeTitle": "Southwest Black Bean Casserole",
			    "ingredients": [
			      "½ lb. ground extra lean turkey",
			      "1 chopped onion",
			      "1 jalapeno pepper, seeds and ribs removed, diced",
			      "1 red pepper, chopped",
			      "½ tsp salt",
			      "½ tsp ground cumin",
			      "¼ tsp ground red pepper",
			      "5 garlic cloves, minced",
			      "⅔ cup low-sodium chicken broth",
			      "2 (15 oz) cans black beans, rinsed and drained",
			      "1-2 chopped seeded tomatoes",
			      "¼ cup crumbled bacon",
			      "½ cup (2 oz) shredded Monterey Jack cheese",
			      "¼ cup thinly sliced green onions"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "meat and chicken",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chipotle-turkey-burger",
			    "recipeTitle": "Chipotle Turkey Burgers",
			    "ingredients": [
			      "1 lb extra lean ground turkey",
			      "1 clove garlic, minced",
			      "2 tablespoons canned chipotles in adobo sauce (pureed)",
			      "1 tablespoon chili powder",
			      "1 teaspoon salt",
			      "½ teaspoon pepper"
			    ],
			    "cuisineType": [
			      "lightened up",
			      "meat and chicken",
			      "quick and easy",
			      "sandwiches"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-peanut-chicken-salad",
			    "recipeTitle": "Spicy Peanut Chicken Salad",
			    "ingredients": [
			      "1 cup julienne red and yellow pepper",
			      "1 cup shredded or julienne carrots",
			      "1 cup shredded zucchini",
			      "½ cup finely chopped broccoli",
			      "½ cup chopped green onions",
			      "1 cup chopped or shredded cooked chicken breast",
			      "8 oz. cooked soba noodles or whole grain linguine",
			      "5 tablespoons soy sauce",
			      "2 tablespoons water",
			      "2 tablespoons peanut butter",
			      "2 tablespoons sesame or canola oil",
			      "1 tablespoon vinegar",
			      "1 tablespoon fresh ginger",
			      "½ tablespoon honey",
			      "1 clove garlic",
			      "1 teaspoon sugar",
			      "1 minced small red Thai chili pepper, seeds and ribs removed (another hot chili pepper, such as jalapeno or serrano, could be substituted)",
			      "⅓ cup peanuts"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "pasta",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/hot-dog-bar",
			    "recipeTitle": "Hot Dog Bar",
			    "ingredients": [

			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/farmers-market-flatbread-pizza",
			    "recipeTitle": "Farmer's Market Flatbread Pizza",
			    "ingredients": [
			      "1 flatbread",
			      "1 cup shredded zucchini",
			      "1 teaspoon olive oil",
			      "½ cup chopped grape tomatoes",
			      "2 tablespoons white cheese",
			      "3 leaves fresh basil, chopped"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/mango-chicken-salad",
			    "recipeTitle": "Mango Chicken Salad",
			    "ingredients": [
			      "½ lb. chicken breast",
			      "1 tbs. each minced garlic and jalapeno and olive oil",
			      "1 teaspoon chili powder",
			      "1 mango",
			      "1 cup celery, chopped",
			      "3 tablespoons light olive oil mayonnaise",
			      "2 tablespoons plain yogurt",
			      "juice and zest of ½ lime",
			      "½ cup fresh chopped cilantro",
			      "optional add-ins: 2 tbs. minced red onion, 1 chopped roasted red pepper, 1 cup black beans, 1 teaspoon sugar"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "main dishes",
			      "meat and chicken",
			      "quick and easy",
			      "salads"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/red-pepper-goat-cheese-panini",
			    "recipeTitle": "Red Pepper & Goat Cheese Panini",
			    "ingredients": [
			      "4 thick slices sourdough bread",
			      "1 red bell pepper (or jarred roasted red peppers)",
			      "2 teaspoons olive oil",
			      "½ cup olive tapenade (jarred, found with the olives at the grocery store)",
			      "½ cup goat cheese",
			      "handful fresh spinach"
			    ],
			    "cuisineType": [
			      "sandwiches",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-cilantro-dressing",
			    "recipeTitle": "Creamy Cilantro Dressing",
			    "ingredients": [
			      "1 bunch cilantro (about 1 cup packed)",
			      "1 cloves garlic",
			      "3 tablespoons plain yogurt",
			      "2½ tablespoons olive oil",
			      "1 teaspoon each honey, lime juice, and salt",
			      "1 teaspoon sugar (optional)",
			      "3 teaspoons water (optional)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "quick and easy",
			      "salads"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/5-minute-green-curry-salad",
			    "recipeTitle": "5-Minute Green Curry Salad",
			    "ingredients": [
			      "1 bag preshredded coleslaw (I used the broccoli slaw)",
			      "1 cup shredded carrots",
			      "⅓ cup coconut milk",
			      "½ cup light sour cream",
			      "2 tablespoons sugar",
			      "1 tablespoon green curry paste",
			      "1 teaspoon curry powder",
			      "1 teaspoon vinegar",
			      "¼ cup golden raisins",
			      "¼ cup sunflower seeds or other nuts",
			      "fresh cilantro"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "quick and easy",
			      "salads",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-basil-dip",
			    "recipeTitle": "Creamy Basil Dip",
			    "ingredients": [
			      "¾ cup light sour cream",
			      "¾ cup mayonnaise",
			      "½ cup shredded parmesan",
			      "½ cup fresh basil, chopped",
			      "crushed garlic to taste",
			      "pinch of oregano and salt"
			    ],
			    "cuisineType": [
			      "sandwiches",
			      "snacks",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/farmers-market-pasta",
			    "recipeTitle": "Farmer's Market Pasta",
			    "ingredients": [
			      "1 cup peas",
			      "2 cups dry pasta (I used whole wheat shells)",
			      "¼ cup reserved pasta water",
			      "½ tablespoon butter",
			      "¾ cup ricotta cheese or cottage cheese",
			      "3 cloves garlic",
			      "⅓ cup parmesan cheese, freshly grated",
			      "⅓ cup mozzarella cheese, freshly grated",
			      "1 teaspoon olive oil",
			      "fresh torn basil",
			      "4 thinly sliced pieces of fresh mozzarella"
			    ],
			    "cuisineType": [
			      "pasta",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/garlic-edamame",
			    "recipeTitle": "Garlic Edamame",
			    "ingredients": [
			      "1 bag frozen edamame",
			      "3 cloves garlic",
			      "2 tablespoons olive oil",
			      "coarse sea salt",
			      "low sodium soy sauce (+ wasabi, if you have it!)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "quick and easy",
			      "snacks",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/classic-bean-burgers",
			    "recipeTitle": "Classic Bean Burgers",
			    "ingredients": [
			      "⅓ cup red onion (about ½ onion)",
			      "5 cloves garlic",
			      "½ cup almonds",
			      "½ cup sunflower seeds",
			      "½ cup fresh cilantro",
			      "1 teaspoon hot chili powder",
			      "1 teaspoon olive oil",
			      "½ to ¾ teaspoon salt",
			      "Fresh ground pepper",
			      "½ cup dried bread crumbs",
			      "1 15-ounce can pinto beans"
			    ],
			    "cuisineType": [
			      "sandwiches",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/mango-black-bean-coconut-tacos",
			    "recipeTitle": "Mango Black Bean Tacos",
			    "ingredients": [
			      "2 diced mangoes",
			      "20 oz. black beans (about 1½ cans)",
			      "3-4 tbs. diced red onion",
			      "1 tbs. diced jalapeno",
			      "1 lime",
			      "⅓ cup coconut milk",
			      "⅔ cup sour cream",
			      "1 tbs. white sugar",
			      "olive oil, salt, pepper",
			      "a handful of fresh cilantro",
			      "corn tortillas"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/garlic-shrimp-and-zucchini-wrap",
			    "recipeTitle": "Garlic Shrimp and Zucchini Wrap",
			    "ingredients": [
			      "10-12 uncooked shrimp, peeled, deveined, tail-off*",
			      "1 small zucchini",
			      "2 tbs. creamy garlic scape dip, or another garlicky sauce",
			      "2 tbs. sour cream",
			      "2 whole wheat wraps",
			      "½ tbs. butter",
			      "½ tbs. olive oil",
			      "¼ teaspoon paprika (x2)"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "quick and easy",
			      "sandwiches"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-garlic-scape-dip",
			    "recipeTitle": "Creamy Garlic Scape Dip",
			    "ingredients": [
			      "10 garlic scapes",
			      "¼ cup almonds",
			      "2 tbs. sunflower seeds",
			      "2 tbs. olive oil",
			      "¼ cup freshly grated parmesan cheese",
			      "salt and pepper",
			      "½ cup Greek yogurt",
			      "sour cream and/or mayonnaise"
			    ],
			    "cuisineType": [
			      "snacks",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/wild-rice-flatbread",
			    "recipeTitle": "Wild Rice Flatbread",
			    "ingredients": [
			      "2 cups cooked wild rice (or “instant” wild rice, wild rice blend, etc)",
			      "½ cup water",
			      "2 egg whites",
			      "1 clove of garlic",
			      "1 tbs. flaxseed meal",
			      "seasoning (I recommend a sprinkle of red pepper flakes to spice it up!)",
			      "½ tbs. olive oil + salt + pepper"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "quick and easy",
			      "snacks",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/greek-salad-with-paprika-croutons",
			    "recipeTitle": "Greek Salad with Paprika Croutons",
			    "ingredients": [
			      "1 cup spinach",
			      "½ cucumber, peeled and diced small",
			      "½ tomato, chopped",
			      "2 tbs. fresh parsley, finely chopped",
			      "a few banana pepper slices, chopped",
			      "2 tbs. feta cheese",
			      "1 serving of bread (ciabatta or sandwich bread)",
			      "½ tbs. butter, melted",
			      "1 teaspoon smoked paprika",
			      "olive oil, balsamic vinegar, and/or Greek dressing"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "salads",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/portobello-red-pepper-pesto-pizza",
			    "recipeTitle": "Portobello Red Pepper & Pesto Pizza",
			    "ingredients": [
			      "your favorite pizza dough (I used a loaf of frozen bread dough because I had some, but if you’re going homemade, try this)",
			      "2-3 portobello mushrooms, stems removed",
			      "5 jarred roasted red peppers, sliced",
			      "¾ cup parmesan mozzarella blend",
			      "¼ cup pesto (store bought or homemade)"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "sandwiches",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-hummus",
			    "recipeTitle": "Spicy Hummus",
			    "ingredients": [
			      "1 can chickpeas, drained",
			      "2 cloves garlic",
			      "1 tbs. tahini",
			      "1 squeeze of fresh lemon juice",
			      "1 tbs. olive oil",
			      "salt to taste",
			      "cayenne to taste (I would start small with ¼ teaspoon)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "snacks",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/grilled-barbeque-onion-and-smoked-gouda-quesadillas",
			    "recipeTitle": "Grilled Barbeque Onion and Smoked Gouda Quesadillas",
			    "ingredients": [
			      "3 tablespoons olive oil",
			      "2 large yellow onions",
			      "½ cup barbecue sauce",
			      "2 tablespoons water",
			      "Around 1 teaspoon hot sauce (or to taste)",
			      "6 to 8 ounces smoked Gouda cheese",
			      "⅓ cup chopped cilantro",
			      "8 flour tortillas"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "sandwiches",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/parmesan-pesto-veggie-sandwich",
			    "recipeTitle": "Parmesan Pesto Veggie Sandwich",
			    "ingredients": [
			      "2 whole grain ciabatta rolls",
			      "1 whole zucchini",
			      "1 whole summer squash",
			      "1 tomato",
			      "¼ cup parmesan cheese",
			      "4 tbs. pesto"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "quick and easy",
			      "sandwiches",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-sweet-potato-salad",
			    "recipeTitle": "Roasted Sweet Potato Salad",
			    "ingredients": [
			      "1 medium sweet potato, peeled and cut into 1-inch chunks",
			      "1 half of a red or yellow bell pepper, seeded and finely diced",
			      "half of 1 jalapeno, minced",
			      "1 clove garlic, minced",
			      "a few tbs. chopped red onion",
			      "zest of 1 lemon or lime",
			      "1 cup black beans",
			      "⅓ cup chopped fresh cilantro"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "lightened up",
			      "quick and easy",
			      "salads",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/garlic-parmesan-burgers-creamed-spinach-sauce",
			    "recipeTitle": "Garlic Parmesan Burgers & Creamed Spinach Sauce",
			    "ingredients": [
			      "½ lb. ground turkey",
			      "2 cloves garlic, minced",
			      "⅓ cup seasoned bread crumbs",
			      "3 tbs. fresh parsley",
			      "salt and pepper",
			      "beaten egg",
			      "3 tbs. freshly grated parmesan cheese",
			      "2 Tbs unsalted butter",
			      "¼ cup minced onion",
			      "2 Tbs all-purpose flour",
			      "½ cup fat free half-and-half, plus more as needed",
			      "½ cup low-sodium chicken broth",
			      "kosher salt and black pepper",
			      "pinch cayenne",
			      "pinch nutmeg",
			      "4 cups chopped fresh spinach",
			      "1 Tbs grated Parmesan",
			      "squeeze of fresh lemon juice"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "sandwiches"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spicy-corn-salad",
			    "recipeTitle": "Spicy Corn Salad",
			    "ingredients": [
			      "2 cans of corn (drained)",
			      "½ of a red pepper, diced",
			      "½ of a green pepper, diced",
			      "½ of a yellow pepper, diced",
			      "½ of a red onion, chopped OR about 5 green onions, diced",
			      "1 handful of fresh cilantro, chopped",
			      "⅓ cup light sour cream",
			      "3 tbs. mayonnaise",
			      "⅓ cup shredded cheddar or Mexican cheese",
			      "a few handfuls of chili flavored Fritos, crushed",
			      "pinch of cayenne to add heat, if you want!"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "salads",
			      "snacks",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/baked-zucchini-fries",
			    "recipeTitle": "Baked Zucchini Fries",
			    "ingredients": [
			      "2 medium zucchini, sliced into sticks",
			      "1 large egg white",
			      "⅓ cup seasoned bread crumbs",
			      "¼ tsp. garlic powder (optional)",
			      "cooking spray",
			      "salt and fresh pepper"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "lightened up",
			      "quick and easy",
			      "snacks",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/sausage-and-mozzarella-calzone",
			    "recipeTitle": "Sausage and Mozzarella Calzone",
			    "ingredients": [
			      "4 frozen bread loaves (I used Rhoades brand)",
			      "1 lb. ground sausage",
			      "1 cup mozzarella cheese, shredded",
			      "1 cup tomato sauce (pizza, pasta, marinara, whatever)"
			    ],
			    "cuisineType": [
			      "meat and chicken",
			      "sandwiches"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/indian-street-food-aloo-tikki",
			    "recipeTitle": "Indian Street Food: Aloo Tikki",
			    "ingredients": [
			      "3 large potatoes, peeled, boiled and mashed",
			      "¾ cup frozen peas (uncooked)",
			      "½ large onion, chopped",
			      "1 jalapeno pepper, minced",
			      "1 tsp. chili powder",
			      "2 tsp. garam masala",
			      "1 tsp. cumin powder",
			      "1 tbs. grated ginger",
			      "1 handful fresh parsley or cilantro leaves, chopped",
			      "2 tbs. bread crumbs (I used panko)",
			      "4 tbs. flour"
			    ],
			    "cuisineType": [
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-potatoes-with-maple-fig-sauce",
			    "recipeTitle": "Roasted Potatoes with Maple Fig Sauce",
			    "ingredients": [
			      "1 lb. red potatoes, washed and quartered",
			      "olive oil",
			      "Sel de Cuisine seasoning (or any seasoning that you like)",
			      "3 tbs. mayonnaise (I used the kind made with olive oil)",
			      "⅓ cup sour cream",
			      "2 tbs. maple syrup",
			      "2 tbs. brown sugar",
			      "2 tbs. fig preserves (my new favorite!)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "quick and easy",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/caprese-penne",
			    "recipeTitle": "Caprese Penne",
			    "ingredients": [
			      "½ box whole wheat penne",
			      "1 cup of your favorite tomato sauce",
			      "¼ cup sour cream",
			      "½ cup parmesan cheese",
			      "fresh mozzarella, sliced (sliced provolone works in a pinch)",
			      "1 pint of cherry tomatoes (some halved, some left whole)",
			      "1 bunch of fresh basil leaves"
			    ],
			    "cuisineType": [
			      "pasta",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-sweet-potatoes-hummus",
			    "recipeTitle": "Roasted Sweet Potatoes & Hummus",
			    "ingredients": [
			      "1 sweet potato, diced",
			      "1 tbs. olive oil",
			      "a generous sprinkling of seasoning (sel de cuisine for me!)",
			      "2 cups fresh spinach, chopped",
			      "1 tbs. olive oil (again)",
			      "a little more seasoning (again, sel de cuisine)",
			      "crumbled or shredded white cheese",
			      "hummus"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/asparagus-pea-goat-cheese-pizza",
			    "recipeTitle": "Asparagus, Pea, & Goat Cheese Pizza",
			    "ingredients": [
			      "asparagus and pea saute",
			      "pizza sauce (although you could omit this and just use oil)",
			      "provolone cheese, thinly sliced",
			      "goat cheese, crumbled",
			      "your favorite pizza crust (I used this one)"
			    ],
			    "cuisineType": [
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/asparagus-and-pea-saute",
			    "recipeTitle": "Asparagus and Pea Saute",
			    "ingredients": [
			      "1 bunch fresh asparagus, chopped",
			      "1 bag frozen peas (or fresh, ideally!)",
			      "2 tbs. butter",
			      "1 shallot, minced",
			      "1 tbs. honey"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/tortilla-chicken-with-salsa-verde",
			    "recipeTitle": "Tortilla Chicken with Salsa Verde",
			    "ingredients": [
			      "2 skinless, boneless chicken breasts",
			      "1 egg white, beaten",
			      "½ cup tortilla chips, crushed",
			      "½ cup panko bread crumbs",
			      "½ cup salsa verde",
			      "¼ cup pico de gallo (chopped fresh tomatoes and onions)",
			      "1-2 slices or 4 tbs. white cheese (ideally Mexican cheese, but provolone worked fine for me!)",
			      "cilantro sauce: cilantro, oil, avocado, salsa verde"
			    ],
			    "cuisineType": [
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/artichoke-and-red-pepper-melt",
			    "recipeTitle": "Artichoke and Red Pepper Melt",
			    "ingredients": [
			      "2 slices whole wheat bread, crust on the outside",
			      "6 tbs. hummus",
			      "6 roasted red peppers",
			      "½ cup artichokes, drained and chopped",
			      "½ cup fresh spinach, chopped",
			      "4 tbs. mozzarella cheese"
			    ],
			    "cuisineType": [
			      "healthy",
			      "quick and easy",
			      "sandwiches",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/rosemary-goat-cheese-and-wild-rice",
			    "recipeTitle": "Rosemary Goat Cheese Wild Rice",
			    "ingredients": [
			      "fresh rosemary",
			      "goat cheese",
			      "cooked wild rice",
			      "vegetable of choice (I used steamed broccoli)",
			      "lemon zest and juice",
			      "minced garlic",
			      "sel de cuisine (or other seasoning blend)",
			      "honey"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "quick and easy",
			      "salads",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/smoked-almond-and-goat-cheese-salad",
			    "recipeTitle": "Smoked Almond and Goat Cheese Salad",
			    "ingredients": [
			      "1 lb. fresh baby spinach and/or spring mix",
			      "3 tbs. fresh parsley",
			      "¾ cup crushed smoked almonds (about 10 pulses in a food processor)",
			      "4 oz. crumbled goat cheese",
			      "1 shallot, minced",
			      "1 tbs. honey",
			      "2 tbs. red wine vinegar",
			      "1 tsp. dijon mustard",
			      "4 tbs. olive oil",
			      "2 tsp. fresh rosemary",
			      "salt and pepper"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "quick and easy",
			      "salads",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/sausage-and-red-pepper-quiche",
			    "recipeTitle": "Sausage and Red Pepper Quiche",
			    "ingredients": [
			      "1 cup cooked wild rice",
			      "1 can cream of mushroom/chicken soup",
			      "1½ cups cooked breakfast sausage or bacon, drained",
			      "1 diced onion",
			      "1½ cups shredded mozzarella (or other) cheese",
			      "7 beaten eggs",
			      "2-3 handfuls of spinach",
			      "½ cup chopped roasted red pepper (I used the jarred kind)",
			      "salt and pepper"
			    ],
			    "cuisineType": [
			      "breakfast",
			      "eggs",
			      "gluten free",
			      "meat and chicken",
			      "quick and easy"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/avocado-bacon-orzo",
			    "recipeTitle": "Avocado Bacon Orzo",
			    "ingredients": [
			      "about 10 oz. orzo pasta",
			      "1 cup frozen peas",
			      "2-3 avocados",
			      "½ cup crumbled bacon",
			      "1 tsp. minced garlic",
			      "feta cheese crumbles",
			      "salt and pepper to taste"
			    ],
			    "cuisineType": [
			      "healthy",
			      "quick and easy",
			      "salads",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/avocado-tomatillo-dip",
			    "recipeTitle": "Avocado Tomatillo Dip",
			    "ingredients": [
			      "2 avocados, seeds and skin removed",
			      "zest and juice of 1 lime",
			      "2 cloves garlic",
			      "1 tsp salt AND pepper",
			      "1 teaspoon honey",
			      "¾ cup Roasted Salsa Verde (I love Archer Farms brand)",
			      "a handful of fresh herbs (I used cilantro and parsley)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "quick and easy",
			      "sandwiches",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/spinach-artichoke-pasta",
			    "recipeTitle": "Spinach Artichoke Pasta",
			    "ingredients": [
			      "¾ cup whole grain pasta (I like shells)",
			      "a handful of fresh spinach",
			      "2 tbs. Philadelphia Cooking Creme",
			      "1 tsp. minced garlic",
			      "½ cup canned artichoke hearts, quartered",
			      "½ cup white beans",
			      "Parmesan cheese"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "pasta",
			      "quick and easy",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/shrimp-and-feta-orzo",
			    "recipeTitle": "Shrimp and Feta Orzo",
			    "ingredients": [
			      "Kosher salt",
			      "Good olive oil",
			      "¾ pound orzo pasta (rice-shaped pasta)",
			      "⅓ cup freshly squeezed lemon juice (2 lemons)",
			      "Freshly ground black pepper",
			      "2 pounds (16 to 18 count) shrimp",
			      "1 shallot, minced",
			      "½ cup minced scallions, white and green parts",
			      "1 cup chopped fresh dill (I used less and it was fine)",
			      "1 cup chopped fresh flat-leaf parsley",
			      "1 hothouse cucumber, unpeeled, seeded, and medium-diced",
			      "¾ pound good feta cheese, large diced"
			    ],
			    "cuisineType": [
			      "fish and seafood",
			      "healthy",
			      "salads"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/nuevo-cubano-sandwiches",
			    "recipeTitle": "Nuevo Cubano Sandwich",
			    "ingredients": [
			      "¼ cup chopped fresh cilantro",
			      "1 tablespoons fresh lime juice",
			      "¼ teaspoon chili powder",
			      "2 garlic cloves, minced",
			      "1 (15-ounce) can black beans, rinsed and drained",
			      "ham",
			      "provolone",
			      "mango slices",
			      "wheat bread (needs to be pretty sturdy)",
			      "black bean puree (see above)"
			    ],
			    "cuisineType": [
			      "quick and easy",
			      "sandwiches"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/basil-chicken-lettuce-wraps",
			    "recipeTitle": "Basil Chicken Lettuce Wraps",
			    "ingredients": [
			      "ground chicken (1 lb)",
			      "diced jalapeno to taste",
			      "1 T. soy sauce",
			      "1 T. oil",
			      "2 T. white sugar",
			      "1 T. hoisin sauce",
			      "1 T. garlic",
			      "1 T. water",
			      "fresh basil",
			      "brown rice (about 2 cups)",
			      "lettuce leaves, washed"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken",
			      "salads"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/asparagus-quesadilla-lasagna",
			    "recipeTitle": "Asparagus Quesadilla Lasagna",
			    "ingredients": [
			      "whole wheat tortilla",
			      "asparagus (about 5-6 stalks)",
			      "½ cup frozen peas",
			      "½ cup ricotta cheese",
			      "1 tsp. minced garlic",
			      "2 slices cheese (I used Gouda)",
			      "garnishes: green onions, gorgonzola cheese, parsley"
			    ],
			    "cuisineType": [
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/sun-dried-tomato-dill-linguine",
			    "recipeTitle": "Sun Dried Tomato Dill Linguine",
			    "ingredients": [
			      "4 servings whole wheat linguine",
			      "½ cup ricotta cheese",
			      "1 cup reserved pasta water",
			      "2 cups spinach",
			      "3 tbs. of Sun Dried Tomato Dill seasoning mix from The Golden Fig"
			    ],
			    "cuisineType": [
			      "pasta",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/butternut-squash-lasagna",
			    "recipeTitle": "Butternut Squash Lasagna",
			    "ingredients": [
			      "4 cups butternut squash puree (i.e. Farmer’s Market Organic canned)",
			      "1½ tbs. sel de cuisine (features cinnamon, rosemary, and salt)",
			      "1 tsp. minced garlic",
			      "salt and pepper to taste",
			      "15 oz. part-skim ricotta cheese",
			      "½ cup grated Parmesan cheese",
			      "8 short whole wheat lasagna noodles",
			      "sliced cheese to top pieces (optional – but not really)"
			    ],
			    "cuisineType": [
			      "healthy",
			      "lightened up",
			      "pasta",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-bell-pepper-tostadas",
			    "recipeTitle": "Roasted Bell Pepper Tostadas",
			    "ingredients": [
			      "2-3 bell peppers",
			      "1 onion",
			      "1 teaspoon each cumin, chili powder, smoked sweet paprika",
			      "1 can black beans",
			      "Garlic",
			      "Tostada shells (3-4)",
			      "Scallions",
			      "Sour cream and salsa"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "quick and easy",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/butternut-squash-black-bean-wrap",
			    "recipeTitle": "Butternut Squash Black Bean Wrap",
			    "ingredients": [
			      "3 cups chopped butternut squash, steamed or roasted",
			      "1 cup cooked quinoa",
			      "1 cup rinsed black beans",
			      "chopped scallions",
			      "whole wheat wraps",
			      "white crumbly cheese (feta, gorgonzola, cotija, etc.)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "lightened up",
			      "sandwiches",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/cheesy-roasted-potato-nachos",
			    "recipeTitle": "Cheesy Roasted Potato Nachos",
			    "ingredients": [
			      "4 red potatoes (not the small ones - at least medium size)",
			      "1 can black beans - drained",
			      "1 can diced tomatoes -drained",
			      "shredded mozzarella cheese (I used about 2 cups)",
			      "taco seasoning",
			      "toppings: salsa, avocado, sour cream, cilantro, scallions"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/cheesy-black-bean-risotto",
			    "recipeTitle": "Cheesy Black Bean Risotto",
			    "ingredients": [
			      "risotto (1 cup Arborio rice)",
			      "chicken broth (3 cups)",
			      "diced tomatoes",
			      "black beans",
			      "¾ cup shredded “Mexican” cheese",
			      "taco seasoning packet",
			      "fresh cilantro",
			      "diced cooked chicken (optional)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "meat and chicken",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/edamame-hummus-wrap",
			    "recipeTitle": "Edamame Hummus Wrap",
			    "ingredients": [
			      "1.5 cups cooked edamame (or mukimame … just no pods please)",
			      "3 tablespoons olive oil",
			      "1 tablespoon tahini",
			      "1.5 teaspoon crushed garlic",
			      "salt",
			      "water"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "healthy",
			      "sandwiches",
			      "superfoods",
			      "vegan",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/creamy-root-vegetable-stew",
			    "recipeTitle": "Creamy Root Vegetable Stew",
			    "ingredients": [
			      "1 tablespoon olive oil",
			      "1 cup chopped onion",
			      "3 tablespoons chopped garlic",
			      "1 tablespoon chopped fresh rosemary, divided",
			      "2½ cups (3/4-inch) diced peeled Yukon gold potato (about 1 pound)",
			      "2¼ cups (3/4-inch) diced peeled rutabaga (about ¾ pound)",
			      "2 cups (3/4-inch) diced peeled turnip",
			      "1¼ cups (3/4-inch) diced peeled parsnip (I used carrots instead!)",
			      "2 cups organic vegetable broth",
			      "2 cups water",
			      "2 tablespoons heavy whipping cream",
			      "½ teaspoon freshly ground black pepper",
			      "¼ teaspoon salt",
			      "Cheese of choice (I used sliced Swiss)"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "soup",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/roasted-butternut-squash-risotto-with-sugared-walnuts",
			    "recipeTitle": "Roasted Butternut Squash Risotto with Sugared Walnuts",
			    "ingredients": [
			      "½ cup coarsely chopped walnuts",
			      "1 tablespoon butter, melted",
			      "1 teaspoon brown sugar",
			      "⅛ teaspoon freshly ground black pepper",
			      "2 cups (1/2-inch) cubed peeled butternut squash",
			      "1 tablespoon olive oil",
			      "2 teaspoons minced fresh garlic",
			      "4 cups fat-free, lower-sodium chicken broth",
			      "½ cup water",
			      "¼ cup pancetta, finely chopped (I used bacon)",
			      "1 cup finely chopped onion",
			      "1¼ cups uncooked Arborio rice",
			      "½ cup chardonnay",
			      "2 tablespoons finely chopped fresh lemon thyme or 1½ tablespoons thyme plus ½ teaspoon grated lemon rind",
			      "¼ teaspoon salt",
			      "¼ teaspoon freshly ground black pepper",
			      "¼ cup shaved Parmigiano-Reggiano cheese"
			    ],
			    "cuisineType": [
			      "gluten free",
			      "superfoods",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/chili-corn-casserole-with-polenta",
			    "recipeTitle": "Chili-Corn Casserole with Polenta",
			    "ingredients": [
			      "2 tablespoons unsalted butter",
			      "4 ears corn, kernels cut off",
			      "Kosher salt",
			      "6 scallions, chopped",
			      "3 to 4 cups leftover chili",
			      "1½ cups shredded pepper jack or monterey jack cheese (about 6 ounces)",
			      "1 18-ounce tube precooked polenta, cut into 12 rounds"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "meat and chicken"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/tomato-ricotta-pasta-with-broccoli",
			    "recipeTitle": "Tomato Ricotta Pasta with Broccoli",
			    "ingredients": [
			      "tomato sauce",
			      "part-skim ricotta cheese",
			      "broccoli",
			      "whole wheat pasta",
			      "parmesan cheese"
			    ],
			    "cuisineType": [
			      "5 ingredients",
			      "healthy",
			      "pasta",
			      "quick and easy",
			      "superfoods"
			    ],
			    "sourceName": "Pinch of Yum"
			  },
			  {
			    "sourceHref": "http://pinchofyum.com/zucchini-fritters-goat-cheese-sauce",
			    "recipeTitle": "Zucchini Fritters & Goat Cheese Sauce",
			    "ingredients": [
			      "1 medium zucchini, grated",
			      "½ tsp salt",
			      "zest of 1 lemon",
			      "a handful of parsley, chopped",
			      "chives, chopped",
			      "1 egg",
			      "pepper",
			      "½ cup flour",
			      "oil for frying",
			      "Goat Cheese, 100 grams",
			      "Plain yogurt, ⅔ cup",
			      "Salt, pepper, and chives (to taste)"
			    ],
			    "cuisineType": [
			      "snacks",
			      "vegetarian"
			    ],
			    "sourceName": "Pinch of Yum"
			  }
			]
		}
	}
}]);