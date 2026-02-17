import { useEffect, useState } from "react";
import { defaultRecipes } from "../data/recipes";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer";

function Favourites() {
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);

  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];

    const allRecipes =
      JSON.parse(localStorage.getItem("recipes")) || defaultRecipes;

    const filtered = allRecipes.filter((recipe) =>
      storedFavourites.includes(recipe.id),
    );

    setFavouriteRecipes(filtered);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
          Your Favourites ❤️
        </h1>

        {favouriteRecipes.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              No favourites yet...
            </h2>
            <p className="text-gray-500 mt-2">
              Start liking recipes to see them here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favouriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Favourites;
