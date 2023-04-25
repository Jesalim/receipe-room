import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import AddRecipeForm from './AddRecipeForm';

const Groups = () => {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Group Recipes</h1>
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            name={recipe.name}
            image={recipe.image}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        ))}
      </div>
    </div>
  );
};

export default Groups;
