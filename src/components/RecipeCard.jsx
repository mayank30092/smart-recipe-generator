import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const [liked, setLiked] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("favourites")) || [];
    return stored.includes(recipe.id);
  });

  const [averageRating, setAverageRating] = useState(recipe.rating);

  //Dynamic Rating
  useEffect(() => {
    const storedReviews =
      JSON.parse(localStorage.getItem(`reviews_${recipe.id}`)) || [];

    if (storedReviews.length > 0) {
      const avg =
        storedReviews.reduce((acc, curr) => acc + curr.rating, 0) /
        storedReviews.length;

      setAverageRating(avg.toFixed(1));
    } else {
      setAverageRating(recipe.rating ?? 0);
    }
  }, [recipe.id, recipe.rating]);

  const toggleFavourite = (e) => {
    e.stopPropagation();

    let stored = JSON.parse(localStorage.getItem("favourites")) || [];

    if (stored.includes(recipe.id)) {
      stored = stored.filter((id) => id !== recipe.id);
      setLiked(false);
    } else {
      stored.push(recipe.id);
      setLiked(true);
    }

    localStorage.setItem("favourites", JSON.stringify(stored));
  };

  return (
    <div
      onClick={() => navigate(`/recipe/${recipe.id}`)}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-56 object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-lg shadow">
          ⭐ {averageRating}
        </div>

        {/*Match Percentage */}
        {recipe.matchPercentage !== undefined && (
          <div className="absolute top-3 right-3 bg-white text-green-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
            {recipe.matchPercentage}% Match
          </div>
        )}

        {/* Favourite Button */}
        <button
          onClick={toggleFavourite}
          className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-500 transition">
          {recipe.name}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {recipe.cuisine} • {recipe.time} mins
        </p>

        {/*Smart Match Breakdown */}
        {(recipe.matchCount !== undefined ||
          recipe.substitutedCount !== undefined) && (
          <div className="mt-3 text-xs space-y-1">
            {recipe.matchCount > 0 && (
              <p className="text-green-600 font-medium">
                ✔ {recipe.matchCount} exact match
              </p>
            )}

            {recipe.substitutedCount > 0 && (
              <p className="text-yellow-600 font-medium">
                🔄 {recipe.substitutedCount} substitute used
              </p>
            )}

            {recipe.missingIngredients?.length > 0 && (
              <p className="text-gray-400 line-clamp-1">
                Missing: {recipe.missingIngredients.join(", ")}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
