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
      "Pork",
      "Gluten-free"
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
      "Vegetarian"
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
      "Chicken"
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
      "Seafood"
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
      "2 cups cooked farro or a gluten-free alternative like quinoa (I found pre-cooked farro in the rice section of the grocery store and it worked great)",
      "3 cups arugula",
      "¼ cup fresh basil leaves, cut into ribbons",
      "½ cup chopped cashews"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
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
      "Vegetarian",
      "Vegan",
      "Gluten-free"
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
      "½ cup reduced sodium chicken or vegetarian broth (optional - see notes)",
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
      "Vegetarian",
      "Vegan",
      "Gluten-free"
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
      "Vegetarian",
      "Vegan",
      "Gluten-free"
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
      "Vegan",
      "Vegetarian",
      "Gluten-free"
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
      "Vegetarian",
      "Gluten-free"
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
      "Gluten-free",
      "Beef"
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
      "Pork"
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
      "Vegan",
      "Vegetarian"
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
      "Seafood",
      "Gluten-free"
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
      "Chicken"
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
      "Beef"
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
      "Chicken"
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
      "Seafood",
      "Gluten-free"
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
      "Vegetarian"
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
      "Chicken",
      "Gluten-free"
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
      "Chicken"
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
      "Vegetarian",
      "Gluten-free"
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
      "Chicken"
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
      "2 tablespoons low sodium soy sauce (sub a gluten-free tamari if you need to make the recipe GF)",
      "1-2 tablespoons peanut butter",
      "1 tablespoons water",
      "1 tablespoons white distilled vinegar",
      "1 tablespoons honey",
      "a big squeeze of lime juice",
      "a dash of fish sauce"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
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
      "Beef"
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
      "Vegetarian",
      "Gluten-free"
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
      "Vegetarian"
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
      "Vegan",
      "Vegetarian",
      "Gluten-free"
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
      "Pork"
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
      "Vegetarian"
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
      "Seafood"
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
      "Chicken"
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
      "Vegan",
      "Vegetarian",
      "Gluten-free"
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
      "Chicken",
      "Gluten-free"
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
      "Vegetarian"
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
      "Seafood"
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
      "Chicken"
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
      "Pork"
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
      "Chicken"
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
      "Vegan",
      "Vegetarian"
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
      "Chicken"
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
      "Vegetarian"
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
      "Chicken",
      "Pork"
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
      "Beef"
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
      "1 cucumber (can swap for other vegetarians, too)",
      "3 large carrots",
      "1 handful cilantro"
    ],
    "cuisineType": [
      "Chicken"
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
      "Vegetarian"
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
      "Vegetarian",
      "Gluten-free"
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
      "Vegetarian"
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
      "Chicken"
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
      "Beef"
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
      "Chicken"
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
      "Vegan",
      "Vegetarian",
      "Gluten-free"
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
      "Gluten-free",
      "Vegetarian"
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
      "Chicken"
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
      "Chicken"
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
      "Vegan",
      "Vegetarian"
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
      "Vegetarian"
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
      "2 cups shredded kale (you can sub other vegetarians or just omit it for an equally delicious combo)"
    ],
    "cuisineType": [
      "Pork",
      "Gluten-free"
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
      "Chicken"
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
      "Gluten-free",
      "Chicken"
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
      "Vegan",
      "Vegetarian",
      "Gluten-free"
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
      "Pork"
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
      "Vegetarian"
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
      "Seafood"
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
      "Pork",
      "Chicken"
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
      "Chicken"
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
      "Vegetarian",
      "Gluten-free"
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
      "Chicken"
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
      "Gluten-free",
      "Vegetarian"
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
      "Seafood"
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
      "Vegetarian"
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
      "Vegetarian",
      "Gluten-free"
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
      "Chicken"
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
      "Vegetarian"
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
      "Chicken"
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
      "Pork"
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
      "Pork"
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
      "2-3 cups spinach or other vegetarians if you want",
      "½ cup shaved Parmesan cheese",
      "sea salt and freshly cracked black pepper",
      "a squeeze of lemon (that was Bjork's idea! nice work, boo)"
    ],
    "cuisineType": [
      "Vegetarian"
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
      "Chicken"
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
      "Chicken"
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
      "Vegetarian"
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
      "Vegetarian"
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
      "Vegetarian"
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
      "Pork"
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
      "Seafood"
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
      "Vegetarian"
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
      "Pork"
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
      "Beef"
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
      "Vegetarian"
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
      "Chicken"
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
      "Vegetarian"
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
      "Vegan",
      "Vegetarian"
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
      "Chicken",
      "Gluten-free"
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
      "Vegetarian"
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
      "Vegetarian"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Vegetarian"
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
      "Seafood"
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
      "Vegan",
      "Vegetarian",
      "Gluten-free"
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
      "Pork"
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
      "Chicken"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Pork",
      "Chicken"
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
      "Vegetarian"
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
      "Vegetarian"
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
      "Vegetarian",
      "Gluten-free"
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
      "Gluten-free",
      "Vegetarian"
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
      "Vegetarian"
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
      "Chicken"
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
      "Chicken"
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
      "Vegetarian",
      "Gluten-free"
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
      "Gluten-free",
      "Pork"
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
      "Pork"
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
      "Seafood",
      "Gluten-free"
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
      "Vegetarian"
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
      "Vegetarian",
      "Gluten-free"
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
      "Chicken",
      "Pork"
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
      "Vegetarian"
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
      "Vegan",
      "Gluten-free",
      "Vegetarian"
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
      "Chicken"
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
      "Seafood"
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
      "Vegetarian"
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
      "Vegetarian"
    ],
    "sourceName": "Pinch of Yum"
  },
  {
    "sourceHref": "http://pinchofyum.com/healthy-mac-and-cheese",
    "recipeTitle": "Healthy Mac and Cheese",
    "ingredients": [
      "2 cups uncooked elbow macaroni - whole wheat, low glycemic, gluten-free... any will work!",
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
      "Vegetarian"
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
      "Vegetarian"
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
      "Chicken"
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
      "Pork"
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
      "Seafood"
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
      "Seafood"
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
      "Chicken",
      "Gluten-free"
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
      "Vegetarian"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Gluten-free",
      "Chicken"
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
      "Vegetarian"
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
      "Gluten-free",
      "Chicken"
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
      "Vegan",
      "Vegetarian"
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
      "Chicken"
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
      "Chicken"
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
      "Pork"
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
      "Vegetarian",
      "Gluten-free"
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
      "Chicken"
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
      "Vegetarian"
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
      "Beef"
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
      "Gluten-free",
      "Vegetarian"
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
      "Vegetarian",
      "Gluten-free"
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
      "Gluten-free",
      "Vegetarian"
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
      "Chicken"
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
      "Chicken"
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
      "Gluten-free",
      "Vegetarian"
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
      "Pork"
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
      "Chicken"
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
      "Gluten-free",
      "Vegetarian"
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
      "Chicken",
      "Pork"
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
      "Vegetarian"
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
      "Chicken"
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
      "Chicken"
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
      "Chicken"
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
      "Vegetarian"
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
      "Pork"
    ],
    "sourceName": "Pinch of Yum"
  },
  {
    "sourceHref": "http://pinchofyum.com/filipino-pancit",
    "recipeTitle": "Filipino Pancit Recipe",
    "ingredients": [
      "2 lbs. uncooked noodles – this version used a combination of pancit and vermicelli",
      "4 cups sliced mixed vegetarians: cabbage, carrots, bell peppers, and green onions",
      "1 lb. lean pork, cut into very small pieces",
      "½ cup oil",
      "1 onion, minced",
      "1 tablespoon soy sauce",
      "6 cloves garlic, crushed",
      "1 pork bouillon cube",
      "6 cups water"
    ],
    "cuisineType": [
      "Pork"
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
      "Vegetarian",
      "Gluten-free"
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
      "Vegetarian"
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
      "Seafood"
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
      "Gluten-free",
      "Chicken"
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
      "8 ounces uncooked capellini noodles (I used Jovial gluten-free)",
      "a handful of fresh chopped parsley",
      "salt and pepper to taste",
      "Parmesan cheese for topping"
    ],
    "cuisineType": [
      "Seafood",
      "Gluten-free"
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
      "Chicken"
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
      "Gluten-free",
      "Chicken"
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
      "Vegan",
      "Vegetarian"
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
      "Gluten-free",
      "Seafood"
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
      "5 cups vegetarians (I used chopped fresh greens, grated carrots, fresh and canned tomatoes)",
      "3 cups mixed shredded cheese like Mozzarella, Provolone, Parmesan, etc.",
      "salt and pepper to taste"
    ],
    "cuisineType": [
      "Vegetarian"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Vegetarian"
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
      "Gluten-free",
      "Chicken"
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
      "Gluten-free",
      "Vegetarian",
      "Vegan"
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
      "Vegan",
      "Vegetarian",
      "Gluten-free"
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
      "Vegan",
      "Vegetarian",
      "Gluten-free"
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
      "Pork"
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
      "Chicken"
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
      "Chicken"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Chicken"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Gluten-free",
      "Vegetarian",
      "Vegan"
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
      "Chicken"
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
      "Vegan",
      "Vegetarian"
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
      "Vegetarian",
      "Gluten-free"
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
      "Pork"
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
      "Pork"
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
      "Vegetarian"
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
      "Seafood"
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
      "Vegan",
      "Vegetarian"
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
      "Chicken"
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
      "Vegetarian"
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
      "Pork"
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
      "Chicken"
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
      "Vegan",
      "Vegetarian",
      "Gluten-free"
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
      "Vegan",
      "Vegetarian",
      "Gluten-free"
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
      "Vegan",
      "Vegetarian"
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
      "Chicken"
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
      "Chicken",
      "Gluten-free"
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
      "Beef"
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
      "Seafood"
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
      "Chicken",
      "Gluten-free"
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
      "Chicken"
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
      "Vegetarian"
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
      "Chicken"
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
      "Pork"
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
      "Chicken",
      "Gluten-free"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Vegetarian",
      "Gluten-free"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Chicken"
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
      "Vegetarian"
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
      "Seafood"
    ],
    "sourceName": "Pinch of Yum"
  },
  {
    "sourceHref": "http://pinchofyum.com/5-ingredient-coconut-curry",
    "recipeTitle": "5 Ingredient Coconut Curry",
    "ingredients": [
      "1 can coconut milk",
      "2 tablespoons red curry paste",
      "2 small heads broccoli (and/or other vegetarians of choice)",
      "1 can chickpeas, rinsed and drained",
      "½ tablespoon cornstarch dissolved in 2 tablespoons cold water",
      "optional: minced garlic or onion"
    ],
    "cuisineType": [
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Gluten-free",
      "Vegetarian"
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
      "Vegetarian"
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
      "Seafood"
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
      "Chicken"
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
      "Chicken"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Chicken"
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
      "Vegetarian"
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
      "Vegetarian"
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
      "Seafood"
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
      "Vegetarian"
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
      "Seafood"
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
      "Chicken"
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
      "Chicken"
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
      "Vegetarian",
      "Gluten-free"
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
      "Seafood"
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
      "Vegan",
      "Vegetarian",
      "Gluten-free"
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
      "Chicken"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Beef"
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
      "Vegetarian"
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
      "Chicken"
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
      "Gluten-free",
      "Chicken"
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
      "Vegetarian"
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
      "Seafood"
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
      "Gluten-free"
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
      "Chicken"
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
      "Chicken"
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
      "Beef",
      "Gluten-free"
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
      "Seafood"
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
      "Chicken"
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
      "Vegetarian"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Pork"
    ],
    "sourceName": "Pinch of Yum"
  },
  {
    "sourceHref": "http://pinchofyum.com/skinny-veggie-lasagna",
    "recipeTitle": "Skinny Veggie Lasagna",
    "ingredients": [
      "3 cups chopped vegetarians of your choice",
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
      "Vegetarian"
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
      "Pork"
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
      "Pork"
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
      "Vegetarian"
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
      "Gluten-free",
      "Vegetarian",
      "Vegan"
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
      "Chicken"
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
      "Chicken"
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
      "Vegan",
      "Vegetarian"
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
      "Pork"
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
      "Vegetarian"
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
      "Chicken"
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
      "Chicken"
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
      "Chicken"
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
      "Gluten-free",
      "Vegetarian",
      "Vegan"
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
      "Gluten-free",
      "Chicken"
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
      "Vegetarian"
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
      "Vegetarian",
      "Gluten-free"
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
      "Vegetarian"
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
      "Vegan",
      "Vegetarian"
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
      "Vegetarian",
      "Vegan",
      "Gluten-free"
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
      "Seafood"
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
      "Vegetarian",
      "Gluten-free"
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
      "Vegetarian"
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
      "Vegetarian"
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
      "Gluten-free",
      "Vegetarian"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Chicken"
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
      "Vegetarian"
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
      "Pork"
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
      "Vegan",
      "Vegetarian"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Vegetarian"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Vegetarian"
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
      "Chicken"
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
      "Vegan",
      "Vegetarian"
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
      "Gluten-free",
      "Vegetarian"
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
      "Gluten-free",
      "Vegetarian"
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
      "Pork"
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
      "Pork"
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
      "Vegetarian"
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
      "Seafood"
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
      "Pork"
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
      "Chicken"
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
      "Vegetarian"
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
      "Vegetarian"
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
      "Vegetarian"
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
      "Vegetarian",
      "Vegan",
      "Gluten-free"
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
      "Gluten-free",
      "Vegan",
      "Vegetarian"
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
      "Gluten-free",
      "Vegetarian"
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
      "Gluten-free",
      "Vegetarian"
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
      "Vegan",
      "Gluten-free",
      "Vegetarian"
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
      "Vegetarian",
      "Gluten-free"
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
      "Gluten-free",
      "Vegetarian"
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
      "Beef"
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
      "Vegetarian"
    ],
    "sourceName": "Pinch of Yum"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2015/02/19/gingered-carrot-soup/",
    "recipeTitle": "Gingered Carrot Soup",
    "ingredients": [
      "2 tbsp. coconut oil\r",
      "1 onion, finely diced\r",
      "3 cloves garlic, minced\r",
      "1 1/2 lbs. carrots, peeled (or scrubbed clean) and roughly chopped\r",
      "6 cups vegetable stock\r",
      "2 tbsp. ginger, minced\r",
      "salt and pepper, to taste\r",
      "1/4 cup fresh squeezed orange juice\r",
      "1 tbsp. parsley, chopped"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2015/02/13/dinner-and-a-story-saucy-honey-apple-pork-tenderloin/",
    "recipeTitle": "Dinner and a Story: Saucy Honey Apple Pork Tenderloin",
    "ingredients": [
      "1/4 cup apple juice\r",
      "2 tsp. honey\r",
      "1 tsp. soy sauce\r",
      "2 cloves garlic, minced\r",
      "1/8 tsp. red pepper flakes\r",
      "salt and freshly cracked pepper, to taste\r",
      "1 tbsp. olive oil\r",
      "1 1 lb. pork tenderloin, trimmed of excess fat around the edges"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2015/02/04/gambas-al-ajillo-spanish-garlic-shrimp/",
    "recipeTitle": "Gambas Al Ajillo (Spanish Garlic Shrimp)",
    "ingredients": [
      "1 lb. medium shrimp, peeled & deveined\r",
      "1/4 cup evoo\r",
      "6-8 garlic cloves, thinly sliced\r",
      "1/4 tsp. sweet Spanish paprika\r",
      "1 dried chili pepper (guindilla?)\r",
      "1 tbsp. parsley, finely chopped"
    ],
    "cuisineType": [
      "Seafood",
      "Gluten-free"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2015/01/30/spicy-sweet-potato-white-bean-burgers/",
    "recipeTitle": "Spicy Sweet Potato White Bean Burgers",
    "ingredients": [
      "2 cups baked sweet potatoes, skins removed (about 5 small-medium sized potatoes)\r",
      "15 oz. cannellini beans, rinsed and drained\r",
      "4 garlic cloves, minced\r",
      "1 tsp. chili powder\r",
      "1 tsp. ground cumin\r",
      "salt & pepper, to taste (about 1/2 tsp. each)\r",
      "cayenne pepper, to taste (Try it with just a pinch and then increase from there for added heat!)\r",
      "1/4 cup fresh parsley, chopped\r",
      "1/2 cup Italian seasoned breadcrumbs, divided\r",
      "1 avocado, mashed\r",
      "Juice of half a lime\r",
      "salt & pepper, to taste\r",
      "2 cups of mixed greens\r",
      "4 buns, lightly toasted"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2015/01/21/30-minute-red-beans-rice/",
    "recipeTitle": "30 Minute Red Beans & Rice",
    "ingredients": [
      "1 tbsp. olive oil\r",
      "1/2 lb. italian sausage, sliced (Make it vegan by skipping the sausage and move straight to cooking the peppers, onion, and celery!)\r",
      "1 green bell pepper, finely diced\r",
      "1/2 sweet onion, finely diced\r",
      "2 celery stalks, sliced\r",
      "1/2 cup vegetarian broth, 1/4 cup at a time \r",
      "1 tbsp. Creole Seasoning\r",
      "3 (15.5-ounce) can red kidney beans, rinsed and drained\r",
      "3 cups cooked brown rice"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2015/01/16/coconut-curry-shrimp-stuffed-squash/",
    "recipeTitle": "Coconut Curry Shrimp Stuffed Squash",
    "ingredients": [
      "2 tsp. coconut oil\r",
      "2 cloves garlic, minced\r",
      "1 tbsp. fresh ginger, grated\r",
      "1 can light coconut milk\r",
      "juice of 1 lime\r",
      "1 tbsp. red curry paste\r",
      "1 tsp. honey\r",
      "1/2 tsp. cornstarch\r",
      "Salt & pepper, to taste\r",
      "1 cup peas\r",
      "1 lb. shrimp\r",
      "2 cups cooked rice\r",
      "1 green onion\r",
      "2 tbsp. chopped cilantro\r",
      "2 delicata squash"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2015/01/12/tuscan-tortellini-white-bean-soup/",
    "recipeTitle": "Tuscan Tortellini & White Bean Soup",
    "ingredients": [
      "1 tablespoons olive oil\r",
      "1/2 sweet onion, diced\r",
      "5 garlic cloves, minced\r",
      "1 tsp. dried oregano\r",
      "1 tsp. dried basil\r",
      "1/2 tsp. dried thyme\r",
      "1/2 tsp. dried marjoram\r",
      "1/4 tsp. dried rosemary\r",
      "2 28 ounce cans crushed tomatoes\r",
      "8 cups vegetable broth\r",
      "10 oz. kale, roughly chopped\r",
      "2 cans white beans, I used cannellini beans\r",
      "16 oz. cheese tortellini\r",
      "1 cup parmesan cheese, grated\r",
      "Salt & pepper to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2015/01/10/super-powered-green-protein-stir-fry/",
    "recipeTitle": "Super Powered Green Protein Stir Fry",
    "ingredients": [
      "1 tbsp. coconut oil\r",
      "extra firm tofu, cubed\r",
      "2 cloves garlic, minced\r",
      "1 tbsp. fresh grated ginger\r",
      "1 tbsp. sesame seeds\r",
      "1 tbsp. sweet chili sauce\r",
      "1 tbsp. honey\r",
      "1/4 cup. soy sauce\r",
      "juice of 1 lime\r",
      "12 oz. shelled edamame\r",
      "10 oz. spinach\r",
      "8 oz. broccoli, cut into bite-sized pieces\r",
      "2 carrots, sliced thin - however you like! (I used a peeler to make them into thin strips.)"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2015/01/02/crunchy-herbed-lemon-cod/",
    "recipeTitle": "Crunchy Herbed Lemon Cod",
    "ingredients": [
      "1/4 cup whole wheat Panko breadcrumbs \r",
      "1 tbsp. Italian herbs (a mix of oregano, marjoram, thyme, basil, rosemary, and garlic powder)\r",
      "zest of 1 lemon\r",
      "1/8 cup grated parmesan\r",
      "2 tbsp. chopped parsley\r",
      "salt and pepper, to taste\r",
      "4 cod fillets (about 5 oz. each)\r",
      "1 tbsp. oil\r",
      "2 tbsp. butter, melted\r",
      "juice of 1 lemon"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/12/19/sizzling-garlic-ginger-pork-stir-fry/",
    "recipeTitle": "Sizzling Garlic Ginger Pork Stir Fry",
    "ingredients": [
      "2 cloves garlic, minced\r",
      "1 tbsp. fresh grated ginger\r",
      "1 tbsp. sesame seeds\r",
      "2 tbsp. sweet chili sauce\r",
      "1 tbsp. honey\r",
      "1/2 tsp. sriracha\r",
      "2 tbsp. soy sauce\r",
      "juice of 1 lime\r",
      "1 lb. pork tenderloin, trimmed and cut into thin strips\r",
      "1 head bok choy, chopped\r",
      "2 large carrots, thinly sliced\r",
      "2 tbsp. fresh scallions, chopped"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/11/24/baked-pasta-with-butternut-squash-kale/",
    "recipeTitle": "Baked Pasta with Butternut Squash & Kale",
    "ingredients": [
      "1 butternut squash, peeled & diced\r",
      "2 tbsp. olive oil\r",
      "salt & pepper, to taste\r",
      "1 lb. fusilli pasta - I used brown rice fusilli from Trader Joe's!\r",
      "4 garlic cloves, minced\r",
      "1 tsp. rubbed sage\r",
      "2.5 oz. baby kale\r",
      "1/2 cup shredded gruyere cheese\r",
      "1/4 cup parmesan\r",
      "1/4 cup Panko bread crumbs - Make it gluten-free by using gluten-free bread crumbs! Can't find them? Just put some rice chex in your food processor and turn them into crumbs."
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/11/21/dijon-flank-steak/",
    "recipeTitle": "Dijon Flank Steak",
    "ingredients": [
      "1 lb. flank steak\r",
      "2 tbsp. butter\r",
      "3 tbsp. dijon mustard"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/11/03/vegan-sweet-potato-chili/",
    "recipeTitle": "Vegan Sweet Potato Chili",
    "ingredients": [
      "1 28 oz. can diced tomatoes\r",
      "1 16 oz. can tomato sauce\r",
      "1 cup pumpkin puree\r",
      "2 tsp. chili powder\r",
      "1/2 tsp. chipotle chili powder\r",
      "1 tsp. ground cumin\r",
      "1 tsp. paprika\r",
      "1/2 tsp. salt\r",
      "2 large sweet potatoes, diced into 1/2 inch cubes\r",
      "3 cloves garlic, minced\r",
      "2 15 oz. cans kidney beans, drained and rinsed\r",
      "1 15 oz. can sweet corn, drained\r",
      "1/4 cup quinoa, rinsed thoroughly\r",
      "1/2 cup water"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/10/27/chicken-veggie-curry/",
    "recipeTitle": "Chicken & Veggie Curry",
    "ingredients": [
      "1 lb. chicken breast, cut into 1 inch cubes\r",
      "1 lb. frozen mixed vegetables\r",
      "28 oz. light coconut milk (2 cans)\r",
      "2 1/2 tsp. green curry paste\r",
      "1 tbsp. low sodium soy sauce"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/09/24/baked-fish-sticks/",
    "recipeTitle": "Baked Fish Sticks",
    "ingredients": [
      "1.5 lbs. cod filets, cut into about 20 strips\r",
      "5 tbsp. flour\r",
      "1 egg\r",
      "1/2 cup panko \r",
      "1/2 cup whole wheat panko\r",
      "1/2 cup grated parmesan cheese\r",
      "1/4 tsp. paprika\r",
      "1/4 tsp. dried oregano\r",
      "salt and pepper, to taste"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/09/19/eggplant-lasagna/",
    "recipeTitle": "Eggplant Lasagna",
    "ingredients": [
      "1 lb. eggplant\r",
      "2 1/2 cups marinara sauce\r",
      "2 cups low-fat mozzarella\r",
      "15 oz. fat free ricotta\r",
      "16 oz. spinach\r",
      "2 garlic cloves\r",
      "salt & pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/09/17/shrimp-tomato-microgreen-spaghetti-squash/",
    "recipeTitle": "Shrimp, Tomato, & Microgreen Spaghetti Squash",
    "ingredients": [
      "1 spaghetti squash\r",
      "2 tsp. olive oil\r",
      "2 cloves garlic, crushed & minced\r",
      "1 lb. shrimp, peeled (and deveined if you prefer)\r",
      "8 oz. cherry tomatoes, cut in half\r",
      "1 cup microgreens, washed & lightly patted dry\r",
      "1 oz. goat cheese\r",
      "salt & pepper, to taste"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/09/15/mac-cheese-bites/",
    "recipeTitle": "Mac & Cheese Bites",
    "ingredients": [
      "1 lb. dry macaroni\r",
      "2 cups skim milk\r",
      "3 large eggs\r",
      "8 oz. sharp cheddar\r",
      "salt and pepper, to taste\r",
      "1/4 tsp. smoked paprika\r",
      "1/8 tsp. ground nutmeg\r",
      "a dash of cayenne"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/09/02/marinara-sauce/",
    "recipeTitle": "Homemade Marinara Sauce",
    "ingredients": [
      "20 large tomatoes (or, to save time, 6 14 oz. cans diced tomatoes, drained and rinsed to wash away leftover seeds!)\r",
      "1/4 cup olive oil\r",
      "1 small sweet onion, diced\r",
      "8 cloves garlic, crushed and chopped\r",
      "1 tbsp. oregano\r",
      "1 tsp. basil\r",
      "1 tsp. thyme\r",
      "1 tsp. marjoram\r",
      "1 tsp. rosemary\r",
      "1/4 tsp. red pepper flakes\r",
      "1 bay leaf\r",
      "salt & pepper, to taste\r",
      "1 handful fresh basil, chopped"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/08/30/black-bean-corn-quinoa-salad/",
    "recipeTitle": "Black Bean & Corn Quinoa Salad",
    "ingredients": [
      "1.5 cups dry, uncooked quinoa\r",
      "1 15oz. can black beans, drained and rinsed\r",
      "1 15oz. can sweet corn, drained\r",
      "1 medium sweet potato, cooked and diced\r",
      "1/4 cup cilantro\r",
      "3 tbsp. lime juice (about 1-2 limes)\r",
      "1/4 cup olive oil\r",
      "1 clove garlic, minced\r",
      "1 tsp. cumin\r",
      "salt and pepper, to taste\r",
      "a dash of smoked paprika (optional)"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/08/16/lemon-blueberry-pancakes/",
    "recipeTitle": "Lemon Blueberry Pancakes",
    "ingredients": [
      "1 cup light coconut milk\r",
      "1 cup all-purpose flour\r",
      "1 tbsp. baking powder\r",
      "1/2 tsp. salt\r",
      "1 tbsp. 100% pure maple syrup (I bought mine at Trader Joe's!)\r",
      "1 1/2 tsp. lemon extract\r",
      "1 tbsp. freshly squeezed lemon juice (from 1/2 of a very juicy lemon!)\r",
      "A splash of water (optional depending on how thick you like your pancake batter!)\r",
      "3/4 cup blueberries (I used fresh because it's summer, but thawing and rinsing frozen blueberries would work just as well!)"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/08/06/mushroom-arugula-grilled-cheese/",
    "recipeTitle": "Mushroom & Arugula Grilled Cheese",
    "ingredients": [
      "4 slices bread (I used 2 mini ciabatta loaves cut in half)\r",
      "2 oz. goat cheese\r",
      "2 small portobello mushrooms, stemmed\r",
      "1 cup arugula\r",
      "salt and pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/07/23/southwestern-tilapia-with-avocado-pico-2/",
    "recipeTitle": "Southwestern Tilapia with Avocado Pico",
    "ingredients": [
      "4 6oz. tilapia fillets\r",
      "Cooking spray (I used my misto!)\r",
      "2 teaspoons cumin\r",
      "1 lime\r",
      "salt & pepper, to taste\r",
      "1 avocado, diced\r",
      "2 medium tomatoes, diced\r",
      "2 tablespoons fresh cilantro"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/07/12/spinach-mushroom-goat-cheese-mini-frittata/",
    "recipeTitle": "Spinach, Mushroom, & Goat Cheese Mini Frittata",
    "ingredients": [
      "1 teaspoon olive oil\r",
      "16 ounces sliced baby bella mushrooms\r",
      "16 ounces frozen chopped spinach\r",
      "5 ounces goat cheese - leave in fridge until last second\r",
      "2 tablespoons chives, finely chopped\r",
      "10 eggs\r",
      "salt & pepper, to taste\r",
      "water"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/07/09/sweet-potato-burritos/",
    "recipeTitle": "Sweet Potato Burritos",
    "ingredients": [
      "1 large, whole wheat tortilla",
      "1/2 cup vegetarian refried beans, heated",
      "1/2 small sweet potato (~3oz.)",
      "4 grape tomatoes, chopped",
      "1 tbsp. low-fat cheddar",
      "2 tbsp. sliced black olives",
      "1/2 cup spinach leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/07/05/tomato-salad-pita-pockets/",
    "recipeTitle": "Tomato Salad Pita Pockets",
    "ingredients": [
      "2 whole wheat pita pockets (regular size)\r",
      "4 cups baby lettuce\r",
      "2 large tomatoes, sliced\r",
      "2 oz. goat cheese, crumbled\r",
      "salt & pepper, to taste\r",
      "2 tbsp. balsamic vinegar reduction"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/07/02/summer-parties-bacon-lettuce-tomato-avocado-sandwiches/",
    "recipeTitle": "Summer Parties: Bacon, Lettuce, Tomato, & Avocado Sandwiches",
    "ingredients": [
      "4 slices bread (I used sourdough)\r",
      "4 slices bacon\r",
      "1 avocado, sliced into long thing strips\r",
      "1 large tomato, sliced\r",
      "2 cups baby lettuce\r",
      "2 tsp. mayonnaise\r",
      "lime juice, to taste (I used about 1 lime wedge per sandwich. Remember...you can always add more!)\r",
      "salt & pepper, to taste"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/06/18/pestobella-pizza-margherita/",
    "recipeTitle": "Pestobella Pizza Margherita",
    "ingredients": [
      "4 large Portobello mushroom caps (~12 oz.), cleaned and stems removed",
      "1 cup skim mozzarella cheese, shredded",
      "1 large tomato, cut into 1/2 inch thick slices",
      "Fresh cracked sea salt and pepper, to taste",
      "1 cube The Light Side of Pesto (about 2 tbsp), thawed and thinned out with water until of a \"drizzleable\" consistency",
      "1 tbsp. parmesan, grated"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/05/28/orecchiette-with-arugula-peas-and-parmesan/",
    "recipeTitle": "Orecchiette with Arugula, Peas, and Parmesan",
    "ingredients": [
      "1 lb orecchiette pasta (or something similar like shells)",
      "1 lb frozen peas, thawed",
      "4 oz fresh arugula",
      "4 tsp olive oil",
      "3 tbsp lemon juice",
      "salt and pepper, to taste",
      "1/4 cup shaved parmesan"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/05/11/enchilada-casserole/",
    "recipeTitle": "Enchilada Casserole",
    "ingredients": [
      "2 tbsp olive oil",
      "1 tbsp flour",
      "2 tbsp chili powder",
      "10 oz. tomato paste",
      "2 cups water",
      "1 tsp cumin",
      "salt, to taste (I use ~1/2 tsp.)",
      "4 medium flour tortillas",
      "1 can vegetarian refried beans",
      "1 can pureed pumpkin",
      "10 oz. frozen chopped spinach",
      "1 can sweet corn, drained",
      "10 oz. sliced black olives, drained (optional)",
      "1/2 cup low-fat cheddar cheese, shredded"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/05/04/teriyaki-shrimp-udon-and-life-changes/",
    "recipeTitle": "Teriyaki Shrimp Udon and Life Changes",
    "ingredients": [
      "10 oz. udon noodles",
      "2 garlic cloves, minced",
      "1 tbsp fresh minced ginger",
      "2 carrots, grated (I used my OXO Mandoline Slicer.)",
      "1/2 cup teriyaki sauce (your favorite is best!)",
      "1 lb. shrimp, peeled",
      "1 bunch bok choy, chopped"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/01/29/chili-chalupas/",
    "recipeTitle": "Chili Chalupas",
    "ingredients": [
      "16 taco-sized flour tortillas, baked in the oven until toasted and lightly browned",
      "1 pot Easy Turkey Chili",
      "2 cups Cooked Brown Rice",
      "4 avocados, thinly sliced",
      "1 cup low-fat shredded cheddar cheese",
      "10 oz. fresh spinach"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/01/20/skinny-sweet-potato-and-bacon-soup/",
    "recipeTitle": "Skinny Sweet Potato and Bacon Soup",
    "ingredients": [
      "3 sweet potatoes, peeled and diced",
      "2 tbsp. olive oil",
      "salt and pepper, to taste",
      "4 bacon slices, cut into 1/2 inch pieces (I used uncured bacon from Trader Joe's)",
      "2 garlic cloves, finely chopped",
      "1 tbsp. fresh rosemary, finely chopped",
      "1 onion, finely chopped",
      "4 cups vegetable or chicken broth",
      "juice of 1/2 lemon"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2014/01/07/beer-roasted-chicken/",
    "recipeTitle": "Beer Roasted Chicken",
    "ingredients": [
      "1 12 oz. can/bottle beer - We have found over the years that lighter beers make a tastier broth than darker beers. The darker the beer, the more bitter the broth. My personal favorite is Yuengling. And remember, the alcohol cooks out of the beer making this safe for even your youngest carnivores!",
      "2 sweet potatoes, chopped",
      "3 carrots, chopped",
      "1/2 onion, quartered",
      "10 cloves garlic, unpeeled (or more if you love garlic like me!)",
      "4(ish) lb. whole chicken - this will give you approximately 2 lb. meat",
      "1 tsp. olive oil",
      "1 tsp. paprika (smoked paprika is also great!) - The paprika really helps achieve that nice warm brown tone on the cooked chicken!",
      "1/2 tsp. dried oregano",
      "1/4 tsp. dried marjoram (Feel free to substitute a little more oregano if you don't have marjoram in your spice collection. Keep in mind that oregano has a slightly stronger flavor than marjoram, so adjust your amounts accordingly!)",
      "Salt and pepper, to taste (Don't salt too lightly - the salt will help this brown and make the skin absolutely delicious.)"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/11/27/leftover-turkey-pot-pie/",
    "recipeTitle": "Leftover Turkey Pot Pie",
    "ingredients": [
      "2 tsp. olive oil",
      "2 cups chopped, cooked turkey (or chicken!)",
      "1 16 oz. bag frozen vegetables (I like a mix of peas, carrots, green beans, and corn.)",
      "10 oz. sliced baby bella mushrooms",
      "4 tbsp. all-purpose flour",
      "4 cups turkey or chicken stock",
      "1 refrigerated pie crust dough, thawed per package instructions (Pillsbury is my favorite.)"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/11/15/fiesta-sweet-potato/",
    "recipeTitle": "Fiesta Sweet Potato",
    "ingredients": [
      "2 medium sweet potatoes",
      "1 16oz. can black beans, drained and rinsed",
      "1 3.8 oz. can sliced olives",
      "1/2 cup Greek yogurt",
      "4 tbsp. fresh salsa",
      "1 tsp. lime juice",
      "1 1/2 tsp. chili powder",
      "1 tbsp. cilantro, chopped",
      "4 tbsp. low-fat shredded cheddar"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/11/10/turkey-ragu-stuffed-delicata-squash/",
    "recipeTitle": "Turkey Ragù Stuffed Delicata Squash",
    "ingredients": [
      "1 lb. lean ground turkey",
      "8 oz. hot italian turkey sausage, chopped",
      "1 carrot, grated (1/2 cup)",
      "1 green bell pepper, diced",
      "1 medium sweet onion, finely chopped",
      "6 cloves garlic, minced (or more if you LOVE garlic like me!)",
      "1 large eggplant, diced",
      "10 oz. baby bella mushrooms, sliced",
      "1 tbsp. olive oil",
      "2 28 oz. cans crushed tomatoes",
      "1/2 cup red wine",
      "1/2 cup grated parmesan",
      "1 bay leaf",
      "1 tbsp. dried oregano",
      "1 tbsp. dried basil",
      "salt & pepper, to taste",
      "4 delicata squash",
      "1/2 cup shredded parmesan"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/11/07/rosemary-pumpkin-pasta-gratin/",
    "recipeTitle": "Rosemary Pumpkin Pasta Gratin",
    "ingredients": [
      "16 oz. brown rice penne (I got mine from Trader Joe's!)",
      "1/2 medium onion, finely chopped",
      "4 cloves garlic, crushed and minced",
      "1 tbsp. olive oil",
      "2 tsp. rosemary, chopped",
      "1 15 oz. can pumpkin puree",
      "1 15 oz. can great northern beans",
      "1/2 cup shredded parmesan",
      "1/2 cup grated parmesan",
      "1 cup rice chex (off brands are fine!), ground into coarse breadcrumbs with your food processor",
      "cooking spray"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/10/31/bakedparmesanchickenwiththyme/",
    "recipeTitle": "Baked Parmesan Chicken with Thyme",
    "ingredients": [
      "6 small (~4oz.), boneless, skinless chicken breasts (or you can cut larger breasts into 4 oz. pieces)",
      "1 cup of rice chex cereal",
      "1/2 cup parmesan, grated",
      "2 tbsp. dijon mustard",
      "2 tsp. fresh thyme, chopped",
      "salt and pepper, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/10/23/sweet-potato-spinach-quesadilla/",
    "recipeTitle": "Sweet Potato & Spinach Quesadilla",
    "ingredients": [
      "1/3 cup refried beans",
      "1/8 cup low-fat shredded cheddar",
      "1/4 of a medium sweet potato, cooked and sliced into thin strips",
      "4 large black olives, sliced",
      "2 tbsp. salsa",
      "1 tbsp. cilantro",
      "1 cup fresh spinach leaves",
      "2 medium wheat tortillas",
      "1/4 cup non-fat Greek yogurt",
      "1/4 avocado, sliced into thin strips"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/10/16/brown-rice-bibimbap/",
    "recipeTitle": "Brown Rice Bibimbap",
    "ingredients": [
      "2 cups hot, cooked brown rice",
      "6 oz. shiitake mushrooms, sliced",
      "1 large zucchini, julienned",
      "1 large carrot, julienned",
      "10 oz. fresh spinach",
      "2 oz. pea sprouts, washed",
      "Gochujang, to taste (Korean Spicy Red Pepper Paste you can get at your local Asian food market.)",
      "6 eggs",
      "3 tsp. sesame oil",
      "6 tsp. soy sauce",
      "cooking spray"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/10/13/easyturkeychili/",
    "recipeTitle": "Easy Turkey Chili",
    "ingredients": [
      "1 lb. lean ground turkey (cooked, left over, shredded turkey or chicken also works well!)",
      "1 tbsp. olive oil",
      "1 tbsp. chili powder",
      "2 cans Rotel tomatoes with green chilis",
      "1 can kidney beans, drained and rinsed",
      "1 can black beans, drained and rinsed",
      "2 cans sweet corn, drained",
      "Fat free cheddar cheese, shredded"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/10/09/fiesta-fresh-fish-tacos/",
    "recipeTitle": "Fiesta Fresh Fish Tacos",
    "ingredients": [
      "8 flour taco tortillas",
      "4 tilapia fillets",
      "1 avocado, thinly sliced",
      "10 oz. broccoli slaw",
      "1/2 cup 0% fat Greek yogurt",
      "Juice of 1 lime",
      "1/4 cup cilantro",
      "1/2 cup fresh salsa (check your grocery's refrigerated section)",
      "1 tbsp. olive oil",
      "salt and pepper, to taste",
      "paprika, to taste"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/10/06/portobello-burgers/",
    "recipeTitle": "Portobello Burgers",
    "ingredients": [
      "4 tbsp. balsamic vinegar",
      "1 tbsp olive oil",
      "2 tsp. minced garlic",
      "salt and pepper, to taste",
      "4 tbsp. Greek yogurt",
      "2 tsp. balsamic vinegar",
      "4 portobello mushrooms, stemmed",
      "4 tbsp. bleu cheese, crumbled",
      "4 Sara Lee Delightful Wheat Hamburger Buns",
      "1 cup spinach leaves",
      "4 slices of tomato"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/10/02/grilled-teriyaki-pork-skewers/",
    "recipeTitle": "Grilled Teriyaki Pork Skewers",
    "ingredients": [
      "10 bamboo skewers",
      "3 boneless pork chops, cubed (about 1.25 lbs.)",
      "30-ish cherry tomatoes (or another vegetable of your choosing)",
      "5 tbsp. teriyaki sauce",
      "2 cloves garlic, minced",
      "1 tbsp. sesame seeds"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/09/25/pesto-shrimp-skewers/",
    "recipeTitle": "Pesto Shrimp Skewers",
    "ingredients": [
      "2 tbsp. Pesto",
      "1 tbsp. water",
      "1 lb. uncooked shrimp, peeled and deveined",
      "20 bamboo skewers",
      "water (to soak skewers)"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/09/22/involtini-alla-parmigiana-parmesan-chicken-rolls/",
    "recipeTitle": "Involtini alla Parmigiana (Parmesan Chicken Rolls)",
    "ingredients": [
      "2 10 oz. packages frozen, chopped spinach, thawed and completely drained",
      "16 oz. fat free ricotta",
      "1/4 cup grated parmesan",
      "1 large egg",
      "1 tbsp olive oil",
      "1 tbsp minced garlic",
      "salt and pepper, to taste",
      "6 tbsp whole wheat italian breadcrumbs",
      "2 tbsp whole wheat panko",
      "2 tbsp flaxseed meal",
      "2 tbsp grated parmesan",
      "10 chicken cutlets",
      "1 egg",
      "2 tbsp. water",
      "10 tbsp. tomato sauce",
      "10 tbsp. part-skim mozzarella"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/09/15/kid-friendly-spinach-quiche/",
    "recipeTitle": "Kid-Friendly Spinach Quiche",
    "ingredients": [
      "20 ounces frozen, chopped spinach, cooked and completely drained",
      "5 eggs",
      "1 can fat-free evaporated milk",
      "8 ounces low-fat swiss cheese, shredded (I used Sargento slices that I ran through the food processor)",
      "1/2 cup grated parmesan, divided",
      "1 sweet onion, diced",
      "2 9-inch whole wheat pie crusts",
      "1 tbsp olive oil",
      "salt and pepper, to taste",
      "paprika, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.scrumptiouslyskinny.com/2013/09/08/southwestern-grilled-flank-steak/",
    "recipeTitle": "Southwestern Grilled Flank Steak",
    "ingredients": [
      "1 12 oz. flank steak",
      "4 ears of corn, cooked and kernels removed",
      "2 medium tomatoes, diced",
      "1 tbsp. poblano pepper, minced",
      "1 tbsp. cilantro, chopped",
      "1 tbsp. olive oil",
      "juice of 1 lime",
      "salt and pepper, to taste"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Scrumptiously Skinny"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/08/29/heirloom-tomato-mango-pico-de-gallo/",
    "recipeTitle": "Heirloom Tomato & Mango Pico de Gallo Recipe",
    "ingredients": [
      "2 cups chopped heirloom tomatoes",
      "⅓ cup diced mango (about ½ medium mango)",
      "1 garlic clove, minced",
      "Juice and zest of 1 lime",
      "½ cup chopped cilantro",
      "¼ cup diced red onion",
      "Sea salt and freshly ground black pepper",
      "½ serrano pepper, thinly sliced (optional)",
      "½ avocado, diced (optional)",
      "1 to 2 teaspoons extra-virgin olive oil",
      "1 medium shallot, chopped (½ cup chopped)",
      "2 garlic cloves, minced",
      "½ teaspoon smoked paprika",
      "1 tablespoon soy sauce or tamari",
      "1 tablespoon balsamic vinegar",
      "¼ cup chopped walnuts",
      "1 cup cooked black beans, divided into two portions (½ cup each)",
      "1 tablespoon ground flax + 3 tablespoons water (or 1 egg)",
      "¾ cup cooked quinoa, divided into two portions (½ cup and ¼ cup)",
      "2 tablespoons cornmeal",
      "Sea salt and freshly ground black pepper",
      "¼ to ½ teaspoon cayenne pepper (optional)"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/08/26/portobello-tacos-vegan-jalapeno-sauce/",
    "recipeTitle": "Portobello Tacos w/ Vegan Jalapeño Sauce Recipe",
    "ingredients": [
      "½, 1 or 2 jalapeños (depending on your spice preference)",
      "1 cup cashews, soaked for at least 3 hours, then drained",
      "1 cup water",
      "1 tablespoon rice vinegar (or white wine vinegar)",
      "1 tablespoon minced shallot",
      "½ teaspoon garlic powder (or 1 clove of garlic)",
      "½ cup chopped and peeled cucumber",
      "squeeze of lemon",
      "generous pinches of salt and freshly ground black pepper",
      "¼ cup chopped chives",
      "2 portabello mushroom caps, stems removed",
      "splash of olive oil",
      "splash of soy sauce",
      "splash of balsamic vinegar",
      "1 large avocado, sliced",
      "1 cup shredded red cabbage",
      "handful of cilantro",
      "1 jalapeño, thinly sliced, optional",
      "6 tortillas, flour or corn, warmed or grilled"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/08/12/curried-avocado-chickpea-salad-sliders/",
    "recipeTitle": "Curried Chickpea Salad Sliders Recipe",
    "ingredients": [
      "1 ½ cups cooked chickpeas, drained and rinsed",
      "1 small avocado",
      "2 tablespoons tahini",
      "½ garlic clove, minced",
      "¼ cup diced red onion",
      "½ cup chopped cilantro leaves and stems (finely chop the stems)",
      "¼ cup hemp seeds (or finely chopped walnuts, or skip)",
      "½ teaspoon muchi or madras curry powder, more to taste",
      "Juice of 1 small lemon",
      "Sea salt and freshly ground black pepper",
      "about 8 mini slider buns",
      "any fixings you like: onion, lettuce, tomato, herbs, etc"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/08/05/tostadas-smoky-sweet-corn-hummus/",
    "recipeTitle": "Tostadas w/ Smoky Sweet Corn Hummus Recipe",
    "ingredients": [
      "kernels from 1 ear of fresh corn",
      "1 ½ cup cooked chickpeas, drained and rinsed",
      "½ garlic clove",
      "1 tablespoon fresh lime juice",
      "½ tablespoon tahini",
      "1 tablespoon olive oil",
      "1 teaspoon chipotle paste (or chipotle powder)",
      "½ teaspoon smoked paprika, or to taste",
      "Sea salt and freshly ground black pepper",
      "4 corn tortillas",
      "1 ear of fresh corn, for grilling",
      "Smoky Sweet Corn Hummus",
      "½ avocado, diced",
      "1 scallion, diced",
      "jalapeño slices, optional",
      "a few sprigs of baby kale or arugula",
      "serve with tomatillo salsa, store-bought or the one from this recipe"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/07/27/summer-squash-vegetable-pizza/",
    "recipeTitle": "Summer Squash Vegetable Pizza Recipe",
    "ingredients": [
      "½ of this dough recipe, I used spelt flour instead of whole wheat",
      "⅓ cup marinara sauce or canned crushed tomatoes",
      "1 medium tomato sliced",
      "¼ red onion sliced",
      "1 scallion, thinly sliced",
      "1 cup shredded smoked mozzarella cheese",
      "1 small zucchini, peeled into strips",
      "1 small yellow squash, peeled into strips",
      "kernels from ½ ear of fresh corn",
      "pinches of red pepper flakes",
      "sea salt and freshly ground black pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/07/20/erins-adobo-eggplant-quesadillas/",
    "recipeTitle": "Erin’s Adobo Eggplant Quesadillas Recipe",
    "ingredients": [
      "1 tablespoon smoked paprika",
      "½ tablespoon onion powder (I skipped)",
      "½ tablespoon Mexican oregano",
      "1 teaspoon garlic powder",
      "1 teaspoon chipotle powder (I used chipotle paste)",
      "½ teaspoon cumin",
      "1 tablespoon brown sugar",
      "pinches of salt and pepper",
      "2 small eggplant, sliced into ¼ inch pieces",
      "olive oil, for drizzling",
      "1½ - 2 cups shredded Taleggio cheese (I used Jack cheese)",
      "handful of cilantro",
      "lime slices, for serving",
      "4 whole grain tortillas"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/07/07/mix-match-mini-pizzas/",
    "recipeTitle": "Mix & Match Mini Pizzas Recipe",
    "ingredients": [
      "8 Stonefire Mini Naan",
      "Extra-virgin olive oil, for drizzling at the end",
      "Sea salt and freshly ground pepper, to taste",
      "1 cup cherry tomatoes, sliced in half",
      "¼ teaspoon smoked paprika (mix with the tomatoes)",
      "2 tablespoons pine nuts",
      "a good slather of Kale Pepita Pesto (recipe below)",
      "fresh mozzarella slices, 2-3 pieces per mini pizza",
      "1 large poblano, grilled, deseeded and sliced into thin strips",
      "1 ear fresh corn, grilled and kernels cut off the cob",
      "2 tablespoons pepitas",
      "dollops of Kale Pepita Pesto, after baking (recipe below)",
      "fresh mozzarella slices, 2-3 pieces per mini pizza",
      "¼ cup crumbled feta cheese",
      "¼ cup blackberries, lightly crushed",
      "drizzle of balsamic vinegar",
      "a few leaves of fresh mint",
      "a few leaves of arugula",
      "½ cup pepitas",
      "1 small garlic clove",
      "2 packed cups baby kale (or mix of kale and basil)",
      "Juice and zest of 1 small lemon",
      "¼ teaspoon ground cumin",
      "¼ teaspoon dijon mustard",
      "¼ cup extra-virgin olive oil, more as needed",
      "Sea salt and freshly ground black pepper",
      "¼ teaspoon honey or maple syrup (optional to offset bitterness)"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/06/29/oyster-mushroom-po-boys/",
    "recipeTitle": "Oyster Mushroom Po’ Boys Recipe",
    "ingredients": [
      "3 cups loosely packed oyster mushrooms",
      "drizzle of olive oil",
      "drizzle of rice vinegar",
      "1.5 tablespoons ground flaxseeds + 4 tablespoons water",
      "⅓ cup cornmeal",
      "⅓ cup panko bread crumbs",
      "2 tablespoons hemp seeds",
      "1 teaspoon Old Bay seasoning",
      "¼ teaspoon cayenne",
      "sea salt and freshly ground black pepper",
      "4 5-inch pieces of baguette",
      "Sir Kensington's Dijonnaise",
      "a few handfuls of arugula",
      "sliced tomatoes",
      "pickles",
      "lemon wedges"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/06/25/zucchini-noodles-lemon-ricotta/",
    "recipeTitle": "zucchini noodles & lemon “ricotta” recipe",
    "ingredients": [
      "2-3 large zucchini",
      "1 cup cherry or grape tomatoes, sliced in half",
      "olive oil, for drizzling",
      "sea salt and freshly ground black pepper",
      "hemp seeds & microgreens, for garnish (optional)",
      "½ cup raw macadamia nuts, soaked at least 4 hours",
      "¼ cup raw sunflower seeds, soaked at least 4 hours",
      "¼ cup hemp seeds",
      "2 tablespoons fresh lemon juice + ½ teaspoon zest",
      "1 tablespoon white wine vinegar",
      "1 small garlic clove",
      "handful of fresh herbs - basil, mint, oregano or tarragon",
      "½ teaspoon sea salt",
      "¾ cup water, more as needed"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/06/08/green-bean-purple-potato-salad/",
    "recipeTitle": "Green Bean & Purple Potato Salad Recipe",
    "ingredients": [
      "6-8 small-medium purple potatoes (about ¾ pound)",
      "2 tablespoons olive oil, more to taste",
      "1 clove garlic, minced",
      "1 heaping teaspoon of capers",
      "1 teaspoon dijon mustard",
      "2 big handfuls of green and/or yellow wax beans",
      "Juice and zest of 1 lemon",
      "2 scallions, chopped",
      "¼ cup fresh parsley, chopped",
      "¼ cup fresh oregano leaves",
      "¼ teaspoon red pepper flakes",
      "sea salt and freshly ground black pepper",
      "½ cup cooked chickpeas",
      "½ cup cooked bulgur (quinoa, or millet if gluten-free)",
      "soft boiled eggs (instructions here)",
      "pickled onions (not pictured, but a tasty addition)"
    ],
    "cuisineType": [
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/05/28/annas-avocado-lemon-zest-spaghetti/",
    "recipeTitle": "Avocado & Lemon Zest Spaghetti Recipe",
    "ingredients": [
      "sea salt and freshly ground black pepper",
      "400g brown rice spaghetti",
      "olive oil",
      "4 tablespoons capers in brine, roughly chopped",
      "1 clove of garlic, peeled and very finely sliced",
      "grated zest of 2 unwaxed lemons, and juice of 1⁄2 a lemon",
      "a bunch of fresh basil, leaves picked",
      "a bunch of fresh parsley, leaves picked",
      "2 ripe avocados"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/05/11/vegan-spinach-mac-cheese/",
    "recipeTitle": "Vegan Spinach Mac & Cheese Recipe",
    "ingredients": [
      "1 shallot, chopped",
      "2 garlic cloves, minced",
      "Extra-virgin olive oil, for drizzling",
      "½ teaspoon smoked paprika",
      "1 tablespoon balsamic vinegar",
      "1 cup raw cashews, soaked 3 to 4 hours, preferably overnight, and drained",
      "3 tablespoons extra-virgin olive oil",
      "½ cup water",
      "¼ cup nutritional yeast",
      "2 teaspoons turmeric",
      "Pinch of cayenne pepper",
      "Sea salt and freshly ground black pepper",
      "12 ounces macaroni or small shell pasta",
      "4 cups packed spinach"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/05/01/grilled-corn-poblano-tacos/",
    "recipeTitle": "Grilled Corn & Poblano Tacos Recipe",
    "ingredients": [
      "2 ears of fresh sweet corn",
      "1 poblano pepper",
      "drizzle of olive oil",
      "2 tablespoons chopped scallions",
      "⅓ cup chopped cherry tomatoes",
      "1 small lime",
      "⅓ cup crumbled cotija or feta cheese",
      "a few sprigs of cilantro",
      "4 tortillas, grilled or warmed",
      "salt and pepper",
      "avocado slices",
      "your favorite salsa"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/04/29/artichoke-salad-mint-spinach-pesto/",
    "recipeTitle": "Artichoke Salad w/ Mint & Spinach Pesto Recipe",
    "ingredients": [
      "about 6 baby artichokes",
      "2 small lemons",
      "3 tablespoons olive oil",
      "pinches of salt and pepper",
      "⅓ cup pine nuts",
      "1 garlic clove",
      "⅓ cup peas, thawed",
      "juice of most of 1 small lemon",
      "½ teaspoon dijon mustard",
      "1.5 cups packed spinach",
      "¼ cup mint",
      "1 tablespoon olive oil",
      "generous amounts of salt and pepper",
      "1.5 cups cooked farro (tip: cook farro in advance)",
      "1 cup chickpeas, drained and rinsed",
      "a few handfuls of baby salad greens and/or sprouts",
      "⅓ cup crumbled feta cheese",
      "roasted artichoke hearts",
      "generous dollops of pesto",
      "salt and pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/04/20/mango-peanut-tempeh-tacos/",
    "recipeTitle": "Mango Peanut Tempeh Tacos Recipe",
    "ingredients": [
      "½-inch strips of tempeh (about 8 strips, from 1 pkg)",
      "drizzle of olive oil",
      "splash of tamari or soy suace",
      "1 cup thinly sliced red cabbage",
      "squeeze of lime",
      "1 mango, cubed",
      "¼ cup scallions",
      "1 avocado, sliced",
      "sriracha (optional)",
      "salt and pepper",
      "4 corn or flour tortillas",
      "⅓ cup coconut milk (full fat or light, from a can or box)",
      "2 tablespoons peanut butter",
      "2 teaspoon soy sauce",
      "2 teaspoons lime juice",
      "1 teaspoon sriracha",
      "optional - minced garlic and/or ginger"
    ],
    "cuisineType": [
      "Vegetarian",
      "Vegan"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/04/14/spicy-mango-avocado-rice-bowl/",
    "recipeTitle": "Spicy Mango & Avocado Rice Bowl Recipe",
    "ingredients": [
      "2 cups cooked black forbidden rice, or other grain",
      "1 14 oz. package extra firm tofu",
      "drizzle of olive oil",
      "drizzle of tamari",
      "1 mango, cubed",
      "1 scallion, sliced",
      "1 cup shredded red cabbage",
      "a few radishes, thinly sliced",
      "½ cup chopped cucumber",
      "1 avocado, pitted and diced",
      "lime slices",
      "handful of chopped cilantro (or basil or mint)",
      "⅓ cup coconut milk (full fat or light, from a can or box)",
      "2 tablespoons peanut butter",
      "2 teaspoon soy sauce",
      "2 teaspoons lime juice",
      "1 teaspoon sriracha",
      "optional - minced garlic and/or ginger"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/04/06/watercress-farro-salad-tart-cherries/",
    "recipeTitle": "Watercress Farro Salad with Tart Cherries Recipe",
    "ingredients": [
      "1 cup uncooked farro",
      "2 cups watercress",
      "¾ cup chopped carrots",
      "⅓ cup ricotta salada or feta cheese, crumbled",
      "⅓ cup dried tart cherries",
      "1 cup basil leaves, torn",
      "½ cup mint leaves",
      "¼ cup sliced almonds",
      "2 tablespoons olive oil",
      "1 tablespoon white wine vinegar",
      "big squeeze of lemon (about 1T)",
      "1 garlic clove, minced",
      "¼ teaspoon maple syrup",
      "Sea salt and freshly ground pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/04/03/mini-spinach-sun-dried-tomato-frittatas/",
    "recipeTitle": "Spinach & Sun Dried Tomato Frittatas Recipe",
    "ingredients": [
      "drizzle of olive oil",
      "¼ cup chopped scallions",
      "1 small clove garlic",
      "2 cups chopped spinach",
      "6 large eggs",
      "¼ cup almond milk",
      "⅓ cup chopped sun dried tomatoes",
      "¼ cup chopped herbs: (ie. basil, parsley, tarragon...)",
      "pinch of red pepper flakes",
      "salt and pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/04/01/creamy-vegan-corn-chowder/",
    "recipeTitle": "Creamy Vegan Corn Chowder Recipe",
    "ingredients": [
      "1 tablespoon olive oil",
      "1 medium yellow onion, chopped",
      "3 cloves garlic, minced",
      "2 ribs celery, chopped",
      "1 yukon gold potato, chopped",
      "4 ears fresh sweet corn, husked",
      "1 red pepper, diced",
      "½ teaspoon celery salt",
      "½ teaspoon smoked paprika",
      "1 tablespoon sherry vinegar, or white wine vinegar",
      "2 cups vegetable broth",
      "1 14-oz.can light coconut milk",
      "sea salt and freshly ground black pepper",
      "chopped chives, for garnish",
      "optional: reserve some corn kernels and diced red pepper for garnish"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/03/23/lemon-broccoli-pasta-exciting-news/",
    "recipeTitle": "Lemon Broccoli Pasta + Exciting News! Recipe",
    "ingredients": [
      "1 tablespoon olive oil",
      "3 garlic scapes, chopped into 1 inch pieces (or 1 clove minced garlic)*",
      "2 cups broccolini or broccoli florets",
      "6 oz. brown rice spaghetti",
      "squeeze of lemon + a bit of lemon zest",
      "hemp seed topping (below), or freshly grated parmesan cheese",
      "a few basil leaves, sliced",
      "a pinch of red chile flakes",
      "salt and pepper",
      "½ cup hemp seeds",
      "2 tablespoons nutritional yeast",
      "2 tablespoons raw sunflower seeds",
      "pinch of salt"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/03/17/kale-salad-avocado-tahini-sauce/",
    "recipeTitle": "Kale Salad w/ Avocado Tahini Sauce Recipe",
    "ingredients": [
      "1 small avocado (or ½ a large one)",
      "1½ tablespoons tahini",
      "2 tablespoons lemon juice",
      "1 small garlic clove",
      "1 tablespoon olive oil",
      "2 tablespoons water",
      "salt and pepper",
      "2 cups kale, thinly sliced",
      "2 cups shaved brussels sprouts",
      "¼ cup radishes, sliced into matchsticks",
      "¼ cup thinly sliced carrots",
      "½ cup white beans",
      "¼ cup sliced almonds, toasted",
      "1 cup chopped basil"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/03/09/simple-swiss-chard-pasta/",
    "recipeTitle": "Simple Swiss Chard Pasta Recipe",
    "ingredients": [
      "6 oz pasta (I used Tinkyada Brown Rice Spaghetti)",
      "1 teaspoon olive oil",
      "4-5 chard leaves, stems diced, leaves coarsely chopped",
      "½ teaspoon balsamic vinegar",
      "1 cup canned fire roasted diced tomatoes",
      "2 cloves garlic, minced",
      "½ cup cooked white beans, drained and rinsed",
      "shaved pecorino cheese",
      "¼ cup pine nuts, optional",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/03/06/tart-cherry-grilled-cheese-sage/",
    "recipeTitle": "Tart Cherry Grilled Cheese with Sage Recipe",
    "ingredients": [
      "4 slices whole grain bread",
      "½ cup shredded white cheddar cheese",
      "¼ cup dried tart cherries",
      "6-8 sage leaves",
      "2 tablespoons chives",
      "drizzle of olive oil"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/02/18/millet-cakes-carrots-spinach/",
    "recipeTitle": "Millet Cakes with Carrots & Spinach Recipe",
    "ingredients": [
      "1 cup millet, rinsed",
      "2 cups water",
      "salt and pepper",
      "3 teaspoons vegetable oil (I used olive oil)",
      "1 shallot, minced",
      "6 ounces (6 cups) baby spinach, chopped",
      "2 carrots, peeled and shredded",
      "2 garlic cloves, minced",
      "2 teaspoons curry powder (I used muchi curry powder)",
      "¼ cup plain yogurt (vegan version: ¼ cup + tablespoon almond milk)",
      "1 large egg, lightly beaten (vegan version: ¼ cup ground flaxseed)",
      "2 tablespoons minced cilantro",
      "any sauce or chutney you like - I topped mine with greek yogurt, mixed with salt, pepper, chile flakes and a squeeze of lime, or use this recipe and make a similar vegan version."
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/02/15/butternut-squash-kale-quinoa-stew/",
    "recipeTitle": "Butternut Squash, Kale & Quinoa Stew Recipe",
    "ingredients": [
      "2 tablespoons olive oil",
      "1 large onion, diced",
      "2 cups cubed butternut squash",
      "3 cloves garlic, minced",
      "1 (or more) teaspoon ground cumin",
      "1 (or more) teaspoon ground coriander",
      "½ teaspoon red chile flakes",
      "½ teaspoon smoked paprika",
      "splash of white wine vinegar (1-2 tablespoons)",
      "14 oz. can diced tomatoes",
      "32 oz. vegetable broth",
      "½ cup dry quinoa (or 1.5 cups cooked quinoa)",
      "generous amounts of salt & pepper",
      "a few big handfuls of chopped kale"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/02/09/saffron-couscous-spinach-stew/",
    "recipeTitle": "Saffron Couscous & Spinach Stew Recipe",
    "ingredients": [
      "1 tablespoon olive oil",
      "about 1 cup sliced leeks",
      "2 cloves of garlic, minced",
      "1.5 cups chopped mushrooms",
      "splash of sherry vinegar or white wine vinegar",
      "1 14 oz. can tomatoes",
      "(up to) 14 oz. water",
      "a few generous pinches of saffron",
      "½ - 1 teaspoon paprika (smoked or sweet)",
      "½ cup cooked chickpeas, drained",
      "½ cup uncooked Israeli couscous",
      "a few big handfuls of spinach",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/02/05/rainbow-chard-feta-orzo-bowls/",
    "recipeTitle": "Rainbow Chard & Feta Orzo Bowls Recipe",
    "ingredients": [
      "1 cup uncooked whole wheat orzo",
      "1+ tablespoons olive oil",
      "1 clove garlic, minced",
      "½ teaspoon dijon mustard",
      "a few squeezes of lemon",
      "1 small bunch of chard (about 4-5 leaves)",
      "⅓ cup feta cheese",
      "¼ cup toasted walnuts",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/01/29/sweet-potato-avocado-tacos/",
    "recipeTitle": "Sweet Potato Avocado Tacos Recipe",
    "ingredients": [
      "1 medium sweet potato, cubed",
      "1 teaspoon olive oil",
      "½ teaspoon chile powder",
      "1 cup cooked black beans",
      "1 small avocado, diced",
      "2 scallions, diced",
      "salt & pepper",
      "4-6 corn or flour tortillas",
      "optional: ¼ cup feta or cotija cheese",
      "optional: 1 small roasted jalapeño, diced",
      "½ cup greek yogurt",
      "1 small avocado",
      "½ clove garlic",
      "juice of 1 lime",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/01/19/black-bean-chickpea-veggie-chili/",
    "recipeTitle": "Easy Black Bean & Chickpea Chili Recipe",
    "ingredients": [
      "2 tablespoons olive oil",
      "½ of a large white onion (about 1.5 cups chopped)",
      "2 cloves garlic, minced",
      "1 green pepper, diced",
      "1 14-oz. can of diced fire roasted tomatoes",
      "14 oz. water",
      "14 oz. can black beans, drained and rinsed",
      "14 oz. can chickpeas, drained and rinsed",
      "2 tablespoons adobo sauce from a can of chipotles in adobo (see notes)",
      "1 cup frozen corn",
      "juice from ½ of a lime",
      "salt & pepper",
      "extra lime slices",
      "chopped green onion",
      "sliced avocado with coarse sea salt",
      "jalapeño or serrano peppers (skip if you’re sensitive to spice)",
      "grated cheddar or jack cheese (optional)",
      "tortillas, on the side"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/01/15/seared-tofu-banh-mi-sandwiches/",
    "recipeTitle": "Seared Tofu Banh Mi Sandwiches Recipe",
    "ingredients": [
      "1 14oz. pkg. extra firm tofu (see notes)",
      "olive oil, for the pan",
      "fresh baguette, sliced into sandwich sized portions",
      "good quality mayo, or vegan mayo",
      "a few sprigs of cilantro per sandwich",
      "sriracha, to taste",
      "1 small daikon sliced into matchsticks",
      "2 small carrots, sliced into matchsticks",
      "½ a small cucumber, de-seeded & sliced into matchsticks",
      "½ jalapeño, thinly sliced",
      "¼ (or more) cup white wine vinegar",
      "¼ (or more) cup rice vinegar",
      "a few pinches of sugar",
      "a few pinches of salt",
      "1 tablespoon olive oil",
      "2 tablespoons tamari (or soy sauce)",
      "juice of ½ lime + a little zest",
      "1 clove garlic, minced",
      "½ teaspoon minced ginger",
      "generous amounts of freshly cracked pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/01/12/green-quesadillas/",
    "recipeTitle": "Green Quesadillas Recipe",
    "ingredients": [
      "4 tortillas (I used Whole Foods' 365 spinach tortillas)",
      "a few handfuls of cheese: cheddar, jack, or vegan Daiya",
      "a few handfuls of sliced greens: collards, spinach, etc.",
      "½ jalapeño, sliced",
      "a few sprigs of cilantro",
      "1 shallot, thinly sliced",
      "white wine vinegar (enough to fill the jar of shallots)",
      "a few pinches of cane sugar and salt",
      "avocado w/ squeezes of lime",
      "your favorite salsa",
      "greek yogurt with lime + chile powder + salt",
      "chipotle cashew cream"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/01/10/jalapeno-cauliflower-shells-and-cheese/",
    "recipeTitle": "Jalapeño Cauliflower Shells & Cheese Recipe",
    "ingredients": [
      "3 cups cauliflower florettes",
      "drizzle of olive oil",
      "Annie's Shells & White Cheddar Mac & Cheese (+ some almond milk)",
      "(or 1.5 cups uncooked shells and sauce from here, here, or here)",
      "½-1 jalapeño, sliced",
      "two handfuls of finely chopped kale",
      "extra splashes of plain almond milk",
      "grated fontina cheese",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2015/01/07/roasted-cauliflower-kale-salad/",
    "recipeTitle": "Roasted Cauliflower Kale Salad Recipe",
    "ingredients": [
      "3-4 cups cauliflower floretes",
      "olive oil",
      "one bunch of kale, destemmed (about 5 packed cups)",
      "a few squeezes of lemon",
      "a few squeezes of orange",
      "¼ teaspoon dijon mustard",
      "salt & pepper",
      "¼ cup hemp seeds, toasted chopped almonds or pine nuts",
      "crumbled feta cheese",
      "shaved parmesan cheese",
      "dried currants or cranberries",
      "chickpeas (or a protein of your choice)",
      "roasted sweet potatoes (roast w/ the cauliflower)",
      "a scoop of hummus or cashew cream"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/12/22/minty-millet-pomegranate-salad/",
    "recipeTitle": "Minty Millet & Pomegranate Salad Recipe",
    "ingredients": [
      "2 cups cooked millet (I use this method)",
      "1 bulb fennel, thinly sliced",
      "1 cup chickpeas, drained & rinsed",
      "¼ cup or so, thinly sliced red cabbage",
      "¼ cup scallions chopped scallions",
      "⅓ cup pomegranate seeds",
      "⅓ cup toasted pistachios",
      "a few handfuls of baby salad greens",
      "handful of mint leaves",
      "2 tablespoon olive oil",
      "2 tablespoon tahini",
      "3 tablespoons fresh squeezed lemon",
      "3 tablespoons fresh squeezed orange",
      "optional: 1-2 teaspoon maple syrup",
      "salt & pepper",
      "a little water to thin, if necessary"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/12/02/mini-sweet-potato-pizzas/",
    "recipeTitle": "Mini Sweet Potato Pizzas Recipe",
    "ingredients": [
      "part of a sweet potato, peeled into ribbons",
      "4 mini naan breads (I used these) or pizza crust of your choice",
      "olive oil, for brushing on the dough",
      "½ clove of garlic",
      "ricotta cheese - a few tablespoons per pizza",
      "shaved red onion",
      "shaved brussels sprouts",
      "a few pieces of kale",
      "pinches of red chile flakes",
      "grated pecorino cheese"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/11/20/avocado-quinoa-stuffed-acorn-squash/",
    "recipeTitle": "Avocado & Quinoa Stuffed Acorn Squash Recipe",
    "ingredients": [
      "3-4 small acorn squash, sliced in half",
      "2 tablespoons olive oil",
      "1 medium onion",
      "2-3 cloves of garlic, minced",
      "1 teaspoon cumin",
      "1 teaspoon coriander",
      "1 4-oz. can of green chiles",
      "1.5 cups cooked quinoa",
      "1 can black beans, drained and rinsed",
      "¼ cup chopped scallions",
      "¼ cup toasted pepitas",
      "¼ cup feta cheese, optional",
      "2 avocados, diced",
      "a few squeezes of lime",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/11/17/farmhouse-farro-salad/",
    "recipeTitle": "Farmhouse Farro Salad Recipe",
    "ingredients": [
      "1 cup cooked farro (see notes)",
      "1 sweet potato, chopped into cubes",
      "a few leaves of kale, chopped or torn",
      "2-3 cups salad greens",
      "1-2 carrots, peeled into ribbons",
      "1 apple, diced",
      "a few radishes, sliced",
      "small handful of chopped parsley",
      "½ cup chopped & toasted almonds",
      "¼ cup olive oil",
      "2 tablespoons apple cider vinegar",
      "1 teaspoon dijon mustard",
      "optional: ½ teaspoon maple syrup or a big squeeze of orange",
      "salt & pepper, to taste"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/10/29/roasted-spaghetti-squash-w-chickpeas-kale/",
    "recipeTitle": "Spaghetti Squash w/ Chickpeas & Kale Recipe",
    "ingredients": [
      "1 spaghetti squash",
      "1-2 tablespoons olive oil",
      "1 shallot, sliced thinly",
      "1 clove garlic",
      "½ tablespoon minced fresh rosemary",
      "pinch of chile flakes",
      "½ cup chickpeas, drained and rinsed",
      "2 (packed) cups of chopped kale leaves",
      "juice of ½ a lemon",
      "¼ cup chopped sun dried tomatoes (or capers or olives)",
      "¼ cup toasted pine nuts",
      "salt & pepper",
      "optional: a bit of freshly grated parmesan cheese"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/10/27/pumpkin-hummus-quesadillas/",
    "recipeTitle": "pumpkin hummus quesadillas recipe",
    "ingredients": [
      "½ cup pumpkin puree*",
      "1.5 cup chickpeas, drained and rinsed",
      "1 teaspoon ground cumin",
      "1 teaspoon ground coriander",
      "½ teaspoon cinnamon",
      "¼ teaspoon garlic powder (or part of a small garlic clove)",
      "pinch of cayenne pepper",
      "1 teaspoon salt (or to taste)",
      "freshly ground pepper",
      "juice of ½ a lemon",
      "2 tablespoons olive oil",
      "4 large tortillas",
      "handful of spinach or arugula",
      "½ cup chickpeas",
      "a few handfuls of grated jack cheese",
      "½ avocado",
      "big squeeze of lemon",
      "pinch of chile flakes",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/10/23/harissa-spiced-fall-veggie-pitas/",
    "recipeTitle": "harissa spiced fall veggie pitas recipe",
    "ingredients": [
      "1 medium sweet potato, chopped into 1-inch cubes",
      "drizzle of olive oil",
      "1 zucchini, chopped",
      "1 teaspoon dried harissa spice (see note below)",
      "2 pitas, sliced in half",
      "1 small avocado, diced",
      "a few salad greens (ie, baby arugula)",
      "salt & pepper",
      "optional: a few pickled onions, sprinkle of hemp seeds, red chile flakes",
      "1 tablespoon olive oil",
      "1 teaspoon dried harissa spice",
      "½ cup greek yogurt",
      "squeeze of lemon",
      "salt & pepper, to taste",
      "1 small red onion",
      "white wine vinegar (enough to fill a jar of onions)",
      "a few pinches of cane sugar and salt"
    ],
    "cuisineType": [
      "Vegetarian",
      "Vegan"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/10/18/butternut-squash-walnut-sage-pasta/",
    "recipeTitle": "butternut squash walnut & sage pasta recipe",
    "ingredients": [
      "2 cups cubed butternut squash",
      "1 tablespoon olive oil",
      "1 tablespoon butter (or extra olive oil)",
      "1 small shallot, sliced",
      "¼ cup chopped sage leaves",
      "¼ cup chopped walnuts",
      "½ cup cooked chickpeas",
      "1-2 cloves of garlic, finely chopped",
      "big squeeze of lemon",
      "splash of balsamic vinegar",
      "4-6 oz. brown rice spaghetti or linguine (& save some pasta water)",
      "a few handfuls of chopped spinach (or kale or chard)",
      "½ cup chopped parsley",
      "grated pecorino cheese, to taste",
      "salt & pepper"
    ],
    "cuisineType": [
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/10/06/butternut-squash-burrito-bowls/",
    "recipeTitle": "butternut squash burrito bowls recipe",
    "ingredients": [
      "1 small butternut squash, peeled & cubed",
      "drizzle of olive oil",
      "salt & pepper",
      "½ teaspoon chili powder",
      "2 cups cooked brown rice",
      "1 can black beans, drained and rinsed",
      "a few leaves of kale (lightly massaged with olive oil)",
      "¼ cup toasted pepitas",
      "1 cup chopped tomatoes",
      "½ cup fresh corn kernels",
      "¼ cup finely chopped red onion",
      "1 clove minced garlic",
      "juice of 1 lime",
      "½ sliced serrano",
      "small handful chopped cilantro",
      "salt, pepper",
      "1 ripe avocado",
      "¼ cup yogurt (vegan sub: ¼ cup cashews + ¼ cup water)",
      "juice of ½ lime",
      "1 clove garlic",
      "1 tablespoon minced onion",
      "½ teaspoon ground cumin",
      "½ teaspoon ground coriander",
      "¼ cup chopped cilantro",
      "salt & pepper, to taste",
      "a little water, if necessary to thin"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free",
      "Vegan"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/09/22/roasted-chickpea-ratatouille/",
    "recipeTitle": "roasted chickpea ratatouille recipe",
    "ingredients": [
      "1 small eggplant (about 1.5 cups, cut into 1-inch cubes)",
      "2 roma tomatoes, cut into 1 inch wedges",
      "2 cups chopped zucchini/yellow squash",
      "½ medium yellow onion, sliced into strips",
      "½ cup canned chickpeas, drained & rinsed",
      "1-2 tablespoons olive oil",
      "1 teaspoon dried oregano",
      "1 teaspoon white or red wine vinegar",
      "2 cloves garlic, minced",
      "a few pinches of red pepper flakes",
      "a few leaves of basil, sliced",
      "(optional): cooked millet or crusty bread on the side"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/09/15/butternut-squash-quinoa-salad-w-tart-cherries/",
    "recipeTitle": "butternut squash & tart cherry quinoa recipe",
    "ingredients": [
      "½ cup uncooked quinoa",
      "1 small butternut squash, peeled, cubed (about 2 cups)",
      "2 big handfuls mixed greens (ie. spinach & arugula)",
      "⅓ cup tart cherries",
      "⅓ cup crumbled feta cheese",
      "¼ cup chopped walnuts",
      "¼ cup chopped chives",
      "2 tablespoons olive oil",
      "a few leaves of fresh sage, chopped",
      "1 tablespoon apple cider vinegar",
      "¼ teaspoon ground cinnamon",
      "1 teaspoon honey (vegan sub: maple syrup)",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/09/10/grilled-eggplant-pesto-sandwiches/",
    "recipeTitle": "grilled eggplant & pesto sandwiches recipe",
    "ingredients": [
      "1 medium eggplant, sliced into ¼ inch slices",
      "drizzle of olive oil, for grilling the eggplant",
      "4 ciabatta rolls, toasted if you like",
      "a few roasted peppers (optional)",
      "ball of fresh mozzarella, sliced (skip if vegan)",
      "1 avocado, sliced",
      "⅓ cup toasted walnuts",
      "1 small clove of garlic",
      "big handful of arugula (plus reserve a few sprigs for the sandwiches)",
      "big handful of basil (also reserve a few)",
      "juice of ½ a small lemon",
      "sea salt & freshly ground pepper",
      "¼ - ⅓ cup olive oil"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/09/03/soba-noodles-shishito-peppers-avocado/",
    "recipeTitle": "soba noodles with shishitos & avocado recipe",
    "ingredients": [
      "6 ounces soba noodles",
      "a big handful of shishito peppers",
      "2 tablespoons thinly chopped scallions",
      "1 tablespoon toasted sesame oil",
      "1 tablespoon soy sauce or tamari",
      "2 tablespoons rice vinegar",
      "1 small ripe avocado + (optional) squeeze of lime",
      "1 tablespoon sesame seeds",
      "(optional) add a protien: tofu, edamame, salmon, etc"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/08/30/portobello-pups-macaroni-salad/",
    "recipeTitle": "portobello pups recipe",
    "ingredients": [
      "2 tablespoons olive oil",
      "1 tablespoon balsamic vinegar",
      "1 teaspoon yellow mustard",
      "salt & pepper",
      "2 large portobello mushrooms, sliced into 4 long slices each",
      "½ cup red onion",
      "½ cup chopped tomatoes",
      "squeeze of lime",
      "1 serrano pepper, thinly sliced",
      "salt & pepper",
      "yellow mustard",
      "4-5 hot dog buns",
      "optional: ketchup on the side",
      "optional: 1 serrano pepper, thinly sliced",
      "2 tablespoons olive oil",
      "juice & zest of one lemon",
      "1 teaspoon yellow mustard",
      "1 smashed clove of garlic",
      "1 cup dried macaroni noodles",
      "¼ cup chopped red and/or green bell pepper",
      "¼ cup sliced cherry tomatoes",
      "¼ cup peas (if frozen, thaw them)",
      "2 tablespoons capers or chopped olives",
      "handful of chopped fresh basil",
      "salt & pepper, to taste",
      "optional: ¼ cup (or more) greek yogurt"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/08/25/spicy-sweet-potato-tostadas/",
    "recipeTitle": "spicy sweet potato avocado tostadas recipe",
    "ingredients": [
      "1 cup cherry or grape tomatoes, chopped",
      "½ cup diced red onion",
      "½ clove garlic",
      "1 sliced serrano chile",
      "juice of ½ a juicy lime",
      "a few pinches of salt & pepper",
      "2 cups cubed sweet potatoes",
      "drizzle of olive oil",
      "salt & pepper",
      "½ teaspoon each: McCormick Gourmet cumin & chili powder",
      "4-5 corn (or flour) tortillas",
      "1 ripe avocado",
      "extra lime slices, for serving",
      "½ cup refried beans",
      "a few chickpeas, black beans or another protein",
      "roasted okra",
      "a few sprouts",
      "hot sauce or sriracha"
    ],
    "cuisineType": [
      "Gluten-free",
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/08/13/gluten-free-fig-ricotta-flatbread-pizza/",
    "recipeTitle": "fig & ricotta flatbread pizza recipe",
    "ingredients": [
      "2 cups Pamela's Pizza Crust Mix",
      "(yeast is included in the mix)",
      "1 cup plus 2 tablespoons warm water",
      "2 tablespoons olive oil",
      "¼ cup gluten-free cornmeal",
      "olive oil, to brush on the crust",
      "⅔ cup ricotta",
      "1 cup sliced figs",
      "a few dollops of pesto",
      "a handful of arugula",
      "2 tablespoons pistachios, toasted & crushed",
      "drizzle of honey (optional)",
      "drizzle of balsamic vinegar"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/08/11/lemony-summer-squash-orecchiette/",
    "recipeTitle": "lemony summer squash orecchiette recipe",
    "ingredients": [
      "3 small summer squash (or 2 medium)",
      "8 oz. dry orecchiette pasta",
      "1-2 tablespoons olive oil",
      "1 clove garlic, minced",
      "1 teaspoon finely chopped rosemary",
      "big handful of chopped spinach or other leafy green",
      "big squeeze of lemon",
      "⅓ cup feta cheese",
      "2 tablespoons capers",
      "a few pinches red pepper flakes",
      "optional: grated parmesan cheese",
      "plenty of salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/07/28/tomato-zucchini-frittata/",
    "recipeTitle": "Tomato & Zucchini Frittata Recipe",
    "ingredients": [
      "6 eggs",
      "¼ cup Original Almond Breeze Almond Milk (Unsweetened)",
      "1 teaspoon olive oil",
      "handful of chopped leafy greens (sweet potato greens, or spinach)",
      "1 small zucchini, sliced into thin coins",
      "1 clove of garlic, minced",
      "(optional) pinch of smoked paprika",
      "2 medium tomatoes, sliced",
      "handful of cherry tomatoes, halved",
      "fresh herbs - sage, thyme or basil",
      "salt & pepper"
    ],
    "cuisineType": [
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/07/25/sweet-pepper-panzanella/",
    "recipeTitle": "sweet pepper panzanella recipe",
    "ingredients": [
      "2-3 sweet peppers (red and/or yellow)",
      "olive oil",
      "sherry vinegar (or balsamic or white wine vinegar)",
      "pinch of sweet or smoked paprika",
      "toasted stale bread, rubbed w/ olive oil & garlic",
      "1 cup cherry tomatoes",
      "1-2 leaves of kale, torn",
      "½ cup little mozzarella balls",
      "¼ cup chunky pickled onions (see below)",
      "handful of torn basil",
      "salt & pepper",
      "1 small red onion, sliced into thick strips",
      "white wine vinegar (enough to fill the jar of onions)",
      "a few pinches of cane sugar and salt"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/07/23/mango-habanero-black-bean-tacos/",
    "recipeTitle": "mango habanero black bean tacos recipe",
    "ingredients": [
      "1 small mango, diced",
      "¼ cup diced red onion",
      "1 diced red padrone pepper (or ¼ cup red bell)",
      "juice of 1 lime",
      "splash of olive oil",
      "handful of cilantro, chopped",
      "¾ cup cooked black beans, drained and rinsed",
      "1 avocado, diced",
      "1-2 teaspoons, mango habanero jam*",
      "salt, to taste",
      "4-6 flour (or gluten-free corn) tortillas",
      "optional: crumbled cotija cheese",
      "optional: greek yogurt w/ lime & salt"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/07/21/roasted-cherry-tomato-bowls/",
    "recipeTitle": "roasted cherry tomato bowls recipe",
    "ingredients": [
      "2 cups cherry tomatoes",
      "drizzle of olive oil",
      "a few sprigs of fresh thyme",
      "½ cup uncooked wheat berries",
      "handful of arugula or other greens",
      "¾ cup chickpeas",
      "small clove of garlic",
      "salt & pepper",
      "a few spoonfuls of sun cheese (or burrata or fresh ricotta)"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/07/19/stuffed-peppers-green-sals/",
    "recipeTitle": "stuffed peppers w/ green tomato salsa recipe",
    "ingredients": [
      "2 tablespoons olive oil",
      "½ yellow onion, diced",
      "¾ cups (uncooked) millet*",
      "1 small tomato, diced",
      "1¼ cups low-sodium vegetarian broth",
      "kernels from 1 ear of fresh corn",
      "1 cup grated jack cheese",
      "1 teaspoon sea salt, & pepper to taste",
      "½ teaspoon sweet paprika",
      "¼ teaspoon ground chili powder",
      "16 ounces small sweet peppers",
      "queso fresco, for serving",
      "4-5 small green tomatoes, diced",
      "¼ cup red onion, diced",
      "¼ cup scallions, diced",
      "½ of a jalapeño, seeds removed & minced",
      "juice of 1-2 limes + some zest",
      "big handful of chopped cilantro",
      "optional - a few pinches of sugar",
      "1 small avocado, diced",
      "generous pinches of salt"
    ],
    "cuisineType": [
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/06/09/grilled-polenta-zucchini-salsa/",
    "recipeTitle": "grilled polenta & zucchini salsa recipe",
    "ingredients": [
      "1 cup organic popcorn",
      "coffee grinder or high speed blender",
      "½ cup corn flour",
      "2 cups water",
      "½ teaspoon garlic powder",
      "¼ teaspoon sea salt",
      "1 zucchini, diced small",
      "¼ cup red onion, diced",
      "½ of a serrano pepper, diced",
      "1 cup cherry tomatoes, sliced",
      "1 tablespoon olive oil",
      "zest & juice of 1 lime (more as needed)",
      "1 teaspoon white wine vinegar",
      "handful of chopped cilantro",
      "salt & pepper",
      "diced avocado",
      "optional - a few handfuls of arugula for serving"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/06/02/veggie-baked-macaroni/",
    "recipeTitle": "mostly-vegetarian baked macaroni recipe",
    "ingredients": [
      "¾ cups cashew cream",
      "½ cup (uncooked) quinoa elbows (or any elbows)",
      "½ cup chopped asparagus (tender parts only)",
      "½ cup peas",
      "½ cup mini mozzarella balls, halved",
      "handfuls of fresh chopped basil and sage",
      "¼ cup grated comté (or parmesan) for the topping",
      "¼ cup panko breadcrumbs",
      "a generous drizzle of olive oil",
      "pinches of red pepper flakes",
      "salt & pepper",
      "1.5 cups cashews, soak overnight & drain",
      "2 cloves garlic",
      "3 tablespoons lemon juice",
      "2 teaspoons dijon mustard",
      "¼ cup water (more if necessary)",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/05/16/spring-quinoa-bowls/",
    "recipeTitle": "pickled chard quinoa bowls recipe",
    "ingredients": [
      "a few cups chopped cremini mushrooms",
      "salt",
      "1 tablespoon olive oil or coconut oil",
      "splash of balsamic vinegar",
      "splash of soy sauce (or tamari)",
      "1.5 cups cooked quinoa",
      "a few handfuls spinach, chopped (or sauteed chard)",
      "a few slabs of tofu, cubed",
      "1-2 radishes, sliced thin",
      "½ cup edamame (frozen is ok, thaw it)",
      "a few spoonfuls of pickled chard stems",
      "a few dollops of walnut pesto",
      "more salt & pepper, to taste"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/05/08/sambal-salsa-black-bean-tacos/",
    "recipeTitle": "sambal salsa & black bean tacos recipe",
    "ingredients": [
      "2-3 tomatoes, diced",
      "1 clove of garlic, minced",
      "¼ cup diced red onion",
      "¼ cup chopped green onions",
      "juice & zest of 2 small limes",
      "1-2 teaspoons sambal chile paste",
      "½ teaspoon olive oil",
      "salt & pepper",
      "½ teaspoon ginger, minced (optional)",
      "pinch of sugar or a tiny bit of honey (optional)",
      "chopped avocado",
      "tortillas",
      "black beans",
      "cotija cheese (optional)",
      "serve with extra limes"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/05/01/bright-spring-green-salad/",
    "recipeTitle": "bright spring green salad recipe",
    "ingredients": [
      "1 bunch of asparagus, tender tops only",
      "½ cup peas",
      "a few handfuls of salad greens",
      "½ cup chickpeas, drained and rinsed",
      "a few sliced radishes",
      "½ cup sliced mozzarella balls (vegan sub: avocado)",
      "handful of chopped, toasted pistachios",
      "handful of herbs: chives and mint",
      "a big handful of basil and mint",
      "1 small garlic clove",
      "1 tablespoon lemon juice, plus some zest",
      "1 tablespoon white balsamic vinegar",
      "2 (or more) tablespoons olive oil",
      "salt & pepper to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/04/23/kohlrabi-noodle-salad/",
    "recipeTitle": "spicy kohlrabi noodles recipe",
    "ingredients": [
      "2-3 kohlrabi",
      "4 oz. cooked (and cooled) rice noodles",
      "½ jalapeño, sliced and/or a few thai red chiles",
      "½ avocado, sliced",
      "herbs: cilantro, basil, and/or mint",
      "handful of crushed peanuts",
      "sriracha, to taste",
      "extra lime slices",
      "optional: tofu or a protein of your choice",
      "juice and zest of 1 lime",
      "2 tablespoons fish sauce (or soy sauce or tamari)",
      "2 tablespoons rice vinegar",
      "1 clove of garlic, minced",
      "1 teaspoon minced ginger"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/04/11/spring-onion-fritatta/",
    "recipeTitle": "Spring Onion Frittata Recipe",
    "ingredients": [
      "5 eggs",
      "⅓ cup water or milk",
      "1 large clove garlic, minced",
      "olive oil, for the pan",
      "3-4 thin spring onions, chopped small, plus slice a few into thin vertical strips",
      "½ cup chopped asparagus tips",
      "½ cup peas",
      "¼ cup fresh mozzarella pieces*",
      "¼ cup crumbled feta*",
      "¼ cup chopped tarragon",
      "salt & pepper",
      "a few pinches of red pepper flakes"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/04/09/spring-root-watercress-salad/",
    "recipeTitle": "spring root & watercress salad recipe",
    "ingredients": [
      "2 small yellow beets",
      "1 small chioggia beet",
      "½ large black radish",
      "handful of watercress (or arugula or other spring green)",
      "½ cup cooked wheat berries",
      "handful of chopped spinach",
      "toasted pine nuts",
      "crumbled ricotta salata",
      "3 tablespoons olive oil (a good fruity one)",
      "juice of 1 lemon",
      "1 tablespoon white balsamic vinegar",
      "1 clove of garlic, minced",
      "1 teaspoon dijon mustard",
      "handful of fresh herbs: oregano and chives",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/04/07/hazelnut-tahini-pasta/",
    "recipeTitle": "hazelnut tahini pasta recipe",
    "ingredients": [
      "1 cup unsalted hazelnuts, toasted & shelled",
      "2 cloves garlic",
      "¼ cup tahini",
      "juice of 1 lemon",
      "¼ olive oil",
      "salt, pepper",
      "water, as needed to thin (about ¼ cup, if necessary)",
      "8 oz. pasta, plus some reserved pasta water",
      "1 teaspoon olive oil",
      "2 cups of brussels sprouts, thinly sliced",
      "¼ cup toasted hazelnuts, roughly chopped",
      "a few pinches of red pepper flake",
      "salt & pepper, to taste"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/04/04/rainbow-chard-and-wheatberries/",
    "recipeTitle": "rainbow chard & wheat berries recipe",
    "ingredients": [
      "small drizzle olive oil",
      "¼ cup chopped scallions, (the white parts)",
      "1 bunch chard, chopped, coarse stems removed*",
      "mustard oil (see below)",
      "½ cup cooked wheat berries (or quinoa, farro, etc)",
      "½ avocado, chopped, w/ a squeeze of lemon",
      "a few sliced radishes",
      "optional: poached eggs",
      "optional: toasted & chopped almonds",
      "1 tablespoon olive oil",
      "2 teaspoons dijon mustard",
      "2 teaspoons white balsamic vinegar",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/03/17/aloo-gobi-ish/",
    "recipeTitle": "aloo gobi-ish recipe",
    "ingredients": [
      "2 tablespoons coconut oil",
      "1 medium yellow onion, chopped",
      "1 large clove of garlic, minced",
      "2-3 small yellow potatoes, chopped into small cubes",
      "1 tablespoon mustard seeds",
      "2-3 teaspoons muchi curry powder*",
      "2 teaspoons grated ginger",
      "about ¼ cup water",
      "1 small head of cauliflower, broken into small floretes",
      "½ cup coconut milk, (light or full fat)",
      "½ cup peas (frozen is fine)",
      "a few handful of chopped kale or spinach",
      "juice of 1 lime",
      "cilantro",
      "optional - a few pinches of cayenne",
      "optional - 1 cup cubed tofu - bake or pan sear before you begin"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/03/05/black-bean-quinoa-burgers/",
    "recipeTitle": "black bean & quinoa burgers recipe",
    "ingredients": [
      "1-2 teaspoons olive oil",
      "1 medium shallot, chopped",
      "2 garlic cloves, chopped",
      "spices - 2 teaspoons each of ground cumin & coriander, pinch of cayenne",
      "1 tablespoon vegan worcestershire (or soy sauce or tamari)",
      "1 tablespoon balsamic vinegar",
      "1 tablespoon tomato paste (or ketchup)",
      "1 tablespoon grated beet (optional - for color)",
      "¼ cup walnuts",
      "1 cup black beans, cooked & drained (you will use ½ cup at a time)",
      "1 \"flax egg\" (1 tablespoon ground flax + 3 tablespoons water)",
      "¾ cup cooked red quinoa (you’ll use ½ cup, then ¼ cup separately)",
      "salt & pepper",
      "toasted whole wheat or gluten-free buns",
      "lettuce, red onion, tomato, shredded cabbage, jalapeños",
      "Spiced Ketchup and Chipotle Mayonnaise"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/03/02/ricotta-stuffed-cabbage/",
    "recipeTitle": "“ricotta” stuffed cabbage recipe",
    "ingredients": [
      "1.5 cups cashews, soak overnight & drain",
      "2 cloves garlic",
      "2 tablespoons lemon juice",
      "2 tablespoons ume vinegar (or sub more lemon + salt)",
      "¼ cup water (just enough to get the blade going)",
      "salt, pepper to taste",
      "½ cup crumbled firm tofu",
      "1 teaspoon dried oregano",
      "½ teaspoon red pepper flakes",
      "1 cup finely chopped raw kale (or spinach)",
      "handful of chopped chives and/or other fresh herbs",
      "salt & pepper, to taste",
      "12 medium savoy cabbage leaves",
      "a few cups of marinara sauce",
      "drizzle of olive oil",
      "(optional) - top with grated parmesan or pecorino cheese"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/02/27/vegan-stuffed-shells/",
    "recipeTitle": "vegan stuffed shells recipe",
    "ingredients": [
      "1.5 cups cashews, soak overnight & drain",
      "2 cloves garlic",
      "2 tablespoons lemon juice",
      "2 tablespoons ume vinegar (or sub more lemon + salt)",
      "¼ cup water (just enough to get the blade going)",
      "salt, pepper to taste",
      "½ cup crumbled firm tofu",
      "1 teaspoon dried oregano",
      "½ teaspoon red pepper flakes",
      "1 cup finely chopped raw kale (or spinach)",
      "handful of chopped chives and/or other fresh herbs",
      "salt & pepper, to taste",
      "16 jumbo shells",
      "a few cups of marinara sauce",
      "drizzle of olive oil",
      "(very optional) - top with grated parmesan or pecorino cheese"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/02/24/cold-sesame-noodles-kale-shiitakes/",
    "recipeTitle": "cold sesame noodles w/ kale & shiitakes recipe",
    "ingredients": [
      "4-6 oz. noodles (I used these brown rice noodles)",
      "a few cups sliced shiitake mushrooms",
      "2 cups chopped kale, massaged (see notes below)",
      "1 cup thinly sliced cabbage",
      "3 small carrots, chopped into matchsticks",
      "a few radishes, thinly sliced",
      "¼ chopped scallions",
      "a few tablespoons of sesame seeds",
      "½ pkg. extra firm tofu, chopped into cubes",
      "1 tablespoon toasted sesame oil",
      "1 tablespoon rice vinegar",
      "1 tablespoon lime juice",
      "2 teaspoons grated ginger",
      "2 teaspoons soy sauce (tamari if gluten-free)",
      "1 teaspoon sriracha - optional"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/02/22/roasted-broccoli-bowls/",
    "recipeTitle": "roasted broccoli bowls recipe",
    "ingredients": [
      "a few cups of broccoli floretes",
      "small bunch of carrots",
      "½ cup cooked chickpeas (canned is fine)",
      "olive oil",
      "a few handfuls of spinach",
      "squeeze of lemon",
      "salt & pepper",
      "1 cup chickpeas, canned is fine, rinsed and drained",
      "½ cup almonds, blanched & skins peeled",
      "2 cloves garlic",
      "1 jarred roasted red pepper (about ¼ cup worth)",
      "juice of ½ a lemon",
      "2 tablespoons olive oil",
      "1 tablespoon tahini",
      "1-2 teaspoons dry harisa seasoning (optional)",
      "water (approx. ¼-1/3 cup) to thin consistency",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/02/18/spiced-cauliflower-couscous/",
    "recipeTitle": "spiced cauliflower “couscous” recipe",
    "ingredients": [
      "about 3 (loose) cups of cauliflower florets, dried completely",
      "1 tablespoon coconut oil",
      "¼ cup toasted hazelnuts, chopped",
      "2 tablespoons pine nuts, toasted",
      "½ teaspoon dried orange peel",
      "½ teaspoon dried cilantro leaves",
      "½ teaspoon red chile flakes",
      "2 tablespoons currants",
      "1 cup chickpeas, (optional: roast them in a bit of oil & salt)",
      "chopped fresh cilantro (optional)",
      "½ cup coconut milk (full fat is ideal, light would do)",
      "¼ teaspoon turmeric",
      "1 teaspoon curry powder",
      "pinch of cinnamon",
      "salt"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/02/16/chilaquiles-with-avocado/",
    "recipeTitle": "chilaquiles with avocado recipe",
    "ingredients": [
      "1-2 tablespoons oil",
      "2 stale corn tortillas, sliced into strips",
      "½ cup dried chile salsa (or smooth store-bought salsa or chile sauce)",
      "handful of chopped scallions",
      "a bit of diced red onion",
      "½ an avocado, chopped w/ a bit of lime + salt",
      "2 fried eggs (vegan sub: black beans)",
      "¼ cup, or so, crumbled cotija cheese (vegan: omit)",
      "squeeze of lime",
      "salt, pepper"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/02/12/sweet-potato-vegetarian-chili/",
    "recipeTitle": "sweet potato vegetarian chili recipe",
    "ingredients": [
      "2 tablespoons olive oil",
      "1 medium onion, chopped",
      "2 cloves garlic, chipped",
      "2 teaspoons chili powder",
      "2 dried guajillo chiles, deseeded, stemmed & sliced thin (1 for the chile, 1 for the topping)",
      "1 teaspoon apple cider vinegar",
      "2 14-oz. cans fire-roasted diced tomatoes",
      "4 cups vegetable broth",
      "1.5 cups cubed sweet potatoes",
      "2 cans of beans - black, red, pinto, or a combo",
      "1 cup chopped kale",
      "½ cup corn kernels (frozen is fine)",
      "a good squeeze of lime",
      "salt, pepper",
      "chopped scallions",
      "tortilla strips - toast 10-15 minutes in the oven",
      "toasted chiles - toast 1-2 minutes in a 350 oven (or until they curl up)",
      "toasted pumpkin seeds",
      "diced avocado w/ a squeeze of lime"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/02/02/vegan-cauliflower-mac-and-cheese/",
    "recipeTitle": "cauliflower mac & cheese recipe",
    "ingredients": [
      "1 big head of cauliflower (4 loose cups, chopped, plus extra small florets to leave whole)",
      "12 oz brown rice elbow pasta",
      "1 tablespoon dijon mustard",
      "1 shallot, minced",
      "3 cloves of garlic",
      "½ teaspoon smoked paprika",
      "¾ - 1 cup cashew cream (see recipe below) or sharp cheddar",
      "1 tablespoon sherry vinegar",
      "salt & pepper",
      "pasta water, as needed to thin",
      "¼ cup panko bread crumbs (or gf panko)",
      "non-vegan option: sprinkle ¼ - ½ cup parmesan cheese",
      "super cheesy option: add an extra handful of cheddar under the panko",
      "¼ cup chopped chives",
      "a few pinches of red pepper flakes",
      "1 cup cashews, soaked for a few hours (strain soaking water before using)",
      "¼ - ½ cup water",
      "1 small garlic clove",
      "¼ cup minced shallot",
      "2 tablespoons fresh lemon juice",
      "salt, to taste"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/01/31/healthy-loaded-sweet-potatoes/",
    "recipeTitle": "healthy loaded sweet potatoes recipe",
    "ingredients": [
      "sweet potatoes",
      "cheddar cheese (optional)",
      "black beans",
      "toasted pumpkin seeds",
      "greek yogurt + lime + salt + chile powder",
      "(vegan sub: chipotle cashew cream or avocado cream)",
      "chives"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/01/27/spicy-black-bean-soup/",
    "recipeTitle": "spicy black bean soup recipe",
    "ingredients": [
      "splash of olive or grapeseed oil",
      "2 small shallots, chopped",
      "3 cloves of garlic, roughly chopped",
      "½-1 jalapeño, de-seeded and chopped",
      "4 teaspoons chile powder",
      "3 cups black beans, cooked, drained (reserve a few for garnish)",
      "4 cups low sodium vegetable stock",
      "up to ½ cup water, if necessary for blending consistency",
      "salt, pepper",
      "squeeze of lime",
      "optional: a few pinches of cayenne and/or smoked paprika",
      "serve with (all optional): diced red onion, jalapeño slices, avocado, cilantro, tortillas, sun cheese, salsa, or dried chile salsa",
      "1¼ cup hulled sunflower seeds, soaked at least 4 hours",
      "1 clove garlic",
      "2 tablespoons umeboshi vinegar*",
      "2 tablespoons lemon juice",
      "1 cup water (more as needed)"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/01/22/brussels-sprout-avocado-salad/",
    "recipeTitle": "brussels sprout, broccoli & avocado rice recipe",
    "ingredients": [
      "2 cups brussels sprouts, sliced in half",
      "1 cup sliced broccolini",
      "¼ cup chopped scallions",
      "a bit of coconut oil, for the pan",
      "salt, pepper",
      "1 cup (cooked) black rice",
      "½ avocado, diced",
      "handful of fresh mint",
      "handful of sliced almonds",
      "handful of micro sprouts",
      "sprinkle of sesame seeds",
      "extra sriracha, for serving",
      "extra lime slices, for serving",
      "¼ cup fish sauce (or soy sauce, to taste)",
      "2 tablespoons orange juice",
      "1 tablespoon lime juice",
      "2 tablesooons rice wine vinegar",
      "1 garlic clove, minced",
      "1 tablespoon sugar (optional)",
      "1 teaspoon sriracha (optional)"
    ],
    "cuisineType": [
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/01/13/chili-orange-veggie-bowl/",
    "recipeTitle": "chili-orange veggie bowl recipe",
    "ingredients": [
      "½ cup forbidden rice (uncooked)",
      "1 small sweet potato, cubed",
      "a few scallions (optional)",
      "trees from 1 bunch of broccolini",
      "2 small carrots, peeled into ribbons",
      "a few slabs of tofu",
      "¼ cup pomegranate seeds",
      "handful of sprouts",
      "sprinkle of sesame seeds",
      "olive oil, salt & pepper, as needed",
      "a good orange squeeze (about 2 tablespoons)",
      "1 teaspoon soy sauce or tamari",
      "1 teaspoon sesame oil",
      "1 teaspoon sambal chili paste or sriracha",
      "1 teaspoon rice vinegar"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2014/01/02/collard-wraps-carrot-hummus/",
    "recipeTitle": "collard wraps with carrot hummus recipe",
    "ingredients": [
      "½ teaspoon coconut oil",
      "3 small carrots",
      "2 medium (unpeeled) garlic cloves",
      "2 teaspoons harissa seasoning (ground)",
      "1 cup chickpeas (cooked and drained)",
      "juice of 1 small lemon (about 2 tablespoons)",
      "juice of ½ an orange (about 2 tablespoons)",
      "2-4 tablespoons olive oil",
      "more harissa, to taste",
      "salt, to taste",
      "4 collard leaves",
      "carrot hummus",
      "1 cup cooked millet",
      "½ cup chickpeas",
      "2 carrots, shaved into ribbons",
      "sliced red cabbage (or red cabbage slaw)",
      "sprinkle of hemp seeds (I like Happy Hemp)"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/12/17/coconut-rice-kale-edamame/",
    "recipeTitle": "coconut rice with kale & edamame recipe",
    "ingredients": [
      "¾ cup uncooked jasmine rice",
      "1.25 cups light coconut milk*",
      "1 tablespoon coconut oil",
      "a bit of crushed up minced lemongrass",
      "2 cloves garlic, minced",
      "big handful of chopped kale or other wilty greens",
      "½ cup shelled edamame (frozen works fine, thaw it before using)",
      "¼ cup scallions",
      "1-2 small thai red chiles or ¼ jalapeno, minced",
      "juice & zest from 1 lime",
      "1 teaspoon sambal or sriracha",
      "2 tablespoons sliced almonds, toasted",
      "2 tablespoons coconut flakes, toasted",
      "big handful of cilantro",
      "salt"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/12/11/sweet-potato-vegan-alfredo/",
    "recipeTitle": "sweet potato (vegan) alfredo recipe",
    "ingredients": [
      "1 medium sweet potato",
      "2 shallots",
      "2 garlic cloves",
      "1 cup cashews, soaked (ideally) overnight, then drain",
      "2 tablespoons olive oil",
      "1 tablespoon balsamic vinegar",
      "1 tablespoon tomato paste",
      "salt & pepper",
      "1 tablespoon rosemary, chopped",
      "⅓ cup water, to thin (more as necessary)",
      "1 lb brown rice fettuccini (or any pasta you like)",
      "¼ cup pine nuts, toasted",
      "¼ cup chives",
      "a few pinches of red pepper flakes"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/11/25/stuffed-acorn-squash/",
    "recipeTitle": "stuffed acorn squash w/ kale & creminis recipe",
    "ingredients": [
      "2 small acorn squashes, or 1 large one",
      "½ cup uncooked millet",
      "2 tablespoons olive oil",
      "1 shallot, chopped",
      "1 garlic clove, minced",
      "1.5 cups cremini mushrooms, chopped",
      "2 tablespoons sherry vinegar",
      "2 cups chopped kale",
      "¼ cup chopped fresh sage",
      "⅓ cup toasted pecans",
      "⅓ cup dried cranberries",
      "¼ cup chopped chives",
      "salt, pepper",
      "sprinkling of asiago cheese",
      "drizzle of honey on top"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/11/11/butternut-squash-noodle-pasta/",
    "recipeTitle": "butternut squash noodle pasta recipe",
    "ingredients": [
      "10 sage leaves",
      "2 cups spiraled butternut squash (about ¼ of a large one)",
      "1.5 cups leeks, white and light green parts",
      "4 oz. brown rice pasta",
      "canola, grapeseed or other high-heat oil",
      "2 cloves garlic",
      "juice of 1 lemon",
      "1 tablespoon butter (or vegan earth balance)",
      "¼ cup walnuts, chopped and toasted",
      "a few pinches of red chile flakes",
      "salt, pepper",
      "grated pecorino cheese, or crumbly cheese",
      "drizzle of balsamic or reduced balsamic"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/11/01/quinoa-quesadillas/",
    "recipeTitle": "quinoa quesadillas recipe",
    "ingredients": [
      "Leftover quinoa salad (about 1 cup)",
      "½ cup black beans, cooked and rinsed",
      "½ cup shredded cheese (cheddar/jack mix or daiya)",
      "small handful of wilty greens",
      "½ teaspoon each, chile powder, cumin, and paprika",
      "4 wheat or corn tortillas",
      "cilantro",
      "sour cream (or greek yogurt + lemon + salt)",
      "avocado slices",
      "store bought green chile salsa"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/10/30/sweet-potato-quinoa-cotija-salad/",
    "recipeTitle": "sweet potato quinoa & cotija recipe",
    "ingredients": [
      "1 cup cooked quinoa (1/2 cup uncooked)",
      "1 medium sweet potato, cubed",
      "olive oil, for roasting the potato",
      "1 poblano pepper",
      "¼ cup chopped scallions",
      "¼ cup crumbled cotija cheese (omit if vegan)",
      "a few big handfuls of arugula or baby salad greens",
      "a few big pinches of salt",
      "a handful of chopped cilantro",
      "¼ cup raw pepitas",
      "¼ c olive oil",
      "2 tablespoons fresh lime juice (about 1 lime)",
      "1 teaspoon cumin",
      "1 teaspoon ancho or chipotle chile powder",
      "a drizzle of honey or maple syrup",
      "a pinch of salt & a few cracks of pepper"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/10/23/eggplant-summer-squash-tian/",
    "recipeTitle": "eggplant & squash tian recipe",
    "ingredients": [
      "1 large eggplant",
      "1 medium zucchini",
      "1 medium yellow squash",
      "4 medium tomatoes",
      "3 tablespoons olive oil (plus more for the pan)",
      "1 medium onion, thinly sliced",
      "2 cloves of garlic, thinly sliced",
      "4 eggs",
      "1 cup cream",
      "¼ cup grated parmesan cheese",
      "leaves from 2 sprigs fresh basil, chopped",
      "2 pinches crushed red pepper flakes",
      "salt",
      "freshly ground black pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/10/14/pear-pizza-with-fried-sage/",
    "recipeTitle": "pear pizza with fried sage recipe",
    "ingredients": [
      "pizza dough, rolled thin",
      "olive oil with some minced garlic",
      "1 almost ripe pear, thinly sliced (about ⅛ inch)",
      "⅓ cup (or more), grated pecorino",
      "1 ball of fresh mozzarella, sliced",
      "part of a red onion, thinly sliced",
      "¼ cup good feta cheese",
      "¼ cup pine nuts",
      "handful of arugula",
      "sage leaves, fried",
      "salt",
      "optional: a few pinches of red pepper flakes",
      "optional: drizzle of honey"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/10/06/easy-peanut-noodles/",
    "recipeTitle": "easy peanut noodles {2 ways} recipe",
    "ingredients": [
      "¼ cup creamy, natural peanut butter",
      "1.5 tablespoons sesame oil",
      "1 teaspoon soy sauce or tamari",
      "1.5 teaspoons rice vinegar or fresh lime juice",
      "½ teaspoon freshly grated ginger (I keep mine in the freezer)",
      "½ teaspoon sriracha",
      "water, to thin, if necessary",
      "8 oz. package soba noodles (or regular pasta, or rice noodles)",
      "shiitake mushrooms",
      "eggplant",
      "red peppers",
      "chopped scallions",
      "sesame seeds",
      "crushed peanuts",
      "leftover peanut noodles",
      "lettuce cups",
      "sriracha",
      "crushed peanuts",
      "ponzu sauce for dipping (or ½ soy sauce, ½ rice vinegar)",
      "(optional - extra peanut sauce)"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/09/25/migas-breakfast-tacos/",
    "recipeTitle": "migas breakfast tacos recipe",
    "ingredients": [
      "oil, for the pan",
      "¼ cup diced red onion",
      "½ clove garlic, chopped",
      "¼ cup diced red pepper",
      "½ jalapeno, diced",
      "½ cup chopped tomatoes",
      "squeezes of lime",
      "4 eggs, beaten",
      "¼ cup chopped scallions",
      "¼ cup shredded jack/cheddar cheese",
      "handful of crunchy fried (or baked) corn tortilla strips",
      "salt & pepper",
      "4 tortillas, any kind you like",
      "avocado slices",
      "salsa, any kind you like",
      "cilantro (optional)"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/09/03/grilled-veggies-basil-miso/",
    "recipeTitle": "grilled veggies with basil miso recipe",
    "ingredients": [
      "¼ cup walnuts or pine nuts",
      "2 tablespoons olive oil",
      "½ clove garlic",
      "2 tablespoons white miso paste",
      "2 tablespoons lemon juice",
      "big handful of basil",
      "salt & pepper",
      "water or more olive oil, if necessary to thin",
      "scallions",
      "zucchini",
      "red pepper",
      "red onion",
      "green tomatoes",
      "fresh basil leaves",
      "toasted walnuts",
      "quinoa",
      "avocado slices or feta cheese"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/08/21/mango-sesame-salsa/",
    "recipeTitle": "mango sesame avocado salsa recipe",
    "ingredients": [
      "1 medium mango, diced",
      "1 small avocado, diced",
      "juice of 1 lime",
      "1-2 teaspoons toasted sesame oil",
      "1-2 teaspoons tamari or soy sauce",
      "2 chopped scallions",
      "toasted sesame seeds",
      "salt, to taste",
      "splash of rice vinegar, yuzu, or ponzu",
      "a bit of sambal chile-garlic sauce or sriracha",
      "a bit of freshly grated ginger",
      "chopped mint",
      "a good looking piece of tuna",
      "soy sauce",
      "grated ginger",
      "black pepper",
      "sesame seeds for coating"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/08/15/heirloom-tomato-avocado-chickpea-salad/",
    "recipeTitle": "heirloom tomato & avocado salad recipe",
    "ingredients": [
      "about 3 medium heirloom tomatoes",
      "olive oil",
      "sherry vinegar",
      "½ cup uncooked whole wheat orzo",
      "1 clove of garlic",
      "a bit handful of arugula",
      "½ cup chickpeas, cooked & drained",
      "½ large avocado, diced",
      "juice of ½ a small lemon",
      "handful of fresh basil",
      "pine nuts",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/08/06/veggie-caprese-sandwich-olive-pesto/",
    "recipeTitle": "veggie caprese with olive pesto recipe",
    "ingredients": [
      "grainy bread, toasted or grilled",
      "olive & almond pesto",
      "arugula",
      "basil leaves",
      "grilled vegetarians (your favorites, or see below)",
      "fresh mozzarella (vegan sub: sliced avocado)",
      "mezzetta organic fire roasted red peppers",
      "¼ cup mezzetta green olives",
      "½ cup slivered or chopped almonds, toasted",
      "2 big handfuls of basil (about 1 packed cup)",
      "juice of ½ a lemon, plus some zest",
      "splash of balsamic vinegar",
      "salt & pepper",
      "pinches of crushed red pepper flakes",
      "zucchini, sliced ¼ inch thick",
      "red onion, sliced about ¼ inch thick",
      "portobello mushrooms, sliced about ½ inch thick",
      "drizzle of olive oil",
      "drizzle of balsamic vinegar (optional)",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/07/29/stuffed-peppers-chipotle-cashew-cream/",
    "recipeTitle": "stuffed peppers w/ chipotle “cream” recipe",
    "ingredients": [
      "peppers (I used 2 poblanos, and 3 small anaheims)",
      "1-2 tablespoons olive oil",
      "1 shallot or small onion",
      "2 cloves garlic, chopped",
      "1 teaspoon cumin",
      "1 teaspoon coriander",
      "1-2 tablespoons tamari or soy sauce",
      "1-2 tablespoons adobo sauce, (from the can of chipotles used below)",
      "1 cup cooked quinoa",
      "½ cup corn kernels",
      "½ cup black beans",
      "1 teaspoon (eyeball it), agave syrup or honey",
      "¼ cup chopped scallions",
      "juice of 1 juicy lime",
      "1 cup raw unsalted cashews, soaked for at least a few hours",
      "1 clove of garlic",
      "1 chipotle pepper from a can of chipotles in adobo (2 if you want it extra spicy)",
      "¼ cup fresh lemon juice",
      "1-2 tablespoons olive oil",
      "½ cup water (more as needed)",
      "salt, pepper"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/07/25/slow-roasted-tomato-pasta/",
    "recipeTitle": "slow roasted tomato pasta recipe",
    "ingredients": [
      "8-10 roma tomatoes (or a few cups of cherry tomatoes)",
      "drizzle of olive oil",
      "salt & pepper",
      "fresh thyme sprigs",
      "1lb pasta (use brown rice pasta if gluten-free)",
      "4 cloves garlic, chopped",
      "a good amount of olive oil (1/4 cup or so)",
      "1 tablespoon anchovy paste (omit if vegetarian, add extra salt as needed)",
      "fresh lemon juice & zest",
      "a few tablespoons of capers",
      "toasted pine nuts",
      "tons of fresh basil",
      "pinches of red pepper flakes",
      "salt & pepper, to taste",
      "pecorino or parmesan cheese, optional"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/07/15/zucchini-coconut-noodles/",
    "recipeTitle": "zucchini coconut noodles recipe",
    "ingredients": [
      "1 tablespoon coconut oil",
      "2-3 scallions, chopped (reserve some for garnish)",
      "1 teaspoon minced fresh ginger",
      "1 cup full fat coconut milk",
      "1 approx. 4-inch piece of lemongrass",
      "splash of fish sauce (or tamari)",
      "juice of 1 juicy lime & some zest",
      "pinch of coconut sugar",
      "salt & pepper",
      "1 bunch aramanth greens (or spinach)",
      "2 roma tomatos, diced",
      "3 zucchinis, sliced thin (ideally with a julienne peeler), or rice noodles",
      "small handful of basil leaves",
      "small handful of cilantro leaves",
      "crushed, toasted peanuts",
      "chile-garlic sauce, or sriracha",
      "tofu or other cooked protein (optional)"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/07/12/tequila-lime-fish-tacos/",
    "recipeTitle": "tequila lime fish tacos recipe",
    "ingredients": [
      "2 big fillets of tilapia (or 3 smaller ones)",
      "splash of olive oil",
      "splash of tequila",
      "a drizzle of agave syrup",
      "1 clove garlic, chopped",
      "zest of 1 lime (you’ll use the juice later)",
      "a few pinches of chile powder",
      "salt & pepper",
      "½ a red onion, thinly sliced",
      "splash of rice vinegar",
      "a few pinches of salt",
      "6 corn or flour tortillas, grilled",
      "creme fraiche, sour cream, or (my personal choice this time), kewpie mayo.",
      "avocado slices",
      "sriracha",
      "shredded cabbage, seasoned with a little salt & lime juice",
      "cilantro",
      "extra lime slices"
    ],
    "cuisineType": [
      "Seafood",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/07/02/grilled-veggie-skewers/",
    "recipeTitle": "chile-lime grilled veggie skewers recipe",
    "ingredients": [
      "big handful of baby bella mushrooms",
      "½ red onion",
      "1 mango",
      "1 red pepper",
      "1 zucchini",
      "2 tablespoons olive oil",
      "1 clove garlic, minced",
      "2 tablespoons fresh lime juice",
      "splash of agave syrup or honey",
      "½-1 teaspoon cumin, chile powder, smoked paprika, or a combo of any",
      "pinch of cayenne (optional)",
      "salt & pepper",
      "extra lime slices",
      "tortillas",
      "roasted tomatillo salsa from this recipe",
      "queso fresco",
      "avocado slices"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/06/12/cold-cucumber-soba/",
    "recipeTitle": "cold cucumber soba recipe",
    "ingredients": [
      "4-6 ounces soba noodles",
      "1-2 tablespoons toasted sesame oil",
      "2 medium cucumbers (or 1 large seedless cucumber)",
      "¼ cup chopped scallions",
      "1 tablespoon tamari or soy sauce",
      "2 tablespoons rice vinegar",
      "1-2 tablespoons ponzu sauce (or extra tamari & rice vin with a squeeze of lime)",
      "avocado slices",
      "sesame seeds",
      "optional additions: tofu or a protein of your choice",
      "optional: sriracha or chile flakes"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/05/31/shrimp-po-boy-mango/",
    "recipeTitle": "shrimp po’ boy with mango recipe",
    "ingredients": [
      "16-18 medium raw shrimp, peeled and devained",
      "4 5-inch pieces of fresh baguette",
      "1 small mango, sliced (reserve ⅓ cup for mango mayo)",
      "½ cup each, green and red cabbage, shredded",
      "¼ cup chopped chives",
      "extra cayenne for dusting on top",
      "⅓ cup chopped mango",
      "⅓ cup mayo (or vegenaise)",
      "generous squeeze of lemon",
      "a few pinches of cayenne",
      "salt & pepper",
      "1 teaspoon salt",
      "½ teaspoon garlic powder",
      "½ teaspoon onion powder",
      "½ teaspoon oregano",
      "½ teaspoon smoked paprika",
      "¼ teaspoon cayenne (or more)",
      "¼ teaspoon freshly ground black pepper",
      "¾ cup milk (any kind)",
      "1 egg, lightly beaten",
      "¾ cup panko (or regular breadcrumbs)",
      "½ cup cornmeal",
      "oil, for frying"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/05/20/pea-chickpea-pasta-salad/",
    "recipeTitle": "pea & chickpea pasta salad recipe",
    "ingredients": [
      "2-3 tablespoons olive oil",
      "juice & zest of one lemon",
      "½ to 1 teaspoon dijon mustard (I like this brand)",
      "pinch of red pepper flakes",
      "1 smashed clove of garlic",
      "salt & pepper",
      "1 cup dried pasta, I like Jovial's brown rice (plus reserve some pasta water)",
      "¼ cup chickpeas, cooked and drained",
      "¼ cup peas",
      "¼ cup chopped or crumbled feta",
      "a few handfuls of fresh leafy herbs (parsley, basil, tarragon or mint are all good choices)"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/05/17/mango-salsa-waffle/",
    "recipeTitle": "fried egg & mango salsa waffle recipe",
    "ingredients": [
      "1 medium mango, peeled, pitted and diced.",
      "1 small avocado, peeled, pitted and diced.",
      "1 lime, juiced (about 2 tablespoons of fresh lime juice)",
      "2 scallions, chopped",
      "¼ - ½ teaspoon ground smoked paprika",
      "pinch of red chili flakes",
      "¼ teaspoon salt",
      "¼ cup sweet rice flour",
      "¼ cup brown rice flour",
      "½ cup oat flour",
      "**(flour note: or just use 1 cup all-purpose)",
      "2 teaspoons baking powder",
      "1 tablespoon sugar",
      "1 teaspoon chili powder (optional)",
      "½ teaspoon salt",
      "¾ cup almond milk (or regular milk)",
      "2 tablespoons ground flax seed + 3 tablespoons extra milk (or 1 egg)",
      "3 tablespoons melted coconut oil, or butter",
      "4 eggs for frying",
      "½ teaspoon olive oil or butter",
      "a pinch of salt and pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/05/13/creamy-almond-pasta/",
    "recipeTitle": "creamy leek & almond pasta recipe",
    "ingredients": [
      "1-2 tablespoons olive oil",
      "1 cup chopped leeks (white and light green parts)",
      "1 cup chopped cremini mushrooms",
      "1 large garlic clove, minced",
      "¼ cup white wine",
      "1 cup original unsweetened Almond Breeze Almond Milk",
      "1 teaspoon corn starch",
      "¼ cup grated pecorino cheese (vegan: sub nutritional yeast)",
      "pinches of red pepper flakes (optional)",
      "salt & pepper",
      "8 oz. linguine pasta (reserve some of the pasta water)",
      "2 cups chopped dandelion greens (or spinach)",
      "juice of 1 small lemon + some zest",
      "¼ cup chopped sun dried tomatoes",
      "2 scallions, chopped",
      "¼ cup pine nuts",
      "handful of chopped fresh basil",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/04/22/rosemary-lemon-pasta/",
    "recipeTitle": "rosemary lemon pasta recipe",
    "ingredients": [
      "4-6 ounces spaghetti or linguini pasta",
      "(reserve some pasta water)",
      "¼ cup panko bread crumbs",
      "1 tablespoon chopped fresh rosemary",
      "2 cups chopped collard greens, stems removed",
      "½ -1 clove minced garlic",
      "1-2 lemons (plus some zest)",
      "a few tablespoons olive oil",
      "a dab of butter (optional)",
      "sliced almond, toasted",
      "red pepper flakes",
      "salt"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/03/18/ginger-citrus-soba/",
    "recipeTitle": "ginger citrus soba & snow peas recipe",
    "ingredients": [
      "4 ounces soba noodles (100% buckwheat soba if gluten-free. If not I prefer this kind.)",
      "1 cup snow peas (trim & peel the string off the side)",
      "1 cup edamame (frozen is ok, thaw before using)",
      "¼ cup chopped scallions",
      "olive oil, for the pan",
      "extra orange & lime wedges to squeeze in at the end",
      "a few teaspoons of sesame seeds, for garnish",
      "juice from approximately ½ of an orange (about ¼ cup)",
      "1 tablespoon lime juice",
      "1 tablespoon tamari (or soy sauce)",
      "½ teaspoon sriracha (more if you like it spicier)",
      "1 teaspoon toasted sesame oil",
      "2 teaspoons minced fresh ginger"
    ],
    "cuisineType": [
      "Vegan"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/02/25/shrimp-tacos/",
    "recipeTitle": "chipotle shrimp tacos recipe",
    "ingredients": [
      "2-3 chipotle peppers from a can of chipotles in adobo",
      "¼ cup mayo, Kewpie or any kind",
      "½ cup silken tofu",
      "splash of honey (or agave)",
      "salt & pepper",
      "squeezes of lime",
      "splash of rice vinegar, if you make yours too spicy by accident",
      "2-3 raw shrimp per taco (or sliced portobello mushrooms for a vegetarian version)",
      "olive oil",
      "minced garlic",
      "salt, pepper",
      "shredded napa cabbage",
      "a few thinly sliced radishes",
      "chopped cilantro",
      "avocado slices",
      "a few limes",
      "tortillas (corn or flour)"
    ],
    "cuisineType": [
      "Seafood",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/02/23/sesame-shiitake-soba-noodles/",
    "recipeTitle": "sesame & shiitake soba noodles recipe",
    "ingredients": [
      "4-6 ounces soba noodles",
      "1 tablespoon toasted sesame oil",
      "splash of olive oil or vegetable oil for the pan (you don’t want to heat sesame oil)",
      "1 cup sliced shiitake mushrooms",
      "2 cloves of garlic",
      "2 cups raw shredded napa cabbage",
      "½ cup chopped scallions",
      "1 tablespoon soy sauce",
      "1-2 teaspoons of mirin",
      "splash of rice vinegar",
      "splash of ponzu (optional)",
      "sriracha (optional)",
      "a few tablespoons sesame seeds for garnish"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/02/21/mushroom-wheatberry-sautee/",
    "recipeTitle": "mushrooms & wheatberries recipe",
    "ingredients": [
      "1 tablespoons olive oil",
      "1 shallot, minced",
      "2 cups mixed mushrooms, sliced",
      "1 tablespoon (or more) soy sauce or tamari",
      "2 garlic cloves, minced",
      "½ teaspoon chinese 5 spice powder",
      "about 2 tablespoons mirin",
      "1 cup cooked wheat berries",
      "1 cup baked tofu, chopped (optional)",
      "¼ cup scallions, handful of micro greens, or herbs of your choice"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/02/11/steamy-kitchen-mussels/",
    "recipeTitle": "sake-steamed mussels recipe",
    "ingredients": [
      "2 pounds fresh mussels",
      "11/2 cups sake or dry white wine",
      "2 teaspoons finely grated fresh ginger",
      "2 cloves garlic, finely minced",
      "1 shallot, sliced into very thin rings",
      "1 handful fresh basil leaves",
      "salt"
    ],
    "cuisineType": [
      "Seafood",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/02/06/cauliflower-steaks-garlic-yogurt/",
    "recipeTitle": "seared cauliflower steaks recipe",
    "ingredients": [
      "½ inch slices of cauliflower, from the middle of the head",
      "olive oil",
      "minced garlic",
      "salt",
      "6 oz. plain yogurt",
      "juice of half of a small lemon (about 2 tablespoons) plus a bit of the zest",
      "1 garlic clove, minced",
      "a splash of olive oil (1/2 to 1 tablespoon)",
      "salt",
      "pinch of red pepper flakes"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/01/31/vegan-mac-cheese/",
    "recipeTitle": "Vegan Mac & Cheese Recipe",
    "ingredients": [
      "1 small onion, finely chopped",
      "¼ cup earth balance vegan butter (or regular butter)",
      "¼ cup flour, I used spelt",
      "3 cloves garlic, minced",
      "squeeze of lemon",
      "1 cup coconut milk",
      "¼ cup nutritional yeast (not regular baking yeast)",
      "2 tablespoons dijon mustard",
      "2 tablespoons tomato paste",
      "2 teaspoons turmeric",
      "¼ to 1 teaspoon smoked paprika (to taste), plus a little more on top",
      "8-12 oz elbow pasta, I used this brown rice brand",
      "1 to 1-2 cups pasta water, use a little at a time",
      "1 cup frozen peas",
      "salt & pepper",
      "¼ cup panko bread crumbs",
      "¼ cup chopped pine nuts",
      "pinch of cayenne & smoked paprika",
      "drizzle of olive oil on top before baking",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegan",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/01/29/chickpea-saffron-stew/",
    "recipeTitle": "chickpea & saffron stew recipe",
    "ingredients": [
      "4 tablespoons olive oil",
      "3 shallots (or 1 small onion), chopped",
      "3-4 cloves of garlic",
      "2 teaspoon cumin",
      "3 teaspoons paprika (I used a combo of sweet & smoked, but use what you have)",
      "2-4 tablespoons sherry vinegar (depending on how much tang you like)",
      "1 28-oz can whole peeled tomatoes, use the tomatoes only, not the juice",
      "2 or so teaspoons saffron",
      "pinches of red pepper flakes",
      "2-3 cups fresh chickpeas (or 2 cans, rinsed and drained)",
      "2 cups vegetarian broth",
      "4 cups baby spinach",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/01/25/miso-citrus-cod-en-papillote/",
    "recipeTitle": "miso-citrus cod en papillote recipe",
    "ingredients": [
      "2 pieces of cod, about 5-6 oz each",
      "5 or so leaves of bok choy, per serving",
      "a few handfuls of mushrooms (hon shimeji or enoki)",
      "small handful of chopped scallions",
      "2-3 orange slices per serving",
      "salt & pepper",
      "2 large pieces of parchment paper. (about 18 inches wide – the larger the easier)",
      "a few red pepper flakes (optional)",
      "2 cloves garlic, minced",
      "1 tablespoon miso paste",
      "1 tablespoon soy sauce or tamari",
      "1 tablespoon agave",
      "2 tablespoons rice vinegar",
      "1 tablespoon sesame oil",
      "juice of ½ an orange (about 3 tablespoons)",
      "splash of chile-garlic sauce (optional)"
    ],
    "cuisineType": [
      "Seafood",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/01/21/sesame-orang-kale-salad/",
    "recipeTitle": "sesame & orange kale salad recipe",
    "ingredients": [
      "1 bunch raw kale, chopped into small pieces (about 5-6 loose cups)",
      "¼ cup toasted slivered almonds",
      "½ an avocado, chopped",
      "miso-citrus dressing (below)",
      "pickled red onions (below)",
      "sesame tofu (below)",
      "juice of 1 small orange (around 3-4 tablespoons)",
      "1 tablespoon white miso paste",
      "2 tablespoons rice vinegar",
      "1 tablespoon agave (or honey or maple syrup)",
      "3 tablespoons sesame oil",
      "splash of sriracha",
      "squeeze of lime",
      "½ red onion",
      "splash of rice vinegar",
      "squeeze of lime",
      "a few pinches of salt",
      "1 block of tofu, sliced into about 8 slices",
      "splash of soy sauce (tamari if gluten-free)",
      "splash of rice vinegar",
      "splash of toasted sesame oil",
      "sesame seeds & panko bread crumbs to coat"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/01/16/cauliflower-pasta/",
    "recipeTitle": "roasted cauliflower pasta recipe",
    "ingredients": [
      "2-3 cups cauliflower florets",
      "2 shallots, coarsely chopped",
      "2 garlic cloves, very coarsely chopped",
      "salt, pepper, olive oil",
      "about 6 oz. spaghetti noodles (I like Jovial's brown rice noodles)",
      "a handful or two of baby spinach",
      "hot pasta water (about ½ cup)",
      "olive oil",
      "squeezes of lemon & some lemon zest",
      "¼ cup chopped sun dried tomatoes (or perhaps olives)",
      "¼ cup crumbled feta (optional)",
      "¼ cup chopped fresh basil (or herbs of your choice)",
      "2 tablespoons sliced almonds, toasted",
      "¼ cup bread crumbs, toasted (optional)",
      "pinch of salt",
      "pinch of red pepper flakes",
      "poached egg (optional)"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/01/08/curried-sweet-potato-soup/",
    "recipeTitle": "curried sweet potato soup recipe",
    "ingredients": [
      "2 tablespoons coconut oil",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 tablespoons madras curry powder",
      "2 medium sweet potatoes, chopped into cubes",
      "½ cup peas (can be frozen)",
      "1 can lite coconut milk (2 cups)",
      "2-4 cups vegetarian broth (less for a thicker consistency, more for thicker)",
      "2 tablespoons brown sugar",
      "squeeze of one juicy lime",
      "a few handfuls of spinach",
      "salt",
      "handful of chopped cilantro, for garnish",
      "a few pinches of red pepper flakes"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2013/01/07/asian-clementine-cabbage-salad/",
    "recipeTitle": "sesame clementine & cabbage salad recipe",
    "ingredients": [
      "1 small napa cabbage, chopped thin (about 2 cups)",
      "1 cup thinly sliced red cabbage",
      "3-4 scallions, chopped",
      "3-4 clementines, segmented (squeeze excess juice into the dressing)",
      "a few sprigs of mint",
      "sesame seeds, for garnish",
      "3 tablespoons freshly squeezed clementine juice",
      "2 tablespoons white miso paste",
      "2 tablespoons rice vinegar",
      "1 tablespoons honey (or agave, if vegan)",
      "1 tablespoon sesame oil",
      "splash of sriracha",
      "1 block of tofu, sliced into about 8 slices",
      "splash of soy sauce",
      "splash of rice vinegar",
      "splash of toasted sesame oil",
      "sesame seeds & panko bread crumbs to coat",
      "2-3 medium shallots, thinly sliced",
      "vegetable oil",
      "flour, for coating"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/11/14/roasted-delicata-squash-ginger-miso-gravy/",
    "recipeTitle": "delicata squash vegetarian bowl recipe",
    "ingredients": [
      "Ginger Miso Gravy recipe (click to go to it)",
      "1 delicata squash, sliced into approx. ¼ inch slices",
      "½ package tofu, cubed",
      "1 cup crimini mushrooms",
      "splashes of rice vinegar",
      "1 bunch kale (6 leaves or so)",
      "olive oil",
      "salt & pepper",
      "1 cup (or so) cooked brown rice",
      "pinches of red pepper flakes",
      "toasted almonds and sesame seeds"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/11/12/sweet-potato-surprise/",
    "recipeTitle": "sweet potato surprise recipe",
    "ingredients": [
      "1-2 T olive oil",
      "1 large shallot, chopped",
      "1 heaping cup sweet potatoes, chopped",
      "8 oz vegetarian broth",
      "¾ cup coconut milk, light",
      "1 teaspoon dijon mustard",
      "2 cloves of garlic, chopped",
      "¼ cup nutritional yeast (not baking yeast)",
      "4-5 sage leaves, chopped",
      "1 teaspoon maple syrup",
      "Salt and pepper",
      "2 cups uncooked pasta (I used Jovial brown rice fusilli)",
      "2 cups chopped fresh spinach",
      "¼ cup scallions",
      "¼ cup to ½ cup panko (or gluten-free bread crumbs)",
      "Pinch of red pepper flakes"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/11/02/quinoa-stuffed-acorn-squash/",
    "recipeTitle": "Quinoa stuffed acorn squash Recipe",
    "ingredients": [
      "1 small acorn squash, cut in half, seeds scooped out",
      "1-2 tablespoons olive oil (plus more for drizzling)",
      "¼ cup finely chopped red onion",
      "1 clove of garlic, minced",
      "½ teaspoon ground cumin",
      "½ teaspoon ground cinnamon",
      "½ cup chopped uncooked kale (or greens of your choice)",
      "splash of balsamic vinegar",
      "1 cup cooked quinoa",
      "drizzle of honey (optional, but I find it enhances the squash sweetness)",
      "¼ cup chopped scallions",
      "¼ cup crumbled feta cheese (also optional)",
      "¼ cup dried currants",
      "½ cup cilantro, chopped",
      "a few pinches of red pepper flakes",
      "¼ cup toasted pumpkin seeds"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/10/29/roasted-sweet-potato-wheatberry-salad/",
    "recipeTitle": "sweet potato & cranberry salad recipe",
    "ingredients": [
      "1.5 cups cooked wheat berries (about ¾ cup uncooked)",
      "2 cups of mixed greens (baby kale, spinach, arugula, etc.)",
      "1 large sweet potato, chopped into cubes",
      "⅓ cup dried cranberries",
      "⅓ cup crumbled feta",
      "¼ cup toasted pumpkin seeds (toast on a small skillet for 30 seconds or so)",
      "pinch of red pepper flakes",
      "2 tablespoons olive oil",
      "1 clove minced garlic",
      "2 teaspoons honey",
      "1 teaspoon apple cider vinegar",
      "¼ teaspoon cinnamon",
      "4 sage leaves, finely chopped",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/10/25/aida-mollenkamp-giveaway/",
    "recipeTitle": "quinoa fried “rice” recipe",
    "ingredients": [
      "1.5 cups cooked quinoa",
      "½ tablespoon grapeseed or olive oil",
      "3 garlic cloves, minced",
      "2 green onions, thinly sliced",
      "4 oz. shiitake mushrooms, stemmed & sliced",
      "1 tablespoon freshly grated ginger",
      "salt, pepper",
      "a few handfuls of chopped kale",
      "½ cup frozen edamame",
      "¼ cup thinly sliced basil or cilantro",
      "2 (or 3) large eggs, beaten",
      "3-4 teaspoons soy sauce or tamari",
      "sriracha or red pepper flakes",
      "drizzle of toasted sesame oil",
      "top with sliced almonds & sesame seeds",
      "optional - seared tofu or other protein"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/10/22/ginger-miso-noodles-eggplant/",
    "recipeTitle": "ginger miso eggplant noodles recipe",
    "ingredients": [
      "a few tablespoons of olive oil for the pan",
      "1 14 oz. package extra firm tofu, cubed",
      "1.5 cup of sliced (japanese or chinese) eggplants",
      "1.5 cup of sliced mushrooms (any kind)",
      "½ cup chopped scallions",
      "10 oz. brown rice noodles (or soba noodles)",
      "a few handfuls of greens, (ie, spinach, kale)",
      "sesame seeds, for garnish on top",
      "sesame oil, for drizzling on top",
      "2 tablespoons miso paste",
      "2 tablespoons honey",
      "2 tablespoons mirin (or sake, or rice vinegar)",
      "1 teaspoon minced garlic",
      "1 teaspoon minced ginger",
      "⅔ cup low sodium vegetarian broth"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/07/26/edamame-corn-succotash/",
    "recipeTitle": "edamame & corn succotash recipe",
    "ingredients": [
      "1 tbsp butter (or vegan butter)",
      "1 tbsp olive oil",
      "½ red onion, chopped",
      "1 garlic clove, minced",
      "1 tbsp lemon thyme leaves (or regular thyme)",
      "1 red bell pepper, chopped",
      "½ jalapeno, chopped small",
      "½ c green beans, chopped",
      "1 tsp agave syrup or honey",
      "½ small lemon, juiced",
      "½ c corn",
      "½ c edamame",
      "2-4 tbsp coconut milk",
      "1 c arugula",
      "¼ chopped basil",
      "2 tbsp chopped mint",
      "¼ c slivered toasted almonds",
      "salt & pepper, to taste"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/07/13/grilled-panzanella-poached-egg/",
    "recipeTitle": "grilled panzanella with poached egg recipe",
    "ingredients": [
      "1 small red onion, sliced thin",
      "half loaf of day-old ciabatta bread",
      "olive oil",
      "½ garlic clove",
      "1½ c cherry and/or pear tomatoes, sliced in half",
      "½ c ricotta salata cheese, chopped into ½ inch cubes",
      "5 or 6 basil leaves, torn",
      "¼ c toasted pine nuts",
      "2-4 eggs, for poaching (optional)",
      "Dressing:",
      "¼ c olive oil",
      "2 tbsp champagne vinegar (or white or red wine vinegar)",
      "squeeze of lemon juice (1-2 tbsp, to taste)",
      "salt & pepper, to taste",
      "a few pinches of red pepper flakes"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/07/06/strawberry-quinoa-feta-salad/",
    "recipeTitle": "Strawberry quinoa & feta salad Recipe",
    "ingredients": [
      "1½ c cooked quinoa (3/4 c uncooked, plus 1½ c water)",
      "¾ c sliced strawberries (about 5-6 large strawberries)",
      "½ c chopped or crumbled feta",
      "¼ c chopped mint",
      "¼ c chopped scallions (green and white parts)",
      "⅓ c chopped walnuts, toasted",
      "2 c baby salad greens",
      "¼ c sprouts (optional)",
      "Lemon Honey Vinaigrette:",
      "2 tbsp olive oil (plus a little more to drizzle on at the end)",
      "2 tbsp lemon juice (plus a little more to squeeze on at the end)",
      "1 tbsp champagne vinegar",
      "½ garlic clove, minced",
      "½ tsp honey",
      "salt & pepper"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/05/21/bbq-portobello-mushroom-sliders/",
    "recipeTitle": "bbq portobello sliders recipe",
    "ingredients": [
      "4 portobello mushroom caps",
      "buns of your choice",
      "fixings of your choice: (sprouts, onion, tomato avocado, blue cheese, etc)",
      "1 teaspoon olive oil",
      "¼ onion, grated",
      "1 clove of garlic, minced",
      "¾ cup ketchup",
      "2 tablespoons dijon mustard",
      "2 tablespoons apple cider vinegar",
      "2 tablespoons maple syrup",
      "1 tablespoon worcestershire (I use the vegan brand)",
      "½ to 1 teaspoon sriracha or hot sauce",
      "salt and pepper, to taste"
    ],
    "cuisineType": [
      "Vegan",
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/05/07/spring-green-pasta-lemon/",
    "recipeTitle": "spring green lemon & basil pasta recipe",
    "ingredients": [
      "½ pound pasta, homemade or store bought - whole wheat, or whatever you like",
      "¼ cup, plus 1 tablespoon olive oil.",
      "1 shallot, finely chopped",
      "1 garlic clove, minced",
      "splash of white wine (1-2 tablespoons - optional)",
      "1 cup chopped asparagus, thin spears, tender parts only",
      "½ cup peas (can be frozen)",
      "1-2 cups of spinach, roughly chopped",
      "small handful of basil (about ¼ cup), chopped",
      "juice and zest of 1 lemon",
      "pinches of salt and pepper",
      "pinch of red pepper flakes (optional)",
      "grated parmesan or pecorino cheese to go on top (optional)"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/04/25/spring-lemon-risotto-asparagus-peas/",
    "recipeTitle": "lemon risotto with asparagus & peas recipe",
    "ingredients": [
      "1 cup arborio rice",
      "½ cup white wine",
      "1 clove garlic, minced",
      "½ large onion, chopped",
      "3 cups vegetarian stock",
      "2 tablespoons butter (I use non-dairy butter)",
      "½ tablespoon olive oil",
      "1 egg yolk, beaten",
      "1 small lemon, zest and juice",
      "½ cup peas (or however much you like)",
      "1 cup asparagus, chopped into 1-inch pieces",
      "4 basil leaves, chopped",
      "handful of sprouts",
      "salt & pepper",
      "sun dried tomatoes (optional)",
      "shaved parmesan or pecorino (optional)",
      "red pepper flakes (optional)",
      "water or more stock, if needed"
    ],
    "cuisineType": [
      "Vegetarian",
      "Gluten-free"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://www.loveandlemons.com/2012/04/04/sweet-potato-veggie-burgers/",
    "recipeTitle": "Sweet Potato Veggie Burgers Recipe",
    "ingredients": [
      "1 sweet potato",
      "⅓ block of extra firm tofu (from a 14 oz package)",
      "1 tablespoon tahini",
      "2 teaspoons maple syrup",
      "1 teaspoon minced rosemary",
      "1 teaspoon paprika",
      "1 clove garlic, minced",
      "a few pinches of salt a few grinds of pepper about",
      "½ cup panko (to roll the patties in before baking)",
      "slider or regular hamburger bun",
      "whatever fixings you like on your burger: I had avocado, red onion & sprouts"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Love and Lemons"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/09/22/5-ingredient-white-chicken-chili/",
    "recipeTitle": "5-Ingredient White Chicken Chili",
    "ingredients": [
      "6 cups chicken broth ",
      "3 cups cooked shredded chicken ",
      "2 (15-ounce) cans Great Northern beans, drained ",
      "2 cups salsa verde ",
      "1 teaspoon ground cumin ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "Chopped fresh cilantro leaves ",
      "Crumbled tortilla chips ",
      "Diced avocado ",
      "Shredded Monterey Jack ",
      "Sour cream"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/12/08/apple-cranberry-pecan-salad/",
    "recipeTitle": "Apple Cranberry Pecan Salad",
    "ingredients": [
      "6 cups baby spinach ",
      "1 Granny Smith apple, thinly sliced ",
      "1/2 cup pecan halves ",
      "1/3 cup pomegranate arils ",
      "1/3 cup dried cranberries ",
      "1/3 cup crumbled goat cheese ",
      "1/4 cup olive oil ",
      "1/4 cup apple cider vinegar ",
      "1 lemon, juiced and zested ",
      "1 tablespoon sugar ",
      "1 tablespoon poppy seeds"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/05/03/asian-honey-chicken/",
    "recipeTitle": "Asian Honey Chicken",
    "ingredients": [
      "1/2 cup vegetable oil ",
      "1 pound boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "1 cup all-purpose flour ",
      "1 cup buttermilk ",
      "1 tablespoon cornstarch ",
      "1/2 cup honey ",
      "2 tablespoons soy sauce ",
      "1 tablespoon apple cider vinegar ",
      "1 teaspoon sesame oil ",
      "1/2 teaspoon crushed red pepper flakes, or more, to taste "
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/07/27/asian-jalapeno-chicken/",
    "recipeTitle": "Asian Jalapeno Chicken",
    "ingredients": [
      "1 tablespoon vegetable oil ",
      "1 pound boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "Kosher salt and freshly ground black pepper ",
      "1/2 teaspoon sesame seeds ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "1 tablespoon cornstarch ",
      "1/2 cup honey ",
      "2 cloves garlic, minced ",
      "Juice of 1 lemon ",
      "2 tablespoons reduced sodium soy sauce ",
      "1 tablespoon apple cider vinegar ",
      "1 teaspoon sesame oil ",
      "1 teaspoon Sriracha, optional ",
      "1 jalapeno, thinly sliced"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/02/15/asian-lemon-chicken-tenders/",
    "recipeTitle": "Asian Lemon Chicken Tenders",
    "ingredients": [
      "1 cup vegetable oil ",
      "2 pounds boneless, skinless chicken breasts, cut into strips ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 1/2 cups all-purpose flour ",
      "1 cup buttermilk ",
      "1/2 cup honey ",
      "1/3 cup soy sauce ",
      "1/4 cup pineapple juice ",
      "1/4 cup brown sugar, packed ",
      "Juice of 1 lemon ",
      "2 tablespoons apple cider vinegar ",
      "2 tablespoons olive oil ",
      "1 teaspoon ground black pepper ",
      "1/2 teaspoon garlic powder"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/07/02/asian-pasta-salad/",
    "recipeTitle": "Asian Pasta Salad",
    "ingredients": [
      "8 ounces elbows pasta ",
      "1 California Avocado, halved, seeded, peeled and diced ",
      "1 mango, peeled and diced ",
      "1 carrot, peeled and grated ",
      "1/4 cup shredded red cabbage ",
      "1 green onion, thinly sliced ",
      "2 tablespoons pine nuts ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons soy sauce ",
      "2 teaspoons sesame oil ",
      "1 1/2 teaspoons sugar, or more to taste ",
      "1/2 teaspoon sesame seeds"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/15/asian-quinoa-meatballs/",
    "recipeTitle": "Asian Quinoa Meatballs",
    "ingredients": [
      "1 pound ground turkey ",
      "3/4 cup cooked quinoa ",
      "3 cloves garlic, minced ",
      "2 green onions, thinly sliced, plus more for garnish ",
      "1 large egg ",
      "1 tablespoon soy sauce ",
      "2 teaspoons sesame oil ",
      "1 teaspoon Sriracha, or more, to taste ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "Sesame seeds, for garnish ",
      "1/4 cup soy sauce ",
      "2 tablespoons rice vinegar ",
      "1 tablespoon freshly grated ginger ",
      "1 tablespoon brown sugar, packed ",
      "1 teaspoon sesame oil ",
      "1 teaspoon Sriracha, or more, to taste ",
      "2 teaspoons cornstarch"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/10/29/asian-quinoa-salad/",
    "recipeTitle": "Asian Quinoa Salad",
    "ingredients": [
      "1/2 cup quinoa ",
      "1/4 cup shredded red cabbage ",
      "1/4 cup diced red bell pepper ",
      "1/4 cup grated carrots ",
      "1/4 cup corn kernels ",
      "1 green onion, thinly sliced ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1/4 cup chow mein noodles, for serving ",
      "1/4 cup plus 2 tablespoons rice vinegar ",
      "1 clove garlic, pressed ",
      "1 tablespoon sesame oil ",
      "1 tablespoon sugar ",
      "1 teaspoon soy sauce ",
      "1 teaspoon grated ginger"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/12/19/asian-salmon-foil/",
    "recipeTitle": "Asian Salmon in Foil",
    "ingredients": [
      "1/4 cup honey ",
      "3 cloves garlic, minced ",
      "2 tablespoons reduced sodium soy sauce ",
      "1 tablespoon seasoned rice vinegar ",
      "1 tablespoon sesame oil ",
      "1 tablespoon freshly grated ginger ",
      "1 teaspoon Sriracha, optional ",
      "Freshly ground black pepper, to taste ",
      "2 pounds salmon ",
      "2 green onions, thinly sliced ",
      "1/2 teaspoon sesame seeds"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/05/11/asian-salmon-kabobs/",
    "recipeTitle": "Asian Salmon Kabobs",
    "ingredients": [
      "1 1/2 pounds skinless salmon fillet, cut into 1-inch chunks ",
      "1 fresh pineapple, peeled and cut into 1-inch chunks ",
      "1 red onion, cut into chunks ",
      "1 zucchini, sliced into thick rounds ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "2 tablespoons reduced sodium soy sauce ",
      "2 tablespoons oyster sauce ",
      "2 tablespoons freshly grated ginger ",
      "1 tablespoon seasoned rice vinegar ",
      "1 tablespoon brown sugar, packed ",
      "3 cloves garlic, minced ",
      "1 teaspoon sesame oil ",
      "1 teaspoon Sriracha, optional ",
      "Freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/06/06/asian-steak-roll-ups/",
    "recipeTitle": "Asian Steak Roll Ups",
    "ingredients": [
      "1 tablespoon olive oil ",
      "2 cloves garlic, minced ",
      "8 ounces asparagus, trimmed ",
      "2 carrots, peeled and cut into matchsticks ",
      "1 red bell pepper, cut into matchsticks ",
      "1 zucchini, cut into matchsticks ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 1/2 pounds thin-sliced sirloin or top round steak ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "1 teaspoon sesame seeds ",
      "1/2 cup reduced sodium soy sauce ",
      "1/4 cup brown sugar, packed ",
      "3 cloves garlic, minced ",
      "1 tablespoon freshly grated ginger ",
      "1 teaspoon sesame oil ",
      "1 teaspoon Sriracha, optional"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/08/24/asian-style-chicken-nuggets-with-lemon-glaze/",
    "recipeTitle": "Asian Style Chicken Nuggets with Lemon Glaze",
    "ingredients": [
      "4 tablespoons rice vinegar ",
      "2 tablespoons soy sauce ",
      "2 tablespoons mirin ",
      "2 tablespoons toasted sesame seed oil ",
      "3 cloves garlic, minced ",
      "1 tablespoon freshly grated ginger ",
      "4 green onions, sliced ",
      "6 boneless, skinless chicken thighs, trimmed and cut into bite-size pieces ",
      "1/3 cup all-purpose flour ",
      "1/2 cup peanut oil ",
      "1/4 cup rice vinegar ",
      "3 tablespoons sugar ",
      "1 lemon, zested and juiced ",
      "1 tablespoon cornstarch"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/09/24/asian-turkey-lettuce-wraps/",
    "recipeTitle": "Asian Turkey Lettuce Wraps",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound ground turkey ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 cloves garlic, minced ",
      "1 red bell pepper, diced ",
      "1 small onion, diced ",
      "1/4 cup hoisin sauce ",
      "2 tablespoons soy sauce ",
      "1/2 teaspoon freshly grated ginger ",
      "1 cup cooked rice ",
      "3 green onions, thinly sliced ",
      "1 head butter lettuce"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/01/10/asian-style-cobb-salad/",
    "recipeTitle": "Asian-Style Cobb Salad",
    "ingredients": [
      "5 cups chopped romaine lettuce ",
      "1 (11-ounce) can mandarin oranges in light syrup, drained ",
      "1/3 cup shredded chicken ",
      "1/3 cup grated carrots ",
      "1 avocado, halved, seeded, peeled and diced ",
      "2 hard-boiled eggs, diced ",
      "1/4 cup sliced green onions ",
      "1/4 cup plus 2 tablespoons rice wine vinegar ",
      "1 clove garlic, pressed ",
      "1 tablespoon sesame oil ",
      "1 tablespoon sugar ",
      "1 teaspoon freshly grated ginger ",
      "1 teaspoon soy sauce"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/04/18/avocado-club-sandwich-with-spicy-chipotle-pepper-spread/",
    "recipeTitle": "Avocado Club Sandwich with Spicy Chipotle Pepper Spread",
    "ingredients": [
      "8 slices applewood smoked bacon ",
      "1 baguette, cut into 3-4 equal pieces, toasted, for serving ",
      "4 tablespoons Hidden Valley Spicy Chipotle Pepper Sandwich Spread & Dip, or more to taste ",
      "2 cups baby arugula ",
      "2 Roma tomatoes, thinly sliced ",
      "1 avocado, halved, seeded, peeled and thinly sliced ",
      "8 ounces sliced honey roasted turkey"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/06/20/avocado-pasta/",
    "recipeTitle": "Avocado Pasta",
    "ingredients": [
      "12 ounces spaghetti ",
      "2 ripe avocados, halved, seeded and peeled ",
      "1/2 cup fresh basil leaves ",
      "2 cloves garlic ",
      "2 tablespoons freshly squeezed lemon juice ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/3 cup olive oil ",
      "1 cup cherry tomatoes, halved ",
      "1/2 cup canned corn kernels, drained and rinsed"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/07/21/bacon-pea-macaroni-cheese/",
    "recipeTitle": "Bacon and Pea Macaroni & Cheese",
    "ingredients": [
      "8 ounces elbow macaroni ",
      "1 cup frozen peas ",
      "4 slices bacon, diced ",
      "1 cup Silk Unsweetened Original Almondmilk ",
      "2 cloves garlic, minced ",
      "1 tablespoon chopped fresh thyme leaves ",
      "3/4 cup shredded gruyere cheese ",
      "1/2 cup shredded sharp cheddar cheese ",
      "Kosher salt and freshly ground black pepper, to toaste ",
      "1/2 cup plain Greek yogurt ",
      "1 tablespoon hot sauce, optional "
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/06/28/bacon-avocado-pasta/",
    "recipeTitle": "Bacon Avocado Pasta",
    "ingredients": [
      "12 ounces fusili pasta ",
      "4 slices bacon, diced ",
      "2 avocados, halved, seeded, peeled and diced ",
      "2 Roma tomatoes, diced ",
      "1/3 cup diced red onion ",
      "1/4 cup basil leaves, chiffonade ",
      "1/4 cup grated Parmesan cheese ",
      "1/4 cup olive oil ",
      "2 tablespoons freshly squeezed lemon juice, or more, to taste ",
      "1 tablespoon lemon zest ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/02/02/bacon-mushroom-spinach-frittata/",
    "recipeTitle": "Bacon Mushroom Spinach Frittata",
    "ingredients": [
      "5 large eggs ",
      "1/2 cup milk ",
      "1/2 teaspoon dried basil ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon dried thyme ",
      "Dash of hot sauce ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 slices bacon, diced ",
      "2 cloves garlic, diced ",
      "8 ounces cremini mushrooms, thinly sliced ",
      "2 cups baby spinach ",
      "1 Roma tomato, diced"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/01/21/bacon-wrapped-teriyaki-hot-dogs-with-pineapple-salsa/",
    "recipeTitle": "Bacon Wrapped Teriyaki Hot Dogs with Pineapple Salsa",
    "ingredients": [
      "6 hot dogs ",
      "6 slices applewood smoked bacon ",
      "1 package KING’S HAWAIIAN Hot Dog Buns ",
      "1/4 cup plus 2 tablespoons teriyaki sauce, homemade or store-bought ",
      "2 cups diced pineapple ",
      "1/4 cup diced red onion ",
      "1 jalapeño, diced ",
      "2 tablespoons chopped cilantro ",
      "2 tablespoons freshly squeezed lime juice"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/06/17/bacon-wrapped-sonoran-hot-dog-sunday-supper/",
    "recipeTitle": "Bacon-Wrapped Sonoran Hot Dog",
    "ingredients": [
      "3 Romato tomatoes, diced",
      "2 avocados, peeled, halved, seeded and diced",
      "1/4 cup diced red onion",
      "2 tablespoons chopped fresh cilantro leaves",
      "Juice of 2 limes",
      "Pinch of salt",
      "1/4 cup mayonnaise",
      "1 teaspoon milk",
      "4 hot dogs",
      "4 slices bacon",
      "1 (15-ounce) can ranch style beans, drained and warmed",
      "4 best quality hot dog buns"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/05/02/baked-caprese-chicken/",
    "recipeTitle": "Baked Caprese Chicken",
    "ingredients": [
      "2 tablespoons olive oil ",
      "1 teaspoon dried basil ",
      "1 teaspoon dried oregano ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "8 bone-in, skin-on chicken thighs ",
      "2 tablespoons unsalted butter ",
      "8 ounces fresh mozzarella cheese, cut into 8 slices ",
      "2 Roma tomatoes, sliced ",
      "1/4 cup basil leaves, chiffonade ",
      "1/2 cup balsamic vinegar ",
      "2 tablespoons brown sugar, packed"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/09/13/baked-chicken-mushroom-skillet/",
    "recipeTitle": "Baked Chicken and Mushroom Skillet",
    "ingredients": [
      "8 bone-in, skin-on chicken thighs ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "3 tablespoons unsalted butter, diced ",
      "3 cloves garlic, minced ",
      "8 ounces cremini mushrooms, halved ",
      "1 cup chicken broth ",
      "1/2 teaspoon dried thyme ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon dried basil ",
      "1/4 cup heavy cream ",
      "1/4 cup grated Parmesan ",
      "1 tablespoon whole grain mustard "
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/10/29/baked-chicken-parmesan/",
    "recipeTitle": "Baked Chicken Parmesan",
    "ingredients": [
      "1 pound spaghetti ",
      "2 boneless, skinless chicken breasts, cut crosswise in half ",
      "3/4 cup Italian style breadcrumbs ",
      "1/4 cup grated Parmesan cheese ",
      "2 tablespoons unsalted butter, melted ",
      "3/4 cup shredded mozzarella cheese ",
      "1 cup marinara sauce, homemade or storebought"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/08/05/ham-and-mango-cheese-sliders/",
    "recipeTitle": "Baked Ham and Cheese Sliders",
    "ingredients": [
      "9 KING’S HAWAIIAN Original Hawaiian Sweet Dinner Rolls, split ",
      "1 cup baby arugula ",
      "2 Roma tomatoes, thinly sliced ",
      "9 slices ham ",
      "1 cup shredded mango fire cheddar ",
      "2 tablespoons unsalted butter, melted ",
      "2 teaspoons poppy seeds ",
      "1/2 teaspoon garlic powder ",
      "1/4 teaspoon mustard powder ",
      "Pinch of salt"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/07/25/baked-honey-garlic-chicken/",
    "recipeTitle": "Baked Honey Garlic Chicken",
    "ingredients": [
      "1 pound boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 large eggs, beaten ",
      "1 cup Panko* ",
      "1/3 cup honey, or more, to taste ",
      "4 cloves garlic, minced ",
      "2 tablespoons soy sauce ",
      "1 tablespoon Sriracha, optional ",
      "1 tablespoon cornstarch ",
      "2 green onions, thinly sliced ",
      "2 teaspoons sesame seeds"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/09/01/baked-honey-mustard-chicken/",
    "recipeTitle": "Baked Honey Mustard Chicken",
    "ingredients": [
      "3 tablespoons Dijon mustard ",
      "3 tablespoon whole grain mustard ",
      "3 tablespoons honey, or more, to taste ",
      "2 tablespoons chicken stock, or more, to taste ",
      "1 tablespoon olive oil ",
      "3 sprigs rosemary ",
      "1 tablespoon olive ",
      "1 tablespoon whole grain mustard ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "8 bone-in, skin-on chicken thighs"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/02/28/baked-honey-sesame-chicken/",
    "recipeTitle": "Baked Honey Sesame Chicken",
    "ingredients": [
      "2 tablespoons unsalted butter ",
      "8 bone-in, skin-on chicken thighs ",
      "1/2 teaspoon sesame seeds ",
      "2 green onions, thinly sliced ",
      "1/4 cup honey ",
      "1/4 cup soy sauce ",
      "2 tablespoons ketchup ",
      "2 cloves garlic, minced ",
      "1 tablespoon brown sugar, packed ",
      "1 tablespoon rice wine vinegar ",
      "1 tablespoon freshly grated ginger ",
      "1 teaspoon Sriracha ",
      "1 teaspoon sesame oil ",
      "1 teaspoon cornstarch ",
      "1/4 teaspoon ground black pepper"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/07/03/baked-ranch-chicken-tenders-and-veggies/",
    "recipeTitle": "Baked Ranch Chicken Tenders and Veggies",
    "ingredients": [
      "16 ounces baby red potatoes, halved ",
      "2 tablespoons olive oil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/3 cup all-purpose flour ",
      "1 (1-ounce) package Ranch Seasoning and Salad Dressing Mix ",
      "2 pounds boneless, skinless chicken breasts, cut into strips ",
      "2 large eggs, beaten ",
      "3 cups crushed Corn Flakes ",
      "4 zucchini, chopped ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/07/baked-ravioli/",
    "recipeTitle": "Baked Ravioli",
    "ingredients": [
      "1 (16-ounce) package cheese-filled ravioli ",
      "2 cups marinara sauce, homemade or store-bought ",
      "1/3 cup cream cheese, cubed ",
      "1/2 teaspoon dried thyme ",
      "1/2 teaspoon dried parsley ",
      "1/2 cup shredded mozzarella cheese ",
      "1/4 cup grated Parmesan cheese ",
      "1/4 cup basil leaves, chiffonade"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/18/baked-sweet-sour-chicken/",
    "recipeTitle": "Baked Sweet and Sour Chicken",
    "ingredients": [
      "1 pound boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/2 cup cornstarch ",
      "2 large eggs, beaten ",
      "1/4 cup vegetable oil ",
      "3/4 cup sugar ",
      "1/2 cup apple cider vinegar ",
      "1/4 cup ketchup ",
      "1 tablespoon soy sauce ",
      "1/2 teaspoon garlic powder"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/06/06/bang-bang-chicken/",
    "recipeTitle": "Bang Bang Chicken",
    "ingredients": [
      "1/2 cup vegetable oil, or more, as needed ",
      "1 cup buttermilk ",
      "3/4 cup all-purpose flour ",
      "1/2 cup cornstarch ",
      "1 large egg ",
      "1 tablespoon hot sauce ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 pound boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "1 cup Panko* ",
      "1/4 cup mayonnaise ",
      "2 tablespoons sweet chili sauce ",
      "1 tablespoon honey ",
      "2 teaspoons Frank's Hot Sauce"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/11/07/bang-bang-shrimp-pasta/",
    "recipeTitle": "Bang Bang Shrimp Pasta",
    "ingredients": [
      "8 ounces spaghetti ",
      "8 ounces medium shrimp, peeled and deveined ",
      "1 tablespoon olive oil ",
      "3 cloves garlic, minced ",
      "1 teaspoon smoked paprika, or more, to taste ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1/2 cup mayonnaise ",
      "1/4 cup Thai sweet chili sauce ",
      "2 cloves garlic, pressed ",
      "Juice of 1/2 lime, or more, to taste ",
      "1 teaspoon Sriracha, optional ",
      "Pinch of crushed red pepper flakes"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/08/28/bahn-mi-hot-dogs/",
    "recipeTitle": "Banh Mi Hot Dogs",
    "ingredients": [
      "2 tablespoons vinegar ",
      "1 teaspoon sugar ",
      "2 shredded carrots ",
      "6 Hebrew National Hot Dogs ",
      "6 hot dog buns ",
      "1 English cucumber, thinly sliced ",
      "1 jalapeno, thinly sliced ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "1/4 cup peanuts, chopped ",
      "Sriracha, for serving"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/25/bbq-chicken-cobb-salad/",
    "recipeTitle": "BBQ Chicken Cobb Salad",
    "ingredients": [
      "4 slices bacon, diced ",
      "2 boneless, skinless thin-sliced chicken breasts ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "3 tablespoons BBQ sauce, or more, to taste ",
      "2 large eggs ",
      "6 cups chopped romaine lettuce ",
      "2 Roma tomatoes, diced ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1 cup canned corn kernels, drained ",
      "1 cup canned black beans, drained and rinsed ",
      "1/2 cup buttermilk ",
      "1/4 cup plain Greek yogurt ",
      "1/4 cup sour cream ",
      "1/2 teaspoon dried dill ",
      "1/2 teaspoon dried parsley ",
      "1/4 teaspoon garlic powder ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/06/11/bbq-chicken-cornbread-pie/",
    "recipeTitle": "BBQ Chicken Cornbread Pie",
    "ingredients": [
      "2 tablespoons olive oil ",
      "1 medium onion, chopped ",
      "1 bell pepper, diced ",
      "2 boneless, skinless chicken breasts, cooked and shredded ",
      "3 cloves garlic, minced ",
      "1 tablespoons chili powder ",
      "1 1/2 teaspoons cumin ",
      "2 teaspoons hot sauce ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup tomato sauce ",
      "2 tablespoons Worcestershire sauce ",
      "2 tablespoons dark brown sugar ",
      "1 1/2 cups shredded cheddar cheese ",
      "Chopped parsley leaves, for garnish ",
      "1 cup all-purpose flour ",
      "1 cup yellow cornmeal ",
      "2/3 cup sugar ",
      "1/2 teaspoon baking soda ",
      "1/2 teaspoons salt ",
      "1 cup buttermilk ",
      "1/2 cup (1 stick) unsalted butter, melted ",
      "2 large eggs"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/02/09/bbq-chicken-french-bread-pizza/",
    "recipeTitle": "BBQ Chicken French Bread Pizza",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound boneless, skinless chicken breast, diced ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/2 cup KRAFT Original Barbecue Sauce, divided ",
      "1 (1-pound) French bread loaf, cut in half crosswise ",
      "1 red onion, thinly sliced ",
      "1 cup shredded cheddar cheese ",
      "1 cup shredded mozzarella cheese ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/03/bbq-chicken-salad/",
    "recipeTitle": "BBQ Chicken Salad",
    "ingredients": [
      "1 tablespoon olive oil ",
      "2 boneless, skinless thin-sliced chicken breasts ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "6 cups chopped romaine lettuce ",
      "1 Roma tomato, diced ",
      "3/4 cup canned corn kernels, drained ",
      "3/4 cup canned black beans, drained and rinsed ",
      "1/4 cup diced red onion ",
      "1/4 cup shredded Monterey Jack cheese ",
      "1/2 cup shredded cheddar cheese ",
      "1/4 cup Ranch dressing ",
      "1/4 cup BBQ sauce ",
      "1/4 cup tortilla strips"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/04/beef-enchiladas/",
    "recipeTitle": "Beef Enchiladas",
    "ingredients": [
      "2 1/2 cups enchilada sauce, divided ",
      "1 tablespoon olive oil ",
      "8 ounces ground beef ",
      "1 (4.5-ounce) can diced green chiles ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/2 cup canned corn kernels, drained ",
      "1/2 cup canned black beans, drained and rinsed ",
      "1 1/4 cups Monterey Jack cheese, divided ",
      "1 1/4 cups shredded cheddar cheese, divided ",
      "12 (6-inch) flour tortillas, warmed ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1 Roma tomato, diced"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/11/28/beef-noodle-stir-fry/",
    "recipeTitle": "Beef Noodle Stir Fry",
    "ingredients": [
      "2 (7-ounce) refrigerated udon noodles, seasoning sauce packets discarded* ",
      "1 tablespoon olive oil ",
      "8 ounces beef top sirloin filet, thinly sliced across the grain ",
      "8 ounces cremini mushrooms, sliced ",
      "6 ounces broccoli florets ",
      "2 carrots, diced ",
      "1/3 cup reduced sodium soy sauce ",
      "3 tablespoons oyster sauce ",
      "1 tablespoon brown sugar, packed ",
      "1 tablespoon freshly grated ginger ",
      "2 cloves garlic, pressed ",
      "1 teaspoon sesame oil ",
      "1/4 teaspoon crushed red pepper flakes ",
      "1/4 teaspoon ground black pepper"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/08/19/berry-cantaloupe-salad/",
    "recipeTitle": "Berry Cantaloupe Salad",
    "ingredients": [
      "1/2 cantaloupe, scooped with melon baller ",
      "1 cup strawberries, thinly sliced ",
      "1 cup blueberries ",
      "1 tablespoon freshly squeezed lime juice ",
      "1/2 teaspoon lime zest ",
      "2 teaspoons chopped mint leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/12/23/biscuit-pot-pie/",
    "recipeTitle": "Biscuit Pot Pie",
    "ingredients": [
      "2 tablespoons unsalted butter ",
      "2 cloves garlic, minced ",
      "1 small onion, diced ",
      "3 carrots, peeled and diced ",
      "2 ribs celery, diced ",
      "1/3 cup all-purpose flour ",
      "2 cups chicken broth ",
      "1 1/2 cups milk ",
      "1/2 teaspoon thyme ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "3 1/2 cups shredded chicken ",
      "1/2 cup frozen peas ",
      "2 cups all-purpose flour ",
      "2 teaspoon baking powder ",
      "1 teaspoon sugar ",
      "1/2 teaspoon baking soda ",
      "1/2 teaspoon salt ",
      "4 tablespoons (1/2 stick) unsalted butter, cut into cubes ",
      "3/4 cup buttermilk"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/05/28/black-bean-quinoa-salad/",
    "recipeTitle": "Black Bean Quinoa Salad",
    "ingredients": [
      "1 cup quinoa ",
      "2 large navel oranges, cut into segments ",
      "1 red bell pepper, diced ",
      "1 jalapeno, seeded and diced ",
      "1 cup canned black beans, drained and rinsed ",
      "1/2 cup canned corn kernels, drained ",
      "1/3 cup chopped red onion ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "1/4 cup olive oil ",
      "1/4 cup apple cider vinegar ",
      "1/4 cup freshly squeezed orange juice ",
      "Zest of 1 orange ",
      "1 tablespoon sugar"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/04/17/black-truffle-pasta-with-kale-italian-sausage-and/",
    "recipeTitle": "Black Truffle Pasta with Meyer Lemon Cream Sauce",
    "ingredients": [
      "8 ounces black truffle strangozzi pasta ",
      "2 tablespoons olive oil ",
      "2 cloves garlic, minced ",
      "8 ounces spicy Italian sausage, casings removed ",
      "1/2 cup heavy cream ",
      "Zest of 1 Meyer lemon ",
      "2 cups kale, trimmed and coarsely chopped ",
      "1/2 cup mixed medley cherry tomatoes"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/08/26/blat-hot-dogs/",
    "recipeTitle": "BLAT Hot Dogs",
    "ingredients": [
      "6 slices bacon ",
      "6 hot dogs ",
      "6 hot dog buns ",
      "1/4 cup homemade Ranch ",
      "1 cup shredded Romaine lettuce ",
      "1 Roma tomato, diced ",
      "1 avocado, halved, seeded, peeled and diced"
    ],
    "cuisineType": [
      "Pork",
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/13/blt-chopped-salad/",
    "recipeTitle": "BLT Chopped Salad",
    "ingredients": [
      "4 slices bacon, diced ",
      "4 cups chopped romaine lettuce ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1 cup cherry tomatoes, halved ",
      "1/2 cup corn kernels ",
      "1/4 cup crumbled goat cheese ",
      "1/4 cup olive oil ",
      "1/4 cup apple cider vinegar ",
      "Zest of 1 lime ",
      "2 tablespoons freshly squeezed lime juice ",
      "2 teaspoons sugar, or more to taste"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/03/06/bolognese-sauce-with-cloves-and-cinnamon/",
    "recipeTitle": "Bolognese Sauce",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 clove garlic, thinly sliced ",
      "1 small onion, chopped ",
      "Kosher salt, to taste ",
      "2 pounds ground beef ",
      "1 (14.5-ounce) can diced tomatoes ",
      "1 (14.5-ounce) can tomato sauce ",
      "2 cinnamon sticks ",
      "6-8 cloves ",
      "1/4 cup chopped fresh parsley leaves ",
      "1 pound spaghetti"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/04/24/brie-and-blueberry-waffle-grilled-cheese/",
    "recipeTitle": "Brie and Blueberry Waffle Grilled Cheese",
    "ingredients": [
      "1 1/2 cups blueberries ",
      "Zest of 1 lemon ",
      "2 tablespoons freshly squeezed lemon juice ",
      "1 tablespoon sugar ",
      "2 tablespoons unsalted butter ",
      "8 waffles ",
      "4 ounces Wisconsin Brie, thinly sliced"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/01/15/broccoli-chicken-mac-and-cheese/",
    "recipeTitle": "Broccoli Chicken Mac and Cheese",
    "ingredients": [
      "8 ounces pasta shells ",
      "3 cups broccoli florets ",
      "3/4 cup milk ",
      "1/4 cup julienned sun dried tomatoes ",
      "6 ounces Laughing Cow Light Cheese Wedges ",
      "2 cups shredded chicken breast ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/03/05/broccoli-quinoa-casserole/",
    "recipeTitle": "Broccoli Quinoa Casserole",
    "ingredients": [
      "1 cup quinoa ",
      "1 head broccoli, cut into florets and finely chopped ",
      "2 tablespoon olive oil, divided ",
      "1/3 cup Panko* ",
      "3 boneless, skinless thin-sliced chicken breasts ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons unsalted butter ",
      "2 tablespoons all-purpose flour ",
      "2 cups 2% milk ",
      "1 1/2 cups shredded cheddar cheese, divided ",
      "1/3 cup Greek yogurt"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/03/05/broiled-salmon-gyros-with-cucumber-feta-yogurt-dip/",
    "recipeTitle": "Broiled Salmon Gyros with Cucumber Feta Yogurt Dip",
    "ingredients": [
      "1 pound salmon ",
      "2 tablespoons olive oil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "Olive oil ",
      "2 whole wheat pita pockets, split into 4 halves ",
      "2 cups baby spinach, for serving ",
      "Lemon wedges, for serving ",
      "2 cups Greek yogurt ",
      "1 cup crumbled feta ",
      "1 Persian cucumber, grated ",
      "1/2 teaspoon oregano ",
      "1/4 teaspoon garlic powder ",
      "1/4 teaspoon onion powder ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/03/18/buffalo-chicken-quinoa-bites-with-greek-yogurt-blue/",
    "recipeTitle": "Buffalo Chicken Quinoa Bites with Greek Yogurt Blue Cheese Dip",
    "ingredients": [
      "1 cup cooked quinoa ",
      "1 cup shredded chicken ",
      "1/4 cup goat cheese ",
      "1/4 cup sharp cheddar ",
      "1/4 cup buffalo sauce ",
      "1/4 cup Panko ",
      "1 large egg, beaten ",
      "2 tablespoons whole wheat flour ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup Greek yogurt ",
      "1/4 cup blue cheese ",
      "1/2 teaspoon garlic powder ",
      "1/2 teaspoon dried dill ",
      "1/2 teaspoon dried parsley ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/07/01/cajun-shrimp-with-garlic-parmesan-cream-sauce/",
    "recipeTitle": "Cajun Shrimp with Garlic Parmesan Cream Sauce",
    "ingredients": [
      "8 ounces fettuccine ",
      "2 tablespoons unsalted butter ",
      "2 cloves garlic, minced ",
      "2 tablespoons all-purpose flour ",
      "1 1/2 cups milk, or more, as needed ",
      "1/2 teaspoon dried thyme ",
      "1/2 teaspoon dried oregano ",
      "1/4 cup half and half* ",
      "1/4 cup freshly grated Parmesan cheese ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1 pound medium shrimp, peeled and deveined ",
      "2 tablespoons olive oil ",
      "2 cloves garlic, minced ",
      "2 teaspoons cajun seasoning ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/05/26/caprese-avocado-salad/",
    "recipeTitle": "Caprese Avocado Salad",
    "ingredients": [
      "1/2 cup balsamic vinegar ",
      "2 tablespoons brown sugar, packed ",
      "1 tablespoon olive oil ",
      "2 boneless, skinless thin-sliced chicken breasts ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "6 cups chopped romaine lettuce ",
      "6 ounces ovaline fresh mozzarella ",
      "1 cup cherry tomatoes, halved ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1/4 cup basil leaves, chiffonade "
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/08/21/caprese-mac-and-cheese/",
    "recipeTitle": "Caprese Mac and Cheese",
    "ingredients": [
      "8 ounces elbow macaroni ",
      "2 tablespoons unsalted butter ",
      "2 tablespoons all-purpose flour ",
      "1 1/4 cups milk ",
      "1/2 cup heavy cream ",
      "8 ounces fresh mozzarella, shredded ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 Roma tomatoes, diced ",
      "1/4 cup fresh basil leaves, chiffonade"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/07/18/caprese-quinoa-salad/",
    "recipeTitle": "Caprese Quinoa Salad",
    "ingredients": [
      "1 cup Bob’s Red Mill quinoa ",
      "8 ounces mozzarella, diced ",
      "1 cup cherry tomatoes, halved ",
      "1/2 cup fresh basil leaves, chiffonade ",
      "1 avocado, halved, seeded, peeled and diced ",
      "2 tablespoons pine nuts ",
      "1/4 cup balsamic vinegar ",
      "2 tablespoons olive oil ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/09/16/carnitas-avocado-pizza-with-chipotle-avocado-mayonnaise/",
    "recipeTitle": "Carnitas Avocado Pizza",
    "ingredients": [
      "2 teaspoons chili powder ",
      "1 teaspoon cumin ",
      "1 teaspoon oregano ",
      "1 teaspoon kosher salt ",
      "3-4 pounds chuck roast ",
      "2 tablespoons canola oil ",
      "2 1/2 cups orange juice ",
      "1 tablespoon olive oil ",
      "1 onion, thinly sliced ",
      "1 red bell pepper, thinly sliced ",
      "1 jalapeno, thinly sliced ",
      "1 ball pizza dough, homemade or storebought ",
      "1/4 cup semolina or yellow cornmeal ",
      "1 cup tomatillo salsa ",
      "12 ounces mozzarella, thinly sliced ",
      "2 green onions, sliced ",
      "1/4 cup chipotle avocado mayonnaise ",
      "Diced avocado, for serving"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/03/22/cauliflower-chowder/",
    "recipeTitle": "Cauliflower Chowder",
    "ingredients": [
      "4 slices bacon, diced ",
      "2 tablespoons unsalted butter ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "2 carrots, peeled and diced ",
      "2 stalks celery, diced ",
      "1/4 cup all-purpose flour ",
      "4 cups chicken broth ",
      "1 cup 2% milk ",
      "1 head cauliflower, roughly chopped ",
      "1 bay leaf ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves "
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/03/03/cheeseburger-soup/",
    "recipeTitle": "Cheeseburger Soup",
    "ingredients": [
      "3 hamburger buns, diced into 1-inch cubes ",
      "4 slices bacon, diced ",
      "1 tablespoon olive oil ",
      "8 ounces ground beef ",
      "1/4 cup unsalted butter ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "2 stalks celery, diced ",
      "2 carrots, grated ",
      "1 teaspoon Worcestershire ",
      "3 tablespoons all-purpose flour ",
      "2 1/2 cups chicken broth ",
      "2 cups milk, or more, as needed ",
      "2 russet potatoes, peeled and cubed ",
      "1 1/2 cups shredded cheddar cheese ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped chives"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/09/17/cheesy-enchilada-rice-skillet/",
    "recipeTitle": "Cheesy Enchilada Rice Skillet",
    "ingredients": [
      "1 cup uncooked rice ",
      "1 tablespoon olive oil ",
      "2 cloves garlic, minced ",
      "1 small onion, diced ",
      "1 bell pepper, diced ",
      "1 cup canned corn kernels, drained ",
      "1 cup canned black beans, drained and rinsed ",
      "3/4 cup Old El Paso™ mild enchilada sauce ",
      "1/2 cup Old El Paso™ mild green enchilada sauce ",
      "1/2 teaspoon chili powder ",
      "1/4 teaspoon cumin ",
      "1/4 teaspoon oregano ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup shredded Mexican blend cheese ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/11/01/chicken-alfredo-roll-ups/",
    "recipeTitle": "Chicken Alfredo Roll Ups",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 boneless, skinless chicken breast ",
      "1 (8-ounce) package cream cheese, at room temperature ",
      "1/4 cup freshly grated Parmesan ",
      "2 tablespoons chopped chives ",
      "1/2 teaspoon garlic powder ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 (8-ounce) tube crescent rolls ",
      "1/2 cup Italian style bread crumbs ",
      "1 tablespoon unsalted butter ",
      "1 tablespoon all-purpose flour ",
      "1/2 cup milk ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/2 cup shredded cheddar cheese, or more, to taste "
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/01/03/chicken-broccoli-alfredo/",
    "recipeTitle": "Chicken and Broccoli Alfredo",
    "ingredients": [
      "8 ounces rotini pasta ",
      "12 ounces broccoli florets ",
      "1 tablespoon olive oil ",
      "2 boneless, skinless thin-sliced chicken breasts ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons unsalted butter ",
      "2 tablespoons all-purpose flour ",
      "3/4 cup chicken broth ",
      "3/4 cup milk, or more, as needed ",
      "1/4 cup heavy cream ",
      "1/4 teaspoon garlic powder ",
      "1/4 cup freshly grated Parmesan ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/17/chicken-potato-chowder/",
    "recipeTitle": "Chicken and Potato Chowder",
    "ingredients": [
      "1/4 cup unsalted butter ",
      "1 onion, diced ",
      "3 carrots, peeled and diced ",
      "2 stalks celery, diced ",
      "1 teaspoon dried thyme ",
      "1/4 cup all-purpose flour ",
      "3 cups chicken broth ",
      "2 cups milk, or more, as needed ",
      "2 russet potatoes, peeled and cubed ",
      "2 cups diced cooked chicken breast ",
      "1 1/2 cups shredded sharp cheddar cheese ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/08/22/chicken-caesar-ciabatta-sandwiches/",
    "recipeTitle": "Chicken Caesar Ciabatta Sandwiches",
    "ingredients": [
      "1 cup romaine lettuce leaves ",
      "1 pound boneless, skinless thin sliced chicken breasts ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 tablespoon olive oil ",
      "4 ciabatta rolls, toasted, for serving ",
      "1/4 cup shaved parmesan, for serving ",
      "8 anchovies ",
      "2 cloves garlic, pressed ",
      "6 tablespoons mayonnaise ",
      "3 tablespoons freshly squeezed lemon juice ",
      "Splash of Worcestershire sauce ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/02/19/chicken-enchilada-skillet/",
    "recipeTitle": "Chicken Enchilada Skillet",
    "ingredients": [
      "1 tablespoon olive oil ",
      "3 boneless, skinless thin-sliced chicken breasts ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "6 corn tortillas, cut into bite-size pieces ",
      "1 (14.5-ounce) can diced tomatoes with green chiles ",
      "1 1/4 cup red enchilada sauce ",
      "1 (8-ounce) can tomato sauce ",
      "1/2 cup shredded cheddar cheese ",
      "1/2 cup shredded Monterey Jack cheese ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1/4 cup tortila strips ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/22/chicken-florentine-artichoke-bake/",
    "recipeTitle": "Chicken Florentine Artichoke Bake",
    "ingredients": [
      "8 ounces rotini pasta ",
      "1 1/4 cups milk ",
      "2 large eggs ",
      "3 cloves garlic, minced ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon dried basil ",
      "1/4 teaspoon crushed red pepper flakes ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 (12.5-ounce) can premium chunk white chicken, drained ",
      "1 1/2 cups shredded Monterey Jack cheese ",
      "1 (14-ounce) can quartered artichoke hearts, drained ",
      "1 (10-ounce) package frozen chopped spinach, thawed and well-drained ",
      "1/3 cup julienned sun dried tomatoes in olive oil, drained ",
      "2 tablespoons freshly grated Parmesan cheese ",
      "1 tablespoon olive oil ",
      "1/2 cup Panko*"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/08/29/chicken-pesto-lasagna-roll-ups/",
    "recipeTitle": "Chicken Pesto Lasagna Roll-Ups",
    "ingredients": [
      "12 lasagna noodles ",
      "2 tablespoons unsalted butter ",
      "2 tablespoons flour ",
      "2 cups milk ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 cups shredded chicken breast ",
      "2 (15-ounce) container ricotta cheese ",
      "1 cup basil pesto ",
      "1 cup shredded mozzarella cheese, divided ",
      "2 cups marinara sauce, divided ",
      "Grated Parmesan, for serving"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/10/22/chicken-pesto-sandwich/",
    "recipeTitle": "Chicken Pesto Sandwich",
    "ingredients": [
      "2 cups shredded chicken breast ",
      "1/4 cup Greek yogurt ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 baguette, cut into 3-4 equal pieces, toasted, for serving ",
      "2 cups arugula, for serving ",
      "2 Roma tomatoes, thinly sliced, for serving ",
      "8 ounces mozzarella, sliced ",
      "1 cup fresh basil leaves ",
      "3 cloves garlic, peeled ",
      "3 tablespoons pine nuts ",
      "1/3 cup grated Parmesan ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/3 cup olive oil"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/05/21/chicken-tenders-with-greek-yogurt-ranch/",
    "recipeTitle": "Chicken Tenders with Greek Yogurt Ranch",
    "ingredients": [
      "1 pound boneless skinless chicken breast, cut into 1-inch strips ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 cups whole wheat bread crumbs ",
      "1/2 teaspoon garlic powder ",
      "1/2 teaspoon onion powder ",
      "1/2 cup all-purpose flour ",
      "2 large eggs, beaten ",
      "1/2 cup Greek yogurt ",
      "2 tablespoons mayonnaise ",
      "1/2 teaspoon garlic powder ",
      "1/2 teaspoon onion powder ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/12/20/chicken-teriyaki-kabobs/",
    "recipeTitle": "Chicken Teriyaki Kabobs",
    "ingredients": [
      "1 tablespoon cornstarch ",
      "1/4 cup soy sauce ",
      "1/4 cup brown sugar, packed ",
      "1/2 teaspoon ground ginger ",
      "1/4 teaspoon garlic powder ",
      "2 tablespoons honey ",
      "1 1/2 pounds boneless, skinless, chicken breasts, cut into 1-inch chunks ",
      "Sesame seeds, for garnish ",
      "Sliced green onions, for garnish"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/05/05/chicken-tortilla-stack-and-a-giveaway/",
    "recipeTitle": "Chicken Tortilla Stack",
    "ingredients": [
      "1 tablespoon olive oil ",
      "5 9-inch flour tortillas ",
      "3/4 cup sour cream ",
      "2 1/2 cups shredded chicken ",
      "1 cup shredded sharp cheddar cheese ",
      "1 cup shredded Pepper Jack cheese ",
      "1 cup shredded mozzarella cheese ",
      "1 avocado, halved, seeded, peeled and diced, for serving ",
      "1 roma tomato, diced, for serving"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/04/12/chicken-40-cloves-garlic/",
    "recipeTitle": "Chicken with 40 Cloves of Garlic",
    "ingredients": [
      "8 bone-in, skin-on chicken thighs ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons unsalted butter ",
      "40 cloves garlic, peeled ",
      "1 1/2 cups chicken broth ",
      "1 tablespoon dried thyme ",
      "2 tablespoons all-purpose flour ",
      "2 tablespoons milk"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/01/09/chicken-creamy-mushroom-sauce/",
    "recipeTitle": "Chicken with Creamy Mushroom Sauce",
    "ingredients": [
      "8 bone-in, skin-on chicken thighs ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons unsalted butter ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1 tablespoon unsalted butter ",
      "2 cloves garlic, minced ",
      "8 ounces cremini mushrooms, thinly sliced ",
      "2 tablespoons all-purpose flour ",
      "1 1/2 cups half and half* ",
      "1/2 teaspoon dried thyme ",
      "1/2 teaspoon dried basil ",
      "Pinch of crushed red pepper flakes ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/11/22/chicken-sun-dried-tomato-cream-sauce/",
    "recipeTitle": "Chicken with Sun-Dried Tomato Cream Sauce",
    "ingredients": [
      "8 bone-in, skin-on chicken thighs ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "3 tablespoons unsalted butter, divided ",
      "3 cloves garlic, minced ",
      "1/4 teaspoon red pepper flakes, or more, to taste ",
      "1 cup chicken broth ",
      "1/2 cup heavy cream ",
      "1/3 cup julienned sun dried tomatoes in olive oil, drained ",
      "1/4 cup freshly grated Parmesan ",
      "1/4 teaspoon dried thyme ",
      "1/4 teaspoon dried oregano ",
      "1/4 teaspoon dried basil ",
      "1/4 cup basil leaves, chiffonade"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/08/25/chinese-chicken-salad/",
    "recipeTitle": "Chinese Chicken Salad",
    "ingredients": [
      "2 boneless, skinless chicken breasts ",
      "2 tablespoons soy sauce ",
      "1 teaspoon sesame oil ",
      "1/4 teaspoon white pepper ",
      "4 cups chopped romaine lettuce ",
      "1 cup shredded red cabbage ",
      "1/3 cup grated carrots ",
      "1/4 cup shelled edamame ",
      "1 green onion, thinly sliced ",
      "1/4 cup chow mein noodles, for serving ",
      "1/4 cup sliced almonds, for serving ",
      "1/4 cup plus 2 tablespoons rice wine vinegar ",
      "1 clove garlic, pressed ",
      "1 tablespoon sesame oil ",
      "1 tablespoon sugar ",
      "1 teaspoon freshly grated ginger ",
      "1 teaspoon soy sauce"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/10/19/chinese-orange-chicken/",
    "recipeTitle": "Chinese Orange Chicken",
    "ingredients": [
      "1 1/2 pounds boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "1 cup 2 tablespoons cornstarch, divided ",
      "2 large eggs, beaten ",
      "1 cup vegetable oil ",
      "1/2 teaspoon sesame seeds ",
      "1 green onion, thinly sliced ",
      "1 cup chicken broth ",
      "1/2 cup freshly squeezed orange juice ",
      "1/2 cup sugar ",
      "1/3 cup distilled white vinegar ",
      "1/4 cup soy sauce ",
      "2 cloves garlic, minced ",
      "1 tablespoon orange zest ",
      "1 teaspoon Sriracha, or more, to taste ",
      "1/4 teaspoon ground ginger ",
      "1/4 teaspoon white pepper"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/08/02/chorizo-mac-and-cheese/",
    "recipeTitle": "Chorizo Mac and Cheese",
    "ingredients": [
      "2 cups elbow macaroni ",
      "1 tablespoon olive oil ",
      "6 ounces Mexican chorizo, casing removed ",
      "1 small red onion, diced ",
      "1/2 red bell pepper, diced ",
      "2 jalapeños, diced ",
      "2 tablespoons all-purpose flour ",
      "1 cup milk, warmed ",
      "1 cup shredded cheddar cheese ",
      "1 cup shredded jalapeño pepper jack cheese ",
      "1 cup corn kernels ",
      "1 cup canned black beans ",
      "2 teaspoons lime juice ",
      "2 tablespoons Panko"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/11/03/coconut-chicken-tenders/",
    "recipeTitle": "Coconut Chicken Tenders",
    "ingredients": [
      "1 cup vegetable oil ",
      "2 pounds boneless, skinless chicken breasts, cut into strips ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 large eggs ",
      "1 teaspoon soy sauce ",
      "1 teaspoon Sriracha, optional ",
      "1/2 teaspoon garlic powder ",
      "1/4 teaspoon ground ginger ",
      "1 1/2 cups Original Bisquick™ mix ",
      "1 cup shredded sweetened coconut ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/07/18/copycat-chick-fil-nuggets/",
    "recipeTitle": "Copycat Chick-fil-A Nuggets",
    "ingredients": [
      "1 pound boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "1 cup dill pickle juice ",
      "1 1/2 cups milk, divided ",
      "1 cup peanut oil ",
      "1 large egg ",
      "1 1/4 cups all-purpose flour ",
      "1 tablespoon confectioners' sugar ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/4 cup mayonnaise ",
      "2 tablespoons honey ",
      "1 tablespoon mustard ",
      "2 teaspoons Dijon mustard ",
      "2 teaspoons freshly squeezed lemon juice"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/05/16/copycat-chick-fil-a-sandwich/",
    "recipeTitle": "Copycat Chick-fil-A Sandwich",
    "ingredients": [
      "4 hamburger buns, split ",
      "1 head green leaf lettuce, leaves separated ",
      "1 beefsteak tomato, sliced ",
      "20 dill pickle slices ",
      "2 boneless, skinless chicken breasts ",
      "1 cup dill pickle juice ",
      "1 1/2 cups milk, divided ",
      "1 cup peanut oil ",
      "1 large egg ",
      "1/2 cup all-purpose flour ",
      "1 tablespoon confectioners' sugar ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/05/12/cpks-kung-pao-spaghetti/",
    "recipeTitle": "CPK's Kung Pao Spaghetti",
    "ingredients": [
      "1 pound spaghetti ",
      "2 tablespoons vegetable oil ",
      "3 boneless, skinless thin-sliced chicken breasts ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 cloves garlic, minced ",
      "1/2 cup dry roasted peanuts ",
      "2 green onions, thinly sliced ",
      "2/3 cup reduced sodium soy sauce ",
      "1/2 cup chicken broth ",
      "1/2 cup dry sherry ",
      "2 tablespoons red chili paste with garlic, or more, to taste ",
      "1/4 cup sugar ",
      "2 tablespoons red wine vinegar ",
      "2 tablespoons cornstarch ",
      "1 tablespoon sesame oil"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/01/10/creamy-chicken-mushroom-soup/",
    "recipeTitle": "Creamy Chicken and Mushroom Soup",
    "ingredients": [
      "1 tablespoon olive oil ",
      "8 ounces boneless, skinless chicken thighs, cut into 1-inch chunks ",
      "Kosher salt and freshly ground black pepper ",
      "2 tablespoons unsalted butter ",
      "3 cloves garlic, minced ",
      "8 ounces cremini mushrooms, thinly sliced ",
      "1 onion, diced ",
      "3 carrots, peeled and diced ",
      "2 stalks celery, diced ",
      "1/2 teaspoon dried thyme ",
      "1/4 cup all-purpose flour ",
      "4 cups chicken stock ",
      "1 bay leaf ",
      "1/2 cup half and half, or more, as needed* ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1 sprig rosemary"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/04/11/creamy-mushroom-fettuccine/",
    "recipeTitle": "Creamy Mushroom Fettuccine",
    "ingredients": [
      "8 ounces fettuccine ",
      "2 tablespoons unsalted butter ",
      "2 cloves garlic, minced ",
      "1 pound cremini mushrooms, thinly sliced ",
      "1 onion, diced ",
      "1/2 teaspoon dried thyme ",
      "1/4 teaspoon dried dill ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons all-purpose flour ",
      "3/4 cup vegetable broth ",
      "1 cup half and half, or more, as needed* ",
      "2 cups baby spinach ",
      "1/4 cup freshly grated Parmesan ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/03/07/creamy-spinach-and-mushroom-lasagna/",
    "recipeTitle": "Creamy Spinach and Mushroom Lasagna",
    "ingredients": [
      "9 lasagna noodles ",
      "1 (15-ounce) package whole milk ricotta ",
      "2 (10-ounce) packages frozen chopped spinach, thawed and drained ",
      "3 cups shredded mozzarella cheese, dived ",
      "3/4 cup freshly grated Parmesan, divided ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1/4 cup unsalted butter ",
      "2 cloves garlic, minced ",
      "1 pound cremini mushrooms, thinly sliced ",
      "1 onion, diced ",
      "1/4 cup all-purpose flour ",
      "3 cups milk, at room temperature ",
      "1 teaspoon dried basil ",
      "1/2 teaspoon dried oregano ",
      "Pinch of nutmeg ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/08/13/easy-beef-broccoli/",
    "recipeTitle": "Easy Beef and Broccoli",
    "ingredients": [
      "2/3 cup reduced sodium soy sauce ",
      "1/2 cup chicken stock ",
      "1/4 cup honey ",
      "2 tablespoons rice wine vinegar ",
      "2 tablespoons brown sugar, packed ",
      "3 cloves garlic, minced ",
      "1 tablespoon sesame oil ",
      "1 tablespoon cornstarch ",
      "1 teaspoon Sriracha, or more, to taste ",
      "1 teaspoon ground ginger ",
      "1/4 teaspoon red pepper flakes ",
      "1 tablespoon olive oil ",
      "1 pound flank steak, thinly sliced across the grain ",
      "1 head broccoli, cut into florets"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/09/10/easy-burrito-bowls/",
    "recipeTitle": "Easy Burrito Bowls",
    "ingredients": [
      "1 cup uncooked rice ",
      "1 cup salsa, homemade or store-bought ",
      "3 cups chopped Romaine lettuce ",
      "1 (15.25-ounce) can whole kernel corn, drained ",
      "1 (15-ounce) black beans, drained and rinsed ",
      "2 Roma tomatoes, diced ",
      "1 avocado, halved, seeded, peeled and diced ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "1 cup sour cream ",
      "1 tablespoon chipotle paste* ",
      "1 clove garlic, pressed ",
      "Juice of 1 lime ",
      "1/4 teaspoon salt, or more, to taste "
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/03/23/easy-chimichurri-shrimp/",
    "recipeTitle": "Easy Chimichurri Shrimp",
    "ingredients": [
      "1 pound medium shrimp, peeled and deveined ",
      "2 tablespoons olive oil ",
      "2 cloves garlic, minced ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup parsley leaves, stems removed ",
      "1 cup cilantro leaves, stems removed ",
      "1 shallot, chopped ",
      "1 jalapeno, chopped, optional ",
      "3 cloves garlic, peeled ",
      "2 tablespoons fresh oregano ",
      "1/2 teaspoon crushed red pepper flakes ",
      "1/2 cup red wine vinegar ",
      "Juice of 1 lime ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/2 cup olive oil"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/04/25/easy-clam-chowder/",
    "recipeTitle": "Easy Clam Chowder",
    "ingredients": [
      "4 slices bacon, diced ",
      "2 tablespoons unsalted butter ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "1/2 teaspoon dried thyme ",
      "3 tablespoons all-purpose flour ",
      "1 cup milk ",
      "1 cup vegetable stock ",
      "2 (6.5-ounce) cans chopped clams, juices reserved ",
      "1 bay leaf ",
      "2 russet potatoes, peeled and diced ",
      "1 cup half and half* ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/02/13/easy-garlic-alfredo-tortellini/",
    "recipeTitle": "Easy Garlic Alfredo Tortellini",
    "ingredients": [
      "1 (9-ounce) package refrigerated three cheese tortellini ",
      "2 tablespoons unsalted butter ",
      "3 cloves garlic, minced ",
      "1/4 teaspoon crushed red pepper flakes ",
      "2 tablespoons all-purpose flour ",
      "1 cup milk, or more, as needed ",
      "1/2 cup half and half* ",
      "2 ounces cream cheese, cubed ",
      "1/4 cup freshly grated Parmesan cheese ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/06/22/easy-grilled-chicken/",
    "recipeTitle": "Easy Grilled Chicken",
    "ingredients": [
      "1/4 cup balsamic vinegar ",
      "Juice of 1 lemon ",
      "2 tablespoons olive oil ",
      "2 tablespoons Dijon mustard ",
      "2 tablespoons brown sugar, packed ",
      "1 tablespoon Worcestershire sauce ",
      "2 cloves garlic, minced ",
      "1/2 teaspoon dried thyme ",
      "1/2 teaspoon dried oregano ",
      "1/4 teaspoon dried rosemary ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 boneless, skinless chicken breasts ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/13/easy-homemade-ramen/",
    "recipeTitle": "Easy Homemade Ramen",
    "ingredients": [
      "1 tablespoon sesame oil ",
      "4 cloves garlic, minced ",
      "1 tablespoon freshly grated ginger ",
      "4 cups chicken broth ",
      "4 ounces shiitake mushrooms ",
      "1 tablespoon soy sauce, or more, to taste ",
      "3 (5.6-ounce) packages refrigerated Yaki-Soba, seasoning sauce packets discarded* ",
      "3 cups baby spinach ",
      "1 carrot, grated ",
      "2 tablespoons chopped chives"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/12/20/easy-linguine-clams/",
    "recipeTitle": "Easy Linguine with Clams",
    "ingredients": [
      "12 ounces linguine ",
      "3 tablespoons unsalted butter ",
      "3 cloves garlic, minced ",
      "Pinch of crushed red pepper flakes, optional ",
      "1/2 cup vegetable broth, or more, as needed ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 pounds littleneck clams, cleaned ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/03/easy-lo-mein/",
    "recipeTitle": "Easy Lo Mein",
    "ingredients": [
      "8 ounces lo mein egg noodles* ",
      "1 tablespoon olive oil ",
      "2 cloves garlic, minced ",
      "2 cups cremini mushrooms, sliced ",
      "1 red bell pepper, julienned ",
      "1 carrot, julienned ",
      "1/2 cup snow peas ",
      "3 cups baby spinach ",
      "2 tablespoons reduced sodium soy sauce, or more, to taste ",
      "2 teaspoons sugar ",
      "1 teaspoon sesame oil ",
      "1/2 teaspoon ground ginger ",
      "1/2 teaspoon Sriracha, or more, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/12/27/easy-one-pot-lasagna/",
    "recipeTitle": "Easy One Pot Lasagna",
    "ingredients": [
      "1 tablespoon olive oil ",
      "3 Italian sausage links, casing removed ",
      "1 (14.5-ounce) can diced tomatoes ",
      "1 (8-ounce) can tomato sauce ",
      "1 teaspoon dried oregano ",
      "1 teaspoon dried basil ",
      "1/2 teaspoon garlic powder ",
      "1/2 teaspoon crushed red pepper flakes, optional ",
      "8 ounces farfalle pasta ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup shredded mozzarella cheese ",
      "1/4 cup freshly grated Parmesan ",
      "1 cup ricotta cheese ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/01/31/easy-pork-chops-with-sweet-and-sour-glaze/",
    "recipeTitle": "Easy Pork Chops with Sweet and Sour Glaze",
    "ingredients": [
      "4 (8-ounce) pork chops, bone-in, 3/4-inch to 1-inch thick ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons unsalted butter ",
      "1/4 cup balsamic vinegar ",
      "3 tablespoons honey ",
      "2 cloves garlic minced ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon dried basil ",
      "1/2 teaspoon dried thyme ",
      "Pinch of crushed red pepper flakes, optional ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/01/16/easy-shrimp-broccoli-stir-fry/",
    "recipeTitle": "Easy Shrimp and Broccoli Stir Fry",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 1/2 pounds medium shrimp, peeled and deveined ",
      "24 ounces broccoli florets* ",
      "1 teaspoon sesame seeds ",
      "1 green onion, thinly sliced ",
      "3 tablespoons reduced sodium soy sauce ",
      "2 tablespoons oyster sauce ",
      "1 tablespoon rice wine vinegar ",
      "1 tablespoon brown sugar, packed ",
      "1 tablespoon freshly grated ginger ",
      "2 cloves garlic, minced ",
      "1 teaspoon sesame oil ",
      "1 teaspoon cornstarch ",
      "1 teaspoon Sriracha, optional"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/09/24/easy-taco-pie/",
    "recipeTitle": "Easy Taco Pie",
    "ingredients": [
      "1/2 cup Original Bisquick™ mix ",
      "1 cup milk ",
      "2 large eggs ",
      "1 tablespoon olive oil ",
      "8 ounces ground beef ",
      "1 small onion, diced ",
      "1/2 cup corn kernels, frozen, canned or roasted ",
      "1/2 cup canned black beans, drained and rinsed ",
      "1 tablespoon taco seasoning ",
      "1 (4.5-ounce) can chopped green chiles, drained ",
      "1 cup shredded Mexican blend cheese ",
      "1 cup chopped romaine lettuce ",
      "1 Roma tomato, diced"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/06/17/easy-thai-chicken/",
    "recipeTitle": "Easy Thai Chicken",
    "ingredients": [
      "2 tablespoons unsalted butter ",
      "8 bone-in, skin-on chicken thighs ",
      "1/4 cup peanuts, chopped ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "1/2 cup sweet chili sauce ",
      "2 tablespoons reduced sodium soy sauce ",
      "2 cloves garlic, minced ",
      "1 tablespoon fish sauce ",
      "1 tablespoon freshly grated ginger ",
      "Juice of 1 lime ",
      "1 teaspoon Sriracha, or more, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/02/18/easy-thai-shrimp-soup/",
    "recipeTitle": "Easy Thai Shrimp Soup",
    "ingredients": [
      "1 cup uncooked basmati rice ",
      "2 tablespoons unsalted butter ",
      "1 pound medium shrimp, peeled and deveined ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "1 red bell pepper, diced ",
      "1 tablespoon freshly grated ginger ",
      "2 tablespoon red curry paste ",
      "2 (12-ounce) cans unsweetened coconut milk ",
      "4 cups vegetable stock ",
      "Juice of 1 lime ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/07/25/egg-salad-blta-sandwich/",
    "recipeTitle": "Egg Salad BLTA Sandwich",
    "ingredients": [
      "4 slices applewood smoked bacon ",
      "4 large eggs ",
      "2 tablespoons mayonnaise ",
      "1 teaspoon red wine vinegar ",
      "2 teaspoons Dijon mustard ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 slices wheat bread, toasted ",
      "1/2 cup baby spinach ",
      "1 tomato, thinly sliced ",
      "1 avocado, halved, seeded, peeled and thinly sliced"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/10/18/enchilada-pasta/",
    "recipeTitle": "Enchilada Pasta",
    "ingredients": [
      "16 ounces extra wide egg noodles ",
      "1 1/4 cups enchilada sauce ",
      "1 cup canned corn kernels, drained ",
      "1 cup canned black beans, drained and rinsed ",
      "1 cup shredded cheddar cheese, divided ",
      "1 cup shredded Monterey Jack cheese, divided ",
      "1/4 cup Greek yogurt ",
      "1 (4-ounce) can diced green chiles ",
      "1 tablespoon olive oil ",
      "1 pound ground beef ",
      "4 ounces cream cheese ",
      "1/2 teaspoon chili powder, or more to taste ",
      "1/4 teaspoon cumin ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 avocado, halved, seeded, peeled and diced ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/04/23/firecracker-chicken/",
    "recipeTitle": "Firecracker Chicken",
    "ingredients": [
      "1 pound boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/2 cup cornstarch ",
      "2 large eggs, beaten ",
      "1/4 cup vegetable oil ",
      "3/4 cup Imperial Sugar Light Brown Sugar ",
      "1/3 cup buffalo sauce, or more, to taste ",
      "1 tablespoon apple cider vinegar ",
      "1/4 teaspoon salt ",
      "1/4 teaspoon red pepper flakes, or more, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/06/27/fish-tacos-with-chipotle-mayo/",
    "recipeTitle": "Fish Tacos with Chipotle Mayo",
    "ingredients": [
      "1 pound tilapia fillets, cut in half lengthwise ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 limes, juiced ",
      "4 cloves garlic, minced ",
      "2 tablespoons unsalted butter ",
      "8 taco shells ",
      "1 cup shredded red cabbage ",
      "2 avocados, halved, seeded, peeled and diced ",
      "2 Roma tomatoes, diced ",
      "2 tablespoons fresh chopped cilantro leaves ",
      "1/4 cup mayonnaise ",
      "1/4 cup Greek yogurt ",
      "1 tablespoon chipotle paste ",
      "1 tablespoon freshly squeezed lime juice ",
      "2 cloves garlic, pressed"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/06/30/fusilli-caesar-salad/",
    "recipeTitle": "Fusilli Caesar Salad",
    "ingredients": [
      "8 ounces fusilli pasta ",
      "6 cups chopped romaine lettuce ",
      "1/4 cup grated Parmesan cheese ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons olive oil ",
      "2 tablespoons unsalted butter, melted ",
      "1 tablespoon chopped fresh parsley leaves ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon dried basil ",
      "1/4 teaspoon garlic powder ",
      "1 (12-count) package KING'S HAWAIIAN Original Hawaiian Sweet Dinner Rolls, diced into 1-inch cubes ",
      "1/2 cup mayonnaise ",
      "1/3 cup grated Parmesan cheese ",
      "1/4 cup freshly squeezed lemon juice ",
      "2 tablespoons olive oil ",
      "1 teaspoon Worcestershire sauce ",
      "1 anchovy fillet, rinsed, dried and chopped, optional ",
      "2 cloves garlic, minced ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/11/29/garlic-brown-sugar-chicken/",
    "recipeTitle": "Garlic Brown Sugar Chicken",
    "ingredients": [
      "8 bone-in, skin-on chicken thighs ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "3 tablespoons unsalted butter, divided ",
      "4 cloves garlic, minced ",
      "1/4 cup brown sugar, packed ",
      "1 tablespoon honey ",
      "1/2 teaspoon dried oregano ",
      "1/4 teaspoon dried thyme ",
      "1/4 teaspoon dried basil ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/07/11/garlic-butter-fettuccine-with-chicken-and-zucchini/",
    "recipeTitle": "Garlic Butter Fettuccine with Chicken and Zucchini",
    "ingredients": [
      "8 ounces fettuccine ",
      "2 boneless, skinless chicken breasts ",
      "1 tablespoon Italian seasoning ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons olive oil, divided ",
      "Juice of 1 lemon ",
      "2 zucchini, sliced ",
      "1 yellow squash, sliced ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1/4 cup unsalted butter ",
      "3 cloves garlic, minced ",
      "1 cup heavy cream, or more, to taste ",
      "1/2 teaspoon dried basil ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon crushed red pepper flakes, optional ",
      "1/2 cup freshly grated Parmesan cheese ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/03/13/garlic-butter-shrimp-pasta/",
    "recipeTitle": "Garlic Butter Shrimp Pasta",
    "ingredients": [
      "8 ounces fettuccine ",
      "1 pound medium shrimp, peeled and deveined ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "8 tablespoons (1 stick) unsalted butter, divided ",
      "4 cloves garlic, minced ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon crushed red pepper flakes ",
      "2 cups baby arugula ",
      "1/4 cup freshly grated Parmesan ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/11/07/lightened-up-greek-yogurt-chicken-salad-sandwich/",
    "recipeTitle": "Greek Yogurt Chicken Salad Sandwich",
    "ingredients": [
      "1 pound cooked chicken breast, shredded ",
      "1/2 cup diced red onion ",
      "1/2 cup diced apple ",
      "2/3 cup grapes, halved ",
      "1/3 cup dried cranberries ",
      "1/4 cup sliced almonds ",
      "1/2 cup plain Greek yogurt ",
      "1 tablespoon freshly squeezed lemon juice, or more, to taste ",
      "1/2 teaspoon garlic powder ",
      "Kosher salt and freshly ground black pepper ",
      "4 rolls ciabatta bread, toasted, for serving"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/02/17/greek-yogurt-egg-salad-sandwich-sundaysupper/",
    "recipeTitle": "Greek Yogurt Egg Salad Sandwich",
    "ingredients": [
      "8 large eggs ",
      "2/3 cup plain Greek yogurt ",
      "1 tablespoon mayonnaise ",
      "1 teaspoon dried dill ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 baguette, cut into 3-4 equal pieces, toasted, for serving ",
      "2 cups arugula, for serving ",
      "2 Roma tomatoes, thinly sliced, for serving ",
      "1 avocado, halved, seeded, peeled and thinly sliced, for serving"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/05/27/green-chili-bacon-cheeseburger-sliders-sundaysupper/",
    "recipeTitle": "Green Chili Bacon Cheeseburger Sliders",
    "ingredients": [
      "2 (4-ounce) cans diced green chiles, divided ",
      "1/2 tablespoon honey ",
      "1 tablespoon freshly squeezed lime juice ",
      "1 pound ground beef ",
      "3 ounces Monterey Jack cheese, cut into tiny cubes, plus more for topping ",
      "2 cloves garlic, minced ",
      "1/2 teaspoon ground cumin ",
      "1/2 teaspoon onion powder ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 slices bacon ",
      "4 split pretzel slider buns, toasted, for serving ",
      "Lettuce, for serving ",
      "2 Roma tomatoes, thinly sliced, for serving"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/07/14/grilled-corn-salad-and-recipegirl-cookbook-giveaway/",
    "recipeTitle": "Grilled Corn Salad",
    "ingredients": [
      "5 ears corn, shucked and rinsed ",
      "1 cup cherry tomatoes, halved ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1/2 cup fresh basil leaves, chiffonade ",
      "1/4 cup diced red onion ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "3 tablespoons olive oil ",
      "3 tablespoons apple cider vinegar ",
      "1 tablespoon freshly squeezed lemon juice ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/07/25/grilled-nacho-pizza/",
    "recipeTitle": "Grilled Nacho Pizza",
    "ingredients": [
      "1 can (11-ounce) Pillsbury® refrigerated thin pizza crust ",
      "1/2 cup cooked refried beans ",
      "1 can (4.5-ounces) chopped green chiles ",
      "1 Roma tomato, diced ",
      "1 cup shredded cheddar cheese ",
      "1 avocado, halved, seeded, peeled and diced ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/11/01/gruyere-bacon-mac-cheese/",
    "recipeTitle": "Gruyere Bacon Mac and Cheese",
    "ingredients": [
      "8 ounces elbow macaroni ",
      "6 slices Jones Dairy Farm Sliced Bacon, diced ",
      "2 1/2 cups heavy cream ",
      "2 cloves garlic, minced ",
      "1 tablespoon chopped fresh thyme leaves ",
      "1 1/4 cups shredded gruyere cheese ",
      "1/4 cup grated Parmesan ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/09/22/harvest-cobb-salad/",
    "recipeTitle": "Harvest Cobb Salad",
    "ingredients": [
      "4 slices bacon, diced ",
      "2 large eggs ",
      "6 cups chopped romaine lettuce ",
      "1 apple, diced ",
      "1 pear, diced ",
      "1/2 cup Fisher Nuts Pecan Halves ",
      "1/3 cup dried cranberries ",
      "1/3 cup crumbled goat cheese ",
      "1/3 cup mayonnaise ",
      "1/4 cup milk ",
      "2 tablespoons sugar ",
      "1 tablespoon apple cider vinegar ",
      "1 tablespoon poppy seeds"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/03/19/hawaiian-bbq-chicken-taquitos/",
    "recipeTitle": "Hawaiian BBQ Chicken Taquitos",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 red onion, thinly sliced ",
      "2 cups shredded chicken breast ",
      "1 cup shredded sharp cheddar cheese ",
      "1 cup diced pineapple ",
      "1/3 cup BBQ sauce, plus more for serving ",
      "2 tablespoons chopped cilantro leaves ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "8-10 Mission Foods Super Soft Medium Flour Tortillas, softened"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/08/06/hawaiian-chicken-and-pineapple/",
    "recipeTitle": "Hawaiian Chicken and Pineapple",
    "ingredients": [
      "1/4 cup reduced sodium soy sauce ",
      "1/4 cup pineapple juice ",
      "1/4 cup brown sugar, packed ",
      "2 tablespoons ketchup ",
      "3 cloves garlic, minced ",
      "1 tablespoon freshly grated ginger ",
      "1 teaspoon sesame oil ",
      "1 teaspoon Sriracha, optional ",
      "4 boneless, skinless chicken breasts ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "1 large pineapple, peeled, cored and cut into 8 to 10 wedges ",
      "1/4 cup brown sugar"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/06/06/hawaiian-hot-dogs-with-mango-salsa/",
    "recipeTitle": "Hawaiian Hot Dogs with Mango Salsa",
    "ingredients": [
      "1 mango, peeled and diced ",
      "1 Roma tomato, diced ",
      "1 jalapeño, seeded minced ",
      "1/4 cup diced red onion ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "2 tablespoons freshly squeezed lime juice ",
      "1/2 teaspoon honey ",
      "Pinch of salt ",
      "6 Hebrew National Hot Dogs ",
      "6 hot dog buns ",
      "1 avocado, halved, seeded, peeled and thinly sliced"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/03/17/homemade-enchilada-sauce/",
    "recipeTitle": "Homemade Enchilada Sauce",
    "ingredients": [
      "1/4 cup vegetable oil ",
      "1/4 cup all-purpose flour ",
      "1 (28-ounce) can crushed tomatoes ",
      "2 tablespoons plus 2 teaspoons chili powder ",
      "1 1/2 teaspoons dried oregano ",
      "1 teaspoon cumin ",
      "1 teaspoon garlic powder ",
      "1 teaspoon onion powder ",
      "1 tablespoon brown sugar, packed ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/07/10/honey-balsamic-chicken-breasts-and-veggies/",
    "recipeTitle": "Honey Balsamic Chicken Breasts and Veggies",
    "ingredients": [
      "16 ounces baby red potatoes, halved ",
      "2 cups cherry tomatoes ",
      "2 tablespoons olive oil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 pound asparagus, trimmed ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1/4 cup balsamic vinegar ",
      "2 tablespoons honey ",
      "1 tablespoon Dijon mustard ",
      "2 cloves garlic, minced ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon dried basil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 boneless, skinless chicken breasts"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/08/honey-garlic-chicken/",
    "recipeTitle": "Honey Garlic Chicken",
    "ingredients": [
      "1 cup vegetable oil ",
      "1 cup all-purpose flour ",
      "1 teaspoon dried thyme ",
      "1 teaspoon dried oregano ",
      "1/2 teaspoon paprika ",
      "1/4 teaspoon cayenne pepper ",
      "1 pound boneless, skinless chicken breasts, cut crosswise in half ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 large eggs, beaten ",
      "1/2 cup honey, or more, to taste ",
      "4 cloves garlic, minced ",
      "2 tablespoons soy sauce ",
      "1 tablespoon cornstarch"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/08/18/honey-glazed-salmon/",
    "recipeTitle": "Honey Glazed Salmon",
    "ingredients": [
      "4 salmon filets ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 tablespoons all-purpose flour ",
      "4 tablespoons honey ",
      "2 tablespoons olive oil ",
      "Zest of 1 lime ",
      "6 tablespoons unsalted butter ",
      "2 cloves garlic, pressed ",
      "1 tablespoon honey ",
      "Juice of 1 lime ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/02/07/honey-salmon-foil/",
    "recipeTitle": "Honey Salmon in Foil",
    "ingredients": [
      "1/4 cup honey ",
      "3 cloves garlic, minced ",
      "1 tablespoon olive oil ",
      "1 tablespoon white wine vinegar ",
      "1 tablespoon fresh thyme leaves ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 pounds salmon"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/07/16/honey-walnut-shrimp/",
    "recipeTitle": "Honey Walnut Shrimp",
    "ingredients": [
      "1 cup vegetable oil ",
      "1/2 cup sugar ",
      "1/2 cup walnut halves ",
      "3 tablespoons mayonnaise ",
      "1 1/2 teaspoons honey ",
      "1 1/2 teaspoons condensed milk ",
      "1 pound medium shrimp, peeled and deveined ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 large egg, beaten ",
      "1/2 cup cornstarch"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/06/08/individual-chicken-pot-pies/",
    "recipeTitle": "Individual Chicken Pot Pies",
    "ingredients": [
      "8 tablespoons salted butter, divided",
      "1 leek, white and light green parts, sliced and rinsed in a bowl of water",
      "2 cups sliced carrots",
      "2 cups chopped asparagus",
      "1 cup frozen peas",
      "2 cups shredded chicken",
      "3 cloves garlic",
      "1/2 cup all-purpose flour",
      "2 cups chicken stock",
      "Kosher salt and freshly ground black pepper, to taste",
      "1 puff pastry sheet, cut into four 4 1/4-inch squares",
      "1 large egg, beaten"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/03/09/irish-beef-stew/",
    "recipeTitle": "Irish Beef Stew",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound stew meat, cut into 1-inch cubes ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "1 leek, thinly sliced ",
      "2 carrots, peeled and diced ",
      "1 tablespoon tomato paste ",
      "1 cup beef broth ",
      "1 cup dark stout beer* ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1 teaspoon fresh thyme leaves ",
      "1 bay leaf ",
      "2 tablespoons unsalted butter, melted ",
      "2 tablespoons all-purpose flour ",
      "1/2 cup frozen peas ",
      "2 pounds russet potatoes, peeled and quartered ",
      "4 cloves garlic ",
      "1/2 cup half and half* ",
      "2 tablespoons unsalted butter ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/08/08/italian-meatball-sandwiches/",
    "recipeTitle": "Italian Meatball Sandwiches",
    "ingredients": [
      "1 1/2 pounds ground beef ",
      "1 shallot, diced ",
      "2 cloves garlic, minced ",
      "1 tablespoon chopped fresh parsley leaves ",
      "3/4 cup Italian bread crumbs ",
      "1/4 cup grated Parmesan ",
      "1 large egg ",
      "1 tablespoon olive oil ",
      "4 demi baguettes, toasted, for serving ",
      "4 ounces mozzarella, sliced ",
      "1 (28-ounce) can tomato sauce ",
      "1/2 teaspoon basil ",
      "1/4 teaspoon garlic powder ",
      "1/4 teaspoon red pepper flakes ",
      "Pinch of sugar, optional"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/08/04/jalapeno-popper-grilled-cheese/",
    "recipeTitle": "Jalapeno Popper Grilled Cheese",
    "ingredients": [
      "4 jalapeños, trimmed and halved lengthwise ",
      "8 slices bacon ",
      "4 slices bread ",
      "4 tablespoons unsalted butter ",
      "4 tablespoons cream cheese, softened ",
      "2 cups shredded Great Midwest Jalapeño Jack"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/05/24/jalapeno-popper-pizza/",
    "recipeTitle": "Jalapeño Popper Pizza",
    "ingredients": [
      "2 tablespoons olive oil ",
      "4 slices bacon, chopped ",
      "2 jalapeños, sliced ",
      "1 shallot, sliced ",
      "1/4 cup semolina or yellow cornmeal ",
      "1 ball pizza dough, homemade or store-bought ",
      "6 ounces cream cheese, softened ",
      "1 1/2 cups grated jalapeño monterey jack cheese"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/06/04/kale-pesto-egg-salad-and-a-giveaway/",
    "recipeTitle": "Kale Pesto Egg Salad",
    "ingredients": [
      "8 large eggs ",
      "1/4 cup Greek yogurt ",
      "3 tablespoons mayonnaise ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 baguette, cut into 3-4 equal pieces, toasted, for serving ",
      "2 cups arugula, for serving ",
      "2 Roma tomatoes, thinly sliced, for serving ",
      "1 1/2 cups kale leaves ",
      "2 garlic cloves, peeled ",
      "3 tablespoons pine nuts ",
      "1/4 cup grated Parmesan ",
      "1/3 cup STAR Extra Virgin Olive Oil ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/03/25/kale-salad-with-meyer-lemon-vinaigrette/",
    "recipeTitle": "Kale Salad with Meyer Lemon Vinaigrette",
    "ingredients": [
      "4 cups chopped kale ",
      "1 avocado, diced ",
      "1/2 cup cooked quinoa ",
      "1/2 cup pomegranate arils ",
      "1/2 cup chopped pecans ",
      "1/4 cup crumbled goat cheese ",
      "1/4 cup olive oil ",
      "1/4 cup apple cider vinegar ",
      "3 tablespoons freshly squeezed Meyer lemon juice ",
      "Zest of 1 Meyer lemon ",
      "1 tablespoon sugar"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/07/07/korean-beef-bowl/",
    "recipeTitle": "Korean Beef Bowl",
    "ingredients": [
      "1/3 cup brown sugar, packed ",
      "1/4 cup soy sauce ",
      "1 tablespoon sesame oil ",
      "1/2 teaspoon crushed red-pepper flakes, or more to taste ",
      "1/4 teaspoon ground ginger ",
      "1 tablespoon vegetable oil ",
      "3 cloves garlic, minced ",
      "1 pound ground beef ",
      "2 green onions, thinly sliced ",
      "Cooked rice, for serving"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/07/05/korean-fried-chicken/",
    "recipeTitle": "Korean Fried Chicken",
    "ingredients": [
      "2 cups vegetable oil ",
      "2 pounds chicken wings ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/2 cup soy sauce ",
      "1/4 cup plus 2 tablespoons sugar"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/08/09/kung-pao-chicken-lettuce-wraps/",
    "recipeTitle": "Kung Pao Chicken Lettuce Wraps",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound ground chicken ",
      "2 cloves garlic, minced ",
      "1 zucchini, diced ",
      "1 (8-ounce) can whole water chestnuts, drained and diced ",
      "2 green onions, thinly sliced ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 head butter lettuce ",
      "1/4 cup chopped peanuts, optional ",
      "3 tablespoons reduced sodium soy sauce ",
      "2 tablespoons dry sherry ",
      "1 tablespoon chili garlic sauce ",
      "1 tablespoon brown sugar ",
      "2 teaspoons rice vinegar ",
      "2 teaspoons cornstarch ",
      "1 teaspoon sesame oil"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/11/28/ham-cobb-salad/",
    "recipeTitle": "Leftover Thanksgiving Ham Cobb Salad",
    "ingredients": [
      "5 cups chopped romaine lettuce ",
      "1 cup diced ham ",
      "1/2 cup cherry tomatoes, halved ",
      "1 avocado, halved, seeded, peeled and diced ",
      "2 hard-boiled eggs, diced ",
      "1/4 cup crumbled goat cheese ",
      "1/3 cup Greek yogurt ",
      "1/4 cup buttermilk ",
      "1/4 teaspoon dill ",
      "1/4 teaspoon garlic powder ",
      "1/4 teaspoon onion powder ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/11/21/leftover-thanksgiving-turkey-pesto-panini/",
    "recipeTitle": "Leftover Thanksgiving Turkey Pesto Panini",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 loaf of French bread, cut into 3-4 equal pieces ",
      "1/2 cup pesto, homemade or store-bought ",
      "4-8 ounces mozzarella, sliced ",
      "2 cups chopped leftover Thanksgiving turkey ",
      "2 Roma tomatoes, thinly sliced ",
      "1 avocado, halved, seeded, peeled and sliced"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/11/22/leftover-thanksgiving-turkey-pot-pie/",
    "recipeTitle": "Leftover Thanksgiving Turkey Pot Pie",
    "ingredients": [
      "2 tablespoons unsalted butter ",
      "2 cloves garlic, minced ",
      "1 small onion, diced ",
      "2/3 cup frozen corn kernels ",
      "1/2 cup frozen diced carrots ",
      "1/2 cup frozen peas ",
      "1/3 cup all-purpose flour ",
      "1 cup chicken broth ",
      "3/4 cup milk ",
      "1 teaspoon fresh thyme leaves ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 cups chopped leftover Thanksgiving turkey ",
      "1 puff pastry sheet, cut into four 4 1/4-inch squares ",
      "1 large egg, beaten"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/12/31/lemon-butter-chicken/",
    "recipeTitle": "Lemon Butter Chicken",
    "ingredients": [
      "8 bone-in, skin-on chicken thighs ",
      "1 tablespoon smoked paprika ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "3 tablespoons unsalted butter, divided ",
      "3 cloves garlic, minced ",
      "1 cup chicken broth ",
      "1/2 cup heavy cream ",
      "1/4 cup freshly grated Parmesan ",
      "Juice of 1 lemon ",
      "1 teaspoon dried thyme ",
      "2 cups baby spinach, chopped"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/03/14/lemon-butter-scallops/",
    "recipeTitle": "Lemon Butter Scallops",
    "ingredients": [
      "1 tablespoon unsalted butter ",
      "1 pound scallops ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons unsalted butter ",
      "2 cloves garlic, minced ",
      "Juice of 1 lemon ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/06/13/lemon-chicken-and-potatoes-in-foil/",
    "recipeTitle": "Lemon Chicken and Potatoes in Foil",
    "ingredients": [
      "3 tablespoons olive oil ",
      "1 tablespoon Dijon mustard ",
      "1 tablespoon whole grain mustard ",
      "1/2 teaspoon dried thyme ",
      "1/4 teaspoon dried rosemary ",
      "Zest of 1 lemon ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "16 ounces baby red potatoes, halved ",
      "1 tablespoon olive oil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 boneless, skinless chicken breasts ",
      "1 lemon, thinly sliced ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/04/25/lemon-chicken-orzo-soup/",
    "recipeTitle": "Lemon Chicken Orzo Soup",
    "ingredients": [
      "2 tablespoons olive oil, divided ",
      "1 pound boneless, skinless chicken thighs, cut into 1-inch chunks ",
      "Kosher salt and freshly ground black pepper ",
      "3 cloves garlic, minced ",
      "1 onion, diced ",
      "3 carrots, peeled and diced ",
      "2 stalks celery, diced ",
      "1/2 teaspoon dried thyme ",
      "5 cups chicken stock ",
      "2 bay leaves ",
      "3/4 cup uncooked orzo pasta ",
      "1 sprig rosemary ",
      "Juice of 1 lemon ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/03/20/lemon-chicken-with-asparagus-and-potatoes/",
    "recipeTitle": "Lemon Chicken with Asparagus and Potatoes",
    "ingredients": [
      "2 tablespoons olive oil ",
      "2 tablespoons Dijon mustard ",
      "2 tablespoons freshly squeezed lemon juice ",
      "Zest of 1 lemon ",
      "1/2 teaspoon dried thyme ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "8 bone-in, skin-on chicken thighs ",
      "2 tablespoons unsalted butter ",
      "2 cups baby red potatoes, halved ",
      "1 pound asparagus, trimmed"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/06/19/lemon-shrimp-with-garlic-and-herbs/",
    "recipeTitle": "Lemon Shrimp with Garlic and Herbs with Cilantro Lime Rice",
    "ingredients": [
      "2 cups cooked rice ",
      "2 tablespoons pine nuts ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "2 tablespoons butter, melted ",
      "Juice of 1/2 lime"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/05/23/lighter-general-tsos-chicken/",
    "recipeTitle": "Lighter General Tso's Chicken",
    "ingredients": [
      "1 1/2 pounds boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "1/4 cup all-purpose flour ",
      "2 large eggs, beaten ",
      "2 cups crushed Corn Flakes ",
      "1 1/2 cups chicken broth ",
      "1/3 cup hoisin sauce ",
      "1/4 cup rice vinegar ",
      "3 tablespoons reduced sodium soy sauce ",
      "3 tablespoon brown sugar, packed ",
      "2 tablespoons cornstarch"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/05/26/mexican-hot-dogs-with-chipotle-cream/",
    "recipeTitle": "Mexican Hot Dogs with Chipotle Cream",
    "ingredients": [
      "2 cups corn kernels ",
      "1/4 cup diced red onion ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "2 tablespoons freshly squeezed lime juice ",
      "Pinch of salt ",
      "1 avocado, halved, seeded, peeled and diced ",
      "6 Hebrew National Hot Dogs ",
      "6 hot dog buns ",
      "1/4 cup Greek yogurt ",
      "1 teaspoon chipotle peppers in adobo sauce, or more to taste"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/04/13/mini-blt-wedge-salads/",
    "recipeTitle": "Mini BLT Wedge Salads",
    "ingredients": [
      "4 large eggs ",
      "4 slices Oscar Mayer™ Bacon, diced ",
      "1 head iceberg lettuce ",
      "1/2 cup KRAFT® Classic Ranch Dressing ",
      "2 Roma tomatoes, diced ",
      "1/2 cup crumbled blue cheese ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/04/20/mini-cauliflower-pizzas/",
    "recipeTitle": "Mini Cauliflower Pizzas",
    "ingredients": [
      "1/3 cup marinara sauce ",
      "1/2 cup shredded mozzarella cheese ",
      "1/4 cup pepperoni minis ",
      "2 tablespoons chopped fresh basil leaves ",
      "1 head cauliflower, chopped ",
      "1 large egg ",
      "1/3 cup shredded mozzarella cheese ",
      "2 tablespoons freshly grated Parmesan ",
      "1 teaspoon dried basil ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon garlic powder ",
      "1/4 teaspoon onion powder ",
      "Kosher salt and freshly ground black pepper, to taste "
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/12/12/mini-lasagna-cups/",
    "recipeTitle": "Mini Lasagna Cups",
    "ingredients": [
      "1 tablespoon olive oil ",
      "2 Italian sausage links, casing removed ",
      "1 cup marinara sauce, homemade or store-bought ",
      "1 1/2 cups ricotta cheese ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "24 2-inch won ton wrappers ",
      "1 1/2 cups shredded mozzarella cheese ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/03/28/mushroom-corn-and-bacon-chowder/",
    "recipeTitle": "Mushroom, Corn and Bacon Chowder",
    "ingredients": [
      "4 slices bacon, diced ",
      "2 tablespoons unsalted butter ",
      "2 cloves garlic, minced ",
      "8 ounces shiitake mushrooms ",
      "1 onion, diced ",
      "1/2 teaspoon dried thyme ",
      "1/2 teaspoon dried dill ",
      "1/4 cup all-purpose flour ",
      "4 cups vegetable broth ",
      "1 bay leaf ",
      "1 pound red potatoes, diced ",
      "2 cups baby spinach ",
      "1 cup corn kernels, frozen, canned or roasted ",
      "1/2 cup half and half, or more, as needed* ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/09/05/olive-garden-alfredo-sauce/",
    "recipeTitle": "Olive Garden Alfredo Sauce",
    "ingredients": [
      "8 ounces fettuccine ",
      "1 tablespoon unsalted butter ",
      "3 cloves garlic, pressed ",
      "1/2 cup heavy cream ",
      "1/2 cup whole milk, or more, to taste ",
      "1/3 cup freshly grated Parmesan ",
      "1 large egg yolk, beaten ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/05/17/olive-garden-pasta-e-fagioli/",
    "recipeTitle": "Olive Garden Pasta e Fagioli",
    "ingredients": [
      "1 cup ditalini pasta ",
      "2 tablespoons olive oil, divided ",
      "1 pound spicy Italian sausage, casing removed ",
      "3 cloves garlic, minced ",
      "1 onion, diced ",
      "3 carrots, peeled and diced ",
      "2 stalks celery, diced ",
      "3 cups chicken broth ",
      "1 (16-ounce) can tomato sauce ",
      "1 (15-ounce) can diced tomatoes ",
      "1 teaspoon dried basil ",
      "1 teaspoon dried oregano ",
      "3/4 teaspoon dried thyme ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 (15-ounce) can red kidney beans, drained and rinsed ",
      "1 (15-ounce) can Great Northern beans, drained and rinsed"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/12/07/olive-garden-zuppa-toscana-copycat-recipe/",
    "recipeTitle": "Olive Garden Zuppa Toscana Copycat Recipe",
    "ingredients": [
      "4 slices bacon, diced ",
      "1 pound spicy Italian sausage, casing removed ",
      "1 tablespoon olive oil ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "4 cups chicken broth ",
      "3 russet potatoes, peeled and thinly sliced ",
      "3 cups baby spinach ",
      "1 1/2 cups heavy cream ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/06/one-pan-enchilada-bake/",
    "recipeTitle": "One Pan Enchilada Bake",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound ground beef ",
      "2 teaspoons Old El Paso™ taco seasoning mix ",
      "1 cup canned black beans, drained and rinsed ",
      "1 cup corn kernels, frozen, canned or roasted ",
      "1 cup Old El Paso™ mild enchilada sauce ",
      "1/2 cup tomato sauce ",
      "1 (7.5-ounce) tube refrigerated buttermilk biscuits, cut into quarters ",
      "1 cup shredded Mexican blend cheese ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/05/08/one-pan-garlic-ranch-chicken-and-veggies/",
    "recipeTitle": "One Pan Garlic Ranch Chicken and veggies",
    "ingredients": [
      "8 teaspoons brown sugar, divided ",
      "8 bone-in, skin-on chicken thighs ",
      "16 ounces baby red potatoes, halved ",
      "16 ounces baby peeled carrots ",
      "2 tablespoons olive oil ",
      "1 (1-ounce) package Ranch Seasoning and Salad Dressing Mix ",
      "3 cloves garlic, minced ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/05/30/one-pan-greek-chicken/",
    "recipeTitle": "One Pan Greek Chicken",
    "ingredients": [
      "16 ounces baby red potatoes, halved ",
      "16 ounces green beans, trimmed ",
      "2 tablespoons olive oil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves ",
      "8 bone-in, skin-on chicken thighs ",
      "1/4 cup olive oil ",
      "3 cloves garlic, minced ",
      "Juice of 1 lemon ",
      "1 tablespoon red wine vinegar ",
      "1 tablespoon dried oregano ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/06/27/one-pan-honey-garlic-chicken-and-veggies/",
    "recipeTitle": "One Pan Honey Garlic Chicken and Veggies",
    "ingredients": [
      "3 tablespoons olive oil, divided ",
      "2 tablespoons unsalted butter, melted ",
      "2 tablespoons honey ",
      "2 tablespoons brown sugar ",
      "1 tablespoon Dijon mustard ",
      "3 cloves garlic, minced ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon dried basil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "16 ounces baby red potatoes, halved ",
      "4 boneless, skinless chicken breasts ",
      "24 ounces broccoli florets* ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/06/19/one-pan-lemon-herb-salmon-and-zucchini/",
    "recipeTitle": "One Pan Lemon Herb Salmon and Zucchini",
    "ingredients": [
      "4 zucchini, chopped ",
      "2 tablespoons olive oil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons brown sugar, packed ",
      "2 tablespoons freshly squeezed lemon juice ",
      "1 tablespoon Dijon mustard ",
      "2 cloves garlic, minced ",
      "1/2 teaspoon dried dill ",
      "1/2 teaspoon dried oregano ",
      "1/4 teaspoon dried thyme ",
      "1/4 teaspoon dried rosemary ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 (5-ounce) salmon fillets ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/04/09/one-pan-mexican-quinoa/",
    "recipeTitle": "One Pan Mexican Quinoa",
    "ingredients": [
      "1 tablespoon olive oil ",
      "2 cloves garlic, minced ",
      "1 jalapeno, minced ",
      "1 cup quinoa ",
      "1 cup vegetable broth ",
      "1 (15-ounce) can black beans, drained and rinsed ",
      "1 (14.5 oz) can fire-roasted diced tomatoes ",
      "1 cup corn kernels ",
      "1 teaspoon chili powder ",
      "1/2 teaspoon cumin ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 avocado, halved, seeded, peeled and diced ",
      "Juice of 1 lime ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/07/29/one-pan-ranch-pork-chops-and-veggies/",
    "recipeTitle": "One Pan Ranch Pork Chops and Veggies",
    "ingredients": [
      "4 (8-ounce) pork chops, bone-in, 3/4-inch to 1-inch thick ",
      "16 ounces baby red potatoes, halved ",
      "16 ounces green beans, trimmed ",
      "2 tablespoons olive oil ",
      "1 (1-ounce) package Ranch Seasoning and Salad Dressing Mix ",
      "3 cloves garlic, minced ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves "
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/05/18/one-pan-salmon-and-veggies/",
    "recipeTitle": "One Pan Salmon and Veggies",
    "ingredients": [
      "4 cups chopped kale leaves, ribs and thick stems removed ",
      "2 cups cherry tomatoes ",
      "2 tablespoons olive oil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 (5-ounce) salmon fillets ",
      "2 tablespoons chopped fresh parsley leaves ",
      "3 tablespoons French's Sweet Yellow Mustard* ",
      "1 tablespoon whole grain mustard ",
      "1 tablespoon honey ",
      "1 tablespoon reduced sodium soy sauce ",
      "1 teaspoon hot sauce, optional"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/12/09/one-pot-andouille-sausage-skillet-pasta/",
    "recipeTitle": "One Pot Andouille Sausage Skillet Pasta",
    "ingredients": [
      "1 tablespoon olive oil ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "1 (12.8-ounce) package smoked andouille sausage, thinly sliced ",
      "2 cups chicken broth ",
      "1 (14.5-ounce) can diced tomatoes ",
      "1/2 cup milk ",
      "8 ounces elbows pasta ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup shredded pepper jack cheese"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/20/one-pot-baked-ziti/",
    "recipeTitle": "One Pot Baked Ziti",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound Italian sausage, casings removed ",
      "4 cloves garlic, minced ",
      "1/4 teaspoon red pepper flakes, or more, to taste ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 (28-ounce) can crushed tomatoes ",
      "12 ounces ziti pasta ",
      "3/4 cup grated Parmesan cheese ",
      "1/2 cup heavy cream ",
      "1 cup shredded mozzarella cheese ",
      "1/4 cup basil leaves, chiffonade"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/06/27/one-pot-bbq-chicken-pasta/",
    "recipeTitle": "One Pot BBQ Chicken Pasta",
    "ingredients": [
      "4 slices bacon, diced ",
      "1 boneless, skinless chicken breast, cut into 1-inch chunks ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "2 cups chicken broth ",
      "1 (14.5-ounce) can diced tomatoes ",
      "1/2 cup milk ",
      "1/4 teaspoon crushed red pepper flakes, or more, to taste ",
      "3 cups rotini pasta ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/4 cup barbecue sauce, or more, to taste ",
      "1 cup shredded cheddar cheese"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/07/25/one-pot-beans-chicken-and-rice/",
    "recipeTitle": "One Pot Beans, Chicken and Rice",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound boneless, skinless chicken thighs, cut into 1-inch chunks ",
      "Kosher salt and freshly ground black pepper ",
      "2 cloves garlic, minced ",
      "1 jalapeno, minced ",
      "2 cups vegetable broth ",
      "1 (15-ounce) can black beans, drained and rinsed ",
      "1 (15-ounce) can whole kernel corn, drained ",
      "2 cups instant white rice ",
      "2 Roma tomatoes, diced ",
      "Juice of 2 limes ",
      "2 teaspoons lime zest ",
      "1/4 cup chopped fresh cilantro leaves ",
      "Kosher salt and freshly ground black pepper, to taste."
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/11/one-pot-cheeseburger-casserole/",
    "recipeTitle": "One Pot Cheeseburger Casserole",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 1/2 pounds ground beef ",
      "1 onion, diced ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 (28-ounce) can diced tomatoes, undrained ",
      "1 (8-ounce) can tomato sauce ",
      "2 cups chicken broth ",
      "1/4 cup ketchup ",
      "2 teaspoons dijon mustard ",
      "1 pound rotini pasta ",
      "2 cups shredded cheddar cheese ",
      "1 Roma tomato, diced ",
      "2 green onions, sliced "
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/03/15/one-pot-chili-mac-cheese/",
    "recipeTitle": "One Pot Chili Mac and Cheese",
    "ingredients": [
      "1 tablespoon olive oil ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "8 ounces ground beef ",
      "4 cups chicken broth ",
      "1 (14.5-ounce) can diced tomatoes ",
      "3/4 cup canned white kidney beans, drained and rinsed ",
      "3/4 cup canned kidney beans, drained and rinsed ",
      "2 teaspoons chili powder ",
      "1 1/2 teaspoon cumin ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "10 ounces uncooked elbows pasta ",
      "3/4 cup shredded cheddar cheese ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/11/one-pot-garlic-parmesan-pasta/",
    "recipeTitle": "One Pot Garlic Parmesan Pasta",
    "ingredients": [
      "1 tablespoon olive oil ",
      "4 cloves garlic, minced ",
      "2 cups chicken broth ",
      "1 cup milk, or more, as needed ",
      "2 tablespoons unsalted butter ",
      "8 ounces uncooked fettuccine ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/4 cup freshly grated Parmesan cheese ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/08/15/one-pot-lemon-orzo-shrimp/",
    "recipeTitle": "One Pot Lemon Orzo Shrimp",
    "ingredients": [
      "1 pound medium shrimp, peeled and deveined ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 tablespoon olive oil ",
      "3 cloves garlic, minced ",
      "1 onion, diced ",
      "1/2 teaspoon dried oregano ",
      "8 ounces orzo pasta ",
      "2 cups chicken broth ",
      "1 (14.5-ounce) can diced tomatoes, drained ",
      "1/2 cup frozen peas ",
      "Juice of 1 lemon ",
      "1/4 cup grated Parmesan cheese"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/08/27/one-pot-mexican-rice-casserole/",
    "recipeTitle": "One Pot Mexican Rice Casserole",
    "ingredients": [
      "1 tablespoon olive oil ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "1 red bell pepper, diced ",
      "1 zucchini, diced ",
      "1 cup corn kernels, frozen, canned or roasted ",
      "1 (14.5-ounce) can petite diced tomatoes, undrained ",
      "1 cup white rice* ",
      "1 teaspoon chili powder ",
      "1/2 teaspoon cumin ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup shredded cheddar cheese ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/09/22/one-pot-mexican-skillet-pasta/",
    "recipeTitle": "One Pot Mexican Skillet Pasta",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound ground turkey ",
      "2 cups uncooked elbows pasta ",
      "2 cups salsa, homemade or store-bought ",
      "1 1/2 cups chicken broth ",
      "1 (15-ounce) can tomato sauce ",
      "1 Roma tomato, diced ",
      "1 cup corn kernels, frozen, canned or roasted ",
      "1 cup canned black beans, rinsed ",
      "1/2 cup shredded cheddar cheese ",
      "1 avocado, halved, seeded, peeled and diced ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/05/16/one-pot-pasta/",
    "recipeTitle": "One Pot Pasta",
    "ingredients": [
      "1 pound spaghetti ",
      "1 (12.8-ounce) package smoked andouille sausage, thinly sliced ",
      "1 large onion, thinly sliced ",
      "3 cups halved grape tomatoes ",
      "2 cups fresh basil leaves, loosely packed ",
      "4 cloves garlic, thinly sliced ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup grated Parmesan"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/08/16/one-pot-pizza-pasta-bake/",
    "recipeTitle": "One Pot Pizza Pasta Bake",
    "ingredients": [
      "1 tablespoon olive oil ",
      "8 ounces spicy Italian sausage, casing removed ",
      "1/2 cup mini pepperoni, divided ",
      "1 (15-ounce) can tomato sauce ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon dried basil ",
      "1/4 teaspoon garlic powder ",
      "8 ounces rotini pasta ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup shredded mozzarella cheese ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/03/30/one-pot-shrimp-parmesan-pasta/",
    "recipeTitle": "One Pot Shrimp Parmesan Pasta",
    "ingredients": [
      "1 tablespoon olive oil ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "1 (24-ounce) jar Ragú® Traditional Sauce ",
      "2 cups chicken broth ",
      "1/2 teaspoon crushed red pepper flakes ",
      "10 ounces uncooked fettuccine ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 pound medium shrimp, peeled and deveined ",
      "2 cups baby spinach ",
      "1/4 cup freshly grated Parmesan cheese"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/08/04/one-pot-taco-pasta/",
    "recipeTitle": "One Pot Taco Pasta",
    "ingredients": [
      "1 pound ground beef ",
      "1 onion, diced ",
      "2 cloves garlic, minced ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup canned corn kernels, drained ",
      "1/2 cup canned black beans, drained and rinsed ",
      "1 (4.5-ounce) can Old El Paso™ chopped green chiles, drained ",
      "1 (14.5-ounce) can diced tomatoes, undrained ",
      "1 cup Old El Paso™ mild taco sauce ",
      "1 cup salsa ",
      "2 cups elbow macaroni ",
      "3/4 cup shredded cheddar cheese, divided ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/06/13/one-pot-zucchini-mushroom-pasta/",
    "recipeTitle": "One Pot Zucchini Mushroom Pasta",
    "ingredients": [
      "1 pound spaghetti ",
      "1 pound cremini mushrooms, thinly sliced ",
      "2 zucchini, thinly sliced and quartered ",
      "2/3 cup peas ",
      "2 cloves garlic, thinly sliced ",
      "2 sprigs thyme ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/3 cup grated Parmesan ",
      "1/4 cup heavy cream"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/02/20/oven-fried-chicken-honey-mustard-glaze/",
    "recipeTitle": "Oven Fried Chicken with Honey Mustard Glaze",
    "ingredients": [
      "8 boneless, skinless chicken thighs ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 large eggs ",
      "1/4 cup milk ",
      "1 1/2 cups Panko* ",
      "1 teaspoon smoked paprika ",
      "1/4 cup vegetable oil ",
      "1 cup all-purpose flour ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1/4 cup mayonnaise ",
      "2 tablespoons honey ",
      "1 tablespoon mustard ",
      "1 tablespoon Dijon mustard"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/07/19/oven-fried-chicken-with-homemade-coleslaw/",
    "recipeTitle": "Oven-Fried Chicken with Homemade Coleslaw",
    "ingredients": [
      "3 pound boneless, skinless chicken thighs, excess fat trimmed ",
      "1 cup all-purpose flour ",
      "Kosher salt and freshly ground black pepper, to toaste ",
      "2 large eggs ",
      "1/4 cup milk ",
      "1 tablespoon hot sauce, or more to taste ",
      "1 1/2 cups Panko ",
      "3 teaspoons cajun seasoning ",
      "1 teaspoon paprika ",
      "1/4 cup peanut oil ",
      "4 cups shredded cabbage ",
      "1/2 onion, diced ",
      "1 large carrot, grated ",
      "1/2 cup mayonnaise ",
      "1/2 cup plain yogurt ",
      "1/4 cup white vinegar ",
      "3 tablespoons sugar ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/02/01/pan-roasted-lemon-chicken/",
    "recipeTitle": "Pan Roasted Lemon Chicken",
    "ingredients": [
      "1 1/4 cups chicken stock ",
      "1/4 cup freshly squeezed lemon juice ",
      "2 teaspoons lemon zest ",
      "1 tablespoon olive oil ",
      "1 tablespoon olive oil ",
      "1 tablespoon whole grain mustard ",
      "1 teaspoon lemon zest ",
      "1 1/2 teaspoons dried oregano ",
      "1/2 teaspoon dried thyme ",
      "1/4 teaspoon kosher salt ",
      "8 bone-in, skin-on chicken thighs"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/08/02/panda-express-sweet-fire-chicken-copycat/",
    "recipeTitle": "Panda Express Sweet Fire Chicken Copycat",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 red bell pepper, chopped ",
      "1 1/2 cups diced pineapple, fresh or canned ",
      "1/2 cup Thai sweet chili sauce, or more, to taste ",
      "2 green onions, thinly sliced ",
      "1/2 cup vegetable oil ",
      "1 pound boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "1 cup all-purpose flour ",
      "2 large eggs, beaten"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/02/10/parmesan-spinach-orzo/",
    "recipeTitle": "Parmesan and Spinach Orzo",
    "ingredients": [
      "1 cup orzo pasta ",
      "1 tablespoon olive oil ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "1 tablespoon all-purpose flour ",
      "1 cup milk ",
      "1 1/2 cups spinach, roughly chopped ",
      "1/2 cup grated Parmesan cheese ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/12/26/parmesan-chicken-bites/",
    "recipeTitle": "Parmesan Chicken Bites",
    "ingredients": [
      "1/2 cup vegetable oil ",
      "1 pound boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup Panko* ",
      "1/4 cup freshly grated Parmesan ",
      "1 teaspoon garlic powder ",
      "1/2 teaspoon smoked paprika ",
      "1/2 cup all-purpose flour ",
      "2 large eggs, beaten ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/03/27/parmesan-crusted-chicken/",
    "recipeTitle": "Parmesan Crusted Chicken",
    "ingredients": [
      "8 bone-in, skin-on chicken thighs ",
      "1 cup chicken stock ",
      "Juice of 1 lemon ",
      "2 teaspoons lemon zest ",
      "2 tablespoons unsalted butter ",
      "1/4 cup olive oil ",
      "2 tablespoons freshly grated Parmesan ",
      "1/2 teaspoon dried thyme ",
      "1/2 teaspoon dried oregano ",
      "1/4 teaspoon garlic powder ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/12/13/pasta-sun-dried-tomato-cream-sauce/",
    "recipeTitle": "Pasta with Sun-Dried Tomato Cream Sauce",
    "ingredients": [
      "8 ounces penne ",
      "1 tablespoon olive oil ",
      "2 smoked andouille sausage links, thinly sliced ",
      "2 tablespoons chopped fresh parsley leaves ",
      "2 tablespoons unsalted butter ",
      "2 cloves garlic, minced ",
      "2 tablespoons all-purpose flour ",
      "1 cup chicken broth ",
      "1/2 cup heavy cream ",
      "1/3 cup julienned sun dried tomatoes in olive oil, drained ",
      "1/4 cup freshly grated Parmesan ",
      "3 cloves garlic, minced ",
      "1/4 teaspoon dried oregano ",
      "1/4 teaspoon dried basil ",
      "1/4 teaspoon red pepper flakes, or more, to taste ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/05/04/pecan-crusted-salmon-with-lemon-glaze/",
    "recipeTitle": "Pecan Crusted Salmon with Lemon Glaze",
    "ingredients": [
      "4 salmon filets ",
      "2 tablespoons unsalted butter ",
      "1/4 cup honey ",
      "2 tablespoons reduced sodium soy sauce ",
      "1 tablespoon brown sugar, packed ",
      "1 tablespoon freshly grated ginger ",
      "2 cloves garlic, minced ",
      "Juice of 1 lemon ",
      "2 teaspoons cornstarch ",
      "1/2 cup Fisher Nuts Pecan Halves ",
      "1/2 cup Panko* ",
      "1/4 cup fresh parsley leaves ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/07/21/pesto-pasta-with-sun-dried-tomatoes-and-roasted/",
    "recipeTitle": "Pesto Pasta with Sun Dried Tomatoes and Roasted Asparagus",
    "ingredients": [
      "8 ounces medium shell pasta ",
      "1 pound asparagus, trimmed ",
      "2 tablespoons olive oil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/2 cup basil pesto ",
      "1/3 cup julienned sun dried tomatoes in olive oil, drained ",
      "1/3 cup diced mozzarella cubes ",
      "Fried egg, for serving"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/05/30/pf-changs-chicken-lettuce-wraps/",
    "recipeTitle": "PF Chang's Chicken Lettuce Wraps",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound ground chicken ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "1/4 cup hoisin sauce ",
      "2 tablespoons soy sauce ",
      "1 tablespoon rice wine vinegar ",
      "1 tablespoons freshly grated ginger ",
      "1 teaspoon Sriracha, or more, to taste ",
      "1 (8-ounce) can whole water chestnuts, drained and diced ",
      "2 green onions, thinly sliced ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 head butter lettuce"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/10/05/pf-changs-mongolian-beef-copycat-recipe/",
    "recipeTitle": "PF Chang’s Mongolian Beef Copycat Recipe",
    "ingredients": [
      "1 pound flank steak, thinly sliced across the grain ",
      "1/4 cup cornstarch ",
      "1/2 cup vegetable oil ",
      "2 green onions, thinly sliced ",
      "1/2 cup soy sauce ",
      "1/2 cup brown sugar, packed ",
      "3 cloves garlic, minced ",
      "2 teaspoons grated fresh ginger ",
      "2 teaspoons vegetable oil"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/01/17/philly-cheesesteak-with-garlic-aioli-and-a-giveaway/",
    "recipeTitle": "Philly Cheesesteak with Garlic Aioli",
    "ingredients": [
      "1/4 cup mayonnaise ",
      "2 cloves garlic, pressed ",
      "2 tablespoons butter ",
      "1 pound boneless chuck steak, thinly sliced ",
      "Kosher salt and freshly ground black pepper, to tasted ",
      "1 onion, sliced ",
      "1 red bell pepper, sliced ",
      "1 green bell pepper ",
      "4 hoagie rolls, toasted, for serving ",
      "1 cup shredded white cheddar cheese"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/06/25/pineapple-fried-rice/",
    "recipeTitle": "Pineapple Fried Rice",
    "ingredients": [
      "3 tablespoons soy sauce ",
      "1 tablespoons sesame oil ",
      "1/2 teaspoon ginger powder ",
      "1/4 teaspoon white pepper ",
      "2 tablespoons olive oil ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "2 carrots, peeled and grated ",
      "1/2 cup frozen corn ",
      "1/2 cup frozen peas ",
      "3 cups cooked brown rice ",
      "2 cups diced pineapple, canned or fresh ",
      "1/2 cup diced ham ",
      "2 green onions, sliced"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/10/02/pizza-stuffed-zucchini-boats/",
    "recipeTitle": "Pizza Stuffed Zucchini Boats",
    "ingredients": [
      "4 zucchini ",
      "1 tablespoon olive oil ",
      "8 ounces ground turkey ",
      "1/2 teaspoon oregano ",
      "1/2 teaspoon basil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 1/2 cups marinara sauce ",
      "2/3 cup shredded mozzarella cheese"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/08/20/quick-chicken-and-broccoli-stir-fry/",
    "recipeTitle": "Quick Chicken and Broccoli Stir Fry",
    "ingredients": [
      "1 pound boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "12 ounces linguine ",
      "16 ounces broccoli florets ",
      "1 tablespoon olive oil ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1/2 teaspoon sesame seeds ",
      "1/4 cup reduced sodium soy sauce ",
      "2 tablespoons oyster sauce ",
      "1 tablespoon brown sugar, packed ",
      "1 tablespoon freshly grated ginger ",
      "2 cloves garlic, pressed ",
      "1 teaspoon sesame oil ",
      "1 teaspoon Sriracha, optional"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/04/19/quinoa-black-bean-tacos/",
    "recipeTitle": "Quinoa Black Bean Tacos",
    "ingredients": [
      "1/2 cup uncooked quinoa ",
      "1 (10-ounce) can diced tomatoes and green chiles, undrained ",
      "1/2 cup vegetable broth ",
      "1 teaspoon chili powder ",
      "1/2 teaspoon cumin ",
      "1/2 teaspoon garlic powder ",
      "1/2 teaspoon onion powder ",
      "1/4 teaspoon paprika ",
      "1/4 teaspoon cayenne pepper ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup canned black beans, drained and rinsed ",
      "1 cup frozen corn kernels ",
      "Juice of 1 lime ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "8 corn tortillas ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1/4 cup sour cream"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/06/23/quinoa-chicken-parmesan/",
    "recipeTitle": "Quinoa Chicken Parmesan",
    "ingredients": [
      "1 cup quinoa ",
      "1 tablespoon Italian seasoning ",
      "2 boneless, skinless chicken breasts, cut crosswise in half ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/2 cup all-purpose flour ",
      "2 large eggs, beaten ",
      "1/2 cup shredded mozzarella cheese ",
      "1/4 cup grated Parmesan cheese ",
      "1 cup marinara sauce, homemade or storebought ",
      "1/4 cup basil leaves, chiffonade"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/10/16/quinoa-chili/",
    "recipeTitle": "Quinoa Chili",
    "ingredients": [
      "1 cup quinoa ",
      "1 tablespoon olive oil ",
      "3 cloves garlic, minced ",
      "1 onion, diced ",
      "2 (14.5-ounce) cans diced tomatoes ",
      "1 (15-ounce) can tomato sauce ",
      "1 (4.5-ounce) can diced green chiles ",
      "1 1/2 tablespoons chili powder, or more, to taste ",
      "2 teaspoons ground cumin ",
      "1 1/2 teaspoons paprika ",
      "1/2 teaspoon cayenne pepper ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 (15-ounce) can kidney beans, drained and rinsed ",
      "1 (15-ounce) can black beans, drained and rinsed ",
      "1 1/2 cups corn kernels, frozen, canned or roasted ",
      "3 tablespoons chopped fresh cilantro leaves ",
      "Juice of 1 lime, optional ",
      "1 avocado, halved, seeded, peeled and diced"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/07/07/quinoa-enchilada-casserole/",
    "recipeTitle": "Quinoa Enchilada Casserole",
    "ingredients": [
      "1 cup quinoa ",
      "1 (10-ounce) can Old El Paso™ mild enchilada sauce ",
      "1 (4.5-ounce) can Old El Paso™ chopped green chiles, drained ",
      "1/2 cup corn kernels, frozen, canned or roasted ",
      "1/2 cup canned black beans, drained and rinsed ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "1/2 teaspoon cumin ",
      "1/2 teaspoon chili powder ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "3/4 cup shredded cheddar cheese, divided ",
      "3/4 cup shredded mozzarella cheese, divided ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1 Roma tomato, diced"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/08/28/quinoa-fruit-salad/",
    "recipeTitle": "Quinoa Fruit Salad",
    "ingredients": [
      "2 cups cooked quinoa ",
      "1 mango, peeled and diced ",
      "1 cup strawberries, quartered ",
      "1/2 cup blueberries ",
      "2 tablespoons pine nuts ",
      "Chopped mint leaves, for garnish ",
      "1/4 cup olive oil ",
      "1/4 cup apple cider vinegar ",
      "Zest of 1 lemon ",
      "3 tablespoons freshly squeezed lemon juice ",
      "1 tablespoon sugar"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/06/03/quinoa-stuffed-bell-peppers/",
    "recipeTitle": "Quinoa Stuffed Bell Peppers",
    "ingredients": [
      "3 cups cooked quinoa ",
      "1 (4-ounce) can green chiles ",
      "1 cup corn kernels ",
      "1/2 cup canned black beans, drained and rinsed ",
      "1/2 cup petite diced tomatoes ",
      "1/2 cup shredded pepper jack cheese ",
      "1/4 cup crumbled feta cheese ",
      "3 tablespoons chopped fresh cilantro leaves ",
      "1 teaspoon cumin ",
      "1 teaspoon garlic powder ",
      "1/2 teaspoon onion powder ",
      "1/2 teaspoon chili powder, or more to taste ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "6 bell peppers, tops cut, stemmed and seeded"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/10/19/quinoa-veggie-fried-rice-and-a-giveaway/",
    "recipeTitle": "Quinoa Veggie \"Fried Rice\"",
    "ingredients": [
      "2 tablespoons olive oil, divided ",
      "2 large eggs, beaten ",
      "2 cloves garlic, minced ",
      "1 small onion, diced ",
      "8 ounces mushrooms, sliced ",
      "1 head broccoli, cut into florets ",
      "1 zucchini, chopped ",
      "1/2 cup frozen corn ",
      "1/2 cup frozen peas ",
      "2 carrots, peeled and grated ",
      "3 cups cooked quinoa ",
      "1 tablespoon grated fresh ginger ",
      "3 tablespoons soy sauce ",
      "2 green onions, sliced ",
      "Sriracha, for serving"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/31/ranch-cheddar-chicken/",
    "recipeTitle": "Ranch Cheddar Chicken",
    "ingredients": [
      "1/2 cup mayonnaise ",
      "1/2 cup shredded sharp cheddar cheese ",
      "1 (1-ounce) package Ranch Seasoning and Salad Dressing Mix ",
      "3 cloves garlic, minced ",
      "8 boneless, skinless chicken thighs ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/3 cup Panko* ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/02/26/ravioli-italian-sausage-skillet/",
    "recipeTitle": "Ravioli and Italian Sausage Skillet",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound spicy Italian sausage, casing removed ",
      "1 (14.5-ounce) can fire roasted diced tomatoes ",
      "1 (8-ounce) can tomato sauce ",
      "1 tablespoon tomato paste ",
      "2 teaspoons Italian seasoning ",
      "1 teaspoon garlic powder ",
      "1 teaspoon onion powder ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 (16-ounce) package cheese-filled ravioli ",
      "1 cup shredded mozzarella cheese ",
      "1/2 cup grated Parmesan cheese ",
      "1/4 cup basil leaves, chiffonade"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/10/25/red-pepper-pasta-bake/",
    "recipeTitle": "Red Pepper Pasta Bake",
    "ingredients": [
      "6 ounces penne pasta ",
      "1 (12-ounce) jar roasted red peppers ",
      "1/2 cup grated Parmesan ",
      "2 teaspoons honey ",
      "1/2 teaspoon crushed red pepper flakes, or more, to taste ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "3 tablespoons olive oil, divded ",
      "2 cloves garlic, minced ",
      "8 ounces spicy Italian sausage, casings removed ",
      "1 1/2 cups shredded mozzarella cheese"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/12/10/roasted-butternut-squash-bacon-soup/",
    "recipeTitle": "Roasted Butternut Squash and Bacon Soup",
    "ingredients": [
      "1 butternut squash (about 3 pounds), peeled, seeded and cut in 1-inch chunks ",
      "1 onion, diced ",
      "1 red bell pepper, chopped ",
      "4 slices bacon, diced ",
      "2 tablespoons olive oil ",
      "2 cloves garlic, minced ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 slices bacon, diced ",
      "1/2 teaspoon dried thyme ",
      "2 1/2 cups chicken stock, or more, to taste ",
      "1/4 cup crumbled goat cheese ",
      "2 tablespoons chopped chives"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/06/15/roasted-shrimp-enchiladas-with-jalape-o-cream-sauce/",
    "recipeTitle": "Roasted Shrimp Enchiladas with Jalapeño Cream Sauce",
    "ingredients": [
      "1 pound medium shrimp, peeled and deveined ",
      "2 tablespoons olive oil, divided ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 cloves garlic, minced ",
      "1 small onion, diced ",
      "2 cups shredded green cabbage ",
      "1 carrot, peeled and grated ",
      "3 cups baby spinach ",
      "2 tablespoons chipotle pepper, in adobo sauce ",
      "1/4 teaspoon oregano ",
      "1/2 teaspoon cayenne pepper ",
      "12 (6-inch) corn tortillas, warmed ",
      "2 cups Monterey Jack cheese ",
      "2 tablespoons unsalted butter ",
      "2 tablespoons all-purpose flour ",
      "1 1/2 cups chicken broth ",
      "3/4 cup sour cream ",
      "2 jalapeños, seeded and minced ",
      "1/2 teaspoon garlic powder ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/4 cup chopped fresh cilantro"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/11/14/roasted-shrimp-quinoa-spring-rolls/",
    "recipeTitle": "Roasted Shrimp Quinoa Spring Rolls",
    "ingredients": [
      "1 pound medium shrimp, peeled and deveined ",
      "12 (16-cm) rice paper wrappers ",
      "Green leaf lettuce ",
      "1 1/2 cups cooked quinoa ",
      "1 cucumber, julienned ",
      "1 carrot, peeled and julienned ",
      "1/4 cup peanut butter ",
      "1/4 cup water ",
      "1 tablespoon hoisin ",
      "1-2 teaspoons Sriracha"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/07/11/salisbury-steak-meatballs/",
    "recipeTitle": "Salisbury Steak Meatballs",
    "ingredients": [
      "8 ounces egg noodles ",
      "1 pound ground beef ",
      "1/3 cup Italian style bread crumbs ",
      "2 tablespoon ketchup ",
      "2 tablespoons mustard ",
      "1 tablespoon Worcestershire sauce ",
      "2 large egg yolks ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 tablespoons unsalted butter ",
      "2 cups beef broth, divided, or more, to taste ",
      "1 tablespoon cornstarch ",
      "1 onion, thinly sliced ",
      "1 tablespoon Worcestershire sauce ",
      "1 tablespoon ketchup ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/06/06/salmon-blt-sliders-with-chipotle-mayo/",
    "recipeTitle": "Salmon BLT Sliders with Chipotle Mayo",
    "ingredients": [
      "1 pound salmon filets ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 slices bacon, cut into thirds ",
      "1/4 cup mayonnaise ",
      "2 tablespoons chipotle peppers, in adobo sauce ",
      "4 slider buns, split, toasted, for serving ",
      "2 cups spring mix, for serving ",
      "2 Roma tomatoes, thinly sliced, for serving"
    ],
    "cuisineType": [
      "Seafood",
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/29/sausage-potato-spinach-soup/",
    "recipeTitle": "Sausage, Potato and Spinach Soup",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound spicy Italian sausage, casing removed ",
      "3 cloves garlic, minced ",
      "1 onion, diced ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon dried basil ",
      "1/2 teaspoon crushed red pepper flakes, optional ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "5 cups chicken broth ",
      "1 bay leaf ",
      "1 pound red potatoes, diced ",
      "3 cups baby spinach ",
      "1/4 cup heavy cream"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/03/15/sesame-chicken/",
    "recipeTitle": "Sesame Chicken",
    "ingredients": [
      "1 1/2 pounds boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "1 1/2 cups cornstarch ",
      "1/2 cup all-purpose flour ",
      "1/2 teaspoon baking soda ",
      "3 large egg whites, beaten ",
      "Mazola corn oil, for frying ",
      "Sesame seeds, for garnish ",
      "Sliced green onions, for garnish ",
      "1 cup chicken stock ",
      "1/2 cup soy sauce ",
      "1/4 cup honey ",
      "1/4 cup rice wine vinegar ",
      "3 tablespoons brown sugar, packed ",
      "2 tablespoons cornstarch ",
      "2 tablespoons sesame oil, divided ",
      "2 garlic cloves, minced ",
      "1 tablespoon grated fresh ginger ",
      "1 teaspoon chili paste"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/11/13/sesame-ginger-salmon/",
    "recipeTitle": "Sesame Ginger Salmon",
    "ingredients": [
      "1/4 cup olive oil ",
      "2 tablespoons soy sauce ",
      "2 tablespoons rice vinegar ",
      "2 tablespoons sesame oil ",
      "2 tablespoons brown sugar ",
      "2 cloves garlic, pressed ",
      "1 tablespoon grated fresh ginger ",
      "1 tablespoon sesame seeds ",
      "4 green onions, thinly sliced ",
      "4 salmon filets ",
      "2 tablespoons honey ",
      "1 teaspoon soy sauce ",
      "1 teaspoon sesame oil ",
      "1/2 teaspoon Sriracha, or more, to taste ",
      "1/2 teaspoon grated fresh ginger ",
      "1/2 teaspoon sesame seeds"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/06/17/sesame-soba-noodles/",
    "recipeTitle": "Sesame Soba Noodles",
    "ingredients": [
      "8 ounces soba ",
      "1/4 cup rice wine vinegar ",
      "2 tablespoons soy sauce ",
      "1 tablespoon sesame oil ",
      "1 tablespoon sugar ",
      "1 clove garlic, pressed ",
      "1 teaspoon grated ginger ",
      "2 green onions, thinly sliced ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "1 teaspoon sesame seeds ",
      "2 hard boiled eggs, sliced lengthwise, for serving"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/24/shrimp-corn-chowder/",
    "recipeTitle": "Shrimp and Corn Chowder",
    "ingredients": [
      "4 slices bacon, diced ",
      "1 pound medium shrimp, peeled and deveined ",
      "3 cloves garlic, diced ",
      "1 onion, diced ",
      "2 teaspoons smoked paprika, or more, to taste ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon dried basil ",
      "1/4 teaspoon crushed red pepper flakes, optional ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 cups chicken stock ",
      "2 cups corn kernels, frozen, canned or roasted ",
      "1 bay leaf ",
      "1/4 cup heavy cream ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/08/22/shrimp-and-zucchini-noodles/",
    "recipeTitle": "Shrimp and Zucchini Noodles",
    "ingredients": [
      "1 pound medium shrimp, peeled and deveined ",
      "2 cups cherry tomatoes, halved ",
      "2 tablespoons olive oil ",
      "2 cloves garlic, minced ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 medium zucchini (about 10 ounces each), trimmed ",
      "1/2 cup corn kernels, frozen, canned or roasted ",
      "2 tablespoons pine nuts ",
      "1/4 cup olive oil ",
      "1/4 cup apple cider vinegar ",
      "3 tablespoons freshly squeezed lemon juice ",
      "Zest of 1 lemon ",
      "1 tablespoon sugar"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/08/26/shrimp-boil-foil-packets/",
    "recipeTitle": "Shrimp Boil Foil Packets",
    "ingredients": [
      "1 1/2 pounds large shrimp, peeled and deveined ",
      "1 (12.8-ounce) package smoked andouille sausage, thinly sliced ",
      "2 ears corn, each cut crosswise into 4 pieces ",
      "1 pound baby red potatoes, halved ",
      "2 tablespoons olive oil ",
      "4 teaspoons cajun seasoning ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/03/19/shrimp-cobb-salad-cilantro-lime-vinaigrette/",
    "recipeTitle": "Shrimp Cobb Salad with Cilantro Lime Vinaigrette",
    "ingredients": [
      "1 pound medium shrimp, peeled and deveined ",
      "2 tablespoons olive oil, divided ",
      "1 tablespoon Emeril's Essence Creole Seasoning ",
      "4 slices bacon, diced ",
      "2 large eggs ",
      "5 cups chopped romaine lettuce ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1 cup canned corn kernels, drained ",
      "1/2 cup crumbled goat cheese ",
      "1 cup loosely packed cilantro, stems removed ",
      "Juice of 1 lime ",
      "1 jalapeño, optional ",
      "2 cloves garlic ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons olive oil ",
      "2 tablespoons apple cider vinegar "
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/05/23/shrimp-fajitas-in-foil/",
    "recipeTitle": "Shrimp Fajitas in Foil",
    "ingredients": [
      "1 1/2 pounds medium shrimp, peeled and deveined ",
      "1 red bell pepper, thinly sliced ",
      "1 orange bell pepper, thinly sliced ",
      "1 green bell pepper, thinly sliced ",
      "1 onion, thinly sliced ",
      "2 tablespoons olive oil ",
      "2 tablespoons taco seasoning ",
      "Juice of 2 limes ",
      "1/4 cup chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/04/05/shrimp-fried-rice/",
    "recipeTitle": "Shrimp Fried Rice",
    "ingredients": [
      "3 tablespoons soy sauce ",
      "1 tablespoons sesame oil ",
      "1/2 teaspoon ginger powder ",
      "1/2 teaspoon white pepper ",
      "2 tablespoons olive oil ",
      "1 pound medium shrimp, peeled and deveined ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "2 carrots, peeled and grated ",
      "1/2 cup frozen corn ",
      "1/2 cup frozen peas ",
      "3 cups cooked rice ",
      "2 green onions, sliced"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/06/01/shrimp-sandwich-with-avocado-and-broccoli-slaw/",
    "recipeTitle": "Shrimp Sandwich with Avocado and Broccoli Slaw",
    "ingredients": [
      "1 pound medium shrimp, peeled and deveined ",
      "2 tablespoons olive oil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 poppy seed rolls, split, toasted, for serving ",
      "1 avocado, halved, seeded, peeled and thinly sliced ",
      "1/4 cup plus 2 tablespoons Greek yogurt ",
      "1/4 cup plus 2 tablespoons mayonnaise ",
      "3 tablespoons apple cider vinegar ",
      "1 tablespoon sugar, or more to taste ",
      "3 cups broccoli slaw mix"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/03/28/shrimp-scampi/",
    "recipeTitle": "Shrimp Scampi",
    "ingredients": [
      "8 ounces linguine ",
      "2 tablespoons unsalted butter ",
      "1 pound medium shrimp, peeled and deveined ",
      "3 cloves garlic, minced ",
      "1/2 teaspoon red pepper flakes, or more, to taste ",
      "1/4 cup white wine* ",
      "1/4 cup freshly squeezed lemon juice ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "Zest of 1 lemon ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1/4 cup freshly grated Parmesan"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/05/28/shrimp-spring-rolls-with-hoisin-peanut-dip/",
    "recipeTitle": "Shrimp Spring Rolls with Hoisin Peanut Dip",
    "ingredients": [
      "1 pound medium shrimp, peeled and deveined ",
      "1 tablespoon olive oil ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "12 (16-cm) rice paper wrappers ",
      "1 cup baby spinach ",
      "4 ounces cooked vermicelli ",
      "1/2 cup shredded red cabbage ",
      "1 cucumber, julienned ",
      "1 carrot, peeled and julienned ",
      "1/4 cup hoisin ",
      "2 tablespoons peanut butter ",
      "1 teaspoon rice vinegar ",
      "1/2 teaspoon sesame oil"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/06/08/shrimp-asparagus-and-zucchini-orzo-salad/",
    "recipeTitle": "Shrimp, Asparagus and Zucchini Orzo Salad",
    "ingredients": [
      "8 ounces orzo pasta ",
      "1 tablespoon olive oil ",
      "8 ounces medium shrimp, peeled and deveined ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 cloves garlic, minced ",
      "8 ounces asparagus, trimmed ",
      "1 zucchini, chopped ",
      "1/4 cup crumbled feta cheese ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1/4 cup olive oil ",
      "1/4 cup apple cider vinegar ",
      "Juice of 1 lemon ",
      "2 teaspoons Dijon mustard ",
      "1 teaspoon sugar, optional ",
      "1/2 teaspoon dried basil"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/07/06/sirloin-gyros/",
    "recipeTitle": "Sirloin Gyros",
    "ingredients": [
      "4 cloves garlic, smashed ",
      "1 lemon, juiced ",
      "2 teaspoons red wine vinegar ",
      "3 tablespoons olive oil, divided ",
      "2 tablespoons plain yogurt ",
      "1 tablespoon oregano ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 pound top sirloin filet ",
      "4 pita breads, toasted ",
      "2 Roma tomatoes, diced ",
      "1 red onion, thinly sliced ",
      "1 cup Greek yogurt ",
      "1 cucumber, peeled and grated ",
      "2 cloves garlic, minced ",
      "1/2 teaspoon white wine vinegar ",
      "1 tablespoon freshly squeezed lemon juice ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 tablespoon olive oil, or more, to taste"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/04/26/skinny-cauliflower-mac-cheese/",
    "recipeTitle": "Skinny Cauliflower Mac and Cheese",
    "ingredients": [
      "2 tablespoons olive oil, divided ",
      "1/3 cup Panko* ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1 cup elbows pasta ",
      "2 cups cauliflower florets ",
      "3 cloves garlic, minced ",
      "1 onion, diced ",
      "1/2 cup reduced-fat sour cream ",
      "1/4 cup 2% milk, or more, to taste ",
      "1 cup shredded gruyere cheese ",
      "1/2 cup shredded sharp cheddar cheese ",
      "1/4 cup grated Parmesan ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/29/skinny-egg-salad-sliders/",
    "recipeTitle": "Skinny Egg Salad Sliders",
    "ingredients": [
      "8 large eggs ",
      "1 Roma tomato, diced ",
      "1/2 cup plain Greek yogurt ",
      "2 tablespoons mayonnaise ",
      "1 tablespoon fresh dill ",
      "1 tablespoon chopped chives ",
      "1/4 teaspoon onion powder ",
      "Pinch of garlic powder ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 package KING'S HAWAIIAN Original Hawaiian Sweet Dinner Rolls, split and toasted ",
      "2 cups arugula "
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/24/skinny-fettuccine-alfredo/",
    "recipeTitle": "Skinny Fettuccine Alfredo",
    "ingredients": [
      "8 ounces fettuccine ",
      "2 tablespoons unsalted butter ",
      "2 tablespoons all-purpose flour ",
      "1 1/4 cups 2% milk, or more, as needed ",
      "2 tablespoons heavy cream ",
      "1/4 teaspoon garlic powder ",
      "2 ounces Neufchatel cheese, cubed ",
      "1/4 cup freshly grated Parmesan cheese ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/12/22/skinny-mexican-casserole/",
    "recipeTitle": "Skinny Mexican Casserole",
    "ingredients": [
      "1 tablespoon olive oil ",
      "2 cloves garlic, minced ",
      "1 onion, diced ",
      "1 red bell pepper, diced ",
      "1 green bell pepper, diced ",
      "1 (15-ounce) can black beans, drained and rinsed ",
      "1 cup corn kernels, frozen, canned or roasted ",
      "1 teaspoon chili powder ",
      "1/2 teaspoon cumin ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 (4.5-ounce) can Old El Paso™ chopped green chiles, drained ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "4 (8-inch) whole wheat tortillas, chopped ",
      "1 (16-ounce) can Old El Paso™ fat free refried beans, warmed ",
      "1 (10-ounce) can Old El Paso™ mild enchilada sauce ",
      "1 1/2 cups reduced fat shredded Mexican blend cheese"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/08/06/shrimp-alfredo-pasta-bake/",
    "recipeTitle": "Skinny Shrimp Alfredo Pasta Bake",
    "ingredients": [
      "1 pound medium shrimp, peeled and deveined ",
      "2 tablespoons olive oil, divided ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "8 ounces whole wheat penne pasta ",
      "1 (14.5-ounce) can petite diced tomatoes, drained ",
      "1/2 cup reduced fat mozzarella cheese ",
      "1/2 teaspoon crushed red pepper flakes, optional ",
      "2 tablespoons grated Parmesan ",
      "2 tablespoons chopped fresh parsley leaves ",
      "2 tablespoons unsalted butter ",
      "4 cloves garlic, minced ",
      "1 tablespoon all-purpose flour ",
      "1 (6-ounce) can 2% evaporated milk ",
      "1 ounce light cream cheese ",
      "1/4 cup chicken broth, or more, to taste ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/08/14/slow-cooker-balsamic-chicken/",
    "recipeTitle": "Slow Cooker Balsamic Chicken",
    "ingredients": [
      "1/2 cup balsamic vinegar ",
      "1/2 cup chicken broth ",
      "1/4 cup brown sugar, packed ",
      "3 cloves garlic, minced ",
      "4 bone-in, skin-on chicken breasts ",
      "1 teaspoon dried basil ",
      "1/2 teaspoon dried oregano ",
      "1/4 teaspoon thyme ",
      "1/4 teaspoon rosemary ",
      "1/4 teaspoon crushed red pepper flakes, optional ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/03/31/slow-cooker-beef-broccoli/",
    "recipeTitle": "Slow Cooker Beef and Broccoli",
    "ingredients": [
      "1 cup beef broth ",
      "1/4 cup soy sauce ",
      "1/4 cup oyster sauce ",
      "1/4 cup Imperial Sugar Light Brown Sugar ",
      "1 tablespoon sesame oil ",
      "3 cloves garlic, minced ",
      "2 pounds boneless beef chuck roast, thinly sliced ",
      "2 tablespoons cornstarch ",
      "2 heads broccoli, cut into florets"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/03/14/slow-cooker-butter-chicken/",
    "recipeTitle": "Slow Cooker Butter Chicken",
    "ingredients": [
      "1 tablespoon olive oil ",
      "4 cloves garlic, crushed ",
      "1 onion, diced ",
      "1 (14-ounce) can light coconut milk ",
      "1 (6-ounce) can tomato paste ",
      "2 tablespoons whole wheat flour ",
      "2 teaspoons garam masala ",
      "1 teaspoon curry powder ",
      "1/2 teaspoon chili powder, or more, to taste ",
      "1/2 teaspoon ginger powder ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "3 pounds boneless, skinless chicken breasts, cut into 2-inch pieces ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/27/slow-cooker-cashew-chicken/",
    "recipeTitle": "Slow Cooker Cashew Chicken",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 cup raw cashews ",
      "2 green onions, sliced ",
      "1/4 cup reduced sodium soy sauce ",
      "2 tablespoons ketchup ",
      "2 tablespoons unseasoned rice vinegar ",
      "1 tablespoon brown sugar ",
      "3 cloves garlic, minced ",
      "1 tablespoon freshly grated ginger ",
      "1/4 teaspoon crushed red pepper flakes, optional"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/12/17/slow-cooker-cheesy-tortellini/",
    "recipeTitle": "Slow Cooker Cheesy Tortellini",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 pound ground beef ",
      "1 onion, diced ",
      "2 cloves garlic, minced ",
      "1 (28-ounce) can crushed tomatoes ",
      "1 (10-ounce) can diced tomatoes and green chiles, undrained ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon dried basil ",
      "1/4 teaspoon crushed red pepper flakes, optional ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 (9-ounce) package refrigerated three cheese tortellini ",
      "1 cup shredded mozzarella cheese ",
      "1/2 cup shredded cheddar cheese ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/10/11/slow-cooker-chicken-teriyaki/",
    "recipeTitle": "Slow Cooker Chicken Teriyaki",
    "ingredients": [
      "1/2 cup teriyaki sauce ",
      "1/2 cup chicken broth ",
      "1/3 cup brown sugar, packed ",
      "1/4 cup soy sauce ",
      "4 cloves garlic, minced ",
      "1 teaspoon sesame oil ",
      "3 boneless, skinless chicken breasts ",
      "1 green onion, thinly sliced for garnish ",
      "Sesame seeds, for garnish"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/03/02/slow-cooker-corned-beef/",
    "recipeTitle": "Slow Cooker Corned Beef",
    "ingredients": [
      "1 (3-pound) corned beef brisket, plus pickling spice packet ",
      "8 whole cloves ",
      "4 cloves garlic, peeled ",
      "2 bay leaves ",
      "24 baby carrots, tops trimmed to 2 inches ",
      "1 pound baby Dutch potatoes ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/12/01/slow-cooker-enchilada-orzo/",
    "recipeTitle": "Slow Cooker Enchilada Orzo",
    "ingredients": [
      "1 (14.5-ounce) can fire roasted diced tomatoes ",
      "1 (10-ounce) can Old El Paso™ mild enchilada sauce ",
      "1 (4.5-ounce) can Old El Paso™ chopped green chiles, drained ",
      "1/2 cup vegetable broth, or more, as needed ",
      "1 cup corn kernels, frozen, canned or roasted ",
      "1 cup canned black beans, drained and rinsed ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "4 ounces cream cheese, cubed ",
      "2 cups uncooked orzo pasta ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/17/slow-cooker-enchilada-stack/",
    "recipeTitle": "Slow Cooker Enchilada Stack",
    "ingredients": [
      "1 pound ground beef ",
      "1 (15-ounce) can black beans, drained and rinsed ",
      "1 cup corn kernels, frozen, canned or roasted ",
      "1 cup salsa, homemade or store-bought ",
      "1 (4.5-ounce) can Old El Paso™ chopped green chiles, drained ",
      "2 teaspoons Old El Paso™ taco seasoning mix ",
      "1 (10-ounce) can Old El Paso™ mild enchilada sauce, divided ",
      "4 9-inch flour tortillas ",
      "2 cups shredded Mexican blend cheese, divided ",
      "1 avocado, halved, seeded, peeled and diced, for serving ",
      "1 Roma tomato, diced, for serving ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/06/05/slow-cooker-honey-garlic-chicken-and-veggies/",
    "recipeTitle": "Slow Cooker Honey Garlic Chicken and Veggies",
    "ingredients": [
      "8 bone-in, skin-on chicken thighs ",
      "16 ounces baby red potatoes, halved ",
      "16 ounces baby carrots ",
      "16 ounces green beans, trimmed ",
      "2 tablespoons chopped fresh parsley leaves ",
      "1/2 cup reduced sodium soy sauce ",
      "1/2 cup honey ",
      "1/4 cup ketchup ",
      "2 cloves garlic, minced ",
      "1 teaspoon dried basil ",
      "1/2 teaspoon dried oregano ",
      "1/4 teaspoon crushed red pepper flakes ",
      "1/4 teaspoon ground black pepper"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/11/02/slow-cooker-crockpot-honey-sesame-chicken/",
    "recipeTitle": "Slow Cooker Honey Sesame Chicken",
    "ingredients": [
      "1 small onion, diced ",
      "2 cloves garlic, minced ",
      "1/2 cup honey ",
      "1/2 cup soy sauce ",
      "1/4 cup ketchup ",
      "2 tablespoons vegetable oil ",
      "1/4 teaspoon crushed red pepper flakes ",
      "2 pounds boneless, skinless chicken thighs ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 green onion, thinly sliced for garnish ",
      "Sesame seeds, for garnish"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/02/21/slow-cooker-korean-beef/",
    "recipeTitle": "Slow Cooker Korean Beef",
    "ingredients": [
      "1 cup beef broth ",
      "1/2 cup reduced sodium soy sauce ",
      "1/2 cup brown sugar, packed ",
      "4 cloves garlic, minced ",
      "1 tablespoon sesame oil ",
      "1 tablespoon rice wine vinegar ",
      "1 tablespoons freshly grated ginger ",
      "1 teaspoon Sriracha, or more, to taste ",
      "1/2 teaspoon onion powder ",
      "1/2 teaspoon white pepper ",
      "3 pound boneless beef chuck roast, cut into 1-inch cubes ",
      "2 tablespoons cornstarch ",
      "1 teaspoon sesame seeds ",
      "2 green onions, thinly sliced"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/11/21/slow-cooker-maple-brown-sugar-ham/",
    "recipeTitle": "Slow Cooker Maple Brown Sugar Ham",
    "ingredients": [
      "1 1/2 cups pineapple juice ",
      "1/4 cup maple syrup ",
      "2 tablespoons Dijon mustard ",
      "1/4 teaspoon ground black pepper ",
      "1 (7-10 pound) bone-in, spiral-cut ham* ",
      "1/2 cup brown sugar, packed ",
      "15 whole cloves"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/10/10/slow-cooker-pork-carnitas/",
    "recipeTitle": "Slow Cooker Pork Carnitas",
    "ingredients": [
      "1 tablespoon chili powder ",
      "2 teaspoons ground cumin ",
      "2 teaspoons dried oregano ",
      "2 teaspoons salt, or more, to taste ",
      "1 teaspoon ground black pepper ",
      "4 pound pork shoulder, excess fat trimmed ",
      "4 cloves garlic, peeled ",
      "2 onions, quartered ",
      "2 oranges, juiced ",
      "2 limes, juiced"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/11/09/slow-cooker-pork-ragu/",
    "recipeTitle": "Slow Cooker Pork Ragu",
    "ingredients": [
      "2 1/2 pound boneless pork loin ",
      "1/4 teaspoon dried rosemary ",
      "1/8 teaspoon dried thyme ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons olive oil ",
      "1 (28-ounce) can crushed tomatoes ",
      "3/4 cup chicken stock ",
      "1 small onion, diced ",
      "1/3 cup grated carrots ",
      "1 tablespoon tomato paste ",
      "2 cloves garlic, minced ",
      "1 bay leaf ",
      "1/4 cup red wine ",
      "16 ounces wide egg noodles"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/09/12/slow-cooker-potato-corn-chowder/",
    "recipeTitle": "Slow Cooker Potato and Corn Chowder",
    "ingredients": [
      "24 ounces red potato, diced ",
      "1 (16-ounce) package frozen corn ",
      "3 tablespoons all-purpose flour ",
      "6 cups chicken stock ",
      "1 teaspoon dried thyme ",
      "1 teaspoon dried oregano ",
      "1/2 teaspoon garlic powder ",
      "1/2 teaspoon onion powder ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons unsalted butter ",
      "1/4 cup heavy cream"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/06/21/slow-cooker-pulled-pork-gyros-and-a-giveaway/",
    "recipeTitle": "Slow Cooker Pulled Pork Gyros",
    "ingredients": [
      "1 tablespoon chili powder ",
      "2 teaspoons cumin ",
      "2 teaspoon oregano ",
      "2 teaspoon cayenne ",
      "1 1/2 teaspoon salt ",
      "1/2 teaspoon ground pepper ",
      "2 1/2-3 lb pork loin, excess fat trimmed ",
      "2 tablespoons olive oil ",
      "4 cloves garlic, peeled ",
      "2 medium red onions, quartered ",
      "3 tablespoons Greek yogurt ",
      "3 tablespoons mayonnaise ",
      "1 1/2 tablespoons apple cider vinegar ",
      "1 1/2 teaspoons sugar, or more to taste ",
      "1 1/2 cups shredded cabbage ",
      "2 carrots, peeled and grated ",
      "4 pita bread, toasted, for serving ",
      "1/2 cup cherry tomatoes, halved ",
      "1 avocado, halved, seeded, peeled and diced"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/03/21/slow-cooker-sausage-spinach-and-white-bean-soup/",
    "recipeTitle": "Slow Cooker Sausage, Spinach and White Bean Soup",
    "ingredients": [
      "1 tablespoon olive oil ",
      "1 (12.8-ounce) package smoked andouille sausage, thinly sliced ",
      "3 cloves garlic, minced ",
      "1 onion, diced ",
      "3 carrots, peeled and diced ",
      "2 stalks celery, diced ",
      "2 (15-ounce) cans Great Northern beans, drained and rinsed ",
      "1/2 teaspoon dried oregano ",
      "2 bay leaves ",
      "4 cups chicken broth ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "3 cups baby spinach"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/11/08/slow-cooker-spaghetti-sauce/",
    "recipeTitle": "Slow Cooker Spaghetti Sauce",
    "ingredients": [
      "2 tablespoons olive oil ",
      "1 pound ground beef ",
      "1 pound Italian sausage, casings removed ",
      "1 onion, minced ",
      "2 cloves garlic, minced ",
      "3 (14.5-ounce) cans diced tomatoes, drained ",
      "2 (15-ounce) cans tomato sauce ",
      "3 bay leaves ",
      "1 teaspoon dried oregano ",
      "1 teaspoon dried basil ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/11/15/southwest-buttermilk-baked-chicken/",
    "recipeTitle": "Southwest Buttermilk Baked Chicken",
    "ingredients": [
      "1 tablespoon cumin ",
      "1 teaspoon smoked paprika ",
      "1/2 teaspoon chili powder ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon garlic powder ",
      "1/4 teaspoon onion powder ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "8 bone-in, skin-on chicken thighs ",
      "2 tablespoons unsalted butter ",
      "1 cup buttermilk ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/11/19/southwest-quinoa-sliders-with-avocado-cream-sauce/",
    "recipeTitle": "Southwest Quinoa Sliders with Avocado Cream Sauce",
    "ingredients": [
      "2 cups cooked quinoa ",
      "1/4 cup grated Parmesan ",
      "1/4 cup panko ",
      "2 tablespoons all-purpose flour ",
      "1 teaspoon cumin ",
      "1 teaspoon garlic powder ",
      "1/2 teaspoon chili powder ",
      "1-2 tablespoons pureed chipotle peppers, in adobo sauce ",
      "1 tablespoon freshly squeezed lime juice ",
      "2 large eggs ",
      "1/2 cup whole kernel corn ",
      "1/2 cup canned black beans, drained and rinsed ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "Olive oil ",
      "12 split slider buns, toasted, for serving ",
      "2 cups arugula, for serving ",
      "2 Roma tomatoes, thinly sliced, for serving ",
      "1 avocado, halved, seeded and peeled ",
      "2 cloves garlic ",
      "1/3 cup Greek yogurt ",
      "1/4 cup fresh cilantro leaves ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/10/southwestern-chopped-salad-cilantro-lime-dressing/",
    "recipeTitle": "Southwestern Chopped Salad with Cilantro Lime Dressing",
    "ingredients": [
      "5 cups chopped romaine lettuce ",
      "1/2 cup cherry tomatoes, halved ",
      "1/2 cup canned corn kernels, drained ",
      "1/2 cup canned black beans, drained and rinsed ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1/4 cup tortilla strips, for garnish ",
      "1 cup loosely packed cilantro, stems removed ",
      "1/2 cup plain Greek yogurt ",
      "2 cloves garlic ",
      "Juice of 1 lime ",
      "Pinch of salt ",
      "1/4 cup olive oil ",
      "2 tablespoons apple cider vinegar"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/03/29/spaghetti-carbonara/",
    "recipeTitle": "Spaghetti Carbonara",
    "ingredients": [
      "8 ounces spaghetti ",
      "2 large eggs ",
      "3/4 cup grated Parmesan ",
      "4 slices bacon, diced ",
      "4 cloves garlic, minced ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/01/19/spaghetti-tomato-cream-sauce/",
    "recipeTitle": "Spaghetti with Tomato Cream Sauce",
    "ingredients": [
      "1 pound spaghetti ",
      "2 tablespoons unsalted butter ",
      "3 cloves garlic, minced ",
      "1 onion, diced ",
      "1 (28-ounce) can crushed tomatoes ",
      "1 teaspoon dried basil ",
      "1/2 teaspoon dried oregano ",
      "1/2 teaspoon dried parsley ",
      "1/2 teaspoon crushed red pepper flakes, optional ",
      "Kosher salt and freshly ground black pepper ",
      "1 teaspoon balsamic vinegar ",
      "3/4 cup milk ",
      "1/4 cup heavy cream ",
      "1/4 cup freshly grated Parmesan ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/10/10/spicy-chipotle-pesto-pasta/",
    "recipeTitle": "Spicy Chipotle Pesto Pasta",
    "ingredients": [
      "1 pound farfalle pasta ",
      "3 chipotle peppers in adobo sauce, or more, to taste ",
      "1/3 cup grated Parmesan ",
      "1/4 cup pine nuts ",
      "1 clove garlic ",
      "1/3 cup olive oil ",
      "1/3 cup Greek yogurt ",
      "1 (15-ounce) can whole kernel corn, drained ",
      "1 (15-ounce) can black beans, drained and rinsed ",
      "2 Roma tomatoes, diced ",
      "1 avocado, halved, seeded, peeled and diced ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/15/spicy-parmesan-shrimp-pasta/",
    "recipeTitle": "Spicy Parmesan Shrimp Pasta",
    "ingredients": [
      "1/3 cup olive oil ",
      "1/4 cup Parmesan cheese ",
      "4 cloves garlic, minced ",
      "1 tablespoon brown sugar ",
      "2 teaspoons soy sauce ",
      "1/2 teaspoon red pepper flakes, or more, to taste ",
      "1 pound medium shrimp, peeled and deveined ",
      "8 ounces penne ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 green onion, thinly sliced"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/10/05/spicy-roasted-shrimp-sandwich-with-chipotle-avocado/",
    "recipeTitle": "Spicy Roasted Shrimp Sandwich with Chipotle Avocado Mayonnaise",
    "ingredients": [
      "1 pound medium shrimp, peeled and deveined ",
      "1 tablespoon olive oil ",
      "1 teaspoon cumin ",
      "1 teaspoon garlic powder ",
      "1/2 teaspoon chili powder ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "Chipotle avocado mayonnaise ",
      "1 baguette, cut it into 3-4 equal pieces, toasted, for serving ",
      "Romaine lettuce leaves, for serving ",
      "Sliced avocado, for serving ",
      "1-3 chipotle peppers, in adobo sauce ",
      "1 avocado, pitted and chopped ",
      "1/4 cup mayonnaise ",
      "1/4 cup Greek yogurt ",
      "Juice of 1 lime ",
      "1/4 teaspoon salt"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/01/04/spicy-tofu-lettuce-wraps/",
    "recipeTitle": "Spicy Tofu Lettuce Wraps",
    "ingredients": [
      "3 tablespoons soy sauce ",
      "1 tablespoon sesame oil ",
      "1-3 teaspoons sambal oelek (chili paste) ",
      "2 teaspoons ginger ",
      "2 teaspoons sugar ",
      "1 teaspoon rice vinegar ",
      "3 cloves garlic, minced ",
      "1 tablespoon vegetable oil ",
      "1 (12-ounce) package firm tofu ",
      "1 red bell pepper, diced ",
      "2 cups chopped mushrooms ",
      "Romaine lettuce, for serving"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/08/05/spinach-and-artichoke-dip-pasta/",
    "recipeTitle": "Spinach and Artichoke Dip Pasta",
    "ingredients": [
      "1 pound penne pasta ",
      "8 ounces bacon ends & pieces, chopped ",
      "2 tablespoons olive oil ",
      "3 cloves garlic, minced ",
      "1 large onion, diced ",
      "3 tablespoons all-purpose flour ",
      "1/2 cup chicken broth ",
      "2 cups milk ",
      "1 (10-ounce) package frozen chopped spinach, defrosted and drained ",
      "1 (14-ounce) can artichoke hearts, chopped ",
      "Few grates of fresh nutmeg ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 1/2 cups shredded pepper jack, divided ",
      "1 1/2 cups grated Parmesan, divided"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/02/23/spinach-and-artichoke-mac-and-cheese/",
    "recipeTitle": "Spinach and Artichoke Mac and Cheese",
    "ingredients": [
      "1 (6-ounce) package Horizon Organic® Pasta Shells & White Cheddar Cheese ",
      "3 cups baby spinach, chopped ",
      "1 (14-ounce) can artichoke hearts, drained and chopped ",
      "1/4 cup Horizon Organic® Reduced Fat Milk ",
      "1/4 cup Greek yogurt ",
      "1/4 cup freshly grated Parmesan ",
      "2 tablespoons unsalted butter, melted ",
      "1/4 teaspoon garlic powder ",
      "1/4 teaspoon onion powder ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/2 cup Panko* ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/01/26/spinach-white-bean-soup/",
    "recipeTitle": "Spinach and White Bean Soup",
    "ingredients": [
      "1 tablespoon olive oil ",
      "3 cloves garlic, minced ",
      "1 onion, diced ",
      "1/2 teaspoon dried thyme ",
      "1/2 teaspoon dried basil ",
      "4 cups vegetable stock ",
      "2 bay leaves ",
      "1 cup uncooked orzo pasta ",
      "2 cups baby spinach ",
      "1 (15-ounce) can cannellini beans, drained and rinsed ",
      "Juice of 1 lemon ",
      "2 tablespoons chopped fresh parsley leaves ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/06/05/spinach-prosciutto-alfredo-pizza/",
    "recipeTitle": "Spinach Prosciutto Alfredo Pizza",
    "ingredients": [
      "2 tablespoons olive oil ",
      "2 tablespoons unsalted butter ",
      "3/4 cup heavy cream ",
      "3/4 cup grated Parmesan ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 ball pizza dough, homemade or store-bought ",
      "2 cups shredded mozzarella ",
      "1 cup chopped frozen spinach, thawed and excess water squeezed out ",
      "4 slices prosciutto, chopped"
    ],
    "cuisineType": [
      "Pork"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/07/30/spinach-tomato-tortellini/",
    "recipeTitle": "Spinach Tomato Tortellini",
    "ingredients": [
      "12 ounces tortellini pasta ",
      "1 1/2 cups heavy cream ",
      "2 tablespoons all-purpose flour ",
      "1 tablespoon olive oil ",
      "3 cloves garlic, minced ",
      "1 (14.5-ounce) can petite diced tomatoes ",
      "3 cups spinach, roughly chopped ",
      "2 teaspoons dried basil ",
      "1 teaspoon dried oregano ",
      "1/2 teaspoon dried thyme ",
      "1/4 teaspoon crushed red pepper flakes, optional ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/4 cup grated Parmesan"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/09/06/spinach-tomato-tortellini-soup/",
    "recipeTitle": "Spinach Tomato Tortellini Soup",
    "ingredients": [
      "1 tablespoon olive oil ",
      "3 cloves garlic, minced ",
      "1 onion, diced ",
      "4 cups chicken broth ",
      "1 (14.5-ounce) can petite diced tomatoes, undrained ",
      "1 (9-ounce) package refrigerated three cheese tortellini ",
      "1/2 teaspoon dried basil ",
      "1/2 teaspoon dried oregano ",
      "1 bay leaf ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "3 cups baby spinach, chopped ",
      "2 tablespoons grated Parmesan"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/08/07/sriracha-guacamole-hot-dogs/",
    "recipeTitle": "Sriracha Guacamole Hot Dogs",
    "ingredients": [
      "6 Hebrew National Hot Dogs ",
      "Sriracha guacamole ",
      "6 hot dog buns ",
      "1 Roma tomato, sliced and cut into half-circles"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/03/06/steak-fajita-salad/",
    "recipeTitle": "Steak Fajita Salad",
    "ingredients": [
      "2 tablespoons olive oil, divded ",
      "1 onion, thinly sliced ",
      "1 red bell pepper, thinly sliced ",
      "1 orange bell pepper, thinly sliced ",
      "1 green bell pepper, thinly sliced ",
      "8 cups chopped romaine lettuce ",
      "1 avocado, halved, seeded, peeled and thinly sliced ",
      "1 cup loosely packed cilantro, stems removed ",
      "1/2 cup sour cream ",
      "2 tablespoons mayonnaise ",
      "2 cloves garlic ",
      "Juice of 1 lime ",
      "Pinch of salt ",
      "1/4 cup olive oil ",
      "2 tablespoons apple cider vinegar ",
      "1/4 cup olive oil ",
      "2 cloves garlic, minced ",
      "Juice of 1 lime ",
      "1 teaspoon ground cumin ",
      "1 teaspoon chili powder ",
      "1 teaspoon dried oregano ",
      "1/2 teaspoon onion powder ",
      "Kosher salt and freshly ground black pepper ",
      "2 pounds flank steak"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2015/02/06/sticky-garlic-chicken-bites/",
    "recipeTitle": "Sticky Garlic Chicken Bites",
    "ingredients": [
      "1 pound boneless, skinless chicken breasts, cut into 1-inch chunks ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 large eggs, beaten ",
      "1 cup Panko* ",
      "1/4 cup reduced sodium soy sauce ",
      "1/4 cup honey ",
      "4 cloves garlic, minced ",
      "2 tablespoons hoisin sauce ",
      "1 tablespoon freshly grated ginger ",
      "1 tablespoon Sriracha ",
      "2 green onions, thinly sliced ",
      "2 teaspoons sesame seeds"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/09/25/stovetop-mac-cheese/",
    "recipeTitle": "Stovetop Mac and Cheese",
    "ingredients": [
      "3 tablespoons unsalted butter, divided ",
      "1/2 cup Panko ",
      "1/2 teaspoon thyme leaves ",
      "1 1/2 cup shredded sharp cheddar cheese ",
      "1 cup shredded Monterey Jack cheese ",
      "1 tablespoon cornstarch ",
      "8 ounces fusilli pasta ",
      "1 (12-ounce) can evaporated milk ",
      "1 tablespoon Emeril's Essence Creole Seasoning ",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/08/23/strawberry-avocado-couscous-with-lime-vinaigrette-2/",
    "recipeTitle": "Strawberry Avocado Couscous Salad with Lime Vinaigrette",
    "ingredients": [
      "1 cup couscous ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1/2 cup corn kernels ",
      "1/2 cup strawberries, quartered ",
      "2 tablespoons chopped fresh cilantro leaves ",
      "2 tablespoons pine nuts ",
      "1/4 cup olive oil ",
      "1/4 cup apple cider vinegar ",
      "Zest of 1 lime ",
      "2 tablespoons freshly squeezed lime juice ",
      "2 teaspoons sugar, or more to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/01/28/strawberry-quinoa-salad/",
    "recipeTitle": "Strawberry Quinoa Salad",
    "ingredients": [
      "6 cups baby spinach ",
      "2 cup strawberries, halved ",
      "1 avocado, halved, seeded, peeled and diced ",
      "1/2 cup cooked quinoa ",
      "1/4 cup pecan halves ",
      "1/4 cup crumbled goat cheese ",
      "1/4 cup olive oil ",
      "1/4 cup balsamic vinegar ",
      "2 cloves garlic, pressed ",
      "2 teaspoons Imperial Sugar Extra Fine Granulated Sugar, or more, to taste"
    ],
    "cuisineType": [
      "Vegetarian"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2012/09/02/stuffed-green-chili-con-queso-cheeseburger-sliders/",
    "recipeTitle": "Stuffed Green Chili con Queso Cheeseburger Sliders",
    "ingredients": [
      "1 pound ground sirloin",
      "6 tablespoons shredded Monterrey Jack cheese",
      "Kosher salt and freshly ground black pepper, to taste",
      "Olive oil",
      "6 split slider buns, toasted, for serving",
      "Sliced avocado, for serving",
      "Olive oil",
      "1 onion, diced",
      "1 clove garlic, minced",
      "1 (4-ounce) can diced green chilis",
      "1/4 cup milk",
      "8 ounces white American cheese, shredded",
      "2 ounces Monterrey Jack cheese, shredded",
      "Kosher salt and freshly ground black pepper, to taste"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2013/02/01/super-bowl-turkey-chili/",
    "recipeTitle": "Super Bowl Turkey Chili",
    "ingredients": [
      "2 tablespoons olive oil ",
      "5 cloves garlic, minced ",
      "2 large bell peppers, diced ",
      "1 yellow onion, diced ",
      "3 carrots, diced ",
      "10 ounces mushrooms, thinly sliced ",
      "1 1/2 teaspoon cumin ",
      "1 teaspoon chili powder ",
      "1 teaspoon oregano ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 pound ground turkey ",
      "1 1/2 cups beer ",
      "2 (14.5-ounce) cans diced fire roasted tomatoes ",
      "1 (15-ounce) can cannellini beans, drained and rinsed ",
      "1 (15-ounce) can red kidney beans, drained and rinsed ",
      "1 (15-ounce) can black beans, drained and rinsed"
    ],
    "cuisineType": [
      "Chicken"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/02/21/swedish-meatballs/",
    "recipeTitle": "Swedish Meatballs",
    "ingredients": [
      "2 tablespoons olive oil, divided ",
      "1 onion, diced ",
      "1 pound ground beef ",
      "1 pound ground pork ",
      "1/2 cup Panko* ",
      "2 large egg yolks ",
      "1/4 teaspoon ground allspice ",
      "1/4 teaspoon ground nutmeg ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1/4 cup unsalted butter ",
      "1/3 cup all-purpose flour ",
      "4 cups beef broth ",
      "3/4 cup sour cream ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "2 tablespoons chopped fresh parsley leaves"
    ],
    "cuisineType": [
      "Beef"
    ],
    "sourceName": "Damn Delicious"
  },
  {
    "sourceHref": "http://damndelicious.net/2014/02/22/sweet-lemon-shrimp/",
    "recipeTitle": "Sweet Lemon Shrimp",
    "ingredients": [
      "1/3 cup hoisin sauce ",
      "1/4 cup honey ",
      "1/2 cup freshly squeezed lemon juice ",
      "Zest of 1 lemon ",
      "Kosher salt and freshly ground black pepper, to taste ",
      "1 1/2 pounds medium shrimp, peeled and deveined ",
      "2 tablespoons chopped fresh cilantro leaves"
    ],
    "cuisineType": [
      "Seafood"
    ],
    "sourceName": "Damn Delicious"
  }
]
		}
	}
}]);