const RECIPES = [
  {
    name: 'Cheat’s cheesy focaccia',
    cuisineType: ['italian'],
    ingredients: [
      '500g pack bread mix',
      '2 tbsp olive oil , plus a little extra for drizzling',
      '25g parmesan (or vegetarian alternative), grated',
      '75g dolcelatte cheese (or vegetarian alternative)'
    ],
    source: 'BBC Good Food',
    totalTime: 40,
    url: 'https://www.bbcgoodfood.com/recipes/cheats-cheesy-focaccia',
    image: './recipe-images/cheat’s-cheesy-focaccia.jpg'
  },
  {
    name: 'Spice-Rubbed Grilled Flap Meat (Sirloin Tip) Recipe',
    cuisineType: 'American',
    ingredients: [
      '1 tablespoon whole black peppercorns, toasted',
      '1 teaspoon coriander seed, toasted',
      '1 teaspoon fennel seed, toasted',
      '1 teaspoon cumin pods, toasted',
      '1 teaspoon red pepper flakes',
      '1/2 teaspoon dried oregano',
      '2 medium cloves garlic, minced (about 2 teaspoons)',
      '2 tablespoons vegetable or canola oil',
      '1 whole flap meat steak, 2 to 2 1/2 pounds',
      'Kosher salt'
    ],
    source: 'Serious Eats',
    totalTime: 240,
    url: 'http://www.seriouseats.com/recipes/2012/05/spice-rubbed-grilled-flap-meat-sirloin-tip-recipe.html',
    image: './recipe-images/grilled.jpg'
  },
  {
    name: 'Burnt-Scallion Fish',
    cuisineType: ['Chinese'],
    ingredients: [
      '2 bunches scallions',
      '8 tbsp. butter',
      '2 8-oz. fish filets'
    ],
    source: 'Saveur',
    totalTime: 70,
    url: 'http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish',
    image: './recipe-images/fish-dish.jpg'
  },
  {
    name: 'Baked Chicken',
    cuisineType: ['American'],
    ingredients: [
      '6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on',
      '1/2 teaspoon coarse salt',
      '1/2 teaspoon Mrs. Dash seasoning',
      '1/4 teaspoon freshly ground black pepper'
    ],
    source: 'Martha Stewart',
    totalTime: 90,
    url: 'http://www.marthastewart.com/318981/baked-chicken',
    image: './recipe-images/baked-chicken.jpg'
  },
  {
    name: "Vegetarian Shepherd's Pie",
    cuisineType: ['English', 'Balanced', 'High-Fiber'],
    ingredients: [
      '2 tablespoons extra-virgin olive oil',
      '1 large onion, finely diced',
      '2 carrots, peeled and thinly sliced',
      '2 celery stalks, thinly sliced',
      '10 ounces cremini mushrooms, trimmed and sliced',
      '1 tablespoon tomato paste',
      "1 tablespoon vegetarian Worcestershire sauce, such as Annie's Naturals",
      '1 dried bay leaf',
      '1 cup French green lentils, picked over',
      'Kosher salt and freshly ground pepper',
      '1 cup frozen peas',
      '2 pounds Yukon Gold potatoes, scrubbed and cut into 1 1/2-inch pieces',
      '4 cloves garlic',
      '4 tablespoons unsalted butter',
      '1/2 cup whole milk, warmed'
    ],
    source: 'Martha Stewart',
    totalTime: 120,
    url: 'https://www.marthastewart.com/1535235/vegetarian-shepherds-pie',
    image: "./recipe-images/vegetarian-shepherd's-pie.jpg"
  },
  {
    name: 'Chicken Paprikash',
    cuisineType: ['Chinese', 'Low-Carb'],
    ingredients: [
      '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
      '1/2 teaspoon salt',
      '1/4 teaspoon black pepper',
      '1 tablespoon butter – cultured unsalted (or olive oil)',
      '240 grams onion sliced thin (1 large onion)',
      '70 grams Anaheim pepper chopped (1 large pepper)',
      '25 grams paprika (about 1/4 cup)',
      '1 cup chicken stock',
      '1/2 teaspoon salt',
      '1/2 cup sour cream',
      '1 tablespoon flour – all-purpose'
    ],
    source: 'No Recipes',
    totalTime: 80,
    url: 'http://norecipes.com/recipe/chicken-paprikash/',
    image: './recipe-images/chicken-paprikash.jpg'
  },
  {
    name: 'Meat Stock',
    cuisineType: 'American',
    ingredients: [
      '2.5 pounds beef marrow bones',
      '1 large onion, quartered',
      '2 carrots, sliced',
      '1 leek, cleaned and sliced',
      '2 celery stalks, sliced',
      '2.5 pounds organic beef stew meat, cubed',
      '2 tablespoons tomato paste',
      '5 cloves garlic',
      '2 bay leaves',
      '3 sprigs thyme',
      '3 sprigs Italian parsley',
      '1/2 teaspoon black peppercorns'
    ],
    source: 'Food52',
    totalTime: 60,
    url: 'https://food52.com/recipes/3712-meat-stock',
    image: './recipe-images/meat.jpg'
  },
  {
    name: 'Individual vegetarian lasagnes',
    cuisineType: ['Italian'],
    ingredients: [
      '1.2 kg cherry tomatoes',
      '5 sprigs of fresh thyme',
      'extra virgin olive oil',
      '2 shallots',
      '2 cloves of garlic',
      '500 g baby spinach',
      '8-12 fresh or dried lasagne sheets',
      '350 g ricotta cheese',
      'WHITE SAUCE',
      '600 ml milk',
      '25 g unsalted butter',
      '2 heaped tablespoons flour',
      '150 g vegetarian sharp, mature cheese',
      '100 g mozzarella'
    ],
    source: 'Jamie Oliver',
    totalTime: 130,
    url: 'http://www.jamieoliver.com/recipes/vegetables-recipes/individual-vegetarian-lasagnes/',
    image: './recipe-images/individual-vegetarian-lasagnes.jpg'
  },
  {
    name: 'Deep Fried Fish Bones',
    cuisineType: ['Chinese', ' south east asian'],
    ingredients: ['8 small whiting fish or smelt', '4 cups vegetable oil'],
    source: 'Serious Eats',
    totalTime: 31,
    url: 'http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html',
    image: './recipe-images/deep-fried-fish-bones.jpg'
  },
  {
    name: 'Vegetarian Stir-Fried Garlic Scape',
    cuisineType: ['Italian', 'Balanced'],
    ingredients: [
      '8 oz. garlic scapes',
      '3 oz. baby corn',
      '3 oz. carrots',
      '1 oz. dried shiitake mushrooms',
      '1 clove of garlic sliced thinly',
      '3 slices of fresh ginger root',
      '2 tablespoons vegetable oil',
      '1/4 cup shaoxing cooking wine',
      '1/4 vegetarian stock or water',
      '1 tablespoon light soy sauce',
      '1 teaspoon sugar',
      '1 teaspoon cornstarch',
      '1/4 teaspoon ground white pepper'
    ],
    source: 'Red Cook',
    totalTime: 60,
    url: 'http://redcook.net/2010/06/16/garlic-scape-an-off-menu-treat/',
    image: './recipe-images/vegetarian-stir-fried-garlic-s.jpg'
  }
]

const cardContainer = document.getElementById('card-container')
const filterDropdown = document.getElementById('filterDropdown')
const ascendingButton = document.getElementById('ascendingButton')
const descendingButton = document.getElementById('descendingButton')
const shortestButton = document.getElementById('shortest')
const longestButton = document.getElementById('longest')
const randomButton = document.getElementById('random-button')
const selectCountry = document.getElementById('selectCountry')
const countryDropdown = document.getElementById('countryDropdown')


// Display all recipes by default when the page loads

const displayRecipes = (recipesArray) => {
  cardContainer.innerHTML = '' //Clears the content

  // Iterating over the whole recipe array to access each recipe object to be able to fill in the $key of the innerHTML afterwards
  recipesArray.forEach(recipe => {

    // Get the total time
    const time = recipe.totalTime;

    // Handle cuisineType as array or string
    // const cuisine = Array.isArray(recipe.cuisineType) ? recipe.cuisineType.join(', ') : recipe.cuisineType

    cardContainer.innerHTML += `
          <div class="card">
            <div class="card-image">
              <img src="${recipe.image}" alt="${recipe.name}"/>
            </div>
            <div class="card-text">
              <h2>${recipe.name}</h2>
            <p>Cuisine Type: ${recipe.cuisineType}</p>
          <p class="titleIngredients">Ingredients:</p>
          <ul class="ingredients">${ingredientsList} </ul>
            </div>
          </div>`
  })
}



const filterRecipes = () => {
  // get the value from the select
  const value = filterDropdown.value
  console.log('the user selected', value)
  // if the user clicks "all", all the recipes will be shown

  if (value === 'all') {
    displayRecipes(RECIPES)

    // if the user clicks on another choice only selected recipes will be shown. Since the cuisine types are sometimes stored as a 'string' and sometimes as an [array], I mentioned 
  } else if (value === 'american') {

    const americanRecipes = RECIPES.filter(recipe => recipe.cuisineType && recipe.cuisineType.includes('american'))
    displayRecipes(americanRecipes)

  } else if (value === 'asian') {

    const asianRecipes = RECIPES.filter(recipe => recipe.cuisineType && recipe.cuisineType.includes('south east asian'))
    displayRecipes(asianRecipes)

  } else if (value === 'italian') {
    const italianRecipes = RECIPES.filter(recipe => recipe.cuisineType && recipe.cuisineType.includes('italian'))

    displayRecipes(italianRecipes)

  }
}

// eventListener for the Dropdown menu
filterDropdown.addEventListener('change', filterRecipes)




//  Buttons for sorting
// Sort by recipe name in ascending order
ascendingButton.addEventListener('click', () => {

  const sortedRecipes = [...RECIPES].sort((a, b) => a.name.localeCompare(b.name))
  displayRecipes(sortedRecipes)
})

// Sort by recipe name in descending order
descendingButton.addEventListener('click', () => {
  const sortedRecipes = [...RECIPES].sort((a, b) => b.name.localeCompare(a.name))
  displayRecipes(sortedRecipes)
})

//Sort by shortest cooking time 
shortestButton.addEventListener('click', () => {
  const sortedRecipes = [...RECIPES].sort((a, b) => a.totalTime - b.totalTime)
  displayRecipes(sortedRecipes);
})

//Sort by longest cooking time 
longestButton.addEventListener('click', () => {
  const sortedRecipes = [...RECIPES].sort((a, b) => b.totalTime - a.totalTime)
  displayRecipes(sortedRecipes);
})


randomButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * RECIPES.length)
  const randomRecipe = RECIPES[randomIndex]
  displayRecipes([randomRecipe]) // Pass an array with the single recipe
})


// Display all recipes initially


displayRecipes(RECIPES)