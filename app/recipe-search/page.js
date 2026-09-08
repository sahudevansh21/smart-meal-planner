'use client';

import { useState } from 'react';

const mockRecipes = [
  {
    id: 1,
    name: 'Spicy Garlic Noodles',
    ingredients: ['noodles', 'garlic', 'soy sauce', 'chili oil', 'vegetables'],
    description: 'Quick and flavorful noodles with a kick of garlic and spice. Perfect for a weeknight meal.',
  },
  {
    id: 2,
    name: 'Vegetable Stir-fry',
    ingredients: ['broccoli', 'carrots', 'bell pepper', 'soy sauce', 'rice', 'chicken (optional)'],
    description: 'A healthy and versatile stir-fry. Use any vegetables you have on hand and serve with rice.',
  },
  {
    id: 3,
    name: 'Classic Tomato Pasta',
    ingredients: ['pasta', 'canned tomatoes', 'onion', 'garlic', 'basil', 'olive oil'],
    description: 'A simple yet delicious tomato pasta, a crowd-pleaser for all ages.',
  },
  {
    id: 4,
    name: 'Lentil Soup',
    ingredients: ['lentils', 'carrots', 'celery', 'onion', 'vegetable broth', 'spices'],
    description: 'Hearty and warming lentil soup, great for meal prepping.',
  },
  {
    id: 5,
    name: 'Chicken Tacos',
    ingredients: ['chicken breast', 'taco shells', 'lettuce', 'tomato', 'cheese', 'salsa', 'avocado'],
    description: 'Build-your-own chicken tacos with fresh toppings.',
  },
  {
    id: 6,
    name: 'Breakfast Burrito',
    ingredients: ['eggs', 'tortillas', 'cheese', 'bacon (optional)', 'potatoes', 'salsa'],
    description: 'A fulfilling breakfast burrito, customizable with your favorite fillings.',
  },
  {
    id: 7,
    name: 'Fish and Chips',
    ingredients: ['cod fillets', 'potatoes', 'flour', 'beer', 'oil'],
    description: 'Crispy battered fish with homemade chips. A classic comfort food.',
  },
  {
    id: 8,
    name: 'Mushroom Risotto',
    ingredients: ['arborio rice', 'mushrooms', 'onion', 'garlic', 'vegetable broth', 'parmesan cheese'],
    description: 'Creamy and rich mushroom risotto, a gourmet dish made easy.',
  }
];

export default function RecipeSearch() {
  const [searchIngredients, setSearchIngredients] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(mockRecipes);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase().split(',').map(s => s.trim()).filter(s => s.length > 0);
    setSearchIngredients(e.target.value);

    if (query.length === 0) {
      setFilteredRecipes(mockRecipes);
      return;
    }

    const results = mockRecipes.filter(recipe =>
      query.every(q => recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(q)))
    );
    setFilteredRecipes(results);
  };

  return (
    <div className="container">
      <h1 className="section-title">Recipe Search</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'rgba(224,224,224,0.7)' }}>
        Enter ingredients you have (e.g., 'chicken, rice, broccoli') to find matching recipes.
      </p>

      <div className="search-area">
        <input
          type="text"
          className="input-field"
          placeholder="e.g., chicken, rice, broccoli"
          value={searchIngredients}
          onChange={handleSearch}
        />
      </div>

      <div className="recipe-list-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div key={recipe.id} className="card recipe-card">
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <div>
                <h4>Ingredients:</h4>
                <ul>
                  {recipe.ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'rgba(224,224,224,0.7)' }}>
            No recipes found matching your ingredients. Try fewer or different ingredients!
          </p>
        )}
      </div>
    </div>
  );
}
