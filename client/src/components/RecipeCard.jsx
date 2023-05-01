import React from "react";

const RecipeCard = ({ image, name, ingredients, instructions }) => {
  return (
    <div
      className="recipe-card  rounded-lg shadow-lg overflow-hidden"
      style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}
    >
      <img className="w-full mt-4" src={image} alt={name} />
      <h2
        className="text-2xl font-bold"
        style={{ fontSize: "2rem", marginBottom: "10px" }}
      >
        {name}
      </h2>
      <p>Ingredients</p>
      <ul
        className="list-disc ml-4 mt-4"
        style={{ marginTop: "20px", marginBottom: "20px", paddingLeft: "20px" }}
      >
        {ingredients &&
          Array.isArray(ingredients) &&
          ingredients.map((ingredient, index) => (
            <li
              key={index}
              className="text-lg"
              style={{ fontSize: "1.2rem", marginBottom: "10px" }}
            >
              {ingredient}
            </li>
          ))}
      </ul>
      <p
        className="text-lg mt-4"
        style={{ fontSize: "1.2rem", marginTop: "20px", marginBottom: "20px" }}
      >
        {instructions}
      </p>
    </div>
  );
};

export default RecipeCard;
