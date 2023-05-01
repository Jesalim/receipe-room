import SearchBar from "./SearchBar";
import spicesImage from "../assets/spices.jpg";

const Recipes = () => {
  return (
    <div
      id="recipes"
      className="w-screen h-[100%] flex flex-col items-center justify-center"
    >
      <div className="absolute top-0 left-0 -z-10 h-[100vh]" id="signup">
        <img
          src={spicesImage}
          alt="counter top"
        />
      </div>
      <h1 className="text-buff text-5xl mx-auto mt-10 -mb-10 font-extrabold tracking-[0.5rem]">
        RECIPES
      </h1>
      <div className="mt-3 mb-10">
        <SearchBar />
      </div>
    </div>
  );
};

export default Recipes;
