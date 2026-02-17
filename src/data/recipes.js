export const defaultRecipes = [
{
  id: 1,
  name: "Paneer Butter Masala",
  cuisine: "Indian",
  time: 30,
  rating: 4.5,
  type: "veg",
  difficulty: "Medium",
  servings: 3,
  yield: "Approx. 750g curry",
  glutenFree: true,

  image: "https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=a30BLUQiFoc",

  ingredients: [
    { name: "Paneer (cubed)", key: "paneer", quantity: "250g" },
    { name: "Butter", key: "butter", quantity: "2 tbsp" },
    { name: "Tomato puree", key: "tomato", quantity: "1 cup" },
    { name: "Fresh cream", key: "cream", quantity: "1/2 cup" },
    { name: "Ginger-garlic paste", key: "garlic", quantity: "1 tbsp" },
    { name: "Garam masala", key: "garam masala", quantity: "1 tsp" },
    { name: "Red chili powder", key: "chili", quantity: "1 tsp" },
    { name: "Salt", key: "salt", quantity: "to taste" }
  ],

  steps: [
    "Heat butter in a heavy-bottom pan over medium flame. Once melted, add ginger-garlic paste and sauté until the raw smell disappears.",
    "Add tomato puree and cook for 8–10 minutes until the mixture thickens and oil starts separating from the sides.",
    "Add red chili powder, garam masala, and salt. Mix thoroughly and cook for another 2 minutes.",
    "Add paneer cubes and gently mix so they don’t break. Simmer for 5–7 minutes on low flame.",
    "Stir in fresh cream and cook for 2 minutes. Turn off the heat and garnish with coriander.",
    "Serve hot with naan or jeera rice."
  ],

  nutrition: {
    calories: 450,
    protein: "18g",
    carbs: "22g",
    fats: "32g"
  }
},
{
  id: 2,
  name: "Chicken Biryani",
  cuisine: "Indian",
  time: 45,
  rating: 4.7,
  type: "non-veg",
  difficulty: "Hard",
  servings: 4,
  yield: "Approx. 1.2 kg biryani",
  glutenFree: true,

  image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=95BCU1n268w",

  ingredients: [
    { name: "Basmati rice", key: "rice", quantity: "2 cups" },
    { name: "Chicken", key: "chicken", quantity: "500g" },
    { name: "Yogurt", key: "yogurt", quantity: "1 cup" },
    { name: "Onions", key: "onion", quantity: "2 large" },
    { name: "Biryani masala", key: "biryani masala", quantity: "2 tbsp" },
    { name: "Ghee", key: "ghee", quantity: "2 tbsp" }
  ],

  steps: [
    "Wash and soak basmati rice for 30 minutes. Boil in salted water until 70% cooked, then drain.",
    "Marinate chicken with yogurt, biryani masala, and salt. Let it rest for 20 minutes.",
    "In a deep pot, heat ghee and fry sliced onions until golden brown.",
    "Add marinated chicken and cook for 10–12 minutes until partially cooked.",
    "Layer partially cooked rice over chicken. Cover and cook on low heat (dum) for 15 minutes.",
    "Turn off heat and let it rest for 5 minutes before gently mixing.",
    "Serve hot with raita."
  ],

  nutrition: {
    calories: 650,
    protein: "35g",
    carbs: "75g",
    fats: "20g"
  }
},{
  id: 3,
  name: "Pasta Alfredo",
  cuisine: "Italian",
  time: 25,
  rating: 4.3,
  type: "veg",
  difficulty: "Easy",
  servings: 2,
  yield: "Approx. 600g pasta",
  glutenFree: false,

  image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=3AAdKl1UYZs",

  ingredients: [
    { name: "Pasta", key: "pasta", quantity: "200g" },
    { name: "Butter", key: "butter", quantity: "2 tbsp" },
    { name: "Garlic", key: "garlic", quantity: "1 tsp" },
    { name: "Fresh cream", key: "cream", quantity: "1 cup" },
    { name: "Parmesan cheese", key: "cheese", quantity: "1/2 cup" }
  ],

  steps: [
    "Boil pasta in salted water until al dente. Reserve 1/4 cup pasta water and drain the rest.",
    "In a pan, melt butter and sauté garlic for 1 minute until fragrant.",
    "Add fresh cream and simmer on low heat for 5 minutes.",
    "Stir in grated parmesan cheese and mix until smooth and creamy.",
    "Add cooked pasta and toss well. Use reserved pasta water if sauce is too thick.",
    "Serve immediately with extra cheese on top."
  ],

  nutrition: {
    calories: 520,
    protein: "15g",
    carbs: "60g",
    fats: "25g"
  }
},{
  id: 4,
  name: "Sushi Rolls",
  cuisine: "Japanese",
  time: 50,
  rating: 4.4,
  type: "non-veg",
  difficulty: "Hard",
  servings: 3,
  yield: "Approx. 18 sushi pieces",
  glutenFree: true,

  image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=I1UDS2kgqY8",

   ingredients: [
    { name: "Sushi rice", key: "rice", quantity: "2 cups" },
    { name: "Nori sheets", key: "nori", quantity: "4" },
    { name: "Raw fish", key: "fish", quantity: "200g" },
    { name: "Cucumber", key: "cucumber", quantity: "1/2 cup" },
    { name: "Avocado", key: "avocado", quantity: "1" }
  ],

  steps: [
    "Cook sushi rice and season with rice vinegar, sugar, and salt. Let it cool completely.",
    "Place a nori sheet on a bamboo mat and spread a thin layer of rice evenly.",
    "Add fish, cucumber, and avocado in a straight line in the center.",
    "Roll tightly using the bamboo mat while applying gentle pressure.",
    "Slice into equal pieces using a sharp knife dipped in water.",
    "Serve with soy sauce, wasabi, and pickled ginger."
  ],

  nutrition: {
    calories: 450,
    protein: "22g",
    carbs: "70g",
    fats: "10g"
  }
},{
  id: 5,
  name: "Grilled Chicken",
  cuisine: "American",
  time: 35,
  rating: 4.6,
  type: "non-veg",
  difficulty: "Medium",
  servings: 2,
  yield: "Approx. 400g grilled chicken",
  glutenFree: true,

  image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=0XxSG3jTK3Q",

   ingredients: [
    { name: "Chicken breast", key: "chicken", quantity: "400g" },
    { name: "Olive oil", key: "olive oil", quantity: "2 tbsp" },
    { name: "Lemon juice", key: "lemon", quantity: "1 tbsp" },
    { name: "Garlic powder", key: "garlic", quantity: "1 tsp" },
    { name: "Black pepper", key: "pepper", quantity: "1 tsp" },
    { name: "Salt", key: "salt", quantity: "to taste" }
  ],

  steps: [
    "Clean and pat dry the chicken breasts. Make shallow cuts to help absorb marinade.",
    "In a bowl, mix olive oil, lemon juice, garlic powder, salt, and pepper.",
    "Coat the chicken thoroughly and marinate for at least 20 minutes.",
    "Preheat grill pan on medium heat and lightly grease it.",
    "Grill chicken for 6–7 minutes on each side until fully cooked.",
    "Let it rest for 5 minutes before slicing. Serve with vegetables or salad."
  ],

  nutrition: {
    calories: 380,
    protein: "42g",
    carbs: "2g",
    fats: "18g"
  }
}
,{
  id: 6,
  name: "Masala Dosa",
  cuisine: "South Indian",
  time: 25,
  rating: 4.6,
  type: "veg",
  difficulty: "Medium",
  servings: 3,
  yield: "6 medium dosas",
  glutenFree: true,

  image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=U3Yh5h0GqB8",

  ingredients: [
    { name: "Dosa batter", key: "dosa batter", quantity: "2 cups" },
    { name: "Boiled potatoes", key: "potato", quantity: "3 medium" },
    { name: "Onion", key: "onion", quantity: "1" },
    { name: "Mustard seeds", key: "mustard", quantity: "1 tsp" },
    { name: "Turmeric", key: "turmeric", quantity: "1/2 tsp" }
  ],

  steps: [
    "Heat oil in a pan, add mustard seeds and let them splutter.",
    "Add onions and sauté until translucent.",
    "Add mashed potatoes, turmeric, and salt. Cook for 5 minutes and set aside.",
    "Heat a non-stick tawa and pour a ladle of batter, spreading in circular motion.",
    "Drizzle oil around edges and cook until crispy.",
    "Place potato filling in center, fold dosa, and serve with chutney and sambar."
  ],

  nutrition: {
    calories: 350,
    protein: "8g",
    carbs: "55g",
    fats: "10g"
  }
}
,{
  id: 7,
  name: "Butter Chicken",
  cuisine: "North Indian",
  time: 40,
  rating: 4.8,
  type: "non-veg",
  difficulty: "Medium",
  servings: 4,
  yield: "Approx. 1 kg curry",
  glutenFree: true,

  image: "https://images.pexels.com/photos/9609842/pexels-photo-9609842.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=b7yuoRk227Y",

  ingredients: [
    { name: "Chicken", key: "chicken", quantity: "500g" },
    { name: "Butter", key: "butter", quantity: "3 tbsp" },
    { name: "Tomato puree", key: "tomato", quantity: "1.5 cups" },
    { name: "Cream", key: "cream", quantity: "1/2 cup" },
    { name: "Garam masala", key: "garam masala", quantity: "1 tsp" }
  ],

  steps: [
    "Marinate chicken with yogurt and spices for 20 minutes.",
    "Grill or pan-fry chicken pieces until lightly charred.",
    "In another pan, melt butter and cook tomato puree for 10 minutes.",
    "Add spices and cooked chicken pieces.",
    "Simmer for 8–10 minutes and stir in cream.",
    "Garnish with coriander and serve with naan."
  ],

  nutrition: {
    calories: 600,
    protein: "40g",
    carbs: "15g",
    fats: "40g"
  }
},
{
  id: 8,
  name: "Thai Green Curry",
  cuisine: "Thai",
  time: 40,
  rating: 4.8,
  type: "non-veg",
  difficulty: "Medium",
  servings: 4,
  yield: "Approx. 1 liter curry (4 bowls)",
  glutenFree: true,

  image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=LIbKVpBQKJI",

  ingredients: [
    { name: "Chicken", key: "chicken", quantity: "500g" },
    { name: "Coconut milk", key: "coconut milk", quantity: "2 cups" },
    { name: "Green curry paste", key: "curry paste", quantity: "2 tbsp" },
    { name: "Bell peppers", key: "pepper", quantity: "1 cup" },
    { name: "Zucchini", key: "zucchini", quantity: "1 cup" },
    { name: "Fish sauce", key: "fish sauce", quantity: "1 tbsp" },
    { name: "Basil leaves", key: "basil", quantity: "1/4 cup" }
  ],

  steps: [
    "Heat a deep pan over medium heat and add 2–3 tablespoons of thick coconut milk. Let it simmer until slightly reduced.",
    "Add Thai green curry paste and sauté for 2–3 minutes until aromatic.",
    "Add sliced chicken and cook until it turns white and is partially cooked.",
    "Pour remaining coconut milk and bring the curry to a gentle boil.",
    "Add bell peppers and zucchini. Cook for 6–8 minutes until vegetables are tender but still slightly crisp.",
    "Season with fish sauce and brown sugar. Adjust salt if necessary.",
    "Turn off heat and stir in fresh basil leaves.",
    "Serve hot with steamed jasmine rice."
  ],

  nutrition: {
    calories: 520,
    protein: "38g",
    carbs: "18g",
    fats: "34g"
  }
}
,{
  id: 9,
  name: "Falafel Wrap",
  cuisine: "Middle Eastern",
  time: 20,
  rating: 4.2,
  type: "veg",
  difficulty: "Easy",
  servings: 2,
  yield: "2 large wraps",
  glutenFree: false,

  image: "https://images.pexels.com/photos/13292526/pexels-photo-13292526.png",
  youtubeUrl: "https://www.youtube.com/watch?v=foB6bxhZYF0",

  ingredients: [
    { name: "Chickpeas", key: "chickpea", quantity: "1 cup" },
    { name: "Garlic", key: "garlic", quantity: "2 cloves" },
    { name: "Parsley", key: "parsley", quantity: "2 tbsp" },
    { name: "Wrap bread", key: "wrap", quantity: "2 pieces" }
  ],

  steps: [
    "Blend soaked chickpeas with garlic and parsley into coarse mixture.",
    "Shape into small balls and deep fry until golden brown.",
    "Warm wrap bread and spread hummus evenly.",
    "Place falafel balls, fresh veggies, and drizzle tahini sauce.",
    "Roll tightly and serve immediately."
  ],

  nutrition: {
    calories: 420,
    protein: "14g",
    carbs: "55g",
    fats: "15g"
  }
},{
  id: 10,
  name: "Beef Tacos",
  cuisine: "Mexican",
  time: 30,
  rating: 4.5,
  type: "non-veg",
  difficulty: "Easy",
  servings: 3,
  yield: "6 tacos",
  glutenFree: true,

  image: "https://images.pexels.com/photos/7613555/pexels-photo-7613555.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=R5LhSxgE-Lg",

   ingredients: [
    { name: "Beef mince", key: "beef", quantity: "300g" },
    { name: "Taco shells", key: "taco shell", quantity: "6" },
    { name: "Onion", key: "onion", quantity: "1" },
    { name: "Tomato salsa", key: "tomato", quantity: "1/2 cup" },
    { name: "Cheddar cheese", key: "cheese", quantity: "1/2 cup" }
  ],

  steps: [
    "Heat oil and sauté chopped onions until soft.",
    "Add beef mince and cook until browned.",
    "Add taco seasoning and cook for 5 minutes.",
    "Warm taco shells in oven for 3–4 minutes.",
    "Fill shells with beef mixture, salsa, and cheese.",
    "Serve immediately with sour cream."
  ],

  nutrition: {
    calories: 550,
    protein: "28g",
    carbs: "45g",
    fats: "28g"
  }
}
,{
  id: 11,
  name: "Greek Salad",
  cuisine: "Greek",
  time: 15,
  rating: 4.1,
  type: "veg",
  difficulty: "Easy",
  servings: 2,
  yield: "Approx. 500g salad bowl",
  glutenFree: true,

  image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=0h3bZ3kPXq8",

  ingredients: [
    { name: "Cucumber (chopped)", key:"cucumber", quantity: "1 cup" },
    { name: "Tomatoes (chopped)",key:"tomato", quantity: "1 cup" },
    { name: "Feta cheese", key:"cheese", quantity: "1/2 cup" },
    { name: "Olives", key:"olives", quantity: "1/4 cup" },
    { name: "Olive oil",key:"olive oil", quantity: "2 tbsp" },
    { name: "Oregano", key:"oregano", quantity: "1 tsp" }
  ],

  steps: [
    "Wash and chop cucumber and tomatoes into bite-sized pieces.",
    "In a large bowl, combine vegetables and olives.",
    "Add crumbled feta cheese on top.",
    "Drizzle olive oil and sprinkle oregano.",
    "Toss gently and serve chilled."
  ],

  nutrition: {
    calories: 280,
    protein: "8g",
    carbs: "12g",
    fats: "20g"
  }
}
,{
  id: 12,
  name: "Pad Thai",
  cuisine: "Thai",
  time: 35,
  rating: 4.6,
  type: "non-veg",
  difficulty: "Medium",
  servings: 3,
  yield: "Approx. 900g noodles",
  glutenFree: false,

  image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=F86GfZIph8o",

  ingredients: [
    { name: "Rice noodles",key:"noodles", quantity: "200g" },
    { name: "Shrimp",key:"shrimp", quantity: "200g" },
    { name: "Bean sprouts",key:"bean sprout", quantity: "1 cup" },
    { name: "Eggs",key:"egg", quantity: "2" },
    { name: "Pad Thai sauce",key:"thai sauce", quantity: "1/4 cup" }
  ],

  steps: [
    "Soak rice noodles in warm water for 15 minutes.",
    "Heat oil in a wok and cook shrimp until pink.",
    "Push shrimp aside and scramble eggs in same pan.",
    "Add noodles and pour Pad Thai sauce over it.",
    "Toss well, add bean sprouts, and cook for 3 minutes.",
    "Garnish with peanuts and serve hot."
  ],

  nutrition: {
    calories: 520,
    protein: "25g",
    carbs: "65g",
    fats: "18g"
  }
}
,{
  id: 13,
  name: "Veggie Burger",
  cuisine: "American",
  time: 25,
  rating: 4.3,
  type: "veg",
  difficulty: "Easy",
  servings: 2,
  yield: "2 burgers",
  glutenFree: false,

  image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=RzQFzN4zLhI",

  ingredients: [
    { name: "Veg patties",key:"patty", quantity: "2" },
    { name: "Burger buns",key:"bun", quantity: "2" },
    { name: "Lettuce",key:"lettuce", quantity: "2 leaves" },
    { name: "Tomato slices",key:"tomato", quantity: "4 slices" },
    { name: "Mayonnaise",key:"mayonnaise", quantity: "2 tbsp" }
  ],

  steps: [
    "Cook veg patties in a pan until golden brown on both sides.",
    "Lightly toast burger buns.",
    "Spread mayonnaise on both halves of bun.",
    "Place lettuce, patty, and tomato slices.",
    "Close the bun and serve hot with fries."
  ],

  nutrition: {
    calories: 480,
    protein: "16g",
    carbs: "55g",
    fats: "22g"
  }
}
,{
  id: 14,
  name: "Lamb Kebabs",
  cuisine: "Turkish",
  time: 45,
  rating: 4.7,
  type: "non-veg",
  difficulty: "Medium",
  servings: 3,
  yield: "Approx. 600g kebabs",
  glutenFree: true,

  image: "https://images.pexels.com/photos/15058850/pexels-photo-15058850.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=6u5z4iYF5A0",

  ingredients: [
    { name: "Minced lamb", key: "lamb", quantity: "400g" },
    { name: "Onion (grated)", key: "onion", quantity: "1 medium" },
    { name: "Garlic (minced)", key: "garlic", quantity: "2 cloves" },
    { name: "Cumin powder", key: "cumin", quantity: "1 tsp" },
    { name: "Salt", key: "salt", quantity: "to taste" },
    { name: "Black pepper", key: "pepper", quantity: "1/2 tsp" }
  ],

  steps: [
    "Mix minced lamb with onion, garlic, and spices.",
    "Shape mixture onto skewers evenly.",
    "Preheat grill to medium-high heat.",
    "Grill kebabs for 10–12 minutes turning occasionally.",
    "Serve hot with pita bread and yogurt sauce."
  ],

  nutrition: {
    calories: 620,
    protein: "38g",
    carbs: "5g",
    fats: "48g"
  }
}
,{
  id: 15,
  name: "Ramen Bowl",
  cuisine: "Japanese",
  time: 40,
  rating: 4.6,
  type: "non-veg",
  difficulty: "Medium",
  servings: 2,
  yield: "2 large bowls",
  glutenFree: false,

  image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=GaXl6xkQvKk",

  ingredients: [
    { name: "Ramen noodles", key: "noodles", quantity: "200g" },
    { name: "Chicken broth", key: "broth", quantity: "3 cups" },
    { name: "Boiled eggs", key: "egg", quantity: "2" },
    { name: "Sliced chicken", key: "chicken", quantity: "200g" },
    { name: "Spring onions", key: "onion", quantity: "2 tbsp" }
  ],

  steps: [
    "Bring chicken broth to boil and season with soy sauce.",
    "Cook ramen noodles separately according to instructions.",
    "Place cooked noodles in serving bowls.",
    "Pour hot broth over noodles.",
    "Top with sliced chicken, halved eggs, and spring onions.",
    "Serve immediately while hot."
  ],

  nutrition: {
    calories: 540,
    protein: "24g",
    carbs: "70g",
    fats: "18g"
  }
}
,{
  id: 16,
  name: "Shakshuka",
  cuisine: "Mediterranean",
  time: 30,
  rating: 4.4,
  type: "veg",
  difficulty: "Easy",
  servings: 3,
  yield: "1 medium skillet (6 eggs)",
  glutenFree: true,

  image: "https://images.pexels.com/photos/9609846/pexels-photo-9609846.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=ifWWRZSWS18",

  ingredients: [
    { name: "Eggs", key: "egg", quantity: "6" },
    { name: "Tomato sauce", key: "tomato", quantity: "1.5 cups" },
    { name: "Bell pepper (chopped)", key: "pepper", quantity: "1" },
    { name: "Paprika", key: "paprika", quantity: "1 tsp" },
    { name: "Olive oil", key: "olive oil", quantity: "2 tbsp" }
  ],

  steps: [
    "Heat oil in a skillet and sauté bell peppers.",
    "Add tomato sauce and paprika, simmer for 10 minutes.",
    "Make small wells and crack eggs into them.",
    "Cover and cook until eggs are set.",
    "Serve hot with crusty bread."
  ],

  nutrition: {
    calories: 390,
    protein: "20g",
    carbs: "18g",
    fats: "25g"
  }
}
,{
  id: 17,
  name: "Fish and Chips",
  cuisine: "British",
  time: 35,
  rating: 4.2,
  type: "non-veg",
  difficulty: "Medium",
  servings: 2,
  yield: "2 fish fillets + 300g fries",
  glutenFree: false,

  image: "https://images.pexels.com/photos/32651688/pexels-photo-32651688.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=0pBv0z1xT4E",

  ingredients: [
    { name: "Fish fillets", key: "fish", quantity: "2" },
    { name: "Potatoes", key: "potato", quantity: "3 large" },
    { name: "Flour", key: "flour", quantity: "1 cup" },
    { name: "Baking powder", key: "baking powder", quantity: "1 tsp" },
    { name: "Salt", key: "salt", quantity: "to taste" }
  ],

  steps: [
    "Cut potatoes into strips and deep fry until golden.",
    "Prepare batter using flour and baking powder.",
    "Dip fish fillets into batter evenly.",
    "Deep fry fish until crispy and golden brown.",
    "Serve hot with fries and tartar sauce."
  ],

  nutrition: {
    calories: 700,
    protein: "32g",
    carbs: "80g",
    fats: "30g"
  }
}
,{
  id: 18,
  name: "Kimchi Fried Rice",
  cuisine: "Korean",
  time: 25,
  rating: 4.5,
  type: "veg",
  difficulty: "Easy",
  servings: 2,
  yield: "Approx. 700g rice",
  glutenFree: true,

  image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=Z8zG6rH4Y4E",

  ingredients: [
    { name: "Cooked rice", key: "rice", quantity: "2 cups" },
    { name: "Kimchi", key: "kimchi", quantity: "1 cup" },
    { name: "Soy sauce", key: "soy sauce", quantity: "1 tbsp" },
    { name: "Sesame oil", key: "sesame oil", quantity: "1 tsp" }
  ],

  steps: [
    "Heat oil in a wok and sauté kimchi for 3 minutes.",
    "Add cooked rice and mix thoroughly.",
    "Pour soy sauce and stir fry for 5 minutes.",
    "Drizzle sesame oil and mix well.",
    "Serve hot with fried egg on top (optional)."
  ],

  nutrition: {
    calories: 430,
    protein: "12g",
    carbs: "68g",
    fats: "14g"
  }
}
,{
  id: 19,
  name: "Chicken Shawarma",
  cuisine: "Middle Eastern",
  time: 30,
  rating: 4.7,
  type: "non-veg",
  difficulty: "Medium",
  servings: 3,
  yield: "3 large wraps",
  glutenFree: false,

  image: "https://images.pexels.com/photos/29173111/pexels-photo-29173111.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=KmGmA2s6aN8",

    ingredients: [
    { name: "Chicken strips", key: "chicken", quantity: "400g" },
    { name: "Pita bread", key: "pita", quantity: "3" },
    { name: "Garlic sauce", key: "garlic", quantity: "1/2 cup" },
    { name: "Mixed vegetables", key: "vegetable", quantity: "1 cup" }
  ],

  steps: [
    "Marinate chicken with spices and yogurt for 20 minutes.",
    "Cook chicken in a pan until fully done.",
    "Warm pita bread lightly.",
    "Spread garlic sauce and add vegetables.",
    "Place cooked chicken and roll tightly.",
    "Serve immediately."
  ],

  nutrition: {
    calories: 560,
    protein: "35g",
    carbs: "50g",
    fats: "25g"
  }
}
,{
  id: 20,
  name: "Margherita Pizza",
  cuisine: "Italian",
  time: 20,
  rating: 4.3,
  type: "veg",
  difficulty: "Easy",
  servings: 2,
  yield: "1 medium 10-inch pizza",
  glutenFree: false,

  image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
  youtubeUrl: "https://www.youtube.com/watch?v=3AAdKl1UYZs",

  ingredients: [
    { name: "Pizza base", key: "pizza base", quantity: "1 (10-inch)" },
    { name: "Tomato sauce", key: "tomato", quantity: "1/2 cup" },
    { name: "Mozzarella cheese", key: "cheese", quantity: "1 cup" },
    { name: "Fresh basil", key: "basil", quantity: "5-6 leaves" }
  ],

  steps: [
    "Preheat oven to 220°C (430°F).",
    "Spread tomato sauce evenly over pizza base.",
    "Add grated mozzarella generously.",
    "Bake for 12–15 minutes until crust is golden.",
    "Garnish with fresh basil leaves.",
    "Slice and serve hot."
  ],

  nutrition: {
    calories: 600,
    protein: "20g",
    carbs: "75g",
    fats: "22g"
  }
}
];
