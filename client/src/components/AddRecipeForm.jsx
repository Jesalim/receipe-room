import { useState, useEffect } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [recipes, setRecipes] = useState([]);

  // Load recipes from local storage on component mount
  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = { name, image, ingredients, instructions };
    onAddRecipe(newRecipe);
    setName("");
    setImage("");
    setIngredients([]);
    setInstructions("");

    // Add the new recipe to the recipe list in local storage
    const storedRecipes = localStorage.getItem("recipes");
    let updatedRecipes = storedRecipes ? JSON.parse(storedRecipes) : [];
    updatedRecipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    // Update the state to display the updated recipe list
    setRecipes(updatedRecipes);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleIngredientChange = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  };

return (
<div 
id="groups"
className="p-6 bg-smoke-60 text-smoke rounded-md shadow-md">
<form onSubmit={handleSubmit}>
<div className="mb-4">
<label className="block mb-2 font-bold text-gray-700" htmlFor="name">
Name:
</label>
<input
className="w-full px-3 py-2 text-gray-700 border rounded"
type="text"
id="name"
value={name}
onChange={(event) => setName(event.target.value)}
/>
</div>
<div className="mb-4">
<label className="block mb-2 font-bold text-gray-700" htmlFor="image">
Image:
</label>
<input
className="w-full px-3 py-2 text-gray-700 border rounded"
type="text"
id="image"
value={image}
onChange={(event) => setImage(event.target.value)}
/>
</div>
<div className="mb-4">
<label className="block mb-2 font-bold text-gray-700" htmlFor="ingredients">
Ingredients:
</label>
<ul>
{ingredients.map((ingredient, index) => (
<li key={index}>
<input
className="w-full px-3 py-2 text-gray-700 border rounded"
type="text"
value={ingredient}
onChange={(event) => handleIngredientChange(event, index)}
/>
</li>
))}
</ul>
<button
         className="bg-bole bg-opacity-80 hover:bg-bean hover:text-buff hover:bg-opacity-80 text-smoke text-[14px] uppercase font-black py-2 px-8 mt-2 mx-auto rounded w-40"
         type="button"
         onClick={handleAddIngredient}
       >
Add Ingredient
</button>
</div>
<div className="mb-4">
<label className="block mb-2 font-bold text-gray-700" htmlFor="instructions">
Instructions:
</label>
<textarea
className="w-full px-3 py-2 text-gray-700 border rounded"
id="instructions"
value={instructions}
onChange={(event) => setInstructions(event.target.value)}
/>
</div>
<button
       className="bg-bole bg-opacity-80 hover:bg-bean hover:text-buff hover:bg-opacity-80 text-smoke text-[15px] uppercase font-black py-2 px-8 mt-2 mx-auto rounded w-40"
       type="submit"
     >
Add Recipe
</button>
</form>
</div>
);
};

export default AddRecipeForm;