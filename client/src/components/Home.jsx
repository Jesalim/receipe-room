import recipeImage from '../assets/recipe-home.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div id="home" className="absolute top-0 left-0 -z-10 h-[100vh]">
        <img
          src={recipeImage}
          alt="counter top"
        />
      </div>
      <div className="bg-back-gradient h-[100vh] text-buff" id='home-overlay'>
        <div className="flex flex-col gap-4 h-[90vh] items-center justify-center">
          <div className="mt-[6rem] flex flex-col justify-center mt-10">
            <h1 className="text-9xl uppercase mt-10">Eat Healthy</h1>
            <div className="text-4xl mx-auto mt-5 text-[#C47445]">
              Discover Love In The Kitchen
            </div>
            <Link to="/recipes">
            <a
              className="flex justify-center bg-bole bg-opacity-80 hover:bg-bean hover:text-buff hover:bg-opacity-80 text-smoke text-[20px] uppercase font-black py-4 px-8 mt-8 mx-auto rounded w-44">
              Explore
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
